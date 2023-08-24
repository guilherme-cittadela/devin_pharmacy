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

function saveData(key, data) {
    try {
        const existingData = localStorage.getItem(key);

        if (existingData) {
        const dataArray = JSON.parse(existingData);
        dataArray.push(data);
        localStorage.setItem(key, JSON.stringify(dataArray));
        } else {
        const initialData = [data];
        localStorage.setItem(key, JSON.stringify(initialData));
        }
    } catch (error) {
        console.error("Error saving data to localStorage:", error);
    }
}

function getData(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Error getting data from localStorage:", error);
      return null;
    }
  }


export { validateEmail, validatePassword, validateLogin, saveData, getData };

