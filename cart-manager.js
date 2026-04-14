function createCart() {
    let listItem = [];
    let itemCounter = 0;

    function addItem(name, price, quantity) {
        if (price < 0 || quantity < 0) {
            throw new Error("The price and the quatity cannot be negative");
        } else {
            itemCounter ++;
            const newItem = {
                id: itemCounter,
                name: name,
                price: price,
                quantity: quantity,
            };
            listItem.push(newItem);
        }
    }

    function removeItem(id) {
        let found = false;
        for (let i = 0; i < listItem.length; i++) {
             if(id == listItem[i].id) {
                found = true;
                listItem.splice((i), 1);
            }   
        }
        if (found == false) {
            throw new Error("Item not found!");
        }
        // Or we can do:
        // listItem = listItem.filter(item => item.id !== id);
    }

    function getTotal() {
        let total = 0;
        for (let i = 0; i < listItem.length; i++) {
            total += listItem[i].price * listItem[i].quantity;
        }
        return total;
        // Or we can do:
        // return listItem.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }

    function getSummary() {
        listItem.forEach((item) => {
            console.log(`Id: ${item.id}, Name: ${item.name}, Price: ${item.price}, Quantity: ${item.quantity}, Line Total: ${item.price * item.quantity}`);
        });
        console.log(`Total: ${getTotal()}`);
        
    }

    return {addItem, removeItem, getTotal, getSummary};

}

Cosmetic = createCart();
Cosmetic.addItem("Crème", 4000, 4);
Cosmetic.addItem("Savon Mayanna", 1500, 15);
Cosmetic.addItem("Déodorant Dove", 2000, 20);
Cosmetic.addItem("Nova 432", 4500, 15);

console.log(Cosmetic.getTotal());
Cosmetic.getSummary();
Cosmetic.removeItem(3);
Cosmetic.getSummary();
