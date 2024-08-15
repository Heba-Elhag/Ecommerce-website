const product = [
    {
        id: 0,
        image: 'img/pro-1.png',
        title: 'Stylish blue plaid shirt for men',
        price: 120,
    },
    {
        id: 1,
        image: 'img/pro-2.png',
        title: 'Stylish blue plaid shirt for men',
        price: 140,
    },
    {
        id: 2,
        image: 'img/pro-3.png',
        title: 'garment coat rain casual',
        price: 160,
    },
    {
        id: 3,
        image: 'img/pro-4.png',
        title: 'half sleeves shirt',
        price: 100,
    },
    {
        id: 4,
        image: 'img/pro-5.png',
        title: 'White tshirts',
        price: 155,
    },
    {
        id: 5,
        image: 'img/pro-6.png',
        title: 'Slip fit formal men shirt',
        price: 158,
    },
    {
        id: 6,
        image: 'img/pro-7.png',
        title: 'Blue jeans',
        price: 180,
    },
    {
        id: 7,
        image: 'img/pro-8.png',
        title: 'A pair of blue jeans with a black and white logo',
        price: 200,
    },
    {
        id: 8,
        image: 'img/pro-9.png',
        title: 'Blue jeans',
        price: 178,
    },
    {
        id: 9,
        image: 'img/pro-10.png',
        title: 'Black jeans',
        price: 190,
    },
   
];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
 document.getElementById('root').innerHTML = categories.map((item)=>
 {
    var {image, title, price} = item
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
           
    )

 }).join('')


 var cart =[]

 function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
 }

 function delElement(a){
    cart.splice(a, 1);
    displaycart();
 }

 function displaycart(a){
    let j = 0, total=0;
    document.getElementById('count').innerHTML = cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00"
    }
    else{
        document.getElementById('cartItem').innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );

        }).join('');
    }
 }



