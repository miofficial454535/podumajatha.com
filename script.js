// Create a grid of seats dynamically
const seatingChart = document.querySelector('.seating-chart');
const bookBtn = document.getElementById('bookSeats');
const selectedSeats = [];

const totalSeats = 100; // Total number of seats
const bookedSeats = []; // This can be fetched from the back-end (mock data for now)

// Create mock booked seats for demonstration
for (let i = 0; i < 30; i++) {
    bookedSeats.push(i); // Randomly marking 30 seats as booked
}

// Function to initialize seating chart
function initializeSeatingChart() {
    for (let i = 0; i < totalSeats; i++) {
        const seat = document.createElement('div');
        seat.classList.add('seat');
        seat.dataset.seatId = i;

        // Mark booked seats as "booked"
        if (bookedSeats.includes(i)) {
            seat.classList.add('booked');
        }

        // Add click event to select seat
        seat.addEventListener('click', () => {
            if (!seat.classList.contains('booked') && !seat.classList.contains('selected')) {
                seat.classList.add('selected');
                selectedSeats.push(i);
            } else if (seat.classList.contains('selected')) {
                seat.classList.remove('selected');
                const index = selectedSeats.indexOf(i);
                if (index > -1) selectedSeats.splice(index, 1);
            }
        });

        seatingChart.appendChild(seat);
    }
}

// Handle booking of selected seats
bookBtn.addEventListener('click', () => {
    if (selectedSeats.length > 0) {
        alert(`You have booked seats: ${selectedSeats.join(', ')}`);
        // Send selected seats to back-end to confirm booking
        // For now, we just clear the selection
        selectedSeats.length = 0;
        document.querySelectorAll('.seat.selected').forEach(seat => seat.classList.remove('selected'));
    } else {
        alert('Please select at least one seat.');
    }
});

initializeSeatingChart();
