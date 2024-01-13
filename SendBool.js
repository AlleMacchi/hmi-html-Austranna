// BOOL
        // Function to post boolean to the server
        async function postBoolean(booleanValue) {
            try {
              const response = await fetch('http://localhost:3000/api/post-boolean', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ booleanValue }),
              });
      
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
      
              console.log('Boolean posted successfully');
              // alert('Boolean posted successfully');
              // You can optionally call fetchData() here to update the displayed data after posting
            } catch (error) {
              console.error('Error posting boolean:', error);
              alert('Error posting boolean');
            }
          }
      
      // Function to handle checkbox change with debouncing
      let debounceTimer;
      function handleCheckboxChange() {
          const checkbox = document.getElementById('booleanCheckbox');
          const booleanValue = checkbox.checked;
      
        // Clear the previous timer
        clearTimeout(debounceTimer);
      
        // Set a new timer for debouncing
        debounceTimer = setTimeout(() => {
          postBoolean(booleanValue);
        }, 500); // Adjust the delay as needed
      }