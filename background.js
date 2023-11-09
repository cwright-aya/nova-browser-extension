function authenticate(credentials, environment, callback) {
    // API endpoint for the environment (DEV or INT)
    let apiEndpoint = `https://${environment}.nova.com/api/authenticate`;
  
    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      callback(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  