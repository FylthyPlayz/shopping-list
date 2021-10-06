const shoppingList = [
    {
        id: 1,
        name: "milk",
        price: 2.99,
        delicious: false
    },
    {
        id: 2,
        name: "apples",
        price: .99,
        delicious: true
    },
    {
        id: 3,
        name: "bread",
        price: 1.26,
        delicious: true
    },
    {
        id: 4,
        name: "oatmeal",
        price: 8.99,
        delicious: true
    },
    {
        id: 5,
        name: "chicken nuggies",
        price: 11.99,
        delicious: true
    }
]

const addToShoppingList = (listObject) => {
    const lastIndex = shoppingList.length - 1
    const currentLastItem = shoppingList[lastIndex]
    const maxID = currentLastItem.id
    const idForNewItem = maxID + 1
    listObject.id = idForNewItem
    //const dateCreated = date.now()
    shoppingList.push(listObject)
}

const jello = {
    name: "jello",
    price: 2.99,
    delicious: false
}
const soup = {
    name: "chicken noodle soup",
    price: 1.59,
    delicious: true
}
const bananas = {
    name: "bananas",
    price: 2.12,
    delicious: true
}
const pepperonis = {
    name: "Peps",
    price: 3.75,
    delicious: true
}
const creamer = {
    name: "coffee creamer",
    price: 14.29,
    delicious: true
}

addToShoppingList(jello)
addToShoppingList(soup)
addToShoppingList(bananas)
addToShoppingList(pepperonis)
addToShoppingList(creamer)

//console.log(shoppingList)
//const highPriceItems = (shoppingList.price > 7.99);

for (const listPrice of shoppingList) {
    //console.log(listPrice.price)
    if (listPrice.price > 7.99) {
        console.log(listPrice)
    }
}
