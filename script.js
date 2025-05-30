document.getElementById('complaintForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const data = {
    name: document.getElementById('name').value,
    mobile: document.getElementById('mobile').value,
    area: document.getElementById('area').value,
    service: document.getElementById('service').value,
    complaint: document.getElementById('complaint').value
  };

  fetch('https://script.google.com/macros/s/AKfycbwESocfd4nKcN-YqgjtS8jgEDFzIXSOttP22k6L07V-HRjweqHtHcBH5OAByoIVSNpquw/exec', {
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
