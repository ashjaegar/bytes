
        function submitDonation() {
            const form = document.getElementById('donationForm');
            const formData = new FormData(form);

            fetch('http://localhost:3000/donate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(Object.fromEntries(formData)),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                alert(data); // Show a success message or update the UI as needed
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
   