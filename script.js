function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var message = document.getElementById('message').value;

    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var mobileError = document.getElementById('mobileError');
    var messageError = document.getElementById('messageError');
    var errorMessage = document.getElementById('errorMessage');

    nameError.innerHTML = emailError.innerHTML = mobileError.innerHTML = messageError.innerHTML = '';

    if (!name) {
      nameError.innerHTML = 'This is a required field.';
      document.getElementById('name').classList.add('error');
    } else {
      document.getElementById('name').classList.remove('error');
    }

    if (!email) {
      emailError.innerHTML = 'This is a required field.';
      document.getElementById('email').classList.add('error');
    } else {
      document.getElementById('email').classList.remove('error');
    }

    if (!mobile) {
      mobileError.innerHTML = 'This is a required field.';
      document.getElementById('mobile').classList.add('error');
    } else {
      document.getElementById('mobile').classList.remove('error');
    }

    if (!message) {
      messageError.innerHTML = '';
      document.getElementById('message').classList.add('error');
    } else {
      document.getElementById('message').classList.remove('error');
    }

    if (!name || !email || !mobile || !message) {
      errorMessage.innerHTML = 'Please correct errors before submitting this form.';
      return false;
    } else {
      errorMessage.innerHTML = '';
      return true;
    }
  }