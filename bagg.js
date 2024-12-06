const CONVENIENCE_FEES = 99;

let bagItemObjects;
onLoad();

function onLoad() {
    loadBagItemObjects();
    displayBagItems();
    displayBagSummary();
}

function displayBagSummary() {
    let bagSummaryElement = document.querySelector('.bag-summary');
    let totalItem = 0;
    let totalMRP = 0;
    let totalDiscount = 0;

    bagItemObjects.forEach(bagItem => {
        const quantity = bagItem.quantity || 1; // Default to 1 if not set
        totalItem += quantity;
        totalMRP += bagItem.original_price * quantity;
        totalDiscount += (bagItem.original_price - bagItem.current_price) * quantity;
    });

    let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

    bagSummaryElement.innerHTML = `
     <div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">\u20B9${totalMRP}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">\u20B9${totalDiscount}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">\u20B9${CONVENIENCE_FEES}</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">\u20B9${finalPayment}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>
          
        </div>
      </div>`;

    // Add the click event listener for "Place Order"
    const placeOrderButton = document.querySelector('.btn-place-order');
    placeOrderButton.addEventListener('click', () => {
        if (totalItem > 0) {
            // Redirect to payment page if there are items in the cart
            window.location.href = 'payment.html';
        } else {
            // Show alert if no items are in the cart
            alert('Please add some items to your cart before placing an order!');
        }
    });
}

// Function to load items in the bag by their ID
function loadBagItemObjects() {
    console.log(bagProducts);
    bagItemObjects = bagProducts.map(itemId => {
        for (let i = 0; i < items.length; i++) {
            if (itemId == items[i].id) {
                return items[i];
            }
        }
    });
    console.log(bagItemObjects);
}

// Function to display all the items in the bag
function displayBagItems() {
    let containerElement = document.querySelector('.bag-items-container');
    let innerbox = '';

    bagItemObjects.forEach(bagProducts => {
        innerbox += generateSingleItemHtml(bagProducts);
    });
    containerElement.innerHTML = innerbox;
}

// Function to remove an item from the bag
function removeFromBag(itemId) {
    bagProducts = bagProducts.filter(bagItemId => bagItemId != itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagProducts));
    loadBagItemObjects();
    displayBagIcon();
    displayBagItems();
    displayBagSummary();
}

// Function to generate HTML for each item in the bag
function generateSingleItemHtml(item) {
    return `<div class="bag-item-container">
        <div class="item-left-part">
            <img class="bag-item-img" src="${item.item_image}" alt="${item.item_name}">
        </div> 
        <div class="item-right-part">
            <div class="company">${item.company_name}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="rating">
                <span class="stars">Rating: ${item.rating.stars} stars</span>
                <span class="noOfReviews">(${item.rating.noOfReviews} reviews)</span>
            </div>
            <div class="price-container">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="original-price">Rs ${item.original_price}</span>
                <span class="discount-percentage"> (${item.discount_percentage}% OFF)</span>
            </div>
            <div class="return-period">
                <span class="return-period-days">${item.return_period} days</span> return available
            </div>
            <div class="delivery-details">
                Delivery by <span class="delivery-details-days">${item.delivery_date}</span>
            </div>
         <div class="quantity-controls flex items-center space-x-2">
    <img class="decrement-quantity w-6 h-6 cursor-pointer" src="icon2.png" alt="-" onclick="updateQuantity('${item.id}', -1)">
    <span class="quantity-value text-center text-lg font-semibold">${item.quantity || 1}</span>
    <img class="increment-quantity w-6 h-6 cursor-pointer" src="icon1.png" alt="+" onclick="updateQuantity('${item.id}', 1)">
</div>

        </div> 
        <div class="remove-from-cart" onclick="removeFromBag('${item.id}')">X</div>
    </div>`;
}
function updateQuantity(itemId, change) {
    const item = bagItemObjects.find(bagItem => bagItem.id === itemId);
    if (item) {
        // Update quantity
        item.quantity = (item.quantity || 1) + change;

        // Ensure quantity does not drop below 1
        if (item.quantity < 1) {
            item.quantity = 1;
        }

        // Re-render the bag items and summary
        displayBagItems();
        displayBagSummary();
    }
}
