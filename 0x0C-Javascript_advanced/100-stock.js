const stock = {
  macbook: 2,
  iphone: 4,
};

function processPayment(itemName) {
  stock[itemName] -= 1;
  console.log(`Payment is being processed for item ${itemName}`);
}

function processError(itemName) {
  console.log(`No more ${itemName}  in stock`);
  console.log("Payment is not being processed");
}

function processOrder(itemName, callbackPayment, callbackError) {
  let itemNameLower = itemName.toLowerCase();
  console.log(`Verifying the stock of ${itemNameLower}`);
  if (stock[itemNameLower] == undefined) {
    console.log(`Item ${itemName} is not offered`);
    return;
  }
  stock[itemNameLower] <= 0 ? callbackError(itemNameLower) : callbackPayment(itemNameLower);
}

let selection = prompt(
  "Please enter the item you would like to purchase (Macbook, iPhone)"
);
processOrder(selection, processPayment, processError);