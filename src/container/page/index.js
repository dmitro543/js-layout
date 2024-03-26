import { createElement,
    createHeader, 
    createContainerTab,
    createMain,
 } 
from '../../script/layout-2'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)

const div = createContainerTab()
page.append(div)

const main = createMain()
page.append(main)
// console.log('container')