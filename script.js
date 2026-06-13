
const availableServices = [
    { id: 101, name: "Home Deep Cleaning", price: 120, image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=150" },
    { id: 102, name: "AC Repair & Maintenance", price: 75, image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=150" },
    { id: 103, name: "Plumbing Plumbing Check", price: 50, image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=150" },
    { id: 104, name: "Electrical Diagnostic", price: 65, image: "https://images.unsplash.com/photo-1621905252507-b354bc25edac?w=150" }
];


let cartItems = [];
let totalAmount = 0;


const servicesGrid = document.getElementById("servicesGrid");
const cartContainer = document.getElementById("cartContainer");
const totalPriceDisplay = document.getElementById("totalPrice");


function renderServices() {
    servicesGrid.innerHTML = ""; 

    availableServices.forEach(service => {
        const card = document.createElement("div");
        card.className = "service-card";
        card.id = `service-item-${service.id}`;

        card.innerHTML = `
            <img class="service-img" src="${service.image}" alt="${service.name}">
            <div class="service-details">
                <h3>${service.name}</h3>
                <p>Price: $${service.price}</p>
            </div>
            <div class="service-actions">
                <button class="skip-btn" onclick="skipItem(${service.id})">Skip Item</button>
                <button class="add-btn" onclick="addItemToCart(${service.id})">Add Item</button>
            </div>
        `;
        servicesGrid.appendChild(card);
    });
}


function addItemToCart(serviceId) {
    
    const itemToAdd = availableServices.find(s => s.id === serviceId);
    
    if (itemToAdd) {
        cartItems.push(itemToAdd);
        updateCartUI();
    }
}


function skipItem(serviceId) {
    const targetElement = document.getElementById(`service-item-${serviceId}`);
    if (targetElement) {
        
        targetElement.style.display = "none";
    }
}


function updateCartUI() {
    
    cartContainer.innerHTML = "";
    totalAmount = 0;

    if (cartItems.length === 0) {
        cartContainer.innerHTML = `<p class="empty-message">No items have been added yet.</p>`;
        totalPriceDisplay.textContent = "0";
        return;
    }

    
    cartItems.forEach((item, index) => {
        totalAmount += item.price;

        const row = document.createElement("div");
        row.className = "cart-item";
        row.innerHTML = `
            <span>${item.name}</span>
            <strong>$${item.price}</strong>
        `;
        cartContainer.appendChild(row);
    });

    
    totalPriceDisplay.textContent = totalAmount;
}


function handleBooking(event) {
    event.preventDefault(); 

    if (cartItems.length === 0) {
        alert("Your cart is empty! Please add a service first.");
        return;
    }

    const clientName = document.getElementById("customerName").value;
    
    
    alert(`Success! Thank you ${clientName}.\nYour booking for ${cartItems.length} items totaling $${totalAmount} has been processed.`);
    
    
    cartItems = [];
    document.getElementById("bookingForm").reset();
    updateCartUI();
    renderServices();
}


renderServices();