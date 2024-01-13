    // JavaScript code to fetch data from Express server and display it
    async function fetchData() {
        try {
          const response = await fetch('http://localhost:3000/api/data');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const responseData = await response.json();
  
          // Store data in a local variable
          const data = responseData.message;
          const value1 = data[0].value.value;
          const value6 = data[1].value.value;
          const value4 = data[2].value.value;
  
          // Display data in the HTML
          document.getElementById('dataDisplay').innerText = `Response from server: ${value1}`;
          document.getElementById('dataText').innerText = `${value6}`;
          document.getElementById('dataBool').innerText = `${value4}`;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  
      // Call the fetchData function initially
      fetchData();
  
      // Set up an interval to fetch data every second
      setInterval(fetchData, 500);