function updateStoreStatus() {
    const statusElement = document.getElementById('store-status');
    const now = new Date();
    
    // Get current day (0 = Sunday, 1 = Monday, ..., 4 = Thursday, etc.)
    const day = now.getDay();
    
    // Get current time converted to minutes since midnight (e.g., 12:00 PM = 720 minutes)
    const currentTimeInMinutes = (now.getHours() * 60) + now.getMinutes();

    let isOpen = false;
    let closingTime = "";

    // Thursday: 12:00 PM (720 mins) to 5:00 PM (1020 mins)
    if (day === 4) {
        if (currentTimeInMinutes >= 720 && currentTimeInMinutes < 1020) {
            isOpen = true;
            closingTime = "5:00 PM";
        }
    }
    // Friday & Saturday: 12:00 PM (720 mins) to 8:00 PM (1200 mins)
    else if (day === 5 || day === 6) {
        if (currentTimeInMinutes >= 720 && currentTimeInMinutes < 1200) {
            isOpen = true;
            closingTime = "8:00 PM";
        }
    }

    // Update the HTML interface based on status
    if (isOpen) {
        statusElement.innerText = `🟢 Open Now (Closes at ${closingTime})`;
        statusElement.className = "status-badge status-open";
    } else {
        statusElement.innerText = "🔴 Closed right now";
        statusElement.className = "status-badge status-closed";
    }
}

// Run the function immediately when the script loads
updateStoreStatus();
