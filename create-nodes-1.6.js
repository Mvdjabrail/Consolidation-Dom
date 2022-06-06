const divhead = document.createElement('div')

const ulhead = document.createElement('ul') 

const liInsta = document.createElement('li')
const liIntocode = document.createElement('li')

const aInsta = document.createElement('a')
const aIntocode = document.createElement('a')

aInsta.textContent = 'Наш инстаграм'
aIntocode.textContent = 'Наш сайт'

aInsta.href = 'https://instagram.com/intocode'
aIntocode.href = 'https://intocode.ru'

divhead.append(ulhead)

ulhead.append(liInsta, liIntocode)

liInsta.append(aInsta)
liIntocode.append(aIntocode)

console.log(divhead);

document.body.append(divhead)
