import { spawn } from "node:child_process";

const root =
  "file:///home/reboot/Escritorio/Skilland.ai/skilland-SC-PYME-DIGITAL-CONVOCATORIA-2026/04_outputs/00_landing_runs/2026-05-21_africantech_mauritania_knowledge_transfer/03_html/landing_web_v3/index.html";

const chrome = spawn(
  "/snap/bin/chromium",
  [
    "--headless=new",
    "--no-sandbox",
    "--disable-gpu",
    "--remote-debugging-port=9223",
    "--user-data-dir=/tmp/landing-v3-chrome-qa",
    "about:blank",
  ],
  { stdio: ["ignore", "ignore", "pipe"] },
);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForChrome() {
  for (let i = 0; i < 80; i += 1) {
    try {
      const response = await fetch("http://127.0.0.1:9223/json/version");
      if (response.ok) return;
    } catch {
      await sleep(100);
    }
  }
  throw new Error("Chromium remote debugging endpoint did not start");
}

async function openPage(url) {
  const response = await fetch(`http://127.0.0.1:9223/json/new?${encodeURIComponent(url)}`, {
    method: "PUT",
  });
  if (!response.ok) throw new Error(`Could not open target: ${response.status}`);
  const target = await response.json();
  return target.webSocketDebuggerUrl;
}

function connect(wsUrl) {
  const ws = new WebSocket(wsUrl);
  let id = 0;
  const pending = new Map();

  ws.addEventListener("message", (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(new Error(msg.error.message));
      else resolve(msg.result);
    }
  });

  return new Promise((resolve, reject) => {
    ws.addEventListener("open", () => {
      resolve({
        send(method, params = {}) {
          id += 1;
          ws.send(JSON.stringify({ id, method, params }));
          return new Promise((res, rej) => pending.set(id, { resolve: res, reject: rej }));
        },
        close() {
          ws.close();
        },
      });
    });
    ws.addEventListener("error", reject);
  });
}

async function runCase(name, width, height, url, clickSpanish = false) {
  const wsUrl = await openPage("about:blank");
  const client = await connect(wsUrl);
  await client.send("Page.enable");
  await client.send("Runtime.enable");
  await client.send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width < 600,
  });
  await client.send("Page.navigate", { url });
  await sleep(900);

  if (clickSpanish) {
    await client.send("Runtime.evaluate", {
      expression: 'document.querySelector("[data-toggle-lang=\\"es\\"]").click()',
      awaitPromise: true,
    });
    await sleep(250);
  }

  const result = await client.send("Runtime.evaluate", {
    returnByValue: true,
    expression: `(() => {
      const root = document.documentElement;
      const visible = (selector) => Array.from(document.querySelectorAll(selector)).filter((node) => getComputedStyle(node).display !== "none");
      const maxScrollWidth = Math.max(root.scrollWidth, document.body.scrollWidth);
      return {
        name: ${JSON.stringify(name)},
        lang: root.lang,
        active: document.querySelector("[data-toggle-lang].is-active")?.getAttribute("data-toggle-lang"),
        innerWidth: window.innerWidth,
        maxScrollWidth,
        horizontalOverflow: maxScrollWidth > window.innerWidth + 1,
        visibleEnglish: visible("[data-lang='en']").length,
        visibleSpanish: visible("[data-lang='es']").length,
        visibleH1: visible("h1").map((node) => node.innerText)[0] || "",
        assetLoaded: [...document.images].every((img) => img.complete && img.naturalWidth > 0),
        faqCount: document.querySelectorAll(".faq-item").length
      };
    })()`,
  });

  client.close();
  return result.result.value;
}

try {
  await waitForChrome();
  const cases = [
    await runCase("desktop-en", 1440, 2200, root),
    await runCase("desktop-es-query", 1440, 2200, `${root}?lang=es`),
    await runCase("mobile-en", 390, 1800, root),
    await runCase("mobile-es-query", 390, 1800, `${root}?lang=es`),
    await runCase("desktop-toggle-es", 1440, 2200, root, true),
  ];
  console.log(JSON.stringify(cases, null, 2));
} finally {
  chrome.kill("SIGTERM");
}
