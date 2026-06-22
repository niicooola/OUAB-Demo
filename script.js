function updateStoreStatus() {
    const statusElement = document.getElementById('store-status');
    const now = new Date();
    
    const day = now.getDay();
    const currentTimeInMinutes = (now.getHours() * 60) + now.getMinutes();

    let isOpen = false;
    let closingTime = "";

    if (day === 4) {
        if (currentTimeInMinutes >= 720 && currentTimeInMinutes < 1020) {
            isOpen = true;
            closingTime = "5:00 PM";
        }
    }
    else if (day === 5 || day === 6) {
        if (currentTimeInMinutes >= 720 && currentTimeInMinutes < 1200) {
            isOpen = true;
            closingTime = "8:00 PM";
        }
    }

    if (isOpen) {
        statusElement.innerText = `🟢 Open Now (Closes at ${closingTime})`;
        statusElement.className = "status-badge status-open";
    } else {
        statusElement.innerText = "🔴 Closed right now";
        statusElement.className = "status-badge status-closed";
    }
}

updateStoreStatus();
