document.getElementById('complaintForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const data = {
    name: document.getElementById('name').value,
    mobile: document.getElementById('mobile').value,
    area: document.getElementById('area').value,
    service: document.getElementById('service').value,
    complaint: document.getElementById('complaint').value
  };

  fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(response => {
    document.getElementById('response').innerText = 'Complaint Submitted Successfully!';
  })
  .catch(err => {
    document.getElementById('response').innerText = 'Error submitting complaint.';
  });
});
