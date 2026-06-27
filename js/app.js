// ─── RECOMPENSAS Y PENALIZACIONES ─────────────────────────────────
// format: 'presencial' | 'distancia' | 'ambos'

const AWARD_BANKS = {
    clasico: {
        rewards: [
            { text: 'Elige a alguien para que te dé un masaje de hombros de 1 minuto.', format: 'presencial' },
            { text: 'Todos tienen que ofrecerte algo de comer o beber.', format: 'presencial' },
            { text: 'El jugador a tu derecha te hace un favor que tú decidas (razonable).', format: 'presencial' },
            { text: 'Alguien del grupo te manda una canción dedicada ahora mismo.', format: 'distancia' },
            { text: 'El grupo te dedica un meme o GIF gracioso en el chat.', format: 'distancia' },
            { text: '¡Turno extra! Juegas de nuevo inmediatamente.', format: 'ambos' },
            { text: 'Puedes saltarte tu próximo turno sin penalización.', format: 'ambos' },
            { text: 'Elige a otro jugador para que responda una verdad extra ahora mismo.', format: 'ambos' },
            { text: 'Todos tienen que decirte un cumplido sincero.', format: 'ambos' },
            { text: 'Puedes cambiar la siguiente verdad o reto que te toque por otro.', format: 'ambos' },
            { text: 'Pon un reto propio al jugador que elijas, sin usar el mazo.', format: 'ambos' },
            { text: 'Elige a alguien para que reciba una penalización ahora mismo.', format: 'ambos' },
            { text: 'El grupo tiene que aplaudirte durante 10 segundos.', format: 'ambos' },
        ],
        penalties: [
            { text: 'El grupo te hace cosquillas durante 10 segundos.', format: 'presencial' },
            { text: 'Tienes que sentarte en el suelo durante el próximo turno.', format: 'presencial' },
            { text: 'Activa la cámara con la peor cara posible durante 30 segundos.', format: 'distancia' },
            { text: 'Cambia tu foto de perfil por la foto más fea de tu galería durante 10 minutos.', format: 'distancia' },
            { text: 'Tienes que hacer una prenda (quitarte algo de ropa).', format: 'ambos' },
            { text: 'Tienes que contar un secreto real ahora mismo.', format: 'ambos' },
            { text: 'Los demás te hacen una pregunta de verdad que debes responder.', format: 'ambos' },
            { text: 'El grupo inventa un reto que debes cumplir ahora.', format: 'ambos' },
            { text: 'Pierdes tu próximo turno.', format: 'ambos' },
            { text: 'Todos pueden ver 5 mensajes aleatorios de tu teléfono.', format: 'ambos' },
            { text: 'Confiesa la verdad que intentabas evitar.', format: 'ambos' },
            { text: 'Imita a cada persona de la sala durante 15 segundos.', format: 'ambos' },
        ],
    },

    intenso: {
        rewards: [
            { text: 'El jugador que elijas tiene que obedecerte durante 2 minutos.', format: 'presencial' },
            { text: 'Todos tienen que darte un abrazo, uno por uno.', format: 'presencial' },
            { text: 'Elige a alguien para que te cuente su mayor secreto al oído.', format: 'presencial' },
            { text: 'Alguien del grupo te manda un voice note diciéndote algo que nunca te ha dicho.', format: 'distancia' },
            { text: 'El grupo te manda su foto más comprometedora del año en el chat.', format: 'distancia' },
            { text: '¡Turno extra! Juegas de nuevo inmediatamente.', format: 'ambos' },
            { text: 'Puedes saltarte tu próximo turno sin penalización.', format: 'ambos' },
            { text: 'Todos tienen que decirte su mayor secreto ahora mismo.', format: 'ambos' },
            { text: 'Pon el reto más difícil que se te ocurra a quien elijas.', format: 'ambos' },
            { text: 'Elige a quien recibe la penalización más dura de la partida.', format: 'ambos' },
            { text: 'Deja que alguien del grupo envíe un mensaje desde el teléfono de otro jugador.', format: 'ambos' },
        ],
        penalties: [
            { text: 'El grupo te pone un reto físico que debes cumplir ahora mismo.', format: 'presencial' },
            { text: 'Tienes que quitarte dos prendas de ropa.', format: 'presencial' },
            { text: 'Alguien del grupo puede leer tus últimos 10 mensajes de WhatsApp.', format: 'presencial' },
            { text: 'Comparte tu pantalla durante 2 minutos sin ocultar nada.', format: 'distancia' },
            { text: 'Muestra las últimas 20 fotos de tu galería en pantalla compartida.', format: 'distancia' },
            { text: 'Deja que alguien mande un mensaje desde tu teléfono a quien quiera.', format: 'ambos' },
            { text: 'Confiesa el secreto más oscuro que tengas.', format: 'ambos' },
            { text: 'Muestra tu última conversación completa sin censurar.', format: 'ambos' },
            { text: 'Llama a alguien que no esté en la partida y confiésale algo real.', format: 'ambos' },
            { text: 'Pierdes los próximos 2 turnos.', format: 'ambos' },
            { text: 'El grupo decide tu próximo reto y no puedes negarte.', format: 'ambos' },
        ],
    },

    picante: {
        rewards: [
            { text: 'Alguien del grupo te da un beso en la mejilla.', format: 'presencial' },
            { text: 'Alguien del grupo te hace un masaje de 2 minutos donde tú decidas.', format: 'presencial' },
            { text: 'Elige a alguien y haceos una foto juntos en la pose que quieras.', format: 'presencial' },
            { text: 'El grupo te manda mensajes flirteadores durante 2 minutos.', format: 'distancia' },
            { text: 'Alguien del grupo te manda una foto seductora ahora mismo.', format: 'distancia' },
            { text: '¡Turno extra! Juegas de nuevo inmediatamente.', format: 'ambos' },
            { text: 'Puedes saltarte tu próximo turno sin penalización.', format: 'ambos' },
            { text: 'Todos tienen que decirte algo que les atrae de ti.', format: 'ambos' },
            { text: 'Pon un reto romántico o picante a quien elijas.', format: 'ambos' },
            { text: 'Puedes leerle en voz alta los mensajes de flirteo a alguien del grupo.', format: 'ambos' },
            { text: 'Elige a quien le toca el próximo reto más picante.', format: 'ambos' },
        ],
        penalties: [
            { text: 'Tienes que dar un beso en la mejilla a cada persona de la sala.', format: 'presencial' },
            { text: 'Tienes que darle la mano a alguien del grupo durante el próximo turno.', format: 'presencial' },
            { text: 'Tienes que hacer una prenda.', format: 'presencial' },
            { text: 'Manda una foto tuya en tu pose más seductora al grupo.', format: 'distancia' },
            { text: 'Cambia tu foto de perfil por algo seductor durante 15 minutos.', format: 'distancia' },
            { text: 'Confiesa a quién del grupo te atraes más y por qué.', format: 'ambos' },
            { text: 'Manda un mensaje flirteador a alguien de tus contactos y muéstraselo al grupo.', format: 'ambos' },
            { text: 'Describe en detalle tu experiencia más atrevida.', format: 'ambos' },
            { text: 'El grupo decide tu próximo reto picante y no puedes negarte.', format: 'ambos' },
            { text: 'Escribe un mensaje romántico a quien elija el grupo y léelo en voz alta.', format: 'ambos' },
        ],
    },
};

// ─── BANCOS DE PREGUNTAS ──────────────────────────────────────────
// Verdades: todas valen para cualquier formato.
// Retos: format 'presencial' | 'distancia' | 'ambos'
// {otro} se sustituye en tiempo de ejecución por un jugador compatible.

const BANKS = {
    clasico: {
        verdades: [
            '¿Cuál es la mentira más grande que has dicho esta semana?',
            '¿Cuál es tu serie o película favorita que te da vergüenza admitir?',
            '¿Qué es lo más raro que has buscado en Google?',
            '¿Cuál es tu talento oculto más inútil?',
            '¿Cuánto tiempo pasas en redes sociales al día? Sé honesto/a.',
            '¿Alguna vez has fingido estar enfermo/a para evitar un plan?',
            '¿Cuál ha sido tu peor cita?',
            '¿Alguna vez has cotilleado sobre alguien de esta sala?',
            '¿Cuál es la decisión de la que más te arrepientes?',
            '¿Has hecho stalking en redes sociales a alguien de esta sala?',
            '¿Cuál es tu mayor vergüenza que nadie sabe?',
            '¿Alguna vez has fingido no ver un mensaje para no responder?',
            '¿Qué harías con un millón de euros?',
            '¿A quién de aquí llamarías primero si tuvieras un problema serio?',
            'Muestra el último meme o sticker que enviaste.',
            '¿Cuál es la cosa más estúpida que has hecho por amor?',
            '¿Cuál crees que es el mayor secreto de {otro}?',
            '¿Qué es lo que más te gusta de {otro}?',
        ],
        retos: [
            { text: 'Imita a la persona a tu derecha durante 30 segundos.', format: 'presencial' },
            { text: 'Haz 10 flexiones ahora mismo.', format: 'presencial' },
            { text: 'Baila sin música durante 30 segundos.', format: 'presencial' },
            { text: 'Haz una reverencia a cada persona de la sala.', format: 'presencial' },
            { text: 'Dale un masaje de hombros a {otro} durante 30 segundos.', format: 'presencial' },
            { text: 'Intercambia algo de ropa con {otro} durante el próximo turno.', format: 'presencial' },
            { text: 'Comparte tu pantalla durante 10 segundos sin cerrar nada.', format: 'distancia' },
            { text: 'Cambia tu foto de perfil por una foto graciosa durante 5 minutos.', format: 'distancia' },
            { text: 'Activa la cámara y haz tu mejor posado durante 10 segundos.', format: 'distancia' },
            { text: 'Di un piropo a cada persona de la sala.', format: 'ambos' },
            { text: 'Muestra los últimos 5 emojis que usaste.', format: 'ambos' },
            { text: 'Muestra la última foto de tu galería.', format: 'ambos' },
            { text: 'Muestra tu historial de búsqueda de hoy.', format: 'ambos' },
            { text: 'Cuenta un chiste malo. Si no hace gracia, cuenta otro.', format: 'ambos' },
            { text: 'Habla con acento de otro país durante el próximo turno.', format: 'ambos' },
            { text: 'Muestra los últimos 3 audios que has enviado.', format: 'ambos' },
            { text: 'Haz una voz de personaje famoso; todos tienen que adivinar quién es.', format: 'ambos' },
            { text: 'Manda un GIF gracioso a {otro} ahora mismo.', format: 'ambos' },
            { text: 'Di tres cosas bonitas de {otro}.', format: 'ambos' },
        ],
    },

    intenso: {
        verdades: [
            '¿Cuál es la peor cosa que has pensado de alguien de esta sala?',
            '¿Cuál es tu mayor miedo que no le has contado a nadie?',
            '¿Alguna vez has traicionado la confianza de alguien cercano? ¿Cómo?',
            '¿Cuál es la mentira más grande que le has dicho a alguien importante?',
            '¿Qué es lo que más te avergüenza de ti mismo/a?',
            '¿Alguna vez has hecho algo ilegal? ¿El qué?',
            '¿Cuál es la peor decisión que has tomado en tu vida?',
            '¿Cuándo fue la última vez que lloraste y por qué?',
            '¿A quién de aquí envidias y por qué?',
            '¿Hay algo que llevas guardando mucho tiempo y que nunca has contado a nadie?',
            '¿Qué opinas realmente de cada persona de esta sala? Sé sincero/a.',
            '¿Cuál es tu mayor arrepentimiento en una relación?',
            '¿Alguna vez has pensado en {otro} de forma romántica?',
            '¿Le mandarías un mensaje anónimo de amor a {otro}?',
            'Si pudieras cambiarle algo a {otro}, ¿qué sería?',
        ],
        retos: [
            { text: 'Llama a alguien fuera de la sala y confiésale algo real sin colgar antes de 30 segundos.', format: 'presencial' },
            { text: 'Escribe un mensaje incómodo a alguien de tus contactos y muéstraselo a todos antes de enviarlo.', format: 'presencial' },
            { text: 'Imita a cada jugador de la sala resaltando su característica más notable.', format: 'presencial' },
            { text: 'Comparte tu pantalla durante 1 minuto sin ocultar nada.', format: 'distancia' },
            { text: 'Muestra las últimas 15 fotos de tu galería.', format: 'distancia' },
            { text: 'Activa el micro y canta durante 20 segundos.', format: 'distancia' },
            { text: 'Deja que alguien del grupo mande un mensaje desde tu teléfono a quien quiera.', format: 'ambos' },
            { text: 'Describe a cada persona de la sala con una sola palabra, sin filtros.', format: 'ambos' },
            { text: 'Confiesa algo que nunca hayas contado en voz alta.', format: 'ambos' },
            { text: 'Muestra tu última conversación de WhatsApp sin censurar.', format: 'ambos' },
            { text: 'Di en voz alta tu opinión real de cada persona de esta sala.', format: 'ambos' },
            { text: 'Revela el secreto más grande que te hayan contado (sin decir de quién es).', format: 'ambos' },
            { text: 'Dile a {otro} lo que realmente piensas de él/ella, sin filtros.', format: 'ambos' },
            { text: 'Llama a {otro} y dile que tienes algo importante que contarle (luego explica que era el juego).', format: 'ambos' },
        ],
    },

    picante: {
        verdades: [
            '¿A quién de esta sala darías un beso?',
            '¿Con quién de aquí tendrías una cita romántica?',
            '¿Cuándo fue tu primer beso y cómo fue?',
            '¿Qué es lo más atrevido que has hecho?',
            '¿Cuál es tu mayor atracción que te da vergüenza admitir?',
            '¿Alguna vez has tenido sentimientos por alguien de esta sala?',
            '¿Cuál es tu tipo ideal con todo detalle?',
            '¿Qué parte del cuerpo te parece más atractiva en una persona?',
            '¿Alguna vez has coqueteado con alguien estando en una relación?',
            '¿Le darías un beso a {otro} si te lo pidiera?',
            '¿Tienes o has tenido alguna atracción por {otro}?',
            '¿Qué es lo que más te atrae de {otro}?',
            '¿Le mandarías un mensaje flirteador a {otro} ahora mismo?',
            '¿Cuál es tu sitio preferido de la casa para tener sexo? ¿Por qué?',
            '¿Has estado alguna vez en una sex shop? Si no es así, ¿te gustaría ri con {otro}?',
            '¿Alguna vez has visto hentai o leído historias eróticas?',
            '¿Cuál es tu talento secreto en el sexo?',
            '¿Cuál sería tu primera reacción si tu pareja te fuera infiel?',
            'Si tu pareja quisiera permanecer virgen hasta el matrimonio, ¿lo aceptarías?',
            '¿Era una trampa! En tus próximos 3 turnos solo puedes elegir reto.',
            '¿Prefieres tener sexo con la luz encendida o apagada?',
        ],
        retos: [
            { text: 'Susurra algo al oído de la persona que elijas de la sala.', format: 'presencial' },
            { text: 'Besa con delicadeza la mano de {otro}.', format: 'presencial' },
            { text: 'Mira a los ojos de {otro} sin reírte durante 30 segundos.', format: 'presencial' },
            { text: 'Da un abrazo a {otro} que dure al menos 10 segundos.', format: 'presencial' },
            { text: 'Dale un masaje en las manos a {otro} durante 1 minuto.', format: 'presencial' },
            { text: 'Pon tu cabeza en el hombro de {otro} durante el próximo turno.', format: 'presencial' },
            { text: 'Invita a {otro} a bailar salsa, bachata u otro baile sensual.', format: 'presencial' },
            { text: 'Besa la espalde de {otro} formando un número. Si no lo adivina, dale un azote.', format: 'presencial' },
            { text: 'Haz como si te acabases de encontrar con {otro}. Consigue que te de un beso.', format: 'presencial' },
            { text: 'Baila un lento con la persona que elijas.', format: 'presencial' },
            { text: 'Manda un mensaje atrevido a alguien de tus contactos (muéstraselo a todos antes de enviarlo).', format: 'distancia' },
            { text: 'Activa la cámara y manda una foto con tu mejor cara de seducción al grupo.', format: 'distancia' },
            { text: 'Cambia tu estado de WhatsApp a algo flirteador durante 10 minutos.', format: 'distancia' },
            { text: 'Actúa como si {otro} fuera un/a dios/a. Obedece sus órdenes durante 2 minutos.', format: 'ambos' },
            { text: 'Tienes 1 minuto para seducir a {otro}.', format: 'ambos' },
            { text: 'Declarale tu amor a {otro} en 30 segundos.', format: 'ambos' },
            { text: 'Quítate ahora mismo la prenda de ropa que quieras.', formta: 'ambos' },
            { text: 'Di 2 veces en voz alta: Soy adict@ al sexo!', format: 'ambos' },
            { text: 'Haz la mímica de algo que te gustaría que {otro} hiciera más tarde esta noche.', format: 'ambos' },
            { text: 'Envía un emoji flirteador a alguien de tu lista de contactos.', format: 'ambos' },
            { text: 'Describe tu tipo ideal con todo detalle, sin vergüenza.', format: 'ambos' },
            { text: 'Di en voz alta a quién de esta sala invitarías a una cita y por qué.', format: 'ambos' },
            { text: 'Dedica una canción romántica a alguien de la sala y canta un fragmento.', format: 'ambos' },
            { text: 'Manda un mensaje flirteador a {otro} ahora mismo.', format: 'ambos' },
            { text: 'Di tres cosas que te atraigan de {otro}.', format: 'ambos' },
            { text: 'Escribe un mensaje seductor a {otro} y léelo en voz alta antes de enviarlo.', format: 'ambos' },
        ],
    },
};

// ─── METADATOS ────────────────────────────────────────────────────
const MODES = {
    clasico: { label: 'Clásico',  emoji: '🎲', desc: 'Divertido para todos' },
    intenso: { label: 'Intenso',  emoji: '🔥', desc: 'Sin filtros' },
    picante: { label: 'Picante',  emoji: '🌶️', desc: 'Flirteador y atrevido' },
};
const FORMATS = {
    presencial: { label: 'Presencial',  emoji: '🏠', desc: 'Todos juntos' },
    distancia:  { label: 'A distancia', emoji: '💻', desc: 'Por videollamada' },
};

// ─── ESTADO ───────────────────────────────────────────────────────
let players          = [];
let idCounter        = 0;
let currentTurnIndex = 0;
let gameFormat       = 'presencial';
let gameMode         = 'clasico';
let pointsForReward  = 3;
let pointsForPenalty = 3;
let sessionVerdades  = [];
let sessionRetos     = [];
let pendingVerdades  = [];
let pendingRetos     = [];
let sessionRewards   = [];
let sessionPenalties = [];
let pendingRewards   = [];
let pendingPenalties = [];

const GENDER_LABELS = { m: 'Hombre', f: 'Mujer'/* , nb: 'No binario' */ };
const PREF_LABELS   = { h: 'Hombres', m: 'Mujeres', a: 'Ambos' };

// ─── CONFIGURACIÓN DE PARTIDA ─────────────────────────────────────
function setFormat(val)       { gameFormat = val;       renderConfig(); }
function setMode(val)         { gameMode = val;         renderConfig(); }
function setRewardPoints(n)   { pointsForReward = n;    renderConfig(); }
function setPenaltyPoints(n)  { pointsForPenalty = n;   renderConfig(); }

function renderConfig() {
    const btnCls = (active, color) =>
        `btn btn-selector btn-xs flex-1 ${active ? `btn-${color}` : `btn-outline btn-${color}`}`;

    document.getElementById('game-config').innerHTML = `
        <div class="card bg-base-100 border border-base-300 shadow-md p-4 mb-4">

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label class="label label-text text-xs font-semibold uppercase tracking-wide mb-2">Formato</label>
                    <div class="flex gap-2">
                        ${Object.entries(FORMATS).map(([val, { emoji, label }]) => `
                            <button onclick="setFormat('${val}')"
                                class="${btnCls(gameFormat === val, 'primary')}">
                                ${emoji} ${label}
                            </button>
                        `).join('')}
                    </div>
                </div>

                <div>
                    <label class="label label-text text-xs font-semibold uppercase tracking-wide mb-2">Modo de juego</label>
                    <div class="flex gap-2">
                        ${Object.entries(MODES).map(([val, { emoji, label }]) => `
                            <button onclick="setMode('${val}')"
                                class="${btnCls(gameMode === val, 'secondary')}">
                                ${emoji} ${label}
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>

            <div class="divider my-3 text-xs text-base-content/30">Sistema de puntos</div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label class="label label-text text-xs font-semibold uppercase tracking-wide mb-2">🏆 Puntos para recompensa</label>
                    <div class="flex gap-1">
                        ${[2, 3, 5, 10].map(n => `
                            <button onclick="setRewardPoints(${n})"
                                class="${btnCls(pointsForReward === n, 'success')}">
                                ${n}
                            </button>
                        `).join('')}
                    </div>
                </div>

                <div>
                    <label class="label label-text text-xs font-semibold uppercase tracking-wide mb-2">💀 Puntos para penalización</label>
                    <div class="flex gap-1">
                        ${[2, 3, 5, 10].map(n => `
                            <button onclick="setPenaltyPoints(${n})"
                                class="${btnCls(pointsForPenalty === n, 'error')}">
                                ${n}
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>

            <div class="flex justify-end mt-3 pt-3 border-t border-base-300">
                <button onclick="openAwardsList()" class="btn btn-ghost btn-xs text-base-content/40 gap-1">
                    👁 Ver premios y castigos
                </button>
            </div>

        </div>
    `;
}

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
        <div class="player-card card bg-base-100 border border-base-300 shadow-md p-4">
            <div class="flex items-center justify-between mb-3">
                <span class="font-bold text-sm text-primary uppercase tracking-wide">Jugador ${i + 1}</span>
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
                        ${[['m','Hombre'],['f','Mujer'],/* ['nb','No bin.'] */].map(([val, lbl]) => `
                            <button onclick="setGender(${p.id},'${val}')"
                                class="btn btn-selector btn-xs flex-1 ${p.gender === val ? 'btn-primary' : 'btn-outline btn-primary'}">
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
                                class="btn btn-selector btn-xs flex-1 ${p.pref === val ? 'btn-secondary' : 'btn-outline btn-secondary'}">
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

    // Inicializar puntos de cada jugador
    players.forEach(p => {
        p.positivePoints = 0;
        p.negativePoints = 0;
    });

    // Bancos de preguntas filtrados por formato y modo
    const bank = BANKS[gameMode];
    sessionVerdades = [...bank.verdades];
    sessionRetos    = bank.retos
        .filter(r => r.format === 'ambos' || r.format === gameFormat)
        .map(r => r.text);

    pendingVerdades  = shuffledIndices(sessionVerdades.length);
    pendingRetos     = shuffledIndices(sessionRetos.length);
    const awards     = AWARD_BANKS[gameMode];
    sessionRewards   = awards.rewards.filter(r => r.format === 'ambos' || r.format === gameFormat).map(r => r.text);
    sessionPenalties = awards.penalties.filter(p => p.format === 'ambos' || p.format === gameFormat).map(p => p.text);
    pendingRewards   = shuffledIndices(sessionRewards.length);
    pendingPenalties = shuffledIndices(sessionPenalties.length);

    document.getElementById('screen-setup').classList.add('hidden');
    document.getElementById('screen-game').classList.remove('hidden');
    renderTurn();
}

// ─── TURNO ────────────────────────────────────────────────────────
function renderTurn() {
    const player = players[currentTurnIndex];
    const total  = players.length;

    document.getElementById('turn-info').textContent =
        `Turno ${currentTurnIndex + 1} de ${total}`;

    document.getElementById('mode-badges').innerHTML =
        `<span class="badge badge-primary badge-sm">${FORMATS[gameFormat].emoji} ${FORMATS[gameFormat].label}</span>
          <span class="badge badge-secondary badge-sm">${MODES[gameMode].emoji} ${MODES[gameMode].label}</span>`;

    document.getElementById('current-avatar').querySelector('div').textContent =
        player.name.charAt(0).toUpperCase();

    document.getElementById('current-name').textContent = player.name;
    document.getElementById('current-sub').textContent =
        `${GENDER_LABELS[player.gender]} · prefiere ${PREF_LABELS[player.pref]}`;

    document.getElementById('player-points').innerHTML =
        `<span class="badge badge-success gap-1">🏆 ${player.positivePoints}<span class="opacity-50 font-normal">/${pointsForReward}</span></span>
          <span class="badge badge-error gap-1">💀 ${player.negativePoints}<span class="opacity-50 font-normal">/${pointsForPenalty}</span></span>`;

    document.getElementById('choice-section').classList.remove('hidden');
    document.getElementById('result-section').classList.add('hidden');
    document.getElementById('award-section').classList.add('hidden');

    updateScoreboard();
}

function updateScoreboard() {
    document.getElementById('scoreboard').innerHTML = players.map((p, i) => `
        <div class="flex items-center justify-between py-1 ${i < players.length - 1 ? 'border-b border-base-300' : ''}">
            <span class="text-sm ${players[currentTurnIndex].id === p.id ? 'font-bold text-primary' : 'text-base-content/60'}">
                ${players[currentTurnIndex].id === p.id ? '▶ ' : ''}${p.name}
            </span>
            <div class="flex gap-2">
                <span class="badge badge-success badge-xs">🏆 ${p.positivePoints}</span>
                <span class="badge badge-error badge-xs">💀 ${p.negativePoints}</span>
            </div>
        </div>
    `).join('');
}

// ─── SELECCIÓN Y RESOLUCIÓN DE PREGUNTAS ─────────────────────────
function shuffledIndices(length) {
    const arr = Array.from({ length }, (_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function pickItem(bank, pending) {
    if (pending.length === 0) pending.push(...shuffledIndices(bank.length));
    return bank[pending.pop()];
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
    if (compatible.length === 0) return null;
    const otro = compatible[Math.floor(Math.random() * compatible.length)];
    return template.replace(/\{otro\}/g, otro.name);
}

function chooseOption(option) {
    const player   = players[currentTurnIndex];
    const isVerdad = option === 'verdad';
    const bank     = isVerdad ? sessionVerdades : sessionRetos;
    const pending  = isVerdad ? pendingVerdades  : pendingRetos;

    let text     = null;
    let attempts = 0;

    while (text === null && attempts < bank.length) {
        text = resolveText(pickItem(bank, pending), player);
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
    badge.className = `badge ${option === 'verdad' ? 'badge-info' : 'badge-warning'} badge-lg mb-3`;

    document.getElementById('result-text').textContent = text;
    document.getElementById('choice-section').classList.add('hidden');
    document.getElementById('result-section').classList.remove('hidden');
}

// ─── SISTEMA DE PUNTOS ────────────────────────────────────────────
function onComplete(completed) {
    const player = players[currentTurnIndex];

    if (completed) {
        player.positivePoints++;
        if (player.positivePoints % pointsForReward === 0) {
            showAward('reward', player);
            return;
        }
    } else {
        player.negativePoints++;
        if (player.negativePoints % pointsForPenalty === 0) {
            showAward('penalty', player);
            return;
        }
    }

    nextTurn();
}

function showAward(type, player) {
    const isReward = type === 'reward';

    const text = isReward
        ? pickItem(sessionRewards, pendingRewards)
        : pickItem(sessionPenalties, pendingPenalties);

    document.getElementById('award-icon').textContent    = isReward ? '🏆' : '💀';
    document.getElementById('award-title').textContent   = isReward ? '¡Recompensa!' : '¡Penalización!';
    document.getElementById('award-player').textContent  = player.name;
    document.getElementById('award-counter').textContent = isReward
        ? `${player.positivePoints} aciertos consecutivos`
        : `${player.negativePoints} incumplimientos`;

    const awardBadge = document.getElementById('award-badge');
    awardBadge.textContent = isReward ? '⭐ Premio' : '💥 Castigo';
    awardBadge.className   = `badge badge-lg mb-4 ${isReward ? 'badge-success' : 'badge-error'}`;

    document.getElementById('award-text').textContent = text;

    const continueBtn = document.getElementById('award-continue');
    continueBtn.className = `btn btn-lg w-full font-bold ${isReward ? 'btn-success' : 'btn-error'}`;

    document.getElementById('result-section').classList.add('hidden');
    document.getElementById('award-section').classList.remove('hidden');
}

// ─── LISTA DE PREMIOS Y CASTIGOS ─────────────────────────────────
function openAwardsList() {
    const bank     = AWARD_BANKS[gameMode];
    const rewards  = bank.rewards.filter(r => r.format === 'ambos' || r.format === gameFormat);
    const penalties= bank.penalties.filter(p => p.format === 'ambos' || p.format === gameFormat);

    const formatTag = f => f !== 'ambos'
        ? `<span class="badge badge-xs badge-ghost ml-1 opacity-60">${f === 'presencial' ? '🏠' : '💻'}</span>`
        : '';

    const list = (items, color) => items.map(item => `
        <li class="flex gap-2 items-start py-1 border-b border-base-200 last:border-0">
            <span class="text-${color} mt-0.5 shrink-0">•</span>
            <span>${item.text}${formatTag(item.format)}</span>
        </li>
    `).join('');

    document.getElementById('awards-modal-title').innerHTML =
        `${MODES[gameMode].emoji} ${MODES[gameMode].label}
         <span class="text-base-content/30 font-normal text-sm ml-2">
             ${FORMATS[gameFormat].emoji} ${FORMATS[gameFormat].label}
         </span>`;

    document.getElementById('awards-modal-content').innerHTML = `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
                <h4 class="font-bold text-success mb-3">🏆 Recompensas</h4>
                <ul class="text-sm space-y-0">${list(rewards, 'success')}</ul>
            </div>
            <div>
                <h4 class="font-bold text-error mb-3">💀 Penalizaciones</h4>
                <ul class="text-sm space-y-0">${list(penalties, 'error')}</ul>
            </div>
        </div>
        <p class="text-xs text-base-content/30 text-center mt-5">
            Recompensa cada ${pointsForReward} aciertos · Penalización cada ${pointsForPenalty} incumplimientos
        </p>
    `;

    document.getElementById('awards-modal').showModal();
}

// ─── SIGUIENTE TURNO ──────────────────────────────────────────────
function nextTurn() {
    currentTurnIndex = (currentTurnIndex + 1) % players.length;
    renderTurn();
}

// ─── INIT ─────────────────────────────────────────────────────────
renderConfig();
addPlayer();
addPlayer();
