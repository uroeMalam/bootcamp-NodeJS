 /**
  * hitung sales discount plus tax rate
  * function getSalesDiscount
  */

 function getSalesDiscount(price,tax,discount){
     if(isNaN(price) && isNaN(tax) && isNaN(discount)){
         return 'Price, Pajak & Discount harus dalam angka';
     }if (isNaN(price)) {
         return 'Price harus dalam angka';
     }else if(isNaN(tax)){
         return 'Pajak harus dalam angka';
     }else if(isNaN(discount)){
         return 'Discount harus dalam angka';
     }else{
         var discountPrice = (discount*0.01)*price; //total diskon
         var totalDiscount = price - discountPrice; //harga + diskon
         var taxPrice = totalDiscount *(tax*0.01); //pajak dari hasil diskon
         var total = totalDiscount + taxPrice; //total harga diskon+ pajak
         return `\nTotal Sales : ${price} \nDiscount (${discount}%) : ${discountPrice} \nPriceAfterDiscount : ${totalDiscount} \nPajak(${tax}%) : ${taxPrice} \n---------------------------------- \nTotalPayment : ${total}`;
     }

 }

console.log(getSalesDiscount("a", 1,5));//Price harus dalam angka
console.log(getSalesDiscount(500, "pajak",5));//Pajak harus dalam angka
console.log(getSalesDiscount("harga", "pajak","discount"));//Price, Tax & Discount harus dalam angkaa
console.log(getSalesDiscount(4500, 10,5));
/**
    Total Sales 	: Rp.4500 
    Discount (5%) 	: Rp.225
    PriceAfterDiscount 	: Rp.4275
    Pajak (10%) 	: Rp.427.5
    ----------------------------------
    TotalPayment 	: Rp.4702.5
 */