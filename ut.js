// function displayitemsonpage1() {
//     let itemsContainerElement = document.querySelector('.items_container');
//     let innerHtml = '';
//     let displayItemsOnHomePage = function(item) {
//         innerHtml += `
//         <div class="item_container">
//             <img class="item_image" src="${item.item_image}" alt="image1">
//             <div class="rating">${item.rating.stars}⭐ | ${item.rating.noOfReviews}</div>
//             <div class="company_name">${item.company_name}</div>
//             <div class="item_name ">${item.item_name}</div>
//             <div class="price">
//                 <span class="current_price">Rs ${item.current_price}</span>
//                 <span class="original_price">Rs ${item.original_price}</span>
//                 <span class="discount">(${item.discount_percentage}% OFF)</span>
//             </div>
//             <button class="button_add_tobag" onclick="addToBag(${item.id})">Add to Bag</button>
//         </div>`;
//     };
//     items.forEach(displayItemsOnHomePage);
//     itemsContainerElement.innerHTML = innerHtml;
// }

// let bagProducts = [];

// function addToBag(itemid) {
//     bagProducts.push(itemid);
//     localStorage.setItem('bagItems', JSON.stringify(bagProducts));
//     displayBagIcon();
// }

// function displayBagIcon() {
//     let bagItemCount = document.querySelector('.bag-item-count');
//     if (bagProducts.length > 0) {
//         bagItemCount.style.visibility = 'visible';
//         bagItemCount.innerText = bagProducts.length;
//     } else {
//         bagItemCount.style.visibility = 'hidden';
//     }
// }

// function refresh() {
//     let bagProductsString = localStorage.getItem('bagItems');
//     bagProducts = bagProductsString ? JSON.parse(bagProductsString) : [];
//     displayitemsonpage1();
//     displayBagIcon(); // Ensure the bag icon is updated on refresh
// }

// refresh();






























function displayitemsonpage1(){
    let itemsContainerElement=document.querySelector('.items_container');
    // Bag wale page par itemsContainerElement to kabhi milega hi nahi to uski value false aa jaege to not laga dia to vo true bana dega value ko and return kardega 
    // if(!itemsContainerElement){
    //     return ;
    // }
    let innerHtml='';
    let displayItemsOnHomePage=function(item){
        innerHtml=innerHtml+`<div class="item_container">
        
        <img class="item_image" src="${item.item_image}" alt="image1">
        
        <div class="rating"> </div>
         ${item.rating.stars}⭐ | ${item.rating.noOfReviews}
        
        <div class="company_name">${item.company_name}</div>
        <div class="item_name "> ${item.item_name}</div>
        
         <div class="price ">
         <span class="current_price"> Rs ${item.current_price}</span>
         <span class="original_price"> Rs ${item.original_price}</span>
         <span class="discount">(${item.discount_percentage}%OFF)</span>   
         </div>
        
         <button class="button_add_tobag"
         onclick="addToBag(${item.id})"
         >Add to Bag</button>
        
         </div>`;
         itemsContainerElement.innerHTML=innerHtml;
         
    };
    items.forEach(displayItemsOnHomePage);
    // displayItemsonhomepage ek variable ka Name hai
}





// document.getElementById('search').addEventListener('input', function() {
//     let query = this.value;
//     if (query.length > 2) {
//       // Make AJAX call to fetch search suggestions based on the query
//       // Populate the searchSuggestions div with the results
//     }
//   });
//   document.getElementById('search').addEventListener('input', function() {
//     let query = this.value;
//     const suggestionsBox = document.getElementById('searchSuggestions');
//     suggestionsBox.innerHTML = '';
    
//     if (query.length > 2) {
//         const suggestions = ["Shirts", "Trousers", "Shoes", "Jeans"].filter(item => item.toLowerCase().includes(query.toLowerCase()));
        
//         suggestions.forEach(suggestion => {
//             let a = document.createElement('a');
//             a.href = "#";
//             a.textContent = suggestion;
//             suggestionsBox.appendChild(a);
//         });

//         suggestionsBox.style.display = 'block';
//     } else {
//         suggestionsBox.style.display = 'none';
//     }
// });











// bag products name ka ek array banaya hai jiske ander add to bag karne ke baad values store hogi 
let bagProducts=[];
function addToBag(itemid){
    bagProducts.push(itemid);
    localStorage.setItem('bagItems',JSON.stringify(bagProducts));
    displayBagIcon();
}   
// displayBagIcon only add to bag karte time hi call ho rah hai only 
function displayBagIcon(){
    let bagItemCount=document.querySelector('.bag-item-count');
    if(bagProducts.length>0){
    bagItemCount.style.visibilty='visible';
    bagItemCount.innerText=bagProducts.length;
}
else{
    bagItemCount.style.visibilty='hidden';
}
}


function refresh(){
    let bagProductsString=localStorage.getItem('bagItems');
    bagProducts=bagProductsString?JSON.parse(bagProductsString):[];
    displayBagIcon();
    displayitemsonpage1();
    const images=document.querySelectorAll('.bannerimage');
const prevButton=document.querySelector('.prev');
const nextButton=document.querySelector('.next');
let currentIndex=0;

function updateSlider(){
    
    images.forEach((photo,index) => {
        photo.classList.remove('active');
        
    });
// ye niche wali line se current index pr active class set ho jaege 
    images[currentIndex].classList.add('active');
}
updateSlider();

// button Functionality :
nextButton.addEventListener('click',()=>{
    currentIndex=(currentIndex+1)%images.length;
    // a%b = remainder dega, agar b>a se to a hi remainder aa jaega 
    updateSlider();
}
);

prevButton.addEventListener('click',()=>{
    currentIndex=(currentIndex-1+images.length)%images.length;
    updateSlider();
}
);
const intervalTime = 4000; // Change to desired interval time in milliseconds
const autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}, intervalTime);

}



refresh();
// myntra.js (loaded on index.html)
// document.addEventListener("DOMContentLoaded", function () {
//     const userName = localStorage.getItem("userName");

//     if (userName) {
//         const profileNameElement = document.querySelector(".actioname"); // Select the profile name element
//         profileNameElement.textContent = userName; // Update it with the saved name
//     }
// });

// myntra.js
window.logOut = function () {
    console.log("Logging out...");
    localStorage.removeItem("userName");
    console.log("User name removed:", localStorage.getItem("userName"));
    alert("You have logged out.");
    window.location.href = "index.html";
};

// ut.js (loaded in index.html)

document.addEventListener("DOMContentLoaded", function () {
    const profileNameElement = document.querySelector(".actioname"); // Select the profile name element
    const userName = localStorage.getItem("userName");

    if (userName) {
        // Display the stored user's name
        profileNameElement.textContent = userName;
    } else {
        // Display "Add Profile" if no userName exists
        profileNameElement.textContent = "Add Profile";
    }
});


















  


















































