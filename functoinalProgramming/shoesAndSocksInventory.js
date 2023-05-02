// function shoesAndSocksInventory(products) {
//     return products.reduce((inventory, {type, numberInInventory}) => {
//         if (type === "shoes" || type === "socks") {
//             inventory += numberInInventory
//         }
//
//         return inventory;
//     }, 0)
// }

function shoesAndSocksInventory(products) {
    // by me
    // return products.reduce((inventory, {
    //     type,
    //     numberInInventory
    // }) => (inventory += (isShoesOrSocks(type) ? numberInInventory : 0)), 0)

    // by the book
    const shoesAndSocks = products.filter(({type}) => isShoesOrSocks(type));
    const inventories = shoesAndSocks.map(({numberInInventory}) => numberInInventory);

    return inventories.reduce(plus);
}

function isShoesOrSocks(type) {
    return type === "shoes" || type === "socks";
}