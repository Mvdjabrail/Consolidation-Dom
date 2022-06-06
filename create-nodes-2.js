const wordApp = ["html", "css", "js"]
const ul = document.createElement('ul')


const renderWordApp = (wordApp) => {
    for (let i = 0; i < wordApp.length; i++) {
        let li = document.createElement('li')
        li.append(wordApp[i])
        ul.append(li)
    }
    document.body.append(ul)
    return ul
}

const linkArray = [{
    name: 'Google',
    url: 'https://google.com'
},
{
    name: 'Instagram',
    url: 'https://instagram.com'
},
{
    name: 'intocode',
    url: 'https://intocode.ru'
}
]
const render = (array) => {
    let linkul = document.createElement('ul')
    for (let i = 0; i < array.length; i++) {
        let li = document.createElement('li')
        let a = document.createElement('a')

        a.textContent = array[i].name
        a.href = array[i].url

        li.append(a)
        linkul.append(li)
    }
    document.body.append(linkul)
    return linkul
}




