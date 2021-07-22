const next = document.querySelector('#nextProject')
const last = document.querySelector('#lastProject')

const titleContainer = document.querySelector('#projectTitle')
const descriptionContainer = document.querySelector('#projectDescription')
const imageDesktop = document.querySelector('#imageDesktop')
const imageMobile = document.querySelector('#imgMobile')
const buttonRepository = document.querySelector('#projectRepositoryLink')
const buttonTest = document.querySelector('#projectTestLink')
const showQuantityProject = document.querySelector('#showQuantityProject')

const projects = [
  {
    name: 'Sistema de Pedidos em React Js',
    description: 'Este projeto se trata de um sistema de controle de pedidos de uma confeitaria, com cadastro de pedidos, produtos, clientes, taxas de entregas e notificações. Este sistema foi desenvolvido utilizando tecnologias como React Js, JavaScript, Html e Css.',
    imageDesktop: './images/projects/sistemaDePedido.png',
    imageMobile: './images/projects/sistemaDePedido2.png',
    linkRepository: 'https://github.com/Emerson-MM-Filho/sistemaDePedidos',
    linkTest: 'https://emerson-mm-filho.github.io/sistemaDePedidos/',
  },
  {
    name: 'Seção de depoimento',
    description: 'Este é um projeto que se trata da resolução do desafio disponível na plataforma Frontend Mentor, que tem como objetivo criar a seção de depoimentos de um página, tanto para versão desktop quanto para dispositivos móveis. Sendo realizada com as tecnologias HTML e CSS.',
    imageDesktop: './images/projects/testimonialSection.png',
    imageMobile: './images/projects/testimonialSection.png',
    linkRepository: 'https://github.com/Emerson-MM-Filho/Testimonials-grid-section',
    linkTest: 'https://emerson-mm-filho.github.io/Testimonials-grid-section/',
  },
  {
    name: 'Carrinho de compras',
    description: 'O projeto "Carrinho de compras" consiste em um sistema de carrinho de compras de um e-commerce fictício. Este projeto teve como base, a API "Fake Store API", para a criação de produtos. O site foi desenvolvido com o framework javascript "React" e SASS.',
    imageDesktop: './images/projects/productCart.png',
    imageMobile: './images/projects/productCart.png',
    linkRepository: 'https://github.com/Emerson-MM-Filho/Product-cart-react-system',
    linkTest: '',
  },
  {
    name: 'GamePlay',
    description: 'O projeto "GamePlay" é um aplicativo construído com React Native, Typescript, Expo, Context API. O Objetivo deste projeto foi criar um aplicativo que auxilie na conexão e organização dos momentos de diversão e jogatina com os amigos.',
    imageDesktop: './images/projects/nlwReactNative.png',
    imageMobile: './images/projects/nlwReactNative.png',
    linkRepository: 'https://github.com/Emerson-MM-Filho/NLW-Together-React-Native',
    linkTest: '',
  },
  {
    name: 'Valoriza',
    description: 'O projeto "Valoriza" é uma aplicação Backend, utilizando Node Js, Typescript, Express, JWT e outras tecnologias. O Objetivo deste projeto foi criar uma aplicação que promova o reconhecimento entre os companheiros de equipe, cadastrando tags e elogios.',
    imageDesktop: './images/projects/nlwNodeJs.png',
    imageMobile: './images/projects/nlwNodeJs.png',
    linkRepository: 'https://github.com/Emerson-MM-Filho/NLW-Together-Node-Js',
    linkTest: '',
  },
]

const renderProject = (obj,index) => {
  titleContainer.innerText = obj[index].name
  descriptionContainer.innerText = obj[index].description
  imageDesktop.setAttribute('src', obj[index].imageDesktop)
  imageMobile.setAttribute('src', obj[index].imageMobile)
  buttonRepository.setAttribute('href', obj[index].linkRepository)
  if (obj[index].linkTest !== '') {
    buttonTest.setAttribute('href', obj[index].linkTest)
  } else {
    buttonTest.parentNode.remove()
  }

  showQuantityProject.innerText = `${index + 1}/0${obj.length}`
  
  if (index <= 9) {
    showQuantityProject.innerText = `${index + 1}/0${obj.length}`
  }
  if ((index + 1) <= 9) {
    showQuantityProject.innerText = `0${index + 1}/0${obj.length}`
  }
}

const changeProject = (obj) => {

  let index = 0
  renderProject(obj, index)

  next.addEventListener('click', () => {
    index += (index < obj.length - 1) ? 1 : 0
    renderProject(obj, index)
  })

  last.addEventListener('click', () => {
    index -= (index > 0) ? 1 : 0
    renderProject(obj, index)
  })
}

window.onload = changeProject(projects)
