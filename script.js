// Toggle Password Visibility
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password');
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleIcon.textContent = '👁️';
    } else {
      passwordInput.type = 'password';
      toggleIcon.textContent = '👁️';
    }
  }
  
  // Remember Me Functionality
  const rememberMeCheckbox = document.getElementById('remember-me');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  
  // Load saved credentials
  window.addEventListener('load', () => {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
  
    if (savedUsername && savedPassword) {
      usernameInput.value = savedUsername;
      passwordInput.value = savedPassword;
      rememberMeCheckbox.checked = true;
    }
  });
  
  // Login Form Submission
  document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const username = usernameInput.value;
    const password = passwordInput.value;
  
    // Hardcoded credentials for demo
    const validUsers = [
      { username: 'admin', password: 'admin123', role: 'admin' },
      { username: 'finance', password: 'finance123', role: 'finance' },
      { username: 'manager', password: 'manager123', role: 'manager' },
    ];
  
    const user = validUsers.find(
      (u) => u.username === username && u.password === password
    );
  
    if (user) {
      // Save credentials if "Remember Me" is checked
      if (rememberMeCheckbox.checked) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
      }
  
      // Redirect to dashboard
      window.location.href = 'dashboard.html';
    } else {
      document.getElementById('error-message').textContent =
        'Invalid username or password.';
    }
  });

  // Hardcoded invoice data (replace with dynamic data later)
const invoiceData = {
    approved: 25,
    pending: 10,
    rejected: 5,
  };
  
  // Display invoice metrics
  document.getElementById('approved-count').textContent = invoiceData.approved;
  document.getElementById('pending-count').textContent = invoiceData.pending;
  document.getElementById('rejected-count').textContent = invoiceData.rejected;
  
  // Logout functionality
  document.getElementById('logout-button').addEventListener('click', function () {
    // Clear "Remember Me" data
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  
    // Redirect to login page
    window.location.href = 'index.html';
  });

  // Logout functionality
document.getElementById('logout-button').addEventListener('click', function () {
    // Clear "Remember Me" data
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  
    // Redirect to login page
    window.location.href = 'index.html';
  });
  
  // Create New Invoice Button
  document.getElementById('create-invoice').addEventListener('click', function () {
    alert('Create New Invoice functionality will be added soon.');
  });
  
  // Export Data Button
  document.getElementById('export-data').addEventListener('click', function () {
    alert('Export Data functionality will be added soon.');
  });

  // Forgot Password Functionality
document.getElementById('forgot-password-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    // Hardcoded valid users
    const validUsers = [
      { username: 'admin', password: 'admin123', role: 'admin' },
      { username: 'finance', password: 'finance123', role: 'finance' },
      { username: 'manager', password: 'manager123', role: 'manager' },
    ];
  
    // Check if the username exists
    const user = validUsers.find((u) => u.username === username);
  
    if (!user) {
      document.getElementById('error-message').textContent = 'Username not found.';
      return;
    }
  
    // Check if new password and confirm password match
    if (newPassword !== confirmPassword) {
      document.getElementById('error-message').textContent = 'Passwords do not match.';
      return;
    }
  
    // Update the password in localStorage
    localStorage.setItem(`${username}-password`, newPassword);
    alert('Password reset successfully!');
    window.location.href = 'index.html'; // Redirect to login page
  });
  
  // Logout Functionality
  document.getElementById('logout-button').addEventListener('click', function () {
    // Clear "Remember Me" data
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  
    // Redirect to login page
    window.location.href = 'index.html';
  });

  // Login Functionality
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Hardcoded valid users
    const validUsers = [
      { username: 'admin', password: 'admin123', role: 'admin' },
      { username: 'finance', password: 'finance123', role: 'finance' },
      { username: 'manager', password: 'manager123', role: 'manager' },
    ];
  
    // Check if the user exists
    const user = validUsers.find((u) => u.username === username);
  
    if (!user) {
      document.getElementById('error-message').textContent = 'Invalid username or password.';
      return;
    }
  
    // Check if the password matches (either hardcoded or updated in localStorage)
    const savedPassword = localStorage.getItem(`${username}-password`) || user.password;
    if (password !== savedPassword) {
      document.getElementById('error-message').textContent = 'Invalid username or password.';
      return;
    }
  
    // Save credentials if "Remember Me" is checked
    const rememberMeCheckbox = document.getElementById('remember-me');
    if (rememberMeCheckbox.checked) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }
  
    // Redirect to dashboard
    window.location.href = 'dashboard.html';
  });

  // Collapsible Sections
document.querySelectorAll('.collapsible-header').forEach((header) => {
  header.addEventListener('click', function () {
    const section = this.parentElement;
    section.classList.toggle('active');
  });
});

// Logout Functionality
document.getElementById('logout-button').addEventListener('click', function () {
  // Clear "Remember Me" data
  localStorage.removeItem('username');
  localStorage.removeItem('password');

  // Redirect to login page
  window.location.href = 'index.html';
});