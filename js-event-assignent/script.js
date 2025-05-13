// Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
    document.getElementById("clickBtn").style.color = "red";
    alert("Button was clicked!");
  });
  
  document.getElementById("hoverArea").addEventListener("mouseover", () => {
    console.log("Hovered!");
  });
  
  document.getElementById("keyInput").addEventListener("keypress", (e) => {
    console.log("Key pressed:", e.key);
  });
  
  // Bonus: double click
  document.getElementById("hoverArea").addEventListener("dblclick", () => {
    alert("Double clicked!");
  });
  
  // Interactive: Change text/color
  document.getElementById("changeBtn").addEventListener("click", () => {
    const target = document.getElementById("changeTarget");
    target.textContent = "Changed!";
    target.style.color = "crimson";
  });
  
  // Tabs
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab-content").forEach((content) => {
        content.classList.remove("active");
      });
      const target = document.getElementById(tab.dataset.target);
      target.classList.add("active");
    });
  });
  
  // Image Gallery
  const images = [
    "https://via.placeholder.com/150?text=1",
    "https://via.placeholder.com/150?text=2",
    "https://via.placeholder.com/150?text=3"
  ];
  let currentImage = 0;
  document.getElementById("nextImage").addEventListener("click", () => {
    currentImage = (currentImage + 1) % images.length;
    document.getElementById("galleryImage").src = images[currentImage];
  });
  
  
  
  // Form Validation
  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const message = document.getElementById("formMessage");
  
    if (!name || !email || !password) {
      message.textContent = "All fields are required!";
      message.style.color = "red";
      return;
    }
  
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
      message.textContent = "Invalid email format!";
      message.style.color = "red";
      return;
    }
  
    if (password.length < 8) {
      message.textContent = "Password must be at least 8 characters.";
      message.style.color = "red";
      return;
    }
  
    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
  });
  
  // Bonus: real-time feedback
  document.getElementById("password").addEventListener("input", (e) => {
    const feedback = document.getElementById("formMessage");
    if (e.target.value.length < 8) {
      feedback.textContent = "Password too short!";
      feedback.style.color = "orange";
    } else {
      feedback.textContent = "Password looks good!";
      feedback.style.color = "green";
    }
  });
  