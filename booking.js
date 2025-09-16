// booking.js

// Define booking fields for each service
const defineServiceFields = () => ({
  truck: {
    title: 'Truck Booking',
    desc: 'Book a truck for your transport needs. Fill in the details below.',
    fields: [
      { label: 'Pick Up Location', name: 'pickup', type: 'text', placeholder: 'Location', required: true },
      { label: 'Drop Location', name: 'drop', type: 'text', placeholder: 'Location', required: true },
      { label: 'Date', name: 'date', type: 'date', placeholder: '', required: true },
      { label: 'Time', name: 'time', type: 'time', placeholder: '', required: true },
    ]
  },
  pickup: {
    title: 'Pickup Truck Booking',
    desc: 'Book a pickup truck for your transport needs. Fill in the details below.',
    fields: [
      { label: 'Pick Up Location', name: 'pickup', type: 'text', placeholder: 'Location', required: true },
      { label: 'Drop Location', name: 'drop', type: 'text', placeholder: 'Location', required: true },
      { label: 'Date', name: 'date', type: 'date', placeholder: '', required: true },
      { label: 'Time', name: 'time', type: 'time', placeholder: '', required: true },
    ]
  },
  rental: {
    title: 'Car Rental Booking',
    desc: 'Book a car for your travel needs. Fill in the details below.',
    fields: [
      { label: 'Pickup Location', name: 'pickup', type: 'text', placeholder: 'Location', required: true },
      { label: 'Return Location', name: 'return', type: 'text', placeholder: 'Location', required: true },
      { label: 'Car Type', name: 'carType', type: 'select', options: ['Sedan', 'SUV', 'Hatchback', 'Luxury'], required: true },
      { label: 'Start Date', name: 'startDate', type: 'date', placeholder: '', required: true },
      { label: 'End Date', name: 'endDate', type: 'date', placeholder: '', required: true },
    ]
  },
  threewheeler: {
    title: '3-Wheeler Booking',
    desc: 'Book a 3-wheeler for your transport needs. Fill in the details below.',
    fields: [
      { label: 'Pick Up Location', name: 'pickup', type: 'text', placeholder: 'Location', required: true },
      { label: 'Drop Location', name: 'drop', type: 'text', placeholder: 'Location', required: true },
      { label: 'Date', name: 'date', type: 'date', placeholder: '', required: true },
      { label: 'Time', name: 'time', type: 'time', placeholder: '', required: true },
    ]
  },
  plumber: {
    title: 'Plumber Booking',
    desc: 'Book a plumber for repairs or installations. Fill in the details below.',
    fields: [
      { label: 'Service Location', name: 'location', type: 'text', placeholder: 'Location', required: true },
      { label: 'Problem Description', name: 'problem', type: 'textarea', placeholder: 'Describe the issue', required: true },
      { label: 'Date', name: 'date', type: 'date', placeholder: '', required: true },
      { label: 'Time', name: 'time', type: 'time', placeholder: '', required: true },
    ]
  },
  electrician: {
    title: 'Electrician Booking',
    desc: 'Book an electrician for repairs or installations. Fill in the details below.',
    fields: [
      { label: 'Service Location', name: 'location', type: 'text', placeholder: 'Location', required: true },
      { label: 'Appliance Type', name: 'appliance', type: 'text', placeholder: 'e.g. Fan, AC, Light', required: false },
      { label: 'Problem Description', name: 'problem', type: 'textarea', placeholder: 'Describe the issue', required: true },
      { label: 'Date', name: 'date', type: 'date', placeholder: '', required: true },
      { label: 'Time', name: 'time', type: 'time', placeholder: '', required: true },
    ]
  },
  carpenter: {
    title: 'Carpenter Booking',
    desc: 'Book a carpenter for repairs or installations. Fill in the details below.',
    fields: [
      { label: 'Service Location', name: 'location', type: 'text', placeholder: 'Location', required: true },
      { label: 'Work Type', name: 'workType', type: 'select', options: ['Furniture Repair', 'New Installation', 'Custom Work', 'Maintenance'], required: true },
      { label: 'Work Description', name: 'description', type: 'textarea', placeholder: 'Describe the work needed', required: true },
      { label: 'Date', name: 'date', type: 'date', placeholder: '', required: true },
      { label: 'Time', name: 'time', type: 'time', placeholder: '', required: true },
    ]
  },
  helper: {
    title: 'Helper Booking',
    desc: 'Book a helper for your work needs. Fill in the details below.',
    fields: [
      { label: 'Work Location', name: 'location', type: 'text', placeholder: 'Location', required: true },
      { label: 'Work Type', name: 'workType', type: 'select', options: ['House Cleaning', 'Moving', 'Event Setup', 'General Help'], required: true },
      { label: 'Duration (hours)', name: 'duration', type: 'number', placeholder: 'e.g. 4', required: true },
      { label: 'Date', name: 'date', type: 'date', placeholder: '', required: true },
      { label: 'Time', name: 'time', type: 'time', placeholder: '', required: true },
    ]
  },
  makeup: {
    title: 'Makeup Artist Booking',
    desc: 'Book a makeup artist for your special occasions. Fill in the details below.',
    fields: [
      { label: 'Event Location', name: 'location', type: 'text', placeholder: 'Location', required: true },
      { label: 'Event Type', name: 'eventType', type: 'select', options: ['Wedding', 'Party', 'Photoshoot', 'Other'], required: true },
      { label: 'Number of People', name: 'people', type: 'number', placeholder: 'e.g. 2', required: true },
      { label: 'Date', name: 'date', type: 'date', placeholder: '', required: true },
      { label: 'Time', name: 'time', type: 'time', placeholder: '', required: true },
    ]
  },
  eventplanner: {
    title: 'Event Planner Booking',
    desc: 'Book an event planner for your special events. Fill in the details below.',
    fields: [
      { label: 'Event Location', name: 'location', type: 'text', placeholder: 'Location', required: true },
      { label: 'Event Type', name: 'eventType', type: 'select', options: ['Wedding', 'Birthday', 'Corporate', 'Other'], required: true },
      { label: 'Expected Guests', name: 'guests', type: 'number', placeholder: 'e.g. 50', required: true },
      { label: 'Event Date', name: 'date', type: 'date', placeholder: '', required: true },
      { label: 'Contact Number', name: 'phone', type: 'tel', placeholder: 'Your phone number', required: true },
    ]
  },
  driver: {
    title: 'Driver Booking',
    desc: 'Book a driver for your travel needs. Fill in the details below.',
    fields: [
      { label: 'Pickup Location', name: 'pickup', type: 'text', placeholder: 'Location', required: true },
      { label: 'Destination', name: 'destination', type: 'text', placeholder: 'Location', required: true },
      { label: 'Car Type (optional)', name: 'carType', type: 'text', placeholder: 'e.g. Sedan, SUV', required: false },
      { label: 'Date', name: 'date', type: 'date', placeholder: '', required: true },
      { label: 'Time', name: 'time', type: 'time', placeholder: '', required: true },
    ]
  }
});

// Get service from URL (?service=truck)
function getServiceFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('service') || 'truck';
}

// Render form fields dynamically
function renderForm(serviceKey) {
  const services = defineServiceFields();
  const service = services[serviceKey] || services['truck'];
  document.getElementById('serviceTitle').textContent = service.title;
  document.getElementById('serviceDesc').textContent = service.desc;
  const fieldsDiv = document.getElementById('dynamicFields');
  fieldsDiv.innerHTML = '';
  
  // Add map section for location-based services
  if (serviceKey !== 'driver') { // Driver has its own map
    fieldsDiv.innerHTML = `
      <div class="map-section">
        <label class="booking-label">Location Map</label>
        <div id="booking-map" style="height: 200px; background: #f0f0f0; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
          <div style="text-align: center; color: #666;">
            <i class="fa-solid fa-map-location-dot" style="font-size: 2rem; margin-bottom: 8px;"></i>
            <div>Interactive map will appear here</div>
            <div style="font-size: 0.8rem;">(Google Maps integration)</div>
          </div>
        </div>
      </div>
    `;
  }
  
  service.fields.forEach(field => {
    const label = document.createElement('label');
    label.className = 'booking-label';
    label.textContent = field.label + (field.required ? ' *' : '');
    label.htmlFor = field.name;
    fieldsDiv.appendChild(label);
    
    let input;
    if (field.type === 'textarea') {
      input = document.createElement('textarea');
      input.className = 'booking-textarea';
      input.rows = 3;
    } else if (field.type === 'select') {
      input = document.createElement('select');
      input.className = 'booking-input';
      const defaultOption = document.createElement('option');
      defaultOption.value = '';
      defaultOption.textContent = 'Select an option';
      input.appendChild(defaultOption);
      field.options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        input.appendChild(optionElement);
      });
    } else {
      input = document.createElement('input');
      input.type = field.type;
      input.className = 'booking-input';
    }
    
    input.id = field.name;
    input.name = field.name;
    input.placeholder = field.placeholder;
    if (field.required) input.required = true;
    fieldsDiv.appendChild(input);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const service = getServiceFromURL();
  renderForm(service);

  document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = new FormData(e.target);
    const bookingData = {
      id: Date.now(),
      service: service,
      serviceName: defineServiceFields()[service]?.title || 'Service Booking',
      date: new Date().toISOString(),
      status: 'pending',
      formData: Object.fromEntries(formData)
    };
    
    // Store in localStorage for demo
    let bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push(bookingData);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    
    // Show success message and redirect
    alert('Booking submitted successfully! You will be redirected to history page.');
    setTimeout(() => {
      window.location.href = 'history.html';
    }, 1000);
  });
}); 