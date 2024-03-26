import { createElement,
    createHeader, 
    createPost,
    MAIN_INFO,
 } 
from '../../script/layout-2'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)

const post = createPost()
page.append(post)

const img = createElement('img', 'main_img');
    img.src = MAIN_INFO.img;
main.appendChild(img);
// console.log('container')