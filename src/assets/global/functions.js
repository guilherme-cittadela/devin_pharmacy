function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

function validatePassword(senha){
    const senhaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return senhaPattern.test(senha);
}

function validateLogin(validEmail, validPassword, email, password) {
    return ( validEmail && validPassword) && !!(email && password);
  }
 
export { validateEmail, validatePassword, validateLogin };

