# Deploy subvencion.santacruz.skilland.ai

## Build local

```bash
cd /home/reboot/Escritorio/Skilland.ai/skilland-SC-PYME-DIGITAL-CONVOCATORIA-2026

mkdir -p dist/subvencion-santacruz
rsync -a --delete 04_outputs/03_funnel/landing_web_v1/ dist/subvencion-santacruz/
mkdir -p dist/subvencion-santacruz/assets/trust-logos
rsync -a --delete 04_outputs/03_funnel/assets/trust-logos/ dist/subvencion-santacruz/assets/trust-logos/
sed -i s#../assets/trust-logos/#assets/trust-logos/#g dist/subvencion-santacruz/index.html
```

## Upload

```bash
export VPS_USER="root"
export VPS_HOST="212.227.253.60"
export SSH_TARGET="$VPS_USER@$VPS_HOST"
export REMOTE_DIR="/var/www/subvencion.santacruz.skilland.ai"

ssh "$SSH_TARGET" "mkdir -p $REMOTE_DIR"
rsync -az --delete dist/subvencion-santacruz/ "$SSH_TARGET:$REMOTE_DIR/"
```

## Caddy

```bash
ssh "$SSH_TARGET" 'sudo mkdir -p /etc/caddy/sites'
scp 05_scratch/deploy_subvencion_santacruz/subvencion.santacruz.skilland.ai.caddy "$SSH_TARGET:/tmp/subvencion.santacruz.skilland.ai.caddy"
ssh "$SSH_TARGET" 'sudo mv /tmp/subvencion.santacruz.skilland.ai.caddy /etc/caddy/sites/subvencion.santacruz.skilland.ai.caddy'
ssh "$SSH_TARGET" 'sudo grep -q "import /etc/caddy/sites/*.caddy" /etc/caddy/Caddyfile || printf "\nimport /etc/caddy/sites/*.caddy\n" | sudo tee -a /etc/caddy/Caddyfile'
ssh "$SSH_TARGET" 'sudo caddy validate --config /etc/caddy/Caddyfile'
ssh "$SSH_TARGET" 'sudo systemctl reload caddy'
```

## Route 53

Crear el registro en la zona `skilland.ai`:

```text
Nombre: subvencion.santacruz
Tipo: A
Valor: 212.227.253.60
TTL: 300
```

Si hay AWS CLI configurado:

```bash
aws route53 list-hosted-zones-by-name --dns-name skilland.ai
aws route53 change-resource-record-sets --hosted-zone-id ZONE_ID --change-batch file://05_scratch/deploy_subvencion_santacruz/route53-change.json
```

## Validacion

```bash
dig +short NS skilland.ai
dig +short subvencion.santacruz.skilland.ai A
dig @1.1.1.1 +short subvencion.santacruz.skilland.ai A
curl -I http://subvencion.santacruz.skilland.ai
curl -I https://subvencion.santacruz.skilland.ai
```
