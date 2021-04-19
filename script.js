let bt25 = document.querySelector('#bt25');
let bt50 = document.querySelector('#bt50');
let bt75 = document.querySelector('#bt75');
let bt100 = document.querySelector('#bt100');
let firePicture = document.querySelector('#fire')
let buttonArial = document.querySelector('#btF1')
let buttonBook = document.querySelector('#btF2')
let buttonHelvet = document.querySelector('#btF3')
let buttonImpact = document.querySelector('#btF4')
let textFamily = document.querySelector('#text')
let buttonBorder = document.querySelector('#border')
let photo1 = document.querySelector('#photo1')
let photo2 = document.querySelector('#photo2')
let buttonShadow = document.querySelector('#btnSh1')
let buttonShadows = document.querySelector('#btnSh2')
let firstShadow = document.querySelector('#l1')
let twiceShadow = document.querySelector('#l2')


Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)]
}

// for form 1 //

let arrBorders = ['8px dotted #e1e2e1', '8px dashed #e1e2e1', '8px solid #e1e2e1', '8px double #e1e2e1',
    '8px groove #e1e2e1']

buttonBorder.addEventListener('click', () => {
    photo1.style.border = arrBorders.random()
    photo2.style.border = arrBorders.random()
})

// for form 2 //

let arrShadow = ['0 5px 3px #005cb2', '0 4px 2px #3DEC69FF', '0 6px 4px #D06C20FF', '0 5px 3px #D06C20FF',
    '0 5px #3pxE0BB13FF']

let arrShadows = ['0 5px 3px #005cb2, -3px 6px 5px salmon', '0 5px 3px #D06C20FF, -3px 6px 5px #3DEC69FF',
    '0 5px 3px #06ECBBFF, -3px 6px 5px crimson', '0 5px 3px violet, -3px 6px 5px cornflowerblue']

buttonShadow.addEventListener('click', ()=>{
    firstShadow.style.textShadow = arrShadow.random()
})

buttonShadows.addEventListener('click', ()=>{
    twiceShadow.style.textShadow = arrShadows.random()
})

// for from 3 //

buttonArial.addEventListener('click', () => {
    textFamily.style.fontFamily = '"Arial Black", serif'
})

buttonBook.addEventListener('click', () => {
    textFamily.style.fontFamily = '"Bookman Old Style", serif'
})

buttonHelvet.addEventListener('click', () => {
    textFamily.style.fontFamily = '"Helvetica", serif'
})

buttonImpact.addEventListener('click', () => {
    textFamily.style.fontFamily = '"Impact", serif'
})

// for form 4 //
bt25.addEventListener('click', () => {
    firePicture.style.opacity = '0.25'
})

bt50.addEventListener('click', () => {
    firePicture.style.opacity = '0.5'
})

bt75.addEventListener('click', () => {
    firePicture.style.opacity = '0.75'
})

bt100.addEventListener('click', () => {
    firePicture.style.opacity = '1'
})