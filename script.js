




function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let msg = document.getElementById("message").value.trim();

  // Email pattern
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation
  if (name === "") {
    alert("Name is required");
    return false;
  }
  if (!email.match(emailPattern)) {
    alert("Enter a valid email");
    return false;
  }
  if (msg === "") {
    alert("Message is required");
    return false;
  }

  return true;
}



