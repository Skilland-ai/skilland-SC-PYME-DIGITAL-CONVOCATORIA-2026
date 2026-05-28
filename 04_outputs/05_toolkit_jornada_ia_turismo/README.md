# Toolkit jornada IA turismo

Página estática post-jornada para entregar recursos de la sesión:
“Inteligencia Artificial aplicada al sector turístico: cómo implementarlo y qué mejoras conseguir”.

## Archivos
- Fuente: `04_outputs/05_toolkit_jornada_ia_turismo/`
- Versión desplegable: `dist/jornada-ia-turismo/`
- Entrada principal: `index.html`
- Estilos: `styles.css`
- Interacción: `script.js`
- Assets: `assets/`

## Presentación
La presentación no se sube al repo. Todos los CTAs apuntan al archivo hospedado en Google Drive:

```text
https://docs.google.com/presentation/d/1QjtbET9s9tAH_OENNRsDNByIO5YwMBK-/edit?usp=sharing&ouid=107357932179144958741&rtpof=true&sd=true
```

## Calendario
La sección `#diagnostico-gratuito` incluye el embed inline de Cal.com para:

```text
https://cal.com/raul-artiles-mendoza-n5juut/consulta-de-ia-gratuita-optimiza-tu-empresa-con-ia
```

Incluye fallback visible por si el script externo de Cal.com no carga.

## Despliegue en Vercel
Desde `dist/jornada-ia-turismo/`:

```bash
vercel deploy --prod
```

También puede subirse como proyecto estático sin backend.
