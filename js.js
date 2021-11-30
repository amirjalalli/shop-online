var allProducts = [
    {id : 1 , name : 'labtop', price : 17000000},
    {id : 2 , name : 'phone' , price : 700000000},
    {id : 3 , name : 'pen' , price : 120000},
    {id : 4 , name : 'pencil' , price : 90000},
    {id : 5 , name : 'Eraser' , price : 60000},
    {id : 6 , name : 'milk' , price : 350000},
]
var userBasket = [
    {id : 1 , name : 'pen' , price : 120000},
    {id : 2 , name : 'pencil' , price : 90000},
]


var userProduct = prompt("enter the name of product: ")
var requestProduct;

var isInShop = allProducts.some(function(product){
    if(product.name == userProduct){
        requestProduct = product
        return true
    }
    
})

if (isInShop == true) {
    var newProduct = { 
        id: 3,
        name: requestProduct.name ,
        price: requestProduct.price ,
    }
    userBasket.push(newProduct)
    var sum =0

    userBasket.forEach(function(product) {
        sum = sum + product.price
    })

    console.log(userBasket)
    alert("total price " + sum)
} else {
    console.log("موجود نیست")
}