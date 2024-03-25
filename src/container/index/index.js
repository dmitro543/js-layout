import { createElement } from '../../script/layout'
   
const page = document.querySelector('.page')

const title = createElement('h1', 'title', 'Мій блог')

page.append(title)

console.log('container')
