const products = [
    { name: "Laptop", price: 80000 },
    { name: "Phone", price: 50000 },
    { name: "Tablet", price: 30000 },
    { name: "Smartwatch", price: 20000 },
    { name: "Headphones", price: 5000 }
];

let costmore=products.filter((item)=>{
    return(item.price<=30000);

});
console.log(costmore);

// let lower=products.forEach((convert)=>{
//     console.log(convert.name.toLowerCase());
// });

let lower=products.map((item)=>{
    return item.name.toLowerCase();


});
console.log(lower);

let expen=products.reduce((item,high)=>{
    return (item.price>=high.price?item:high);

});
console.log(expen);

let first=products.find((item)=>{
    return(item.price<=10000);


});
console.log("first product",first);

let disc=products.map((item)=>{
    return(item.price*10/100);

});
console.log(disc);






