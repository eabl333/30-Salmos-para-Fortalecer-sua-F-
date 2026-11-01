(() => {
  'use strict';

  /* ============================================================
     TEMAS
     ============================================================ */
  const CATEGORIES = [
    { id: 'confianca', nome: 'Confiança em Deus', sin: 'confiar entregar pastor providencia fe' },
    { id: 'protecao', nome: 'Proteção', sin: 'protecao guarda refugio livramento seguranca escudo medo' },
    { id: 'paz', nome: 'Paz e descanso', sin: 'calma descanso tranquilidade sossego sono ansiedade' },
    { id: 'forca', nome: 'Força e coragem', sin: 'forte animo cansaco fraqueza coragem' },
    { id: 'consolo', nome: 'Consolo', sin: 'triste dor choro luto consolo depressao lagrima angustia cuidado' },
    { id: 'esperanca', nome: 'Esperança', sin: 'esperar futuro animo socorro paciencia' },
    { id: 'sabedoria', nome: 'Sabedoria e direção', sin: 'sabio entendimento conselho direcao decisao caminho' },
    { id: 'renovacao', nome: 'Perdão e renovação', sin: 'perdoar culpa pecado misericordia arrependimento recomeco coracao' },
    { id: 'intimidade', nome: 'Intimidade com Deus', sin: 'buscar sede presenca desejo oracao saudade' },
    { id: 'louvor', nome: 'Louvor e gratidão', sin: 'agradecer gratidao louvor adoracao bendizer' }
  ];

  /* ============================================================
     OS 30 SALMOS  [capítulo, versículos, tema, texto, reflexão]
     Tradução: Almeida Revista e Corrigida (domínio público).
     IMPORTANTE: confira cada texto com uma edição ARC de domínio
     público antes de publicar ou comercializar.
     ============================================================ */
  const RAW = [
    [1, "1-3", "sabedoria", "Bem-aventurado o homem que não anda segundo o conselho dos ímpios, nem se detém no caminho dos pecadores, nem se assenta na roda dos escarnecedores. Antes tem o seu prazer na lei do Senhor, e na sua lei medita de dia e de noite. Pois será como a árvore plantada junto a ribeiros de águas, a qual dá o seu fruto no seu tempo; as suas folhas não cairão, e tudo quanto fizer prosperará.", "Raízes profundas na Palavra sustentam a vida em todas as estações."],
    [3, "3", "protecao", "Mas tu, Senhor, és um escudo para mim, a minha glória, e o que exalta a minha cabeça.", "Mesmo cercado de dificuldades, você tem um escudo que ninguém vê, mas que nunca falha."],
    [4, "8", "paz", "Em paz me deitarei e dormirei, porque só tu, Senhor, me fazes habitar em segurança.", "Antes de dormir, entregue o dia a Deus. O descanso verdadeiro nasce da confiança."],
    [8, "3-4", "louvor", "Quando vejo os teus céus, obra dos teus dedos, a lua e as estrelas que preparaste, que é o homem mortal para que te lembres dele? e o filho do homem, para que o visites?", "Diante da grandeza do céu, o cuidado de Deus por você é ainda mais surpreendente."],
    [16, "11", "intimidade", "Far-me-ás ver a vereda da vida; na tua presença há plenitude de alegria, e à tua mão direita há delícias perpetuamente.", "A alegria mais completa não está nas coisas, está na presença de Deus."],
    [18, "2", "protecao", "O Senhor é o meu rochedo, e o meu lugar forte, e o meu libertador; o meu Deus, a minha fortaleza, em quem confio; o meu escudo, a força da minha salvação, e o meu alto refúgio.", "Rocha, fortaleza, escudo e refúgio. Em Deus você encontra tudo o que precisa para se sentir seguro."],
    [19, "14", "intimidade", "Sejam agradáveis as palavras da minha boca e a meditação do meu coração perante a tua face, Senhor, rocha minha e redentor meu!", "Uma oração simples para começar o dia: que até seus pensamentos honrem a Deus."],
    [23, "1-3", "confianca", "O Senhor é o meu pastor, nada me faltará. Deitar-me faz em verdes pastos, guia-me mansamente a águas tranquilas. Refrigera a minha alma; guia-me pelas veredas da justiça, por amor do seu nome.", "Com um bom Pastor, você tem descanso, direção e renovação para a alma."],
    [25, "4-5", "sabedoria", "Mostra-me, Senhor, os teus caminhos; ensina-me as tuas veredas. Guia-me na tua verdade, e ensina-me, pois tu és o Deus da minha salvação; por ti estou esperando todo o dia.", "Quando faltar direção, peça. Deus gosta de ensinar quem o busca com humildade."],
    [27, "1", "forca", "O Senhor é a minha luz e a minha salvação; a quem temerei? O Senhor é a força da minha vida; de quem me recearei?", "Quando Deus é a sua luz, o escuro perde o poder de assustar."],
    [30, "5", "consolo", "Porque a sua ira dura só um momento; no seu favor está a vida. O choro pode durar uma noite, mas a alegria vem pela manhã.", "A noite de choro tem hora para acabar. A manhã chega."],
    [32, "8", "sabedoria", "Instruir-te-ei, e ensinar-te-ei o caminho que deves seguir; guiar-te-ei com os meus olhos.", "Deus não apenas aponta o caminho, ele acompanha você de perto, com cuidado."],
    [34, "8", "confianca", "Provai, e vede que o Senhor é bom; bem-aventurado o homem que nele confia.", "A bondade de Deus se descobre vivendo. Dê o passo e experimente."],
    [37, "4-5", "confianca", "Deleita-te também no Senhor, e te concederá os desejos do teu coração. Entrega o teu caminho ao Senhor; confia nele, e ele o fará.", "Entregar é parar de lutar sozinho e deixar Deus agir."],
    [40, "1-2", "esperanca", "Esperei com paciência no Senhor, e ele se inclinou para mim, e ouviu o meu clamor. Tirou-me de um lago horrível, de um charco de lodo; pôs os meus pés sobre uma rocha, e firmou os meus passos.", "Esperar em Deus pode parecer demorado, mas ele sempre se inclina para ouvir."],
    [42, "1", "intimidade", "Como o cervo brama pelas correntes das águas, assim suspira a minha alma por ti, ó Deus!", "Há uma sede que só Deus sacia. Reconhecê-la já é um passo em direção a ele."],
    [46, "10", "paz", "Aquietai-vos, e sabei que eu sou Deus; serei exaltado entre as nações, serei exaltado sobre a terra.", "No meio da agitação, silenciar é um ato de fé. Deus continua no controle."],
    [51, "10-12", "renovacao", "Cria em mim, ó Deus, um coração puro, e renova em mim um espírito reto. Não me lances fora da tua presença, e não retires de mim o teu Santo Espírito. Torna a dar-me a alegria da tua salvação, e sustém-me com um espírito voluntário.", "Uma oração sincera para recomeçar. Deus se agrada de corações que pedem renovação."],
    [55, "22", "consolo", "Lança o teu cuidado sobre o Senhor, e ele te susterá; nunca permitirá que o justo seja abalado.", "Entregar o peso a Deus é um ato de confiança que traz descanso."],
    [63, "1", "intimidade", "Ó Deus, tu és o meu Deus; de madrugada te buscarei; a minha alma tem sede de ti, a minha carne te deseja muito, em uma terra seca e cansada, onde não há água.", "Comece o dia buscando a Deus. Mesmo no deserto, ele sacia a alma."],
    [73, "26", "forca", "A minha carne e o meu coração desfalecem; mas Deus é a fortaleza do meu coração, e a minha porção para sempre.", "Quando as suas forças acabam, a força de Deus continua. Ele é suficiente."],
    [84, "10", "louvor", "Porque melhor é um dia nos teus átrios do que mil. Preferiria estar à porta da casa do meu Deus, a habitar nas tendas da impiedade.", "Um único momento na presença de Deus vale mais do que tudo que o mundo oferece."],
    [90, "12", "sabedoria", "Ensina-nos a contar os nossos dias, de tal maneira que alcancemos corações sábios.", "Valorizar o tempo é valorizar a vida. Peça a Deus sabedoria para os seus dias."],
    [91, "1-2", "protecao", "Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará. Direi do Senhor: Ele é o meu Deus, o meu refúgio, a minha fortaleza, e nele confiarei.", "Viver perto de Deus é viver sob uma sombra de proteção e descanso."],
    [103, "1-2", "louvor", "Bendize, ó minha alma, ao Senhor, e tudo o que há em mim bendiga o seu santo nome. Bendize, ó minha alma, ao Senhor, e não te esqueças de nenhum de seus benefícios.", "Lembrar das bênçãos recebidas fortalece a fé para os desafios que virão."],
    [119, "105", "sabedoria", "Lâmpada para os meus pés é a tua palavra, e luz para o meu caminho.", "A Palavra ilumina o próximo passo, e muitas vezes é só dele que precisamos."],
    [121, "1-2", "esperanca", "Elevo os meus olhos para os montes, de onde vem o meu socorro. O meu socorro vem do Senhor, que fez o céu e a terra.", "Quando não souber para onde olhar, olhe para cima. O seu socorro vem de Deus."],
    [139, "23-24", "renovacao", "Sonda-me, ó Deus, e conhece o meu coração; prova-me, e conhece os meus pensamentos; e vê se há em mim algum caminho mau, e guia-me pelo caminho eterno.", "Convidar Deus a examinar o coração é o início de uma transformação verdadeira."],
    [143, "8", "sabedoria", "Faze-me ouvir de manhã a tua benignidade, pois em ti confio; faze-me saber o caminho por onde devo andar, pois a ti levanto a minha alma.", "Comece o dia ouvindo a bondade de Deus e pedindo direção."],
    [150, "6", "louvor", "Tudo quanto tem fôlego louve ao Senhor. Louvai ao Senhor.", "Cada respiração é uma razão para agradecer. Termine esta jornada em louvor."]
  ];

  const MENSAGENS = [
    "Que hoje o seu coração descanse na certeza de que Deus cuida de você.",
    "Cada dia é uma nova oportunidade de caminhar com fé.",
    "Você não está sozinho. Deus acompanha cada passo seu.",
    "Pequenos momentos com a Palavra transformam grandes dias.",
    "Respire fundo, entregue o dia a Deus e siga com confiança.",
    "A paz de Deus está disponível para você, agora mesmo.",
    "Mesmo no silêncio, Deus está trabalhando a seu favor.",
    "Que a sua esperança seja maior que as suas preocupações.",
    "Deus conhece o seu coração e sabe exatamente do que você precisa.",
    "Hoje, escolha a gratidão. Ela abre portas que a queixa fecha.",
    "A fé começa onde a certeza termina. Dê o próximo passo.",
    "Que a luz da Palavra ilumine cada decisão que você tomar hoje.",
    "Você é amado além do que consegue imaginar.",
    "O que Deus começou em você, ele sabe como completar."
  ];

  /* ============================================================
     DADOS DERIVADOS
     ============================================================ */
  const norm = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const catById = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));

  const VERSES = RAW.map((r, i) => {
    const [cap, ver, cat, texto, reflexao] = r;
    const ref = `Salmos ${cap}:${ver}`;
    return {
      id: i + 1, cap, ver, cat, texto, reflexao, ref,
      hay: norm([texto, ref, 'salmo ' + cap, catById[cat].nome, catById[cat].sin, reflexao].join(' '))
    };
  });
  const byId = Object.fromEntries(VERSES.map(v => [v.id, v]));

  /* ============================================================
     ESTADO + LOCALSTORAGE
     ============================================================ */
  const KEY = 's30:v1';
  const DEFAULTS = {
    favorites: [], read: [], viewed: [], explored: [],
    prefs: { font: 'm', category: 'todas', status: 'todos' }
  };

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY));
      return { ...structuredClone(DEFAULTS), ...saved, prefs: { ...DEFAULTS.prefs, ...(saved && saved.prefs) } };
    } catch (e) { return structuredClone(DEFAULTS); }
  }
  let state = loadState();
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* modo privado */ }
  }

  /* ============================================================
     ELEMENTOS
     ============================================================ */
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const els = {
    nav: $('#nav'), menuBtn: $('#menuBtn'), favBadge: $('#favBadge'),
    search: $('#searchInput'), status: $('#statusFilter'), chips: $('#chips'),
    count: $('#resultCount'), list: $('#verseList'), favList: $('#favList'),
    catGrid: $('#categoryGrid'), randomBtn: $('#randomBtn'), randomResult: $('#randomResult'),
    todayCard: $('#todayCard'), todayDate: $('#todayDate'), todayMsg: $('#todayMessage'),
    stats: $('#journeyStats'), jCats: $('#journeyCats'), pct: $('#progressPct'),
    fill: $('#progressFill'), bar: $('#progressBar'), toast: $('#toast'),
    modal: $('#modal'), canvas: $('#cardCanvas')
  };

  /* ============================================================
     UTILITÁRIOS
     ============================================================ */
  let toastTimer;
  function toast(msg) {
    els.toast.textContent = msg;
    els.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => els.toast.classList.remove('show'), 2200);
  }

  const verseText = v => `“${v.texto}”\n— ${v.ref} (ARC)\n\nVoz do Altíssimo · 30 Salmos para Fortalecer sua Fé`;

  async function copyText(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(text);
      else throw new Error('fallback');
      return true;
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      let ok = false;
      try { ok = document.execCommand('copy'); } catch (_) {}
      ta.remove();
      return ok;
    }
  }

  async function shareVerse(v) {
    const text = verseText(v);
    if (navigator.share) {
      try { await navigator.share({ title: v.ref, text }); return; }
      catch (e) { if (e.name === 'AbortError') return; }
    }
    (await copyText(text)) ? toast('Compartilhamento indisponível aqui. Texto copiado!') : toast('Não foi possível compartilhar.');
  }

  const isFav = id => state.favorites.includes(id);
  const isRead = id => state.read.includes(id);

  function markViewed(id) {
    let changed = false;
    if (!state.viewed.includes(id)) { state.viewed.push(id); changed = true; }
    const cat = byId[id].cat;
    if (!state.explored.includes(cat)) { state.explored.push(cat); changed = true; }
    if (changed) save();
  }

  /* ============================================================
     CARD DE SALMO
     ============================================================ */
  function cardHTML(v, big = false) {
    const fav = isFav(v.id), read = isRead(v.id);
    return `
    <article class="card${big ? ' big' : ''}${read ? ' is-read' : ''}" data-id="${v.id}">
      <div class="card-top">
        <div class="card-head">
          <span class="num" aria-hidden="true">${v.cap}</span>
          <span class="tag">${catById[v.cat].nome}</span>
        </div>
        <span class="ref">${v.ref}</span>
      </div>
      <blockquote>“${v.texto}”</blockquote>
      <p class="reflexao"><strong>Reflexão</strong>${v.reflexao}</p>
      <div class="actions">
        <button type="button" class="act ${fav ? 'on' : ''}" data-action="fav" aria-pressed="${fav}">${fav ? '♥' : '♡'} <span class="lbl">${fav ? 'Favoritado' : 'Favoritar'}</span></button>
        <button type="button" class="act" data-action="copy">⧉ <span class="lbl">Copiar</span></button>
        <button type="button" class="act" data-action="share">↗ <span class="lbl">Compartilhar</span></button>
        <button type="button" class="act" data-action="card">▭ <span class="lbl">Cartão</span></button>
        <button type="button" class="act ${read ? 'on' : ''}" data-action="read" aria-pressed="${read}">${read ? '✓' : '○'} <span class="lbl">${read ? 'Lido' : 'Marcar como lido'}</span></button>
      </div>
    </article>`;
  }

  function syncCard(id) {
    $$(`.card[data-id="${id}"]`).forEach(card => {
      const fav = isFav(id), read = isRead(id);
      card.classList.toggle('is-read', read);
      const f = card.querySelector('[data-action="fav"]');
      f.classList.toggle('on', fav); f.setAttribute('aria-pressed', fav);
      f.innerHTML = `${fav ? '♥' : '♡'} <span class="lbl">${fav ? 'Favoritado' : 'Favoritar'}</span>`;
      const r = card.querySelector('[data-action="read"]');
      r.classList.toggle('on', read); r.setAttribute('aria-pressed', read);
      r.innerHTML = `${read ? '✓' : '○'} <span class="lbl">${read ? 'Lido' : 'Marcar como lido'}</span>`;
    });
    updateBadge();
  }

  function updateBadge() {
    const n = state.favorites.length;
    els.favBadge.textContent = n;
    els.favBadge.hidden = n === 0;
  }

  /* ============================================================
     AÇÕES (delegação de eventos)
     ============================================================ */
  let currentView = 'inicio';

  document.addEventListener('click', async e => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const card = btn.closest('.card');
    if (!card) return;
    const id = +card.dataset.id, v = byId[id];

    switch (btn.dataset.action) {
      case 'fav':
        if (isFav(id)) { state.favorites = state.favorites.filter(x => x !== id); toast('Removido dos favoritos'); }
        else { state.favorites.push(id); toast('Adicionado aos favoritos'); }
        save(); syncCard(id);
        if (currentView === 'favoritos') renderFavorites();
        break;
      case 'copy':
        (await copyText(verseText(v))) ? toast('Salmo copiado!') : toast('Não foi possível copiar.');
        break;
      case 'share': shareVerse(v); break;
      case 'card': openModal(v); break;
      case 'read':
        if (isRead(id)) { state.read = state.read.filter(x => x !== id); toast('Marcado como não lido'); }
        else { state.read.push(id); toast('Marcado como lido ✓'); }
        save(); syncCard(id);
        if (currentView === 'jornada') renderJourney();
        if (currentView === 'biblioteca' && state.prefs.status !== 'todos') renderLibrary();
        break;
    }
  });

  /* ============================================================
     BIBLIOTECA: filtros + pesquisa em tempo real
     ============================================================ */
  let observer;
  function observeCards(container) {
    if (!('IntersectionObserver' in window)) return;
    if (observer) observer.disconnect();
    observer = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) { markViewed(+en.target.dataset.id); observer.unobserve(en.target); }
      });
    }, { threshold: 0.6 });
    container.querySelectorAll('.card').forEach(c => observer.observe(c));
  }

  function renderChips() {
    const items = [{ id: 'todas', nome: 'Todos' }, ...CATEGORIES];
    els.chips.innerHTML = items.map(c =>
      `<button type="button" class="chip${state.prefs.category === c.id ? ' active' : ''}" data-cat="${c.id}">${c.nome}</button>`
    ).join('');
  }

  function filtered() {
    const tokens = norm(els.search.value.trim()).split(/\s+/).filter(Boolean);
    return VERSES.filter(v => {
      if (state.prefs.category !== 'todas' && v.cat !== state.prefs.category) return false;
      if (state.prefs.status === 'lidos' && !isRead(v.id)) return false;
      if (state.prefs.status === 'nao-lidos' && isRead(v.id)) return false;
      return tokens.every(t => v.hay.includes(t));
    });
  }

  function renderLibrary() {
    const list = filtered();
    els.count.textContent = list.length === 1 ? '1 salmo encontrado' : `${list.length} salmos encontrados`;
    els.list.innerHTML = list.length
      ? list.map(v => cardHTML(v)).join('')
      : `<div class="empty"><p>Nenhum salmo encontrado para essa busca.</p><button type="button" class="btn btn-secondary" id="clearFilters">Limpar filtros</button></div>`;
    observeCards(els.list);
  }

  els.chips.addEventListener('click', e => {
    const b = e.target.closest('.chip'); if (!b) return;
    state.prefs.category = b.dataset.cat;
    if (b.dataset.cat !== 'todas' && !state.explored.includes(b.dataset.cat)) state.explored.push(b.dataset.cat);
    save(); renderChips(); renderLibrary();
  });
  els.search.addEventListener('input', renderLibrary);
  els.status.addEventListener('change', () => { state.prefs.status = els.status.value; save(); renderLibrary(); });
  els.list.addEventListener('click', e => {
    if (e.target.id === 'clearFilters') {
      els.search.value = ''; state.prefs.category = 'todas'; state.prefs.status = 'todos';
      els.status.value = 'todos'; save(); renderChips(); renderLibrary();
    }
  });

  /* ============================================================
     INÍCIO: temas + salmo aleatório
     ============================================================ */
  function renderCategoryGrid() {
    els.catGrid.innerHTML = CATEGORIES.map(c => {
      const n = VERSES.filter(v => v.cat === c.id).length;
      return `<button type="button" class="cat-tile" data-cat="${c.id}"><h3>${c.nome}</h3><span>${n} ${n === 1 ? 'salmo' : 'salmos'}</span></button>`;
    }).join('');
  }
  els.catGrid.addEventListener('click', e => {
    const t = e.target.closest('.cat-tile'); if (!t) return;
    state.prefs.category = t.dataset.cat;
    if (!state.explored.includes(t.dataset.cat)) state.explored.push(t.dataset.cat);
    save(); els.search.value = '';
    location.hash = '#biblioteca';
  });

  let lastRandom = null;
  els.randomBtn.addEventListener('click', () => {
    let v;
    do { v = VERSES[Math.floor(Math.random() * VERSES.length)]; } while (v.id === lastRandom && VERSES.length > 1);
    lastRandom = v.id;
    els.randomResult.innerHTML = cardHTML(v, true);
    markViewed(v.id);
    els.randomResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  /* ============================================================
     SALMO DO DIA (determinístico pela data local)
     ============================================================ */
  function dayNumber(d = new Date()) {
    return Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000);
  }
  function renderToday() {
    const now = new Date(), n = dayNumber(now);
    const v = VERSES[n % VERSES.length];
    const msg = MENSAGENS[n % MENSAGENS.length];
    els.todayDate.textContent = now.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });
    els.todayCard.innerHTML = cardHTML(v, true);
    els.todayMsg.textContent = msg;
    markViewed(v.id);
  }

  /* ============================================================
     FAVORITOS
     ============================================================ */
  function renderFavorites() {
    const list = state.favorites.map(id => byId[id]).filter(Boolean);
    els.favList.innerHTML = list.length
      ? list.map(v => cardHTML(v)).join('')
      : `<div class="empty"><p>Você ainda não tem favoritos. Toque em “Favoritar” em qualquer salmo para guardá-lo aqui.</p><a class="btn btn-primary" href="#biblioteca">Ler os salmos</a></div>`;
  }

  /* ============================================================
     MINHA JORNADA
     ============================================================ */
  function renderJourney() {
    const total = VERSES.length, read = state.read.length;
    const pct = Math.round((read / total) * 100);
    els.stats.innerHTML = [
      [`${state.viewed.length}/${total}`, 'salmos visualizados'],
      [`${read}/${total}`, 'salmos lidos'],
      [state.favorites.length, 'salmos favoritos'],
      [`${state.explored.length}/${CATEGORIES.length}`, 'temas explorados']
    ].map(([n, l]) => `<div class="stat"><strong>${n}</strong><span>${l}</span></div>`).join('');

    els.pct.textContent = pct + '%';
    els.fill.style.width = pct + '%';
    els.bar.setAttribute('aria-valuenow', pct);

    els.jCats.innerHTML = CATEGORIES.map(c => {
      const all = VERSES.filter(v => v.cat === c.id);
      const done = all.filter(v => isRead(v.id)).length;
      const p = all.length ? Math.round((done / all.length) * 100) : 0;
      return `<div class="jc"><header><span>${c.nome}</span><strong>${done}/${all.length}</strong></header><div class="progress"><span style="width:${p}%"></span></div></div>`;
    }).join('');
  }

  $('#resetBtn').addEventListener('click', () => {
    if (confirm('Apagar favoritos, leituras e progresso deste navegador? Essa ação não pode ser desfeita.')) {
      state = structuredClone(DEFAULTS);
      save(); applyFont(); updateBadge(); renderChips(); renderJourney();
      els.status.value = 'todos';
      toast('Dados apagados.');
    }
  });

  /* ============================================================
     CARTÃO COMPARTILHÁVEL (Canvas API nativa)
     ============================================================ */
  const THEMES = {
    marfim: { a: '#FFFFFF', b: '#F1E7D2', text: '#252525', gold: '#C6A15B', sub: '#777777', glow: 'rgba(230,213,173,.7)' },
    dourado: { a: '#E6D5AD', b: '#C6A15B', text: '#252525', gold: '#FAF8F3', sub: '#3d3220', glow: 'rgba(255,255,255,.45)' },
    noturno: { a: '#2f2f2f', b: '#151515', text: '#FAF8F3', gold: '#E6D5AD', sub: '#B8B2A2', glow: 'rgba(198,161,91,.25)' }
  };
  let modalVerse = null, modalStyle = 'marfim';

  function wrap(ctx, text, maxW) {
    const words = text.split(' '), lines = [];
    let line = '';
    words.forEach(w => {
      const t = line ? line + ' ' + w : w;
      if (ctx.measureText(t).width > maxW && line) { lines.push(line); line = w; } else line = t;
    });
    if (line) lines.push(line);
    return lines;
  }
  const spaced = s => s.split('').join(' ');

  async function drawCard(v, styleName) {
    try { await document.fonts.load('italic 500 40px "Playfair Display"'); await document.fonts.load('600 30px "Inter"'); } catch (e) {}
    const W = 1080, H = 1920, t = THEMES[styleName], c = els.canvas.getContext('2d');
    els.canvas.width = W; els.canvas.height = H;
    c.textAlign = 'center'; c.textBaseline = 'alphabetic';

    // Fundo
    const g = c.createLinearGradient(0, 0, W, H);
    g.addColorStop(0, t.a); g.addColorStop(1, t.b);
    c.fillStyle = g; c.fillRect(0, 0, W, H);
    const r = c.createRadialGradient(W / 2, 360, 20, W / 2, 360, 700);
    r.addColorStop(0, t.glow); r.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = r; c.fillRect(0, 0, W, H);

    // Moldura
    c.strokeStyle = t.gold; c.lineWidth = 4; c.strokeRect(60, 60, W - 120, H - 120);
    c.lineWidth = 1.5; c.strokeRect(84, 84, W - 168, H - 168);

    // Cruz discreta
    c.fillStyle = t.gold;
    c.fillRect(W / 2 - 5, 200, 10, 110);
    c.fillRect(W / 2 - 32, 232, 64, 10);

    // Marca superior
    c.fillStyle = t.gold; c.font = '600 26px Inter, sans-serif';
    c.fillText(spaced('SALMO ' + v.cap), W / 2, 400);

    // Texto: ajusta tamanho para caber
    const quote = `“${v.texto}”`;
    const maxW = 800, top = 520, bottom = 1400;
    let size = 70, lines, lh;
    do {
      c.font = `italic 500 ${size}px "Playfair Display", Georgia, serif`;
      lines = wrap(c, quote, maxW); lh = size * 1.45; size -= 2;
    } while (lines.length * lh > bottom - top && size > 28);

    const blockH = lines.length * lh;
    let y = top + (bottom - top - blockH) / 2 + lh * .75;
    c.fillStyle = t.text;
    lines.forEach(l => { c.fillText(l, W / 2, y); y += lh; });

    // Linha + referência
    const refY = Math.min(y + 70, 1500);
    c.strokeStyle = t.gold; c.lineWidth = 2;
    c.beginPath(); c.moveTo(W / 2 - 80, refY - 40); c.lineTo(W / 2 + 80, refY - 40); c.stroke();
    c.fillStyle = t.gold; c.font = '600 44px "Playfair Display", Georgia, serif';
    c.fillText(v.ref, W / 2, refY + 20);
    c.fillStyle = t.sub; c.font = '500 24px Inter, sans-serif';
    c.fillText('Almeida Revista e Corrigida', W / 2, refY + 62);

    // Rodapé
    c.fillStyle = t.gold; c.font = '600 28px Inter, sans-serif';
    c.fillText(spaced('VOZ DO ALTÍSSIMO'), W / 2, 1700);
    c.fillStyle = t.sub; c.font = 'italic 500 28px "Playfair Display", Georgia, serif';
    c.fillText('30 Salmos para Fortalecer sua Fé', W / 2, 1750);
  }

  function openModal(v) {
    modalVerse = v;
    els.modal.hidden = false;
    document.body.style.overflow = 'hidden';
    $$('.style-picker button').forEach(b => b.classList.toggle('active', b.dataset.style === modalStyle));
    drawCard(v, modalStyle);
    $('#downloadCard').focus();
  }
  function closeModal() { els.modal.hidden = true; document.body.style.overflow = ''; }

  els.modal.addEventListener('click', e => { if (e.target.hasAttribute('data-close')) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !els.modal.hidden) closeModal(); });
  $('.style-picker').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    modalStyle = b.dataset.style;
    $$('.style-picker button').forEach(x => x.classList.toggle('active', x === b));
    drawCard(modalVerse, modalStyle);
  });

  function canvasBlob() { return new Promise(res => els.canvas.toBlob(res, 'image/png')); }

  $('#downloadCard').addEventListener('click', async () => {
    const blob = await canvasBlob();
    if (!blob) return toast('Não foi possível gerar a imagem.');
    const url = URL.createObjectURL(blob), a = document.createElement('a');
    a.href = url;
    a.download = `salmo-${norm(modalVerse.ref).replace(/[^a-z0-9]+/g, '-')}.png`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
    toast('Imagem baixada!');
  });

  $('#shareCard').addEventListener('click', async () => {
    const blob = await canvasBlob();
    const file = blob && new File([blob], 'salmo.png', { type: 'image/png' });
    if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
      try { await navigator.share({ files: [file], title: modalVerse.ref }); return; }
      catch (e) { if (e.name === 'AbortError') return; }
    }
    shareVerse(modalVerse);
  });

  /* ============================================================
     NAVEGAÇÃO (hash) + MENU MOBILE
     ============================================================ */
  const VIEWS = ['inicio', 'biblioteca', 'palavra-do-dia', 'favoritos', 'jornada'];

  function route() {
    let h = location.hash.replace('#', '') || 'inicio';
    if (!VIEWS.includes(h)) h = 'inicio';
    currentView = h === 'palavra-do-dia' ? 'palavra' : h;
    VIEWS.forEach(v => { $('#view-' + v).hidden = v !== h; });
    $$('[data-nav]').forEach(a => {
      const on = a.dataset.nav === h;
      a.classList.toggle('active', on);
      on ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current');
    });
    if (h === 'biblioteca') { els.status.value = state.prefs.status; renderChips(); renderLibrary(); }
    if (h === 'palavra-do-dia') renderToday();
    if (h === 'favoritos') renderFavorites();
    if (h === 'jornada') renderJourney();
    closeMenu();
    window.scrollTo({ top: 0 });
    const heading = h === 'inicio' ? '' : $('#view-' + h + ' .page-title')?.textContent + ' | ';
    document.title = heading + '30 Salmos para Fortalecer sua Fé';
  }
  function closeMenu() { els.nav.classList.remove('open'); els.menuBtn.setAttribute('aria-expanded', 'false'); }
  els.menuBtn.addEventListener('click', () => {
    const open = els.nav.classList.toggle('open');
    els.menuBtn.setAttribute('aria-expanded', open);
  });
  window.addEventListener('hashchange', route);

  /* ============================================================
     TAMANHO DO TEXTO (preferência salva)
     ============================================================ */
  const SIZES = ['s', 'm', 'l', 'xl'];
  function applyFont() { document.documentElement.dataset.font = state.prefs.font; }
  function stepFont(d) {
    const i = Math.min(SIZES.length - 1, Math.max(0, SIZES.indexOf(state.prefs.font) + d));
    state.prefs.font = SIZES[i]; save(); applyFont();
  }
  $('#fontPlus').addEventListener('click', () => stepFont(1));
  $('#fontMinus').addEventListener('click', () => stepFont(-1));

  /* ============================================================
     INICIALIZAÇÃO
     ============================================================ */
  applyFont();
  updateBadge();
  renderCategoryGrid();
  route();
})();
