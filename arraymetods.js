const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album',price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone',price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keybord',price: 25},

]
const itemsNumber = [1,2,3,4,5]

//filter:
// const itemFiler = items.filter((item)=> {
//     return item.price <= 100
// })
// console.log(itemFiler)
//map:
// const itemMap = items.map((item)=> {
//     return item.name
// })
// console.log(itemMap)
//find:
// const itemFind = items.find((item)=> {
//     return item.name ==='TV'
// })
// console.log(itemFind)
//forEach:
// const itemForEach = items.forEach((item)=> {
//     console.log(item.price)
// })
//some:
// const itemSome = items.some((item)=> {
//     return item.price <= 1000
// })
// console.log(itemSome)
//every:
// const itemEvery = items.every((item)=> {
//     return item.price <= 1000
// })
// console.log(itemEvery)
//reduce:
// const itemReduce = items.every((currentTotal,item)=> {
//     return item.price + currentTotal}, 0)
// console.log(itemReduce)
//includes:
// const itemIncludes = itemsNumber.includes(7)
// console.log(itemIncludes)