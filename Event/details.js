document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);

    const eventName = urlParams.get('name');
    const eventDate = urlParams.get('date');
    const eventTime = urlParams.get('time');
    const eventLocation = urlParams.get('location');

    const eventInfo = document.getElementById('event-info');

    if (eventName && eventDate && eventTime && eventLocation) {
        eventInfo.innerHTML = `
            <h3>${eventName}</h3>
            <p><strong>Date:</strong> ${eventDate}</p>
            <p><strong>Time:</strong> ${eventTime}</p>
            <p><strong>Location:</strong> ${eventLocation}</p>
        `;
    } else {
        eventInfo.innerHTML = '<p>No event details available.</p>';
    }
});
