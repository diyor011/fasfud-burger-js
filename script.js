const products = [
    {
        name: 'Гамбургер простой',
        price: 10000,
        kall: 1500,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kall() {
            return this.kall * this.amount
        }
    },
    {
        name: 'Гамбургер FRESH',
        price: 20500,
        kall: 2000,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kall() {
            return this.kall * this.amount
        }


    },
    {
        name: 'FRESH COMBO ',
        price: 31900,
        kall: 3000,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kall() {
            return this.kall * this.amount
        }
    }



]
// console.info(product[1].Summ)

const extraProduct = {

    doubleMayonnaise: {
        name: 'Двойной майонез',
        price: 2000,
        kall: 200
    },
    lettuce: {
        name: 'Салатный лист',
        price: 1000,
        kall: 10
    },
    cheese: {
        name: 'сыр',
        price: 2500,
        kall: 150
    }
}


const divProduct = [...document.querySelectorAll('.main__product')],/* rest operator */
    btnPlusOrMinus = [...document.querySelectorAll('.main__product-btn')],
    checkExtraProduct = [...document.querySelectorAll('.main__product-checkbox')]


btnPlusOrMinus.forEach(plusOrMinus => {
    plusOrMinus.addEventListener('click', PlusOrMinus)
})

// parendagi index nima kiberadi ?
// .indexof chi?
function PlusOrMinus() {
    // closest() - document object metodi bolib, ozi turgan eng yaqin elementga ulanadi 
    const parent = this.closest('.main__product'),
        parentIndex = divProduct.indexOf(parent),
        out = parent.querySelector('.main__product-num'),
        price = parent.querySelector('.main__product-price span'),
        kcall = parent.querySelector('.main__product-kcall span'),
        // getAtrebute()- document obyekt metodi,atrebut elementidan malumot oladi
        btnSymbol = this.getAttribute('data-symbol')

    if (btnSymbol === '+' && products[parentIndex].amount < 10) {
        products[parentIndex].amount++

    } else if (btnSymbol === '-' && products[parentIndex].amount > 0) {
        products[parentIndex].amount--
    }

    const { amount, Summ, Kall } = products[parentIndex]
    out.innerHTML = amount
    price.innerHTML = Summ.toLocaleString()
    kcall.innerHTML = Kall.toLocaleString()



}
checkExtraProduct.forEach(checkbox => {
    checkbox.addEventListener('click', addExtaProduct)
})

function addExtaProduct() {
    const parent = this.closest('.main__product'),
        parentIndex = divProduct.indexOf(parent),
        elAttr = this.getAttribute('data-extra'),
        kall = parent.querySelector('.main__product-kcall span'),
        price = parent.querySelector('.main__product-price span')


    const ali = products[parentIndex][elAttr] = this.checked

    if (ali) {
        products[parentIndex].kall += extraProduct[elAttr].kall
        products[parentIndex].price += extraProduct[elAttr].price
    } else {
        products[parentIndex].kall -= extraProduct[elAttr].kall
        products[parentIndex].price -= extraProduct[elAttr].price
    }
    const { Kall, Summ } = products[parentIndex]
    kall.innerHTML = Kall.toLocaleString()
    price.innerHTML = Summ.toLocaleString()

}

const cartProduct = []
let = totalName = ''
let = totalPrice = 0
let = totalKall = 0

const addCard = document.querySelector('.addCart'),
    receipt = document.querySelector('.receipt'),
    receiptOut = document.querySelector('.receipt__window-out'),
    receiptWindow = document.querySelector('.receipt__window'),
    btnRestart = document.querySelector('.receipt__window-btn')


addCard.addEventListener('click', function () {

    products.forEach(burger => {
        if (burger.amount) {
            cartProduct.push(burger)
            burger.name += `\nSoni  ${burger.amount}`
            for (const keyBurger in burger) {
                if (burger[keyBurger] === true) {
                    burger.name += `\n${extraProduct[keyBurger].name}`
                }
            }
        }
        burger.price += burger.Summ
        burger.kall += burger.Kall
    })

    cartProduct.forEach(burger => {
        totalName += `\n${burger.name}`
        totalPrice += burger.price
        totalKall += burger.kall
    })





    receiptOut.innerHTML = `Xaridingiz:\n${totalName}\nNarxi:${totalPrice.toLocaleString()}\nKaloriyasi:${totalKall.toLocaleString()}`
    receipt.style.display = 'flex'
    setTimeout(()=>{

        receipt.style.opacity = '1'
    },100)
    setTimeout(()=>{

        receiptWindow.style.top = '0'
    },200)


})

btnRestart.addEventListener('click',function () {
window.location.reload()
  })

  
const lvl =     document.querySelector('.header__timer-extra ') /* ozgarmasga const dat ovldik */


function time (i=0){  /* function ocip nomladik va i ni 0 ga kenglavoldik */
    lvl.innerHTML = i /* /lvl ozgarmasini ozgartirvomz inner html orkali ozgartirti */
    let = times = 50    /* ozgaruvci let da time ocip 50 ga tenglavoldi */
    if(i>50 && i <75)times = 100 /* agar i yani 0 50 dan kota bosa va i 75 dan kota bosa */
    else if (i<=75 && i <90)times=200 /* agar i kickina bosa yoki teng bosa 75 va i kickina qoki teng bosa 90 */
    else if (i>= 90 && i<=100)times=300 /* agar i kickina yoki teng bosa 90 ga va 100 ga  */

    if (i<100){
        i++
        setTimeout(()=>time(i),times) /* coll bek orgaki caqirish va i++ blan 1 qoshish */
    }
    
    
}

time() 








  
