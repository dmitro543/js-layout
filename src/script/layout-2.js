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

export const MAIN_INFO = [
    {
        with: 22,
        height: 22,
        src: '/svg/team.svg'
    },
]

// export const createHeaders = () => {
//     const headers = createElement('header', 'header')

//     MAIN_INFO.forEach((params) => {
//        const button = createElement('button', 'button')

//        const img = createElement('img')
//        Object.entries(params).forEach(([key, value]) => {
//          img[key] = value
//        })
//        button.insertAdjacentElement('beforeend', img)
//        headers.insertAdjacentElement('beforeend', button)
//     })

//     return headers
// }

const POST_LIST = [
    {
        category: [{ text: 'Що таке база знань?', id: 2},],
        info: 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.',
        viewed: true,
    }
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

        // const img = createElement('img', 'main_img');
        //    img.src = MAIN_INFO.img;
        // main.appendChild(img);
    })
    return postlist
}
