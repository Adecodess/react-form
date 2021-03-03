export default function validateInfo(person) {
  let errors = {};

  if (!person.firstName) {
    errors.firstName = "firstName required";
  }

  // lastName
  if (!person.lastName) {
    errors.lastName = "lastName required";
  }

  // email
  if (!person.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(person.email)) {
    errors.email = "Email address is invalid";
  }

  // password
  if (!person.password) {
    errors.password = "Password is Required";
  } else if (person.password.length < 6) {
    errors.password = "Password needs to be 6 or more ";
  }

  if (!person.password2) {
    errors.password2 = "password is required";
  } else if (person.password2 !== person.password) {
    errors.password2 = "Passwords do not match";
  }
  return errors;
}
