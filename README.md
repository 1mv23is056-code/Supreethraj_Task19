# Task 19: Service Booking App

A simple client-side demo for selecting services, adding them to a cart, and submitting a booking.

## Overview
- Browse available services and add items to your cart.
- Skip unwanted services using the "Skip Item" button.
- View a running total in the checkout area and submit a booking using the form.

## Files
- [task19/index.html](task19/index.html) — main HTML page and layout.
- [task19/style.css](task19/style.css) — styles for layout, cards, and cart.
- [task19/script.js](task19/script.js) — application logic: rendering services, cart management, booking handling.

## Behavior
- Services are rendered from an in-memory `availableServices` array.
- Clicking `Add Item` pushes the service into the cart and updates the total.
- `Skip Item` hides the service card from the list.
- Submitting the booking form requires at least one cart item; it then shows a success alert with the client name and booking summary, clears the cart, and resets the form.

## How to run
1. Open [task19/index.html](task19/index.html) in a web browser.
2. Use the UI to add services and submit a booking. Open the browser console for debugging messages.

## Example flow
- Add two services (e.g., Home Deep Cleaning and AC Repair).
- The `Total Amount` updates accordingly.
- Fill in your name and email, then click `Confirm Booking` to complete the demo.

## Notes / Limitations
- This is a front-end-only demo with no backend persistence.
- Images are loaded from external URLs; offline use may not show thumbnails.
- Prices and data are static and defined in `script.js`.

## Possible improvements
- Persist cart to `localStorage` so selection survives page reloads.
- Add quantity controls and remove-from-cart functionality.
- Integrate with a backend API to store bookings and validate availability.
