let debounceTextTimer;
function sendTextControl() {
    const text = document.getElementById('text').value;
  // Clear the previous timer
  clearTimeout(debounceTextTimer);

  // Set a new timer for debouncing
  debounceTextTimer = setTimeout(() => {
    sendText(text);
  }, 1000); // Adjust the delay as needed
}

   async function sendText(text) {
            
      // Using Fetch API to send a POST request to the server
      fetch('http://localhost:3000/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      })
      .then(response => response.text())
      .then(data => {
        console.log(data);
        // alert('Text sent successfully!');
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error sending text.');
      });
    }