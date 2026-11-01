(() => {
  'use strict';

  /* ============================================================
     CATEGORIAS
     ============================================================ */
  const CATEGORIES = [
    { id: 'fe', nome: 'Fé', sin: 'crer acreditar fe' },
    { id: 'esperanca', nome: 'Esperança', sin: 'esperar futuro animo' },
    { id: 'amor', nome: 'Amor', sin: 'amar carinho afeto' },
    { id: 'gratidao', nome: 'Gratidão', sin: 'agradecer gratidao louvor' },
    { id: 'ansiedade', nome: 'Ansiedade e preocupações', sin: 'ansioso preocupacao angustia nervoso cuidado inquietacao' },
    { id: 'medo', nome: 'Medo', sin: 'temor pavor inseguranca receio coragem' },
    { id: 'tristeza', nome: 'Tristeza', sin: 'triste dor choro luto consolo depressao lagrima' },
    { id: 'forca', nome: 'Força e coragem', sin: 'forte animo cansaco fraqueza coragem' },
    { id: 'protecao', nome: 'Proteção de Deus', sin: 'protecao guarda refugio livramento seguranca' },
    { id: 'familia', nome: 'Família', sin: 'filhos pais casa casamento lar' },
    { id: 'sabedoria', nome: 'Sabedoria', sin: 'sabio entendimento conselho direcao decisao' },
    { id: 'perdao', nome: 'Perdão', sin: 'perdoar culpa pecado misericordia arrependimento' },
    { id: 'oracao', nome: 'Oração', sin: 'orar pedir clamar intercessao' },
    { id: 'paz', nome: 'Paz', sin: 'calma descanso tranquilidade sossego' },
    { id: 'perseveranca', nome: 'Perseverança', sin: 'persistir paciencia nao desistir constancia' },
    { id: 'confianca', nome: 'Confiança em Deus', sin: 'confiar entregar pastor providencia' }
  ];

  /* ============================================================
     VERSÍCULOS  [livro, capítulo, versículo, categoria, texto, reflexão]
     Tradução: Almeida Revista e Corrigida (domínio público).
     IMPORTANTE: confira cada texto com uma edição ARC de domínio público
     antes de comercializar.
     ============================================================ */
  const RAW = [
    // ---------- FÉ ----------
    ["Hebreus",11,"1","fe","Ora, a fé é o firme fundamento das coisas que se esperam, e a prova das coisas que se não veem.","Fé não é certeza que se enxerga, é confiança que sustenta quando ainda não há sinais."],
    ["Romanos",10,"17","fe","De sorte que a fé é pelo ouvir, e o ouvir pela palavra de Deus.","Cada vez que você lê a Palavra, sua fé encontra alimento para crescer."],
    ["2 Coríntios",5,"7","fe","Porque andamos por fé, e não por vista.","Há dias em que o caminho é escuro. Dê o próximo passo confiando em quem conhece o destino."],
    ["Marcos",9,"23","fe","E Jesus lhe disse: Se tu podes crer, tudo é possível ao que crê.","Leve a Deus aquilo que parece impossível. Ele trabalha onde a nossa confiança começa."],
    ["Mateus",17,"20","fe","Em verdade vos digo que, se tiverdes fé como um grão de mostarda, direis a este monte: Passa daqui para acolá, e há de passar; e nada vos será impossível.","Uma fé pequena, mas verdadeira, já é suficiente para mover o que parece imóvel."],
    ["Efésios",2,"8","fe","Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus.","Você não precisa merecer o amor de Deus. Basta recebê-lo com o coração aberto."],
    ["Tiago",2,"17","fe","Assim também a fé, se não tiver as obras, é morta em si mesma.","A fé verdadeira se revela nas atitudes de cada dia, nas pequenas escolhas."],
    ["Hebreus",11,"6","fe","Ora, sem fé é impossível agradar-lhe; porque é necessário que aquele que se aproxima de Deus creia que ele existe e que é galardoador dos que o buscam.","Buscar a Deus nunca é em vão. Ele recompensa quem se aproxima com sinceridade."],

    // ---------- ESPERANÇA ----------
    ["Jeremias",29,"11","esperanca","Porque eu bem sei os pensamentos que penso de vós, diz o Senhor; pensamentos de paz, e não de mal, para vos dar o fim que esperais.","Mesmo quando você não entende o presente, os planos de Deus para você são de paz."],
    ["Romanos",15,"13","esperanca","Ora, o Deus de esperança vos encha de todo o gozo e paz em crença, para que abundeis em esperança pela virtude do Espírito Santo.","A esperança não é otimismo vazio, é um presente que o Espírito renova em nós."],
    ["Lamentações",3,"23","esperanca","Novas são cada manhã; grande é a tua fidelidade.","Cada amanhecer é um convite para recomeçar, sustentado pela fidelidade de Deus."],
    ["Isaías",40,"31","esperanca","Mas os que esperam no Senhor renovarão as suas forças, subirão com asas como águias; correrão, e não se cansarão; caminharão, e não se fatigarão.","Esperar em Deus não é parar, é ser renovado para seguir adiante."],
    ["Romanos",12,"12","esperanca","Alegres na esperança, fortes na tribulação, perseverando na oração.","A esperança sustenta a alegria até mesmo nos dias de luta."],
    ["Salmos",130,"5","esperanca","Aguardo o Senhor, a minha alma o aguarda, e espero na sua palavra.","Esperar com a Palavra no coração é diferente de esperar com ansiedade."],
    ["Provérbios",23,"18","esperanca","Porque certamente há fim, e a tua esperança não será cortada.","Sua esperança em Deus tem futuro. Nenhuma fase difícil é o final da história."],
    ["Hebreus",6,"19","esperanca","A qual temos como âncora da alma, segura e firme, e que penetra até ao interior do véu.","Quando as ondas sobem, a esperança em Deus mantém sua alma firme."],

    // ---------- AMOR ----------
    ["João",3,"16","amor","Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.","O maior gesto de amor já realizado foi feito por você. Deus não poupou o que tinha de mais precioso."],
    ["1 João",4,"8","amor","Aquele que não ama não conhece a Deus; porque Deus é amor.","Amar é a evidência mais clara de que conhecemos a Deus."],
    ["1 Coríntios",13,"4","amor","O amor é sofredor, é benigno; o amor não é invejoso; o amor não trata com leviandade, não se ensoberbece.","O amor se mostra na paciência, na bondade e na humildade do dia a dia."],
    ["1 Coríntios",13,"13","amor","Agora, pois, permanecem a fé, a esperança e o amor, estes três, mas o maior destes é o amor.","Tudo passa, mas o amor permanece. Invista nele em cada relacionamento."],
    ["Romanos",8,"39","amor","Nem a altura, nem a profundidade, nem alguma outra criatura nos poderá separar do amor de Deus, que está em Cristo Jesus nosso Senhor.","Nada que você viva ou sinta pode afastar você do amor de Deus."],
    ["João",13,"34","amor","Um novo mandamento vos dou: que vos ameis uns aos outros; assim como eu vos amei a vós, que também vós uns aos outros vos ameis.","Amar como Jesus amou é servir, acolher e perdoar sem esperar retorno."],
    ["1 João",4,"19","amor","Nós o amamos a ele porque ele nos amou primeiro.","Antes de qualquer esforço seu, o amor de Deus já estava ali, esperando por você."],
    ["Romanos",5,"8","amor","Mas Deus prova o seu amor para conosco em que Cristo morreu por nós, sendo nós ainda pecadores.","Deus não esperou que você fosse perfeito para amá-lo. Ele veio ao seu encontro."],

    // ---------- GRATIDÃO ----------
    ["1 Tessalonicenses",5,"18","gratidao","Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.","Agradecer muda o olhar. Mesmo em dias difíceis, sempre há algo pelo que dizer obrigado."],
    ["Salmos",107,"1","gratidao","Louvai ao Senhor, porque ele é bom, porque a sua benignidade dura para sempre.","A bondade de Deus não tem prazo de validade. Ela acompanha você hoje e sempre."],
    ["Salmos",100,"4","gratidao","Entrai pelas suas portas com ação de graças, e em seus átrios com louvor; louvai-o, e bendizei o seu nome.","A gratidão é a porta de entrada para a presença de Deus."],
    ["Salmos",103,"2","gratidao","Bendize, ó minha alma, ao Senhor, e não te esqueças de nenhum de seus benefícios.","Lembrar das bênçãos recebidas fortalece a fé para os desafios que virão."],
    ["Colossenses",3,"15","gratidao","E a paz de Deus, para a qual também fostes chamados em um corpo, domine em vossos corações; e sede agradecidos.","Um coração agradecido abre espaço para a paz governar."],
    ["Salmos",118,"24","gratidao","Este é o dia que fez o Senhor; regozijemo-nos e alegremo-nos nele.","Hoje é um presente. Receba-o com alegria e gratidão."],
    ["Tiago",1,"17","gratidao","Toda a boa dádiva e todo o dom perfeito vem do alto, descendo do Pai das luzes, em quem não há mudança nem sombra de variação.","Tudo de bom em sua vida tem origem no Pai. Reconhecer isso é o início da gratidão."],
    ["Salmos",116,"12","gratidao","Que darei eu ao Senhor por todos os seus benefícios para comigo?","Uma pergunta que pode ser feita todos os dias. A resposta começa com um coração grato."],

    // ---------- ANSIEDADE E PREOCUPAÇÕES ----------
    ["Filipenses",4,"6","ansiedade","Não estejais inquietos por coisa alguma; antes as vossas petições sejam em tudo conhecidas diante de Deus pela oração e súplica, com ação de graças.","Transforme cada preocupação em oração. Entregar a Deus é o primeiro passo para o alívio."],
    ["1 Pedro",5,"7","ansiedade","Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.","Você não foi feito para carregar tudo sozinho. Deus cuida de você."],
    ["Mateus",6,"34","ansiedade","Não vos inquieteis, pois, pelo dia de amanhã, porque o dia de amanhã cuidará de si mesmo. Basta a cada dia o seu mal.","Viva o hoje com a graça de hoje. O amanhã também está nas mãos de Deus."],
    ["Mateus",6,"26","ansiedade","Olhai para as aves do céu, que não semeiam, nem segam, nem ajuntam em celeiros; e vosso Pai celestial as alimenta. Não valeis vós muito mais do que elas?","Se Deus cuida das aves, quanto mais cuidará de você, que é seu filho amado."],
    ["Salmos",55,"22","ansiedade","Lança o teu cuidado sobre o Senhor, e ele te susterá; nunca permitirá que o justo seja abalado.","Entregar o peso a Deus é um ato de confiança que traz descanso."],
    ["Mateus",11,"28","ansiedade","Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.","O convite de Jesus é para você que está cansado: venha como está."],
    ["Salmos",94,"19","ansiedade","Nos muitos cuidados que dentro de mim se multiplicam, as tuas consolações recreiam a minha alma.","Quando os pensamentos se multiplicam, a consolação de Deus é maior."],
    ["Provérbios",12,"25","ansiedade","O desassossego no coração do homem o abate, mas a boa palavra o alegra.","Uma boa palavra pode mudar o dia de alguém. Receba-a e também ofereça-a."],

    // ---------- MEDO ----------
    ["Isaías",41,"10","medo","Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça.","Diante do medo, Deus não dá apenas ordem: ele promete presença, força e sustento."],
    ["Salmos",27,"1","medo","O Senhor é a minha luz e a minha salvação; a quem temerei? O Senhor é a força da minha vida; de quem me recearei?","Quando Deus é a sua luz, o escuro perde o poder de assustar."],
    ["2 Timóteo",1,"7","medo","Porque Deus não nos deu o espírito de temor, mas de fortaleza, e de amor, e de moderação.","O medo paralisante não vem de Deus. Ele nos dá coragem, amor e equilíbrio."],
    ["Deuteronômio",31,"6","medo","Esforçai-vos, e animai-vos; não temais, nem vos espanteis diante deles, porque o Senhor teu Deus é quem vai contigo; não te deixará, nem te desamparará.","Você não enfrenta nada sozinho. Deus vai à sua frente e ao seu lado."],
    ["Salmos",56,"3","medo","No dia em que eu temer, confiarei em ti.","Sentir medo é humano. O que importa é para onde você leva esse medo."],
    ["Isaías",43,"1","medo","Mas agora, assim diz o Senhor que te criou, ó Jacó, e que te formou, ó Israel: Não temas, porque eu te remi; chamei-te pelo teu nome, tu és meu.","Deus chama você pelo nome. Você pertence a ele, e isso muda tudo."],
    ["Salmos",118,"6","medo","O Senhor está comigo; não temerei o que me possa fazer o homem.","Com Deus ao seu lado, nenhuma ameaça humana tem a última palavra."],
    ["1 João",4,"18","medo","No amor não há temor, mas o perfeito amor lança fora o temor; porque o temor tem em si pena; e o que teme não está aperfeiçoado em amor.","Quanto mais você descansa no amor de Deus, menos espaço o medo encontra."],
    ["Salmos",23,"4","medo","Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam.","Nos vales mais escuros, a presença do Pastor é a maior segurança."],

    // ---------- TRISTEZA ----------
    ["Salmos",34,"18","tristeza","Perto está o Senhor dos que têm o coração quebrantado, e salva os contritos de espírito.","Quando o coração dói, Deus não se afasta, ele se aproxima."],
    ["Salmos",30,"5","tristeza","Porque a sua ira dura só um momento; no seu favor está a vida; o choro pode durar uma noite, mas a alegria vem pela manhã.","A noite de choro tem hora para acabar. A manhã chega."],
    ["Apocalipse",21,"4","tristeza","E Deus limpará de seus olhos toda a lágrima; e não haverá mais morte, nem pranto, nem clamor, nem dor; porque já as primeiras coisas são passadas.","Deus guarda uma promessa de consolo completo. Cada lágrima será enxugada."],
    ["Salmos",147,"3","tristeza","Sara os quebrantados de coração, e liga-lhes as feridas.","Deus é o médico das feridas que ninguém vê. Ele cuida com carinho."],
    ["Mateus",5,"4","tristeza","Bem-aventurados os que choram, porque eles serão consolados.","Seu choro não é fraqueza. Ele é visto por Deus, que promete consolar."],
    ["Salmos",126,"5","tristeza","Os que semeiam em lágrimas segarão com alegria.","As lágrimas de hoje podem se tornar a colheita de alegria de amanhã."],
    ["2 Coríntios",1,"3","tristeza","Bendito seja o Deus e Pai de nosso Senhor Jesus Cristo, o Pai das misericórdias e o Deus de toda a consolação.","Deus é a fonte de toda consolação. Vá até ele quando faltar conforto."],
    ["Salmos",42,"11","tristeza","Por que estás abatida, ó minha alma, e por que te perturbas dentro de mim? Espera em Deus, pois ainda o louvarei, a ele, que é a salvação do meu rosto e o meu Deus.","Fale com a sua própria alma e a lembre de onde vem o seu socorro."],

    // ---------- FORÇA E CORAGEM ----------
    ["Josué",1,"9","forca","Não to mandei eu? Esforça-te, e tem bom ânimo; não temas, nem te espantes, porque o Senhor teu Deus é contigo, por onde quer que andares.","A coragem nasce da certeza de que Deus caminha com você em cada lugar."],
    ["Filipenses",4,"13","forca","Posso todas as coisas em Cristo que me fortalece.","Sua força não vem de você mesmo. Ela é renovada todos os dias em Cristo."],
    ["Isaías",40,"29","forca","Dá esforço ao cansado, e multiplica as forças ao que não tem nenhum vigor.","Quando você chega ao limite, é justamente aí que Deus multiplica as forças."],
    ["Neemias",8,"10","forca","Não vos entristeçais, porque a alegria do Senhor é a vossa força.","A alegria que vem de Deus sustenta mais do que qualquer esforço humano."],
    ["2 Coríntios",12,"9","forca","E disse-me: A minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza.","Suas fraquezas não impedem Deus. São o lugar onde o poder dele se mostra."],
    ["Salmos",28,"7","forca","O Senhor é a minha força e o meu escudo; nele confiou o meu coração, e fui socorrido; por isso o meu coração salta de prazer, e com o meu cântico o louvarei.","Confiar em Deus enche o coração de gratidão e de canto."],
    ["Efésios",6,"10","forca","No demais, irmãos meus, fortalecei-vos no Senhor e na força do seu poder.","Busque força na fonte certa. Em Deus, ela nunca se esgota."],
    ["Habacuque",3,"19","forca","O Senhor Deus é a minha fortaleza, e fará os meus pés como os das cervas, e me fará andar sobre as minhas alturas.","Deus capacita você a subir onde sozinho jamais chegaria."],

    // ---------- PROTEÇÃO DE DEUS ----------
    ["Salmos",91,"1","protecao","Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.","Viver perto de Deus é estar sob uma sombra de proteção e descanso."],
    ["Salmos",91,"11","protecao","Porque aos seus anjos dará ordem a teu respeito, para te guardarem em todos os teus caminhos.","Você é guardado em lugares e momentos que nem percebe."],
    ["Salmos",121,"7","protecao","O Senhor te guardará de todo o mal; guardará a tua alma.","O cuidado de Deus alcança o corpo, a mente e a alma."],
    ["Salmos",46,"1","protecao","Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.","Na hora da angústia, o socorro de Deus já está perto, mais perto do que você imagina."],
    ["Provérbios",18,"10","protecao","Torre forte é o nome do Senhor; o justo correrá para ela, e estará em alto refúgio.","Invocar o nome do Senhor é correr para um lugar seguro."],
    ["2 Tessalonicenses",3,"3","protecao","Mas fiel é o Senhor, que vos confirmará e guardará do maligno.","A fidelidade de Deus é o escudo que sustenta e guarda você."],
    ["Salmos",18,"2","protecao","O Senhor é o meu rochedo, e o meu lugar forte, e o meu libertador; o meu Deus, a minha fortaleza, em quem confio; o meu escudo, a força da minha salvação, e o meu alto refúgio.","Rocha, fortaleza, escudo e refúgio. Deus é tudo o que você precisa para se sentir seguro."],
    ["Naum",1,"7","protecao","O Senhor é bom, uma fortaleza no dia da angústia, e conhece os que nele confiam.","Deus conhece cada pessoa que confia nele e é fortaleza no dia difícil."],

    // ---------- FAMÍLIA ----------
    ["Josué",24,"15","familia","Porém eu e a minha casa serviremos ao Senhor.","Uma casa onde Deus é honrado se torna abrigo para todos que nela vivem."],
    ["Salmos",127,"3","familia","Eis que os filhos são herança do Senhor, e o fruto do ventre o seu galardão.","Filhos são dádiva de Deus, confiados ao nosso cuidado e à nossa oração."],
    ["Provérbios",22,"6","familia","Ensina a criança no caminho em que deve andar, e, até quando envelhecer, não se desviará dele.","O que se planta no coração de uma criança acompanha a vida inteira."],
    ["Efésios",6,"1","familia","Filhos, obedecei a vossos pais no Senhor, porque isto é justo.","O respeito dentro de casa é um alicerce para uma vida saudável."],
    ["Efésios",5,"25","familia","Vós, maridos, amai vossas mulheres, como também Cristo amou a igreja, e a si mesmo se entregou por ela.","No casamento, o amor se mede pela entrega, não pela conveniência."],
    ["Salmos",133,"1","familia","Oh! quão bom e quão suave é que os irmãos vivam em união!","A união em família é uma bênção que vale cultivar com paciência."],
    ["Êxodo",20,"12","familia","Honra a teu pai e a tua mãe, para que se prolonguem os teus dias na terra que o Senhor teu Deus te dá.","Honrar quem nos criou é um ato de gratidão que abençoa gerações."],
    ["Deuteronômio",6,"7","familia","E as intimarás a teus filhos, e delas falarás assentado em tua casa, e andando pelo caminho, e deitando-te e levantando-te.","A fé se transmite no cotidiano: nas conversas, nas refeições e nos exemplos."],

    // ---------- SABEDORIA ----------
    ["Provérbios",9,"10","sabedoria","O temor do Senhor é o princípio da sabedoria, e o conhecimento do santo é a prudência.","Reverenciar a Deus é o ponto de partida de toda boa decisão."],
    ["Tiago",1,"5","sabedoria","E, se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente, e o não lança em rosto, e ser-lhe-á dada.","Em dúvida? Peça. Deus dá sabedoria com generosidade, sem reprovar."],
    ["Provérbios",4,"7","sabedoria","A sabedoria é a coisa principal; adquire, pois, a sabedoria; sim, com tudo o que possuis adquire o entendimento.","Sabedoria vale mais que qualquer conquista. Busque-a com prioridade."],
    ["Salmos",119,"105","sabedoria","Lâmpada para os meus pés é a tua palavra, e luz para o meu caminho.","A Palavra ilumina o próximo passo, e muitas vezes é só dele que precisamos."],
    ["Provérbios",16,"16","sabedoria","Quanto melhor é adquirir a sabedoria do que o ouro! E quanto mais excelente adquirir a prudência do que a prata!","O que realmente enriquece não cabe em contas bancárias."],
    ["Provérbios",2,"6","sabedoria","Porque o Senhor dá a sabedoria; da sua boca vem o conhecimento e o entendimento.","A verdadeira sabedoria é recebida de Deus. Ouvir é o caminho."],
    ["Tiago",3,"17","sabedoria","Mas a sabedoria que vem do alto é, primeiramente, pura, depois pacífica, moderada, tratável, cheia de misericórdia e de bons frutos, sem parcialidade, e sem hipocrisia.","Você reconhece a sabedoria de Deus pelos frutos: paz, mansidão e misericórdia."],
    ["Provérbios",19,"20","sabedoria","Ouve o conselho e recebe a correção, para que sejas sábio nos teus últimos dias.","Um coração humilde aprende com conselhos e cresce com a correção."],

    // ---------- PERDÃO ----------
    ["1 João",1,"9","perdao","Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados e nos purificar de toda a injustiça.","Confessar é abrir a porta. Deus é fiel para perdoar e purificar."],
    ["Efésios",4,"32","perdao","Antes sede uns para com os outros benignos, misericordiosos, perdoando-vos uns aos outros, como também Deus vos perdoou em Cristo.","Perdoamos porque já fomos perdoados. A graça recebida se torna graça oferecida."],
    ["Colossenses",3,"13","perdao","Suportando-vos uns aos outros, e perdoando-vos uns aos outros, se alguém tiver queixa contra outro; assim como Cristo vos perdoou, assim fazei vós também.","Perdoar liberta quem perdoa. Você não precisa carregar mágoas."],
    ["Mateus",6,"14","perdao","Porque, se perdoardes aos homens as suas ofensas, também vosso Pai celestial vos perdoará a vós.","Perdoar é um exercício de fé que aproxima o coração de Deus."],
    ["Salmos",103,"12","perdao","Quanto dista o oriente do ocidente, tanto afastou de nós as nossas transgressões.","Quando Deus perdoa, ele afasta o erro para longe. Não carregue o que ele já deixou."],
    ["Isaías",1,"18","perdao","Vinde então, e argui-me, diz o Senhor; ainda que os vossos pecados sejam como a escarlata, eles se tornarão brancos como a neve; ainda que sejam vermelhos como o carmesim, se tornarão como a lã.","Não existe falha grande demais para a misericórdia de Deus."],
    ["Salmos",51,"10","perdao","Cria em mim, ó Deus, um coração puro, e renova em mim um espírito reto.","Uma oração sincera para recomeçar: peça a Deus um coração renovado."],
    ["Lucas",6,"37","perdao","Não julgueis, e não sereis julgados; não condeneis, e não sereis condenados; perdoai, e sereis perdoados.","A misericórdia que oferecemos volta para nós. Seja generoso ao perdoar."],

    // ---------- ORAÇÃO ----------
    ["Mateus",7,"7","oracao","Pedi, e dar-se-vos-á; buscai, e encontrareis; batei, e abrir-se-vos-á.","A oração é um convite à perseverança: peça, busque e bata."],
    ["Jeremias",33,"3","oracao","Clama a mim, e responder-te-ei, e anunciar-te-ei coisas grandes e firmes que não sabes.","Deus responde e ainda revela o que você ainda não conhece."],
    ["Marcos",11,"24","oracao","Por isso vos digo que tudo o que pedirdes, orando, crede que o recebereis, e tê-lo-eis.","Ore com confiança, crendo que o Pai ouve e cuida."],
    ["1 Tessalonicenses",5,"17","oracao","Orai sem cessar.","Oração não é só hora marcada. É uma conversa constante ao longo do dia."],
    ["Tiago",5,"16","oracao","Confessai as vossas culpas uns aos outros, e orai uns pelos outros, para que sareis; a oração feita por um justo pode muito em seus efeitos.","Orar uns pelos outros nos une e nos cura."],
    ["Mateus",6,"6","oracao","Mas tu, quando orares, entra no teu aposento e, fechada a porta, ora a teu Pai que está em secreto; e teu Pai, que vê em secreto, te recompensará publicamente.","Há uma intimidade especial na oração em secreto. Deus vê o que ninguém vê."],
    ["Romanos",8,"26","oracao","E da mesma maneira também o Espírito ajuda as nossas fraquezas; porque não sabemos o que havemos de pedir como convém, mas o mesmo Espírito intercede por nós com gemidos inexprimíveis.","Quando faltarem palavras, o Espírito ora por você."],
    ["Salmos",145,"18","oracao","Perto está o Senhor de todos os que o invocam, de todos os que o invocam em verdade.","Deus está perto de quem o chama com sinceridade, e a distância some quando você ora."],

    // ---------- PAZ ----------
    ["João",14,"27","paz","Deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá. Não se turbe o vosso coração, nem se atemorize.","A paz de Cristo não depende das circunstâncias. Ela é um presente que permanece."],
    ["Filipenses",4,"7","paz","E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e os vossos sentimentos em Cristo Jesus.","Existe uma paz que a lógica não explica, e Deus a oferece a você."],
    ["Isaías",26,"3","paz","Tu conservarás em perfeita paz aquele cujo propósito está firme em ti; porque ele confia em ti.","Mente firme em Deus, coração em paz. Escolha onde fixar seus pensamentos."],
    ["João",16,"33","paz","Estas coisas vos tenho dito para que em mim tenhais paz; no mundo tereis aflições, mas tende bom ânimo, eu venci o mundo.","Jesus não prometeu ausência de lutas, mas paz e vitória em meio a elas."],
    ["Salmos",4,"8","paz","Em paz me deitarei e dormirei, porque só tu, Senhor, me fazes habitar em segurança.","Antes de dormir, entregue o dia a Deus. Descanse em segurança."],
    ["Números",6,"26","paz","O Senhor sobre ti levante o seu rosto, e te dê a paz.","Uma bênção para guardar: que o olhar de Deus sobre você traga paz."],
    ["Romanos",5,"1","paz","Tendo sido, pois, justificados pela fé, tenhamos paz com Deus por nosso Senhor Jesus Cristo.","A maior paz é a reconciliação com Deus. Nela, o coração encontra descanso."],
    ["Salmos",29,"11","paz","O Senhor dará força ao seu povo; o Senhor abençoará o seu povo com paz.","Força e paz caminham juntas quando vêm de Deus."],

    // ---------- PERSEVERANÇA ----------
    ["Gálatas",6,"9","perseveranca","E não nos cansemos de fazer o bem, porque a seu tempo ceifaremos, se não houvermos desfalecido.","Continue plantando o bem. A colheita tem o tempo certo."],
    ["Tiago",1,"12","perseveranca","Bem-aventurado o homem que sofre a tentação; porque, quando for provado, receberá a coroa da vida, a qual o Senhor tem prometido aos que o amam.","Quem permanece firme na prova encontra a promessa de Deus esperando por ele."],
    ["Hebreus",12,"1","perseveranca","Portanto nós também, pois, que estamos rodeados de uma tão grande nuvem de testemunhas, deixemos todo o embaraço, e o pecado que tão de perto nos rodeia, e corramos com paciência a carreira que nos está proposta.","A caminhada da fé é uma corrida de resistência. Solte o que pesa e siga em frente."],
    ["Romanos",5,"3","perseveranca","E não somente isto, mas também nos gloriamos nas tribulações, sabendo que a tribulação produz a paciência.","As dificuldades não são em vão. Elas forjam paciência e caráter."],
    ["2 Timóteo",4,"7","perseveranca","Fiz o bom combate, acabei a carreira, guardei a fé.","Terminar bem é a meta. Cada dia de fidelidade conta."],
    ["Tiago",1,"3","perseveranca","Sabendo que a prova da vossa fé produz a paciência.","A prova revela e fortalece a fé. Ela não é o fim, é um treino."],
    ["1 Coríntios",15,"58","perseveranca","Portanto, meus amados irmãos, estai firmes e constantes, sempre abundantes na obra do Senhor, sabendo que o vosso trabalho não é vão no Senhor.","Nenhum esforço feito para Deus é desperdiçado. Continue firme."],
    ["Filipenses",3,"14","perseveranca","Prossigo para o alvo, pelo prêmio da soberana vocação de Deus em Cristo Jesus.","Olhe para frente. Cada passo, mesmo pequeno, aproxima você do propósito de Deus."],

    // ---------- CONFIANÇA EM DEUS ----------
    ["Provérbios",3,"5","confianca","Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento.","Confiar de todo o coração é soltar o controle e se apoiar em quem tudo sabe."],
    ["Provérbios",3,"6","confianca","Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.","Inclua Deus em cada decisão e deixe que ele alinhe o caminho."],
    ["Salmos",23,"1","confianca","O Senhor é o meu pastor, nada me faltará.","Com um bom Pastor, você tem tudo de que precisa para hoje."],
    ["Salmos",37,"5","confianca","Entrega o teu caminho ao Senhor; confia nele, e ele o fará.","Entregar é parar de lutar sozinho e deixar Deus agir."],
    ["Romanos",8,"28","confianca","E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito.","Mesmo o que não compreendemos está sendo conduzido para o bem por Deus."],
    ["Salmos",20,"7","confianca","Uns confiam em carros, outros em cavalos; mas nós faremos menção do nome do Senhor nosso Deus.","Todos confiam em alguma coisa. Que a sua confiança esteja no Senhor."],
    ["Jeremias",17,"7","confianca","Bendito o homem que confia no Senhor, e cuja esperança é o Senhor.","Quem confia em Deus é abençoado, porque sua esperança está bem firmada."],
    ["Salmos",62,"8","confianca","Confiai nele, ó povo, em todo o tempo; derramai perante ele o vosso coração; Deus é o nosso refúgio.","Em todo tempo, derrame o coração diante de Deus. Ele é seu refúgio."]
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
    const [livro, cap, ver, cat, texto, reflexao] = r;
    const ref = `${livro} ${cap}:${ver}`;
    return {
      id: i + 1, livro, cap, ver, cat, texto, reflexao, ref,
      hay: norm([texto, ref, livro, catById[cat].nome, catById[cat].sin, reflexao].join(' '))
    };
  });
  const byId = Object.fromEntries(VERSES.map(v => [v.id, v]));

  /* ============================================================
     ESTADO + LOCALSTORAGE
     ============================================================ */
  const KEY = 'vpff:v1';
  const DEFAULTS = {
    favorites: [], read: [], viewed: [], explored: [],
    prefs: { font: 'm', category: 'todas', status: 'todos' }
  };

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY));
      return { ...DEFAULTS, ...saved, prefs: { ...DEFAULTS.prefs, ...(saved && saved.prefs) } };
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

  const verseText = v => `“${v.texto}”\n— ${v.ref} (ARC)\n\nVoz do Altíssimo · Versículos para Fortalecer sua Fé`;

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
     CARD DE VERSÍCULO
     ============================================================ */
  function cardHTML(v, big = false) {
    const fav = isFav(v.id), read = isRead(v.id);
    return `
    <article class="card${big ? ' big' : ''}${read ? ' is-read' : ''}" data-id="${v.id}">
      <div class="card-top">
        <span class="tag">${catById[v.cat].nome}</span>
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
    const v = byId[id];
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
        (await copyText(verseText(v))) ? toast('Versículo copiado!') : toast('Não foi possível copiar.');
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
    const items = [{ id: 'todas', nome: 'Todas' }, ...CATEGORIES];
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
    els.count.textContent = list.length === 1 ? '1 versículo encontrado' : `${list.length} versículos encontrados`;
    els.list.innerHTML = list.length
      ? list.map(v => cardHTML(v)).join('')
      : `<div class="empty"><p>Nenhum versículo encontrado para essa busca.</p><button type="button" class="btn btn-secondary" id="clearFilters">Limpar filtros</button></div>`;
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
     INÍCIO: categorias + versículo aleatório
     ============================================================ */
  function renderCategoryGrid() {
    els.catGrid.innerHTML = CATEGORIES.map(c => {
      const n = VERSES.filter(v => v.cat === c.id).length;
      return `<button type="button" class="cat-tile" data-cat="${c.id}"><h3>${c.nome}</h3><span>${n} versículos</span></button>`;
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
     PALAVRA DO DIA (determinística pela data local)
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
      : `<div class="empty"><p>Você ainda não tem favoritos. Toque em “Favoritar” em qualquer versículo para guardá-lo aqui.</p><a class="btn btn-primary" href="#biblioteca">Explorar versículos</a></div>`;
  }

  /* ============================================================
     MINHA JORNADA
     ============================================================ */
  function renderJourney() {
    const total = VERSES.length, read = state.read.length;
    const pct = Math.round((read / total) * 100);
    els.stats.innerHTML = [
      [state.viewed.length, 'versículos visualizados'],
      [read, 'versículos lidos'],
      [state.favorites.length, 'versículos favoritos'],
      [`${state.explored.length}/${CATEGORIES.length}`, 'categorias exploradas']
    ].map(([n, l]) => `<div class="stat"><strong>${n}</strong><span>${l}</span></div>`).join('');

    els.pct.textContent = pct + '%';
    els.fill.style.width = pct + '%';
    els.bar.setAttribute('aria-valuenow', pct);

    els.jCats.innerHTML = CATEGORIES.map(c => {
      const all = VERSES.filter(v => v.cat === c.id);
      const done = all.filter(v => isRead(v.id)).length;
      const p = Math.round((done / all.length) * 100);
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
    c.fillText(spaced('VOZ DO ALTÍSSIMO'), W / 2, 400);

    // Texto: ajusta tamanho para caber
    const quote = `“${v.texto}”`;
    const maxW = 800, top = 520, bottom = 1400;
    let size = 70, lines, lh;
    do {
      c.font = `italic 500 ${size}px "Playfair Display", Georgia, serif`;
      lines = wrap(c, quote, maxW); lh = size * 1.45; size -= 2;
    } while (lines.length * lh > bottom - top && size > 30);

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
    c.fillText('Uma palavra de Deus para cada momento da sua vida.', W / 2, 1750);
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
    a.download = `versiculo-${norm(modalVerse.ref).replace(/[^a-z0-9]+/g, '-')}.png`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
    toast('Imagem baixada!');
  });

  $('#shareCard').addEventListener('click', async () => {
    const blob = await canvasBlob();
    const file = blob && new File([blob], 'versiculo.png', { type: 'image/png' });
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
    document.title = (h === 'inicio' ? '' : $('#view-' + h + ' .page-title, #view-' + h + ' h2')?.textContent + ' | ') + 'Versículos para Fortalecer sua Fé';
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