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
]

const renderProject = (obj,index) => {
  titleContainer.innerText = obj[index].name
  descriptionContainer.innerText = obj[index].description
  imageDesktop.setAttribute('src', obj[index].imageDesktop)
  imageMobile.setAttribute('src', obj[index].imageMobile)
  buttonRepository.setAttribute('href', obj[index].linkRepository)
  buttonTest.setAttribute('href', obj[index].linkTest)
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
