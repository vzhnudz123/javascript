let products = [
    {pid: 100, pName: 'apple', band: '5g', price: 120000, display: 'led'},
    {pid: 101, pName: 'samsaung', band: '5g', price: 45000, display: 'led'},
    {pid: 102, pName: 'blackberry', band: '4g', price: 50000, display: 'led'},
    {pid: 103, pName: 'nokia', band: '3g', price: 1200, display: 'lcd'},
    {pid: 104, pName: 'motorola', band: '4g', price: 10000, display: 'lcd'}
];

// products.forEach((product)=>{
//     console.log(product.pName);
    
// });

// let found=products.filter((item)=>{
//     return(item.display=="lcd");
// });
// console.log(found);

// let found=products.filter((item)=>{
//     return(item.band==="5g");

// });
// console.log(found);

// let found=products.filter((item)=>{
//     return(item.price<=50000);
// });
// console.log(found);

let found=products.reduce((item,high)=>{
    return (item.price>=high.price?item:high);
})
console.log("higher :",found);

