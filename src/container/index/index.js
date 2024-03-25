import { createElement, createHeader } from '../../script/layout'
   
const page = document.querySelector('.page')

const title = createElement('h1', 'title', 'Мій блог')

page.append(title)

const header = createHeader()

page.append(header)

// console.log('container')

