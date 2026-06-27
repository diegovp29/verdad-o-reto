// ─── BANCO DE PREGUNTAS ───────────────────────────────────────────
const VERDADES = [
  '¿Cuál es la mentira más grande que has dicho esta semana?',
  '¿Cuál es tu mayor vergüenza que nadie sabe?',
  '¿Alguna vez has fingido estar enfermo/a para no ir a algún lugar?',
  '¿Cuál es tu película o serie favorita que te da vergüenza admitir?',
  '¿Qué es lo más raro que has buscado en Google?',
  '¿Si pudieras cambiar algo de tu personalidad, qué sería?',
  '¿Alguna vez has mentido en tu currículum o en una entrevista?',
  '¿Cuál es la cosa más estúpida que has hecho por amor?',
  '¿Alguna vez has robado algo, aunque sea pequeño?',
  '¿Cuánto tiempo llevas sin llamar a tus padres?',
  '¿Cuál fue tu mayor fracaso del año pasado?',
  '¿Cuál es el mensaje más cringe que has enviado en tu vida?',
  '¿Alguna vez has fingido no ver un mensaje para no responder?',
  '¿Cuál es tu talento oculto más inútil?',
  '¿Cuánto tiempo pasas en redes sociales al día? Sé honesto/a.',
  '¿Qué harías con un millón de euros?',
  '¿Has hecho stalking en redes sociales a alguien de esta sala?',
  '¿Cuál es el secreto más grande que guardas?',
  '¿A quién de aquí llamarías primero si tuvieras un problema serio?',
  '¿Cuál ha sido tu peor cita?',
  '¿Alguna vez has cotilleado sobre alguien de esta sala?',
  'Muestra el último meme o sticker que enviaste.',
  '¿Cuál es la decisión de la que más te arrepientes?',
  '¿Qué opinas realmente de las redes sociales?',
  // Con {otro} — se sustituye por un jugador compatible
  '¿Qué es lo que más te gusta de {otro}?',
  'Si pudieras cambiarle algo a {otro}, ¿qué sería?',
  '¿Cuál crees que es el mayor secreto de {otro}?',
  '¿Alguna vez has pensado en {otro} de forma romántica?',
  '¿Le mandarías un mensaje anónimo de amor a {otro}?',
];

const RETOS = [
  'Imita a la persona a tu derecha durante 30 segundos.',
  'Habla con acento de otro país durante el próximo turno.',
  'Haz 10 flexiones ahora mismo.',
  'Di un piropo a cada persona de la sala.',
  'Muestra los últimos 5 emojis que usaste.',
  'Muestra la última foto de tu galería.',
  'Imita a un animal durante 1 minuto y que los demás adivinen cuál.',
  'Baila sin música durante 30 segundos.',
  'Muestra tu historial de búsqueda de hoy.',
  'Habla en rima durante los próximos 2 minutos.',
  'Di el nombre de cada persona de la sala con un adjetivo gracioso.',
  'Haz una voz de personaje famoso; todos tienen que adivinar quién es.',
  'Explica el argumento de tu película favorita como si fuera aburrida.',
  'Muestra los últimos 3 audios que has enviado.',
  'Pon el último meme que tienes guardado.',
  'Haz una reverencia a cada persona de la sala.',
  'Cuenta un chiste malo. Si no hace gracia, cuenta otro.',
  'Llama a alguien que no esté aquí y dile que tienes una gran noticia (luego cuelga).',
  'Publica una foto sin filtros en tus stories ahora mismo.',
  'Muestra el perfil de la última persona que visitaste en redes sociales.',
  'Escribe un poema de 4 versos sobre alguien de la sala.',
  'Di un secreto que nunca hayas contado... o inventa uno convincente.',
  // Con {otro}
  'Dale un masaje de hombros a {otro} durante 30 segundos.',
  'Di tres cosas bonitas de {otro} mirándole a los ojos.',
  'Intercambia algo de ropa con {otro} durante el próximo turno.',
  'Manda un GIF gracioso a {otro} ahora mismo.',
  'Cambia tu foto de perfil por una foto de {otro} durante 5 minutos.',
];

// ─── ESTADO ───────────────────────────────────────────────────────
let players = [];
let idCounter = 0;
let currentTurnIndex = 0;

// Índices pendientes por tipo (se recargan cuando se agotan)
let pendingVerdades = [];
let pendingRetos = [];

const GENDER_LABELS = { m: 'Hombre', f: 'Mujer', nb: 'No binario' };
const PREF_LABELS   = { h: 'Hombres', m: 'Mujeres', a: 'Ambos' };

// ─── PANTALLA DE CONFIGURACIÓN ────────────────────────────────────
function addPlayer() {
  if (players.length >= 12) return;
  const id = ++idCounter;
  players.push({ id, name: '', gender: '', pref: '' });
  renderPlayers();
  setTimeout(() => document.getElementById('name-' + id)?.focus(), 50);
}

function removePlayer(id) {
  players = players.filter(p => p.id !== id);
  renderPlayers();
}

function setGender(id, val) {
  const p = players.find(p => p.id === id);
  if (p) { p.gender = val; renderPlayers(); }
}

function setPref(id, val) {
  const p = players.find(p => p.id === id);
  if (p) { p.pref = val; renderPlayers(); }
}

function onNameChange(id, val) {
  const p = players.find(p => p.id === id);
  if (p) { p.name = val.trim(); updateStartBtn(); }
}

function updateStartBtn() {
  const ok = players.length >= 2 && players.every(p => p.name && p.gender && p.pref);
  document.getElementById('btn-start').disabled = !ok;
}

function renderPlayers() {
  const list = document.getElementById('players-list');
  list.innerHTML = players.map((p, i) => `
    <div class="player-card card bg-base-100 shadow p-4">
      <div class="flex items-center justify-between mb-3">
        <span class="font-semibold text-sm text-base-content/70">Jugador ${i + 1}</span>
        <button onclick="removePlayer(${p.id})" class="btn btn-ghost btn-xs text-error">✕</button>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">

        <div>
          <label class="label label-text text-xs font-semibold uppercase tracking-wide mb-1">Nombre</label>
          <input id="name-${p.id}" type="text" placeholder="Nombre..." maxlength="20"
            value="${p.name}"
            oninput="onNameChange(${p.id}, this.value)"
            class="input input-bordered input-sm w-full" />
        </div>

        <div>
          <label class="label label-text text-xs font-semibold uppercase tracking-wide mb-1">Género</label>
          <div class="flex gap-1">
            ${[['m','Hombre'],['f','Mujer'],['nb','No bin.']].map(([val, lbl]) => `
              <button onclick="setGender(${p.id},'${val}')"
                class="btn btn-xs flex-1 ${p.gender === val ? 'btn-primary' : 'btn-outline'}">
                ${lbl}
              </button>
            `).join('')}
          </div>
        </div>

        <div>
          <label class="label label-text text-xs font-semibold uppercase tracking-wide mb-1">Prefiere</label>
          <div class="flex gap-1">
            ${[['h','Hombres'],['m','Mujeres'],['a','Ambos']].map(([val, lbl]) => `
              <button onclick="setPref(${p.id},'${val}')"
                class="btn btn-xs flex-1 ${p.pref === val ? 'btn-secondary' : 'btn-outline'}">
                ${lbl}
              </button>
            `).join('')}
          </div>
        </div>

      </div>
    </div>
  `).join('');

  document.getElementById('btn-add-player').style.display =
    players.length >= 12 ? 'none' : 'flex';
  updateStartBtn();
}

// ─── INICIO DEL JUEGO ─────────────────────────────────────────────
function startGame() {
  currentTurnIndex = 0;
  pendingVerdades = shuffledIndices(VERDADES.length);
  pendingRetos    = shuffledIndices(RETOS.length);
  document.getElementById('screen-setup').classList.add('hidden');
  document.getElementById('screen-game').classList.remove('hidden');
  renderTurn();
}

function renderTurn() {
  const player = players[currentTurnIndex];
  const total  = players.length;

  document.getElementById('turn-info').textContent =
    `Turno ${currentTurnIndex + 1} de ${total}`;

  document.getElementById('current-avatar').querySelector('div').textContent =
    player.name.charAt(0).toUpperCase();

  document.getElementById('current-name').textContent = player.name;
  document.getElementById('current-sub').textContent =
    `${GENDER_LABELS[player.gender]} · prefiere ${PREF_LABELS[player.pref]}`;

  document.getElementById('choice-section').classList.remove('hidden');
  document.getElementById('result-section').classList.add('hidden');
}

// ─── SELECCIÓN DE PREGUNTA ────────────────────────────────────────
function shuffledIndices(length) {
  const arr = Array.from({ length }, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pickQuestion(bank, pending) {
  if (pending.length === 0) {
    // Recarga cuando se agota el banco
    const fresh = shuffledIndices(bank.length);
    pending.push(...fresh);
  }
  return pending.pop();
}

function compatiblePlayers(player) {
  return players.filter(p => {
    if (p.id === player.id) return false;
    if (player.pref === 'a') return true;
    if (player.pref === 'h') return p.gender === 'm';
    if (player.pref === 'm') return p.gender === 'f';
    return false;
  });
}

function resolveText(template, player) {
  if (!template.includes('{otro}')) return template;

  const compatible = compatiblePlayers(player);
  if (compatible.length === 0) {
    // Si no hay compatibles, saltar esta pregunta y elegir otra sin {otro}
    return null;
  }
  const otro = compatible[Math.floor(Math.random() * compatible.length)];
  return template.replace(/\{otro\}/g, otro.name);
}

function chooseOption(option) {
  const player = players[currentTurnIndex];
  const isVerdad = option === 'verdad';
  const bank     = isVerdad ? VERDADES : RETOS;
  const pending  = isVerdad ? pendingVerdades : pendingRetos;

  let text = null;
  let attempts = 0;

  while (text === null && attempts < bank.length) {
    const idx = pickQuestion(bank, pending);
    text = resolveText(bank[idx], player);
    attempts++;
  }

  if (text === null) text = isVerdad
    ? '¿Cuál es tu mayor secreto?'
    : 'Haz 10 flexiones ahora mismo.';

  showResult(option, text);
}

function showResult(option, text) {
  const badge = document.getElementById('result-badge');
  badge.textContent = option === 'verdad' ? '🤔 Verdad' : '🔥 Reto';
  badge.className = `badge ${option === 'verdad' ? 'badge-info' : 'badge-warning'} badge-lg mb-2`;

  document.getElementById('result-text').textContent = text;
  document.getElementById('choice-section').classList.add('hidden');
  document.getElementById('result-section').classList.remove('hidden');
}

// ─── SIGUIENTE TURNO ──────────────────────────────────────────────
function nextTurn() {
  currentTurnIndex = (currentTurnIndex + 1) % players.length;
  renderTurn();
}

// ─── INIT ─────────────────────────────────────────────────────────
addPlayer();
addPlayer();
