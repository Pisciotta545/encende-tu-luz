// ─────────────────────────────────────────────────────────────
//  Mapa sorpresa de la provincia de Buenos Aires (mapa-provincia.html)
//
//  Las luces son las respuestas del formulario "Encendé tu luz"
//  (se crea con formulario\crear-formulario.gs). Al abrir el mapa se
//  encienden todas, una por una, con el recuento abajo; al final todas
//  viajan hasta la Iglesia Rajem mientras la cámara se acerca.
//  Mientras "planilla" esté vacía funciona en MODO DE PRUEBA con datos de ejemplo.
// ─────────────────────────────────────────────────────────────
window.LUCES_PROVINCIA = {
  formulario: "",       // link del formulario (para armar el QR que se reparte aparte)
  planilla: "",         // ID de la planilla de respuestas (la línea PLANILLA del script)
  hoja: "Respuestas",   // nombre de la hoja de respuestas
  cadaSegundos: 8,      // mientras se encienden, cada cuánto se buscan respuestas nuevas

  duracionLlenado: 30,  // segundos para encender todas las luces (se reparten entre todas)
  pausaAntesDeRajem: 2.5,
  duracionViaje: 8,     // segundos que tardan las luces en llegar a Rajem
  filasRecuento: 5,     // cuántas localidades / iglesias se ven abajo

  iglesia: {
    nombre: "Iglesia Rajem",
    direccion: "Hipólito Yrigoyen 2060 · José C. Paz",
    lat: -34.520179, lon: -58.755373
  },

  audio: {
    musica: "audio/musica-epica.mp3",   // la misma música del otro mapa
    volumen: 0.55
  }
};
