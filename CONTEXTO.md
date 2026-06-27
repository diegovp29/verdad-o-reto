# Verdad o Reto — Contexto del proyecto

## Qué es
Juego de Verdad o Reto para usar en local (todos en el mismo dispositivo).
La IA genera las preguntas y retos adaptados a cada jugador.

## Stack
- HTML + CSS + JS vanilla (sin frameworks JS)
- Tailwind CSS v4 (via CDN)
- DaisyUI v5 (via CDN, tema: dracula)
- API de Anthropic (claude-sonnet-4-6) para generar verdades y retos

## Estructura de archivos
```
verdad-o-reto/
├── index.html   # Estructura y dos pantallas (setup + juego)
├── style.css    # Animaciones mínimas
├── js/
│   └── app.js       # Toda la lógica (estado, render, llamada a API)
├── img/             # Imágenes del proyecto
└── CONTEXTO.md  # Este archivo
```

## Flujo de la app
1. **Pantalla de configuración** (`screen-setup`): el usuario añade jugadores con nombre, género y preferencia de interacción
2. **Pantalla de juego** (`screen-game`): turnos en orden, cada jugador elige Verdad o Reto, la IA genera el contenido

## Modelo de datos — jugador
```js
{
  id: Number,
  name: String,
  gender: 'm' | 'f' | 'nb',   // Hombre, Mujer, No binario
  pref: 'h' | 'm' | 'a',      // Prefiere Hombres, Mujeres, Ambos
}
```

## Lógica de compatibilidad
Antes de llamar a la IA, se filtran los jugadores compatibles con las preferencias del jugador en turno. Estos se pasan al prompt para que la IA pueda implicarlos en la pregunta o reto.

## API de Anthropic
- Endpoint: `https://api.anthropic.com/v1/messages`
- Header necesario para uso desde el navegador: `anthropic-dangerous-direct-browser-access: true`
- La API key se define en `app.js` en la constante `API_KEY`

## Pendiente / ideas de mejora
- [ ] Input para introducir la API key desde la UI (sin hardcodearla)
- [ ] Historial de verdades y retos ya usados (evitar repeticiones)
- [ ] Contador de turnos / rondas
- [ ] Modo sin IA (banco de preguntas local)
- [ ] Animaciones de transición entre turnos
- [ ] Soporte para más temas de DaisyUI (selector de tema)
- [ ] Pantalla de fin de partida
