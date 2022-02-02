let yourName = "Daniel Korol"

let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0 // Totally total cookies

const credit = document.querySelector('#credit')

const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')

const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')

const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

credit.textContent = `Created by ${yourName}`


gbPlusBtn.addEventListener('click', function(e) {
    gb = gb + 1;
//    console.log('Gingerbread cookie count is: ', gb)
    let gbTotalSum = document.querySelector('#qty-gb')
    gbTotalSum.textContent = gb;
    let totalSum = document.querySelector('#qty-total')
    total++; totalSum.textContent = total;
})

gbMinusBtn.addEventListener('click', function() {
    if(gb > 0){
        gb = gb - 1;
        let gbTotalSum = document.querySelector('#qty-gb')
        gbTotalSum.textContent = gb;
//        console.log('Gingerbread cookie count is: ', gb)
        let totalSum = document.querySelector('#qty-total')
        total--; totalSum.textContent = total;
    }
})

ccPlusBtn.addEventListener('click', function() {
    cc = cc + 1;
//    console.log('Chocolate Chip cookie count is: ', cc)
    let ccTotalSum = document.querySelector('#qty-cc')
    ccTotalSum.textContent = cc;
    let totalSum = document.querySelector('#qty-total')
    total++; totalSum.textContent = total;
})

ccMinusBtn.addEventListener('click', function() {
    if(cc > 0){
        cc = cc - 1;
//        console.log('Chocolate Chip cookie count is: ', cc)
        let ccTotalSum = document.querySelector('#qty-cc')
        ccTotalSum.textContent = cc;
        let totalSum = document.querySelector('#qty-total')
        total--; totalSum.textContent = total;
    }
})

sugarPlusBtn.addEventListener('click', function() {
    sugar = sugar + 1;
//    console.log('Sugar Sprinkle cookie count is: ', sugar)
    let sugarTotalSum = document.querySelector('#qty-sugar')
    sugarTotalSum.textContent = sugar;
    let totalSum = document.querySelector('#qty-total')
    total++; totalSum.textContent = total;
})

sugarMinusBtn.addEventListener('click', function() {
    if(sugar > 0){
        sugar = sugar - 1;
//        console.log('Sugar Sprinkle cookie count is: ', sugar)
        let sugarTotalSum = document.querySelector('#qty-sugar')
        sugarTotalSum.textContent = sugar;
        let totalSum = document.querySelector('#qty-total')
        total--; totalSum.textContent = total;
    }
})