const users = [
    { username: "RodrigoSerbeta", password: "ImCoolGus" }
  ];
  
  const form = document.querySelector("form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const username = form.elements.username.value;
    const password = form.elements.password.value;
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      alert("Login successful!");
      window.location.href = "PopsWebsite.html";
      form.reset();
    } else {
      alert("Invalid username or password!");
    }
  });
  