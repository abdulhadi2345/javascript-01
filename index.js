
  // Fixed prices
  var priceLaptop = 5000;
  var priceSmartphone = 3000;
  var priceHeadphones = 1000;

  // Get user input for quantities
  var qtyLaptop = parseInt(prompt("Enter quantity of Laptops: prices=5000"));
  var qtySmartphone = parseInt(prompt("Enter quantity of Smartphones: prices=3000"));
  var qtyHeadphones = parseInt(prompt("Enter quantity of Headphones: prices=1000"));

  // Calculate total
  var totalBill = (qtyLaptop * priceLaptop) + (qtySmartphone * priceSmartphone) + (qtyHeadphones * priceHeadphones);

  // Calculate discount
  var discount = 0;
  if (totalBill > 5000) {
    discount = totalBill * 0.20;
  } else if (totalBill > 3000) {
    discount = totalBill * 0.15;
  } else if (totalBill > 1000) {
    discount = totalBill * 0.10;
  }

  // Final amount
  var finalAmount = totalBill - discount;

  // Display results
  document.write(`<h2>Shopping Bill Summary</h2>`);
  document.write(`<h3>Total Bill: Rs ${totalBill}</h3>`);
  document.write(`<h3>Discount: Rs ${discount}</h3>`);
  document.write(`<h3>Amount to Pay: Rs ${finalAmount}</h3>`);

