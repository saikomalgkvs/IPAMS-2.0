document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("appointment-form");
    const dateInput = document.getElementById('date');
    const slotsDropdown = document.getElementById('slots');
    const messageDiv = document.getElementById('message');
    
    
    dateInput.addEventListener('change', async () => {
      const selectedDate = dateInput.value;
      if (!selectedDate) return;

      try {
          const response = await fetch(`/available-slots?date=${selectedDate}`);
          if (!response.ok) {
              throw new Error('Failed to fetch slots');
          }

          const slots = await response.json();
          populateSlotsDropdown(slots);
      } catch (error) {
          console.error(error);
          messageDiv.textContent = 'Error fetching slots';
      }
    });

    function populateSlotsDropdown(slots) {
      slotsDropdown.innerHTML = ''; // Clear previous options

      if (slots.length === 0) {
          const option = document.createElement('option');
          option.textContent = 'No available slots';
          option.disabled = true;
          option.selected = true;
          slotsDropdown.appendChild(option);
          return;
      }

      slots.forEach(slot => {
          const option = document.createElement('option');
          const value = `${slot.starttime} - ${slot.endtime}`;
          option.value = value;
          option.textContent = value;
          slotsDropdown.appendChild(option);
      });
    }

    // Submit form event listener
    form.addEventListener("submit", function (event) {


      event.preventDefault();
      
      setTimeout(function () {
        
        var messageDiv = document.getElementById("message");
        messageDiv.innerHTML = "Appointment booked successfully!";
        messageDiv.style.color = "green";
        slotsDropdown.innerHTML = '';
        form.reset();
    
      }, 100);
    });

});