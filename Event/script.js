document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('create-event-form');
    const eventsList = document.getElementById('events');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const eventName = document.getElementById('event-name').value;
        const eventDate = document.getElementById('event-date').value;
        const eventTime = document.getElementById('event-time').value;
        const eventLocation = document.getElementById('event-location').value;

        // Create a new list item
        const eventItem = document.createElement('li');
        eventItem.innerHTML = `
            <strong>${eventName}</strong><br>
            Date: ${eventDate}<br>
            Time: ${eventTime}<br>
            Location: ${eventLocation}<br>
            <a href="event-details.html?name=${encodeURIComponent(eventName)}&date=${encodeURIComponent(eventDate)}&time=${encodeURIComponent(eventTime)}&location=${encodeURIComponent(eventLocation)}">View Details</a>
        `;

        // Add to the list
        eventsList.appendChild(eventItem);

        // Clear the form
        form.reset();
    });
});
