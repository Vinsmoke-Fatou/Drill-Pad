function createCart() {
    let listItems = [];
    let nextId = 1;

    function addItem(item) {
      const newItem = { id: nextId++, ...item };
      listItems.push(newItem);
    }
  
    function removeItem(id) {
      listItems = listItems.filter(item => item.id !== id);
    }

    function getTotal() {
      return listItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }

    function getSummary() {
      listItems.forEach(item => {
        console.log(`Name: ${item.name} | Quantity: ${item.quantity} | Total: ${item.quantity * item.price}`);
      });

      console.log(`Cart's grand total: ${getTotal()}`);
      
    }

    return { addItem, removeItem, getTotal, getSummary }
}


