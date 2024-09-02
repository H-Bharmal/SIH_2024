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
    estimateOrder();
});

function estimateOrder(){
    if( !isValidInput()){
        alert('Please Enter Valid Input');
        return false;
    }
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    // Dummy values for display purposes
    document.getElementById('estimatedCost').innerText = '₹50';
    document.getElementById('estimatedRoute').innerText = `${source} to ${destination} via Route X`;
    document.getElementById('estimatedDeliveryTime').innerText = '3 Days';
    document.getElementById('orderFeasibility').innerText = 'Possible';

    // Show the estimate section and Place Order button
    document.getElementById('estimateSection').style.display = 'block';
    document.getElementById('placeOrderBtn').style.display = 'inline-block';
    return true;
}

// Handle place order logic
document.getElementById('placeOrderBtn').addEventListener('click', function(e) {
    e.preventDefault();
    // Implement the logic to place the order...
    if( !estimateOrder() || (document.getElementById('orderFeasibility').innerText != 'Possible')){
        alert('Order cannot be placed!');
        return ;
    }
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

function isValidInput(){
     // Get values from input fields
     const agency = document.getElementById('agency').value;
     const itemWeight = document.getElementById('itemWeight').value;
     const source = document.getElementById('source').value;
     const destination = document.getElementById('destination').value;
     const typeOfItem = document.getElementById('typeOfItem').value;
     const urgency = document.getElementById('urgency').value;
     const deliveryDate = document.getElementById('deliveryDate').value;
 
     // Validate the inputs
     let isValid = true;
 
     if (!agency) {
         isValid = false;
     }
     if (!itemWeight) {
         isValid = false;
     }
     if (!source) {
         isValid = false;
     }
     if (!destination) {
         isValid = false;
     }
     if (!typeOfItem) {
         isValid = false;
     }
     if (urgency === 'before-date' && !deliveryDate) {
         isValid = false;
     }
 
     return isValid ;
}
// window.addEventListener('load', function() {
//     // New URL to be displayed
//     const newUrl = window.location.protocol + "//" + window.location.host + "/dashboard";
    
//     // Use history.pushState() to change the URL without reloading the page
//     window.history.pushState({ path: newUrl }, '', newUrl);
// });