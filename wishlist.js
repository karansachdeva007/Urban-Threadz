document.addEventListener("DOMContentLoaded", () => {
    const removeButtons = document.querySelectorAll(".remove-btn");

    // Add click event to all remove buttons
    removeButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const item = event.target.closest(".wishlist-item");
            item.remove();
            alert("Item removed from your wishlist");
        });
    });
});

