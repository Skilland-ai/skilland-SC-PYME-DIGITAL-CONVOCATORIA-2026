# Matriz de Riesgos de Cumplimiento — Pyme Digital 2026

Fecha: `2026-05-14`
Estado: `v1`
Uso: filtro interno para venta, diseño de proyecto, ejecución y justificación.

## Base de lectura

- `Confirmado`: los disparadores normativos salen de convocatoria y anexos.
- `Interpretación operativa`: el nivel `Verde/Amarillo/Rojo` y las mitigaciones son una capa interna de gestión del riesgo.
- `Preguntas abiertas`: aparecen al final y deben resolverse antes de cerrar un caso dudoso.

## Lectura rápida

- `Verde`: riesgo bajo si se sigue la convocatoria y se documenta bien.
- `Amarillo`: viable con cautelas, redacción cuidada y control de evidencias.
- `Rojo`: alto riesgo de exclusión, revocación o mala praxis comercial.

## Matriz

| Riesgo | Nivel | Qué lo dispara | Impacto probable | Mitigación operativa | Fuente base |
|---|---|---|---|---|---|
| Desarrollo a medida mal formulado | Amarillo/Rojo | Vender “software a medida desde cero”, “custom app” o actuación no listada sin categoría textual clara | Más fricción en análisis cameral, posible no elegibilidad | Redactar como implantación, parametrización, integración o automatización al servicio de una categoría del Anexo II | Anexo II `Requisitos Generales`; Enfoque `10` |
| Proyecto coincidente con la actividad de la empresa | Rojo | La solución forma parte del negocio ordinario del beneficiario | Exclusión del proyecto | Validar actividad real, IAE y relación entre servicio y negocio antes de ofertar | Convocatoria `7`; Anexo II `2` y `4` |
| Proveedor vinculado | Rojo | Relación societaria, familiar, contractual o de control entre beneficiario y proveedor | No elegibilidad y posible problema de control | Declaración expresa de no vinculación y revisión previa de estructura societaria | Convocatoria `7`; Anexo II `Requisitos Generales` y `5` |
| Duplicidad con Kit Digital | Rojo | La misma solución ya fue financiada por Kit Digital | No elegibilidad del gasto | Preguntar siempre por Kit Digital y dejar constancia escrita del alcance ya subvencionado | Convocatoria `7`; Anexo II `4`; Enfoque `8` |
| Gastos fuera de plazo | Rojo | Facturar, iniciar, ejecutar o pagar fuera del calendario del `DECA` | Pérdida del derecho al cobro de toda o parte de la ayuda | No iniciar hasta admisión/DECA aplicable y controlar hitos de fecha desde ventas | Convocatoria `7`, `10` y `11`; Anexo II `Requisitos Generales` y `5` |
| IVA/IGIC incluido como subvencionable | Rojo | Presupuestar o vender el impuesto como parte de la ayuda | Error comercial y desajuste económico | Separar siempre base elegible e impuestos; explicarlo desde la primera llamada | Convocatoria `6.2`; Anexo II `4`; Enfoque `3` |
| Falta de evidencias de justificación | Rojo | No prever facturas claras, pagos trazables, pantallazos, memoria o publicidad FEDER | Revocación o minoración del cobro | Diseñar el proyecto con mentalidad probatoria desde el día uno | Convocatoria `11` y `13`; Anexo II `5`; Enfoque `8` |
| Cliente sin capacidad de prefinanciación | Amarillo/Rojo | La empresa cree que la ayuda actúa como descuento inmediato | Bloqueo de ejecución o mala expectativa comercial | Explicar que la empresa paga primero y cobra después | Convocatoria `6.2`; Anexo I `Fase II`; Enfoque `4.3` y `11` |
| Hardware no autorizado o no necesario | Amarillo/Rojo | Incluir portátiles, tablets, móviles o hardware generalista sin base suficiente | Recorte de gasto elegible | Limitar hardware a lo estrictamente necesario y asumir autorización cuando aplique | Anexo II `3` y `4` |
| Actuación no listada expresamente | Amarillo | Proyecto fuera del catálogo del Anexo II | Revisión más profunda y mayor incertidumbre | Tratarlo como excepción y no como ruta estándar de catálogo | Anexo II `Requisitos Generales` y `2` |
| Mensaje comercial incompatible con Cámara | Rojo | Decir que somos partner oficial, gestor oficial, diagnóstico sustitutivo o garante de ayuda | Riesgo reputacional, comercial y de cumplimiento | Usar siempre lenguaje de proveedor TIC externo propuesto | Convocatoria `16`; Enfoque `3`, `5` y `11` |
| Cliente llega “en blanco” a Fase I | Amarillo | No llevar prioridad TIC, categoría ni narrativa de impacto | Riesgo de quedar fuera del PPI o desligados del proyecto | Preparar ficha preliminar, categoría textual y guion para Cámara | Enfoque `2`, `5`, `6`, `8` y `12` |
| Minimis mal calculado | Amarillo/Rojo | No considerar empresas vinculadas dentro de `única empresa` | Posible inadmisión o incidencia posterior | Pedir detalle de ayudas previas y revisar estructura vinculada | Convocatoria `5` y `12`; Anexo III |
| Demarcación territorial dudosa | Amarillo | Centro productivo o domicilio en caso fronterizo o no claro | Riesgo de inadmisión | No prometer elegibilidad sin confirmar demarcación | Convocatoria `5`; `Unknown` en `02_context/FACTS.md` |
| Acceso directo a Fase II mal justificado | Amarillo/Rojo | Informe previo insuficiente o no equivalente | Reconducción a Fase I o inadmisión de esa vía | Revisar convocatoria del programa previo e informe mínimo antes de vender la ruta | Convocatoria `5` |

## Reglas operativas derivadas

- No vender primero y verificar después.
- No prometer encaje de proyecto sin categoría textual del `Anexo II`.
- No presupuestar como elegible nada que dependa de una interpretación laxa.
- No separar la venta de la futura justificación: el proyecto nace con evidencias en mente.
- No presentar a Skilland/Reboot/EduKami como autoridad de validación.

## Señales de escalado interno

- Caso con desarrollo a medida como núcleo del proyecto.
- Caso con hardware relevante.
- Caso con acceso directo a Fase II.
- Caso con historial de `Kit Digital` ambiguo.
- Caso con minimis o empresas vinculadas complejas.
- Caso con duda territorial sobre demarcación.

## Preguntas abiertas

- `Unknown`: fecha exacta de apertura efectiva del plazo.
- `Unknown`: posibilidad real de adjuntar ficha preliminar en la Sede.
- `Unknown`: demarcación municipal detallada en fuentes oficiales no cargadas en el repo.

## Fuentes principales

- `02_context/FACTS.md`
- `02_context/CONSTRAINTS.md`
- `00_inbox/2026_Convocatoria_Pyme Digital CCSCTF (1).md`
- `00_inbox/2026_Anexo II. Tipología y Justificación de Gastos elegibles Fase de Ayudas (1).md`
- `00_inbox/2026_Anexo III Declaración responsable empresa Pyme Digital (2).md`
- `00_inbox/ENFOQUE_ESTRATEGICO_PYME_DIGITAL_2026.md`
