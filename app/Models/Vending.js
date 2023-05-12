

export class Vending{
    constructor(data){
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
}

 get listTemplate(){
    
return `<p>${this.name}, ${this.pricePlusTax}, ${this.imgUrl}</p>`


    // `
    // <div class="elevation-5 text-center">
    // <p  class="fs-1"></p>
    //   </div>
    // `
 }
 get pricePlusTax(){
    let tax = 1.06
    return this.price * tax
 }
}
