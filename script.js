//menu hamburguer
let hamburger = document.getElementById('hamburger');
let itemsMenu = document.querySelector('.header-nav ul');

hamburger.addEventListener('click', toAppear);

function toAppear() {
  itemsMenu.classList.toggle('show');
}


//carousel
const carousel = document.getElementById("myCarousel");
const slides = document.querySelectorAll(".carousel-slide");
const prevButton = document.getElementById("prevSlide");
const nextButton = document.getElementById("nextSlide");
let currentIndex = 0;

function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "block";
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

showSlide(currentIndex);


// modal
const projects = [
  {
      Nome: 'Projeto 1 - ElasNaTech 🚀',
      Descrição: 'Neste projeto, criei uma página web completa para aprimorar minhas habilidades em HTML (HyperText Markup Language) e CSS (Cascading Style Sheets). Para este projeto, utilizei HTML para criar a estrutura e o conteúdo da página web. Utilizei tags HTML para definir cabeçalhos, parágrafos, links e elementos de formulário. Além disso, utilizei CSS para estilizar a página web e controlar sua aparência visual. Isso incluiu a definição de cores, fontes, margens, preenchimentos e layouts.',
      LinkGithub: 'https://github.com/NiEl0503/Desafio6-ElasNaTech',
  },
  {
      Nome: 'Projeto 2 - Agência de Viagens Ninoska ✈️',
      Descrição: 'Dentro deste desafiante contexto, nossa missão era conceber e construir um cabeçalho enriquecido com botões de navegação. No meu caso, a inspiração surgiu ao pensar na temática de uma agência de viagens para esse projeto. Essa escolha temática foi impulsionada pela minha verdadeira paixão por viagens, que ocupam o topo da lista das minhas preferências. Dessa forma, no cenário digital, uni criatividade e funcionalidade, dando vida a um cabeçalho que não apenas orienta a experiência de navegação, mas também desperta a emoção e a promessa de aventuras a serem descobertas.',
      LinkGithub: 'https://github.com/NiEl0503/Desafio7-ElasNaTech',
  },
  {
    Nome: 'Projeto 3 - RetroToons é uma página criada para amantes de desenhos antigos como eu 😂',
    Descrição: 'Este desafio sugerido pela professora Gil, consiste em criar uma página web para adquirir, praticar e aprofundar conhecimentos de Html e Css. Instruções: 1) A página deve conter um cabeçalho que inclua listas não ordenadas e por sua vez devem redirecionar para outra página. 2) No main você deve colocar imagens (de sua escolha) e estas devem ter um efeito visual quando o mouse passar sobre elas. 3) Conter um rodapé',
    LinkGithub: 'https://github.com/NiEl0503/Desafio-ElasNaTech',
},
{
  Nome: 'Projeto 4 - Azul 💙',
  Descrição: 'Mundo Azul é uma página web criada para praticar responsividade, como a tela é reduzida os cartões são adaptados de forma que fiquem em uma única coluna. Layout Adaptável: A página "Mundo Azul" utiliza um layout adaptável que se ajusta automaticamente ao tamanho da tela do usuário. À medida que a tela é reduzida, os cartões de conteúdo são rearranjados de forma a ocupar uma única coluna, garantindo que o conteúdo seja legível e acessível em dispositivos móveis, tablets e desktops. Design Responsivo: O design responsivo é uma técnica de estruturação HTML e CSS que permite que o site se adapte ao navegador do usuário sem a necessidade de várias folhas de estilo específicas para cada resolução. O layout da página "Mundo Azul" permanece fluído e variável de acordo com a resolução do dispositivo, proporcionando uma experiência consistente e agradável ao usuário. O projeto "Mundo Azul" utiliza HTML e CSS para criar um layout responsivo e flexível. O HTML é estruturado de forma a permitir a adaptação do conteúdo, enquanto o CSS aplica estilos e formatação que garantem uma apresentação atraente em diferentes dispositivos.',
  LinkGithub: 'https://github.com/NiEl0503/Azul-Desafio9-ElasNaTech',
},
{
  Nome: 'Projeto 5 - Fast & Furious 🏎️',
  Descrição: 'Durante a concretização deste desafio aprofundámos e reforçámos o que aprendemos sobre responsividade e também aprendemos como inserir vídeos nos nossos sites. Optei por fazer um site para um dos meus filmes favoritos (velozes e furiosos) aqui vocês podem ver o trailer do último filme dessa saga. Espero que vocês gostem desse filme tanto quanto eu gosto. O projeto utilizou HTML, CSS e JS',
  LinkGithub: 'https://github.com/NiEl0503/Desafio10-ElasnaTech',
},
{
  Nome: 'Projeto 6 - Logica 👩‍💻',
  Descrição: 'A essência central deste desafio era fortalecer a nossa capacidade lógica. O objetivo era construir um sistema interativo que solicitasse ao usuário um número que atendesse a três condições vitais: ser positivo, par e menor que 100. Entre as principais funções javascript utilizadas nesta tarefa, o **parseInt** se destacou como essencial. Usando-o, consegui transformar a entrada do usuário em um valor numérico acionável, desempenhando assim um papel crítico na criação e execução bem-sucedida do desafio.',
  LinkGithub: 'https://github.com/NiEl0503/Logica-Desafio11-ElasNaTech',
},
{
  Nome: 'Projeto 7 - Calculadora 🖩',
  Descrição: 'Neste projeto, desenvolvi uma calculadora web interativa para resolver problemas matemáticos com facilidade. Para desenvolver a calculadora, utilizei HTML para criar a estrutura da interface, CSS para estilizar a calculadora e torná-la visualmente atraente, e JavaScript para implementar as funcionalidades de cálculo. ',
  LinkGithub: 'https://github.com/NiEl0503/Desafio12-ElasNaTech',
},
{
  Nome: 'Projeto 8 - Menu hamburguer ☰',
  Descrição: 'Como parte do aprendizado constante promovido pela ElasNaTech, consegui concluir um desafio empolgante. Durante essa experiência, pude aplicar meus conhecimentos em CSS, HTML e JavaScript para fortalecer e consolidar o que aprendi até agora. O projeto consiste em uma página da web de design adaptável, onde se destaca a criação de um inovador menu de hambúrguer. Essa experiência me proporcionou a oportunidade de trabalhar na implementação de conceitos-chave, ao mesmo tempo em que reforçava minha compreensão prática dessas linguagens fundamentais.',
  LinkGithub: 'https://github.com/NiEl0503/menu-hamb-rguer',
},
{
  Nome: 'Projeto 9 - Harry Potter 💻',
  Descrição: 'O objetivo deste desafio foi explorar a biblioteca Bootstrap e aplicar seus recursos para criar um carrossel de imagens responsivo baseado em um tema de nossa escolha. Optei por dedicar o projeto ao mundo de "Harry Potter", uma saga amplamente reconhecida e apreciada por sua trama cativante. Bootstrap: bootstrap é uma ferramenta valiosa para desenvolvedores web que desejam criar sites e aplicativos móveis bonitos e responsivos com mais rapidez e eficiência.',
  LinkGithub: 'https://github.com/NiEl0503/Harry-Desafio14-ElasNaTech',
},
];

const imagesProject = document.querySelectorAll('.projeto img');

function openModal(index) {
    const modalContainer = document.getElementById('modalContainer');
    modalContainer.style.display = 'block';

    
    const project = projects[index];

   
    const modal = document.querySelector('.modal');
    modal.querySelector('h2').textContent = project.Nome;
    modal.querySelector('p').textContent = project.Descrição;
    const LinkGithubElement = modal.querySelector('a');
    LinkGithubElement.href = project.LinkGithub;
    LinkGithubElement.textContent = 'Pressione-me: Link para GitHub';
}

imagesProject.forEach((imagen, index) => {
    imagen.addEventListener('click', () => {
      openModal(index);
    });
});

function closeModal() {
    const modalContainers = document.getElementById('modalContainer');
    modalContainers.style.display = 'none';
}

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
  closeModal();
});

