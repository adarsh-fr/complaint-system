document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('complaintForm');
  if (form) {
    form.addEventListener('submit', function (e) {
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
        document.getElementById('response').innerText = 'Complaint submitted successfully.';
      })
      .catch(err => {
        document.getElementById('response').innerText = 'Error submitting complaint.';
      });
    });
  }
});

function trackComplaint() {
  const complaintID = document.getElementById('trackID').value;
  fetch('https://script.google.com/macros/s/AKfycbwESocfd4nKcN-YqgjtS8jgEDFzIXSOttP22k6L07V-HRjweqHtHcBH5OAByoIVSNpquw/exec?action=trackStatus', {
    method: 'POST',
    body: JSON.stringify({ complaintID: complaintID })
  })
  .then(res => res.text())
  .then(response => {
    try {
      const data = JSON.parse(response);
      document.getElementById('statusResult').innerHTML =
        '<b>Status:</b> ' + data.status + '<br><b>Assigned To:</b> ' + data.assignedTo + '<br><b>Complaint:</b> ' + data.complaint;
    } catch (e) {
      document.getElementById('statusResult').innerText = response;
    }
  });
}

function adminLogin() {
  const pass = document.getElementById('adminPass').value;
  if (pass === 'bsnladmin@2025') {
    document.getElementById('adminLogin').style.display = 'none';
    document.getElementById('adminPanel').style.display = 'block';
  } else {
    alert('Invalid password');
  }
}

function updateStatus() {
  const data = {
    complaintID: document.getElementById('adminComplaintID').value,
    newStatus: document.getElementById('newStatus').value
  };

  fetch('https://script.google.com/macros/s/AKfycbwESocfd4nKcN-YqgjtS8jgEDFzIXSOttP22k6L07V-HRjweqHtHcBH5OAByoIVSNpquw/exec?action=updateStatus', {
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(response => {
    document.getElementById('adminResponse').innerText = response;
  })
  .catch(err => {
    document.getElementById('adminResponse').innerText = 'Error updating status.';
  });
}
