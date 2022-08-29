export default function validateInfo(values) {
    let errors = {};

    if (!values.username.trim()) {
      errors.username = 'Username required';
    }else if (!/^([A-Za-z ]){2,30}$/.test(values.username)) {
      errors.username = 'Enter a valid name';
    }

    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.phone) {
      errors.phone = 'Phone no is required';
    } else if (values.phone.length !== 10) {
      errors.phone = 'Phone number needs to be 10 digits';
    }

    if (!values.age) {
      errors.age = 'Age is required';
    } else if (!(values.age > 10 && values.age < 101)) {
      errors.age = 'Please enter a valid age between 10 and 101';
    }

    if(!values.password1) {
      errors.password1 = 'Password is required';
    } else if(values.password1.length < 8) {
        errors.password1 = 'Password should be minimum 8 character long'
    }

    if(!values.password2) {
      errors.password2 = 'Password is required';
    } else if(values.password !== values.password2) {
        errors.password2 = 'Password should be matched as above'
    }

    return errors;
  }