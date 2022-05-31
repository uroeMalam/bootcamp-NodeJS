export default class Product{
    constructor(prodId,prodName, category, price=0,totalBuy=1){
        this.prodId = prodId,
        this.prodName = prodName,
        this.category = category,
        this.price = price,
        this.totalBuy = totalBuy
        this.subTotal = price*totalBuy
    }

    setPrice(price){
        return price.toString()
    }

    setTotalBuy(total){
        return total.toString()
    }

    toString(){
        return `\nid produk : ${this.prodId}\nnama produk : ${this.prodName}\nkategori produk : ${this.category}\nharga produk : Rp.${this.setPrice(this.price)}\ntotal pembelian : ${this.setTotalBuy(this.totalBuy)} Unit\n------------------------------\nsub total harga : ${this.subTotal}\n`
    }

}