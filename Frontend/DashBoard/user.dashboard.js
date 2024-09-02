document.getElementById('urgency').addEventListener('change', function() {
    const urgencyDateGroup = document.getElementById('urgencyDateGroup');
    if (this.value === 'before-date') {
        urgencyDateGroup.style.display = 'block';
    } else {
        urgencyDateGroup.style.display = 'none';
    }
});

// Dummy function to simulate order estimation
document.getElementById('estimateBtn').addEventListener('click', function(e) {
    e.preventDefault();
    // Perform estimation logic here...

    // Dummy values for display purposes
    document.getElementById('estimatedCost').innerText = '$50';
    document.getElementById('estimatedRoute').innerText = 'Source to Destination via Route X';
    document.getElementById('estimatedDeliveryTime').innerText = '3 Days';
    document.getElementById('orderFeasibility').innerText = 'Possible';

    // Show the estimate section and Place Order button
    document.getElementById('estimateSection').style.display = 'block';
    document.getElementById('placeOrderBtn').style.display = 'inline-block';
});

// Handle place order logic
document.getElementById('placeOrderBtn').addEventListener('click', function(e) {
    e.preventDefault();
    // Implement the logic to place the order...

    alert('Order placed successfully!');
});

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.className += " active";
}

// Default to open the first tab
document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName("tablinks")[0].click();
});