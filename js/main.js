const next = document.querySelector('#nextProject')
const last = document.querySelector('#lastProject')

const titleContainer = document.querySelector('#projectTitle')
const descriptionContainer = document.querySelector('#projectDescription')
const imageDesktop = document.querySelector('#imageDesktop')
const imageMobile = document.querySelector('#imgMobile')
const linkContainer = document.querySelector('#projectLink')
const showQuantityProject = document.querySelector('#showQuantityProject')

const projects = [
  {
    name: 'Sistema de Pedidos em React Js',
    description: 'Este projeto se trata de um sistema de controle de pedidos de uma confeitaria, com cadastro de pedidos, produtos, clientes, taxas de entregas e notificações. Este sistema foi desenvolvido utilizando tecnologias como React Js, JavaScript, Html e Css.',
    imageDesktop: './images/projects/sistemaDePedido.png',
    imageMobile: './images/projects/sistemaDePedido2.png',
    link: 'https://github.com/Emerson-MM-Filho/sistemaDePedidos',
  },
  {
    name: 'Lunar Way',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, sed. Nam esse dolores asperiores quam ex blanditiis, ipsa fuga itaque necessitatibus maxime ipsum illum repellat nihil provident quod laborum temporibus?',
    imageDesktop: './images/projectImage.png',
    imageMobile: './images/projectImage.png',
    link: 'https://github.com/Emerson-MM-Filho',
  }
]

const renderProject = (obj,index) => {
  titleContainer.innerText = obj[index].name
  descriptionContainer.innerText = obj[index].description
  imageDesktop.setAttribute('src', obj[index].imageDesktop)
  imageMobile.setAttribute('src', obj[index].imageMobile)
  linkContainer.setAttribute('href', obj[index].link)
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
  renderProject(obj,index)

  next.addEventListener('click', () => {
    index += (index < obj.length - 1) ? 1 : 0
    console.log(index)
    renderProject(obj, index)
  })

  last.addEventListener('click', () => {
    index -= (index > 0) ? 1 : 0
    console.log(index)
    renderProject(obj, index)
  })
}

window.onload = changeProject(projects)
