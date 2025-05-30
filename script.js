document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for reaching out, Bel will get back to you soon!");
  this.reset();
});