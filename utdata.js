// Different Items ko ek hi Array me dal dia and Array name hai items
// Javscript ki help se HTML ko define karne ke liye humne ek ARRAY bana lia jiske under humne apne data as object store kardia. Ek object Curly braces ke ander define hoga and ek object ke ander bhi object define karenge to use method ya function bolenge us object ke liye
const items=[
    {   id:'001',
        item_image: `puma.jpg`,
        rating:{
            stars:4.5,
            noOfReviews:1400,
        },
        company_name:'Puma Shoes',
        item_name:'Puma Shoes for men',
        current_price:2999,
        original_price:3999,
        discount_percentage:25,
        return_period:14,
        delivery_date:'15 August 2024' ,
    },

    {   id:'002',
        item_image: `reebok.jpg`,
        rating:{
            stars:4.0,
            noOfReviews:1200,
        },
        company_name:'Reebok Shoes',
        item_name:'Reebok Shoes for men',
        current_price:1999,
        original_price:5299,
        discount_percentage:63,
        return_period:14,
        delivery_date:'15 August 2024' ,
    },

    {   id:'003',
        item_image: `nikeshoes.jpg`,
        rating:{
            stars:4.0,
            noOfReviews:1000,
        },
        company_name:'Nike Shoes',
        item_name:'Nike Shoes for men',
        current_price:2999,
        original_price:7999,
        discount_percentage:63,
        return_period:14,
        delivery_date:'15 August 2024' ,
    },

    {   id:'004',
        item_image:`varsity.jpg`,
        rating:{
            stars:4.3,
            noOfReviews:2000,
        },
        company_name:'H&M Varsity Jacket',
        item_name:'H&M Varsity Jacket for men',
        current_price:2099,
        original_price:6999,
        discount_percentage:38,
        return_period:14,
        delivery_date:'15 August 2024' ,
    },

    {   id:'005',
        item_image: `oversirt.webp`,
        rating:{
            stars:4.5,
            noOfReviews:1000,
        },
        company_name:' Brown Oveshirt',
        item_name:'Snitch ',
        current_price:1499,
        original_price:4999,
        discount_percentage:70,
        return_period:14,
        delivery_date:'15 August 2024' ,
    },

    {   id:'006',
        item_image: `tshirt.jpg`,
        rating:{
            stars:4.5,
            noOfReviews:800,
        },
        company_name:'U.S.Polo  T-shirt',
        item_name:'U.S.Polo Assn.T-shirts for men',
        current_price:699,
        original_price:1999,
        discount_percentage:70,
        return_period:14,
        delivery_date:'15 August 2024' ,
    },


    {   id:'007',
        item_image: `sweat3.jpg`,
        rating:{
            stars:4.4,
            noOfReviews:1500,
        },
        company_name:'Tagas Women Hoodie',
        item_name:'TAGAS CORPORATION',
        current_price:4999,
        original_price:9999,
        discount_percentage:50,
        return_period:14,
        delivery_date:'15 August 2024' ,
    },

    {   id:'008',
        item_image: `sweat4.jpg`,
        rating:{
            stars:4.6,
            noOfReviews:1000,
        },
        company_name:'Allen Solly Sweatshirt  ',
        item_name:'Allen Solly Printed Graphic Sweatshirt Long Sleeves ROUNND Neck for women',
        current_price:3999,
        original_price:4999,
        discount_percentage:20,
        return_period:14,
        delivery_date:'15 August 2024' ,
    },

    {   id:'009',
        item_image: `sweat5.webp`,
        rating:{
            stars:4.6,
            noOfReviews:1000,
        },
        company_name:'Brown Overshirt Hoodie ',
        item_name:'VIMAL JONNEY',
        current_price:3999,
        original_price:4999,
        discount_percentage:20,
        return_period:14,
        delivery_date:'15 August 2024' ,
    },

    {   id:'010',
        item_image: `sweat2.webp`,
        rating:{
            stars:4.6,
            noOfReviews:1000,
        },
        company_name:'Graphic Sweatshirt  ',
        item_name:'LEGASUS Printed Graphic Sweatshirt Long Sleeves ROUNND Neck for women',
        current_price:3999,
        original_price:4999,
        discount_percentage:20,
        return_period:14,
        delivery_date:'15 August 2024' ,
    },
    // {   id:'011',
    //     item_image: `kurta3.jpg`,
    //     rating:{
    //         stars:4.6,
    //         noOfReviews:1000,
    //     },
    //     company_name:'Graphic Sweatshirt  ',
    //     item_name:'LEGASUS Printed Graphic Sweatshirt Long Sleeves ROUNND Neck for women',
    //     current_price:3999,
    //     original_price:4999,
    //     discount_percentage:20,
    //     return_period:14,
    //     delivery_date:'15 August 2024' ,
    // },
    {   id:'012',
        item_image: `bomber.webp`,
        rating:{
            stars:4.6,
            noOfReviews:1000,
        },
        company_name:'BE SAVAGE Bomber Jacket ',
        item_name:'BE SAVAGE Mens Cotton Standard Length Bomber Jacket',
        current_price:3999,
        original_price:4999,
        discount_percentage:20,
        return_period:14,
        delivery_date:'15 August 2024' ,
    },
];
// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Save theme preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Check saved theme on page load
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

// Add event listener to the toggle button
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
