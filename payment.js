document.addEventListener('DOMContentLoaded', function () {
    const payButton = document.getElementById('payButton');
    
    if (payButton) {
        payButton.addEventListener('click', function () {
            const cardNumber = document.getElementById('cardNumber').value.trim();
            const expiryDate = document.getElementById('expiryDate').value.trim();
            const cvv = document.getElementById('cvv').value.trim();
            const cardHolder = document.getElementById('cardHolder').value.trim();

            let errors = [];

            // Validate Card Number
            if (!cardNumber || !/^\d{16}$/.test(cardNumber.replace(/-/g, ''))) {
                errors.push("Card Number: Please enter a valid 16-digit card number.");
            }

            // Validate Expiry Date
            if (!expiryDate || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
                errors.push("Expiry Date: Please use the MM/YY format and ensure the month is valid.");
            }

            // Validate CVV
            if (!cvv || !/^\d{3}$/.test(cvv)) {
                errors.push("CVV: Please enter a valid 3-digit CVV.");
            }

            // Validate Cardholder Name
            if (!cardHolder || !/^[a-zA-Z\s]+$/.test(cardHolder)) {
                errors.push("Cardholder Name: Please enter a valid name (only alphabets and spaces allowed).");
            }

            // If there are errors, show an alert and exit
            if (errors.length > 0) {
                alert(`Please correct the following errors:\n\n${errors.join("\n")}`);
                return;
            }

            // If validation passes, redirect to payment success page
            window.location.href = 'paymentsuccess.html'; // Change this to the actual URL of your success page
        });
    }
});
