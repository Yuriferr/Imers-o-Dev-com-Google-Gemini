// Dados dos avatares
const avatares = [
    { nome: "CyberNinja", plataforma: "VRChat", imagem: "./images/cyberNinja.jpg", descricao: "Um ninja futurista com habilidades incríveis." },
    { nome: "PixelGirl", plataforma: "Meta", imagem: "./images/pixelGirl.jpg", descricao: "Um avatar pixel art com um visual retrô." },
    { nome: "FantasyMage", plataforma: "Second Life", imagem: "./images/fantasyMage.jpg", descricao: "Um mago poderoso com roupas mágicas." },
    { nome: "SpaceSoldier", plataforma: "VRChat", imagem: "./images/spaceSoldier.jpg", descricao: "Um soldado espacial com armadura futurista." },
    { nome: "CyberSamurai", plataforma: "VRChat", imagem: "./images/cyberSamurai.jpg", descricao: "Um samurai com armadura futurista." },
    { nome: "PixelBoy", plataforma: "Meta", imagem: "./images/pixelBoy.jpg", descricao: "Um avatar pixel art com um visual retrô." }
  ];
  
  const section = document.getElementById("resultados");
  
  function criarCardAvatar(avatar) {
    return `<div class="avatar-card">
              <img src="${avatar.imagem}" alt="Imagem do ${avatar.nome}">
              <section>
                <h2>${avatar.nome}</h2>
                <p>Plataforma: ${avatar.plataforma}</p>
                <p>Descrição: ${avatar.descricao}</p>
              </section>
            </div>`;
  }
  
  function exibirAvatares(avataresParaExibir) {
    section.innerHTML = avataresParaExibir.length ? avataresParaExibir.map(criarCardAvatar).join('') : 'Nenhum avatar encontrado.';
  }
  
  function pesquisar() {
    const input = document.getElementById("pesquisa").value.toLowerCase();
    const resultados = avatares.filter(avatar => avatar.nome.toLowerCase().includes(input));
    exibirAvatares(resultados);
  }
  
  exibirAvatares(avatares);
  document.getElementById("pesquisa").addEventListener('input', pesquisar);
  