// ─────────────────────────────────────────────────────────────
//  Encendé tu luz · mapa de la provincia de Buenos Aires
//
//  1. Crear el formulario con formulario\crear-formulario.gs (ver instrucciones adentro).
//  2. Pegar acá las dos líneas que muestra el script: FORMULARIO y PLANILLA.
//  Mientras "planilla" esté vacía, el mapa funciona en MODO DE PRUEBA con datos de ejemplo.
// ─────────────────────────────────────────────────────────────
window.LUCES_PROVINCIA = {
  titulo: "Encendé tu luz",
  bajada: "Escaneá el código, contanos de dónde venís y el nombre de tu iglesia",

  formulario: "",       // link del formulario (ej.: https://forms.gle/...) → con esto se arma el QR
  planilla: "",         // ID de la planilla de respuestas (la línea PLANILLA del script)
  hoja: "Respuestas",   // nombre de la hoja de respuestas
  cadaSegundos: 8,      // cada cuánto se leen respuestas nuevas

  filasPorLista: 7,     // cuántas iglesias / localidades se ven por página
  segundosPorPagina: 8  // si hay más, cada cuánto pasa de página
};
