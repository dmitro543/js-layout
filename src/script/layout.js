// import { param } from "../route"

export const createElement = (tag, className, text) => {
    const elem = document.createElement(tag)

    if(className) {
        elem.className = className
    }

    if(text) {
        elem.innerHTML = text
    }

    return elem
}

const HEADER_BUTTON_LIST = [
    {
        with: 22,
        height: 22,
        src: '/svg/back.svg'
    },
    {
        with: 22,
        height: 22,
        src: '/svg/picture.svg'
    }
]
export const createHeader = () => {
    const header = createElement('header', 'header')

    HEADER_BUTTON_LIST.forEach((params) => {
       const button = createElement('button', 'button')

       const img = createElement('img')
       Object.entries(params).forEach(([key, value]) => {
         img[key] = value
       })
       button.insertAdjacentElement('beforeend', img)
       header.insertAdjacentElement('beforeend', button)
    })

    return header
}

const POST_LIST = [
    {
        category: [
            { text: 'Важливо', id: 1},
            { text: 'Нова', id: 2},
        ],
        info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
        date: '25.01',
        viewed: false,
    },

    {
        category: [
            { text: 'Важливо', id: 1},
            { text: 'Нова', id: 2},
        ],
        info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
        date: '15.01',
        viewed: true,
    },

    {
        category: [
            { text: 'Важливо', id: 1},
            { text: 'Нова', id: 2},
        ],
        info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
        date: '25.01',
        viewed: false,
    },
]

export const createPost = () => {
    const postlist = createElement('main', 'post_list')

    POST_LIST.forEach((postData) => {
        const post = createElement(
           'div',
           postData.viewed
             ? 'post button post--viewed'
             : 'post button',
        )

        const postHeader = createElement('div', 'post_header')

        const categoryList = createElement(
           'div',
           'post_category-list'
        )

        postData.category.forEach((category) => {
            const categorySpan = createElement(
                'span',
                `post_category post_category--${category.id}`,
                category.text,
            )
            categoryList.append(categorySpan)
        })

        const dateSpan = createElement(
            'span',
            'post_data',
            postData.date,
        )

        postHeader.append(categoryList, dateSpan)

        const infoParagraph = createElement(
            'p',
            'post_info',
            postData.info,
        )
        post.append(postHeader, infoParagraph)

        postlist.append(post)
    })
    return postlist
}
