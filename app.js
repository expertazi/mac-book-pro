// variable declare
let bestPrice = document.getElementById("best-price");
let totalMemoryCost = document.getElementById("extra-memory-cost");
let totalStorageCost = document.getElementById("extra-ssd-cost");
let totalDeliveryCost = document.getElementById("delivery-cost");
let totalPrice = document.getElementById("total-price");
let totalPriceButtom = document.getElementById("total-all-price-buttom");
let promoInput = document.getElementById("input-coupon");

// this is for Cost Update
function costTotal(takeCost, price) {
  if (takeCost == "memory") {
    totalMemoryCost.innerText = price;
  } else if (takeCost == "ssd") {
    totalStorageCost.innerText = price;
  } else if ((takeCost = "delivery")) {
    totalDeliveryCost.innerText = price;
  }
  // all Calculation
  let allTotalPrice =
    parseInt(bestPrice.innerText) +
    parseInt(totalMemoryCost.innerText) +
    parseInt(totalStorageCost.innerText) +
    parseInt(totalDeliveryCost.innerText);
  totalPrice.innerText = allTotalPrice;
  totalPriceButtom.innerText = allTotalPrice;
}

//  Coupon Function
function promoCupon() {
  let total = parseInt(totalPrice.innerText);
  promoCode = promoInput.value;
  if (promoCode == "stevekaku") {
    totalPriceButtom.innerText = (totalPrice.innerText / 100) * 80;
  } else {
    alert("Invalid Promo Code");
  }
  promoInput.value = "";
}

// this is for Memory
document
  .getElementById("memory-card-8gb")
  .addEventListener("click", function () {
    costTotal("memory", 0);
  });

document
  .getElementById("memory-card-16gb")
  .addEventListener("click", function () {
    costTotal("memory", 180);
  });
// this is for ssd
document.getElementById("ssd-256gb").addEventListener("click", function () {
  costTotal("ssd", 0);
});
document.getElementById("ssd-512gb").addEventListener("click", function () {
  costTotal("ssd", 100);
});
document.getElementById("ssd-1tb").addEventListener("click", function () {
  costTotal("ssd", 180);
});
// this is for delivery
document.getElementById("late-delivery").addEventListener("click", function () {
  costTotal("delivery", 0);
});
document.getElementById("fast-delivery").addEventListener("click", function () {
  costTotal("delivery", 20);
});

// this is for coupon
document.getElementById("coupon").addEventListener("click", function () {
  promoCupon();
});
