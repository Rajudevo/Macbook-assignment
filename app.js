// common input

function FieldInput(inputValue,amount){
    const FieldValue = document.getElementById(inputValue);
    let FieldTotal = FieldValue.innerText;
    
    if(amount == 180){
        FieldTotal =  180 ;
    }
    
    else if(amount == 0){
        FieldTotal = 0;
    }

    

    else if(amount == 100){
        FieldTotal =  100;
    }

    else if(amount == 20){
        FieldTotal =  20;
    }

    FieldValue.innerText = FieldTotal;
  
//call function
    calculateTotal()
   

}


// total calculation function

function calculateTotal(){
    const bestAmount = document.getElementById('best-amount');
    const bestPrice = bestAmount.innerText;
    
    const memoryCost = document.getElementById('memory-amount')
    const totalMemory = memoryCost.innerText;

    const storageCost = document.getElementById('storage-amount');
    const totalStorage = storageCost.innerText;
    
    const deliveryCharge = document.getElementById('delivery-amount');
    const totalDeliveryCost = deliveryCharge.innerText;
    
    const totalValue = document.getElementById('total-price');
    const afterDiscount = document.getElementById('after-discount');
  

    const totalPrice = parseInt(bestPrice ) + parseInt(totalMemory ) + parseInt(totalStorage)  + parseInt(totalDeliveryCost) ;
    
    totalValue.innerText = totalPrice ;

    afterDiscount.innerText = totalPrice ;

    //promo code apply

    const promoField = document.getElementById('promo-code');
    const promoValue = promoField.value ;

    if(promoValue == 'stevekaku'){
        const discountPrice = totalPrice * .2 ;
        const newTotal = totalPrice - discountPrice ;
        afterDiscount.innerText = newTotal ;
        promoField.value = ''; 

    }

   

    
}

// event section

document.getElementById('8gb-memory').addEventListener('click',function(){

    FieldInput('memory-amount', 0);
   
})

document.getElementById('16gb-memory').addEventListener('click',function(){
    FieldInput('memory-amount',180);

})

document.getElementById('256gb-storage').addEventListener('click',function(){
    FieldInput('storage-amount',0);

})

document.getElementById('512gb-storage').addEventListener('click',function(){
    FieldInput('storage-amount',100);

})

document.getElementById('1tb-storage').addEventListener('click',function(){
    FieldInput('storage-amount',180);

})

document.getElementById('free-delivery').addEventListener('click',function(){
    FieldInput('delivery-amount',0);

})

document.getElementById('paid-delivery').addEventListener('click',function(){
    FieldInput('delivery-amount',20);

})

document.getElementById('promo').addEventListener('click',function(){
    calculateTotal()

})

