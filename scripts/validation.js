function validateForm() {

  // this is used to gather the users inputs within the given fields
  firstname = document.getElementById("firstname").value;
  lastname = document.getElementById("lastname").value;
  phoneNumber = document.getElementById("phoneNumber").value;
  phoneNumeric = IsNumeric(phoneNumber); //calls if numeric function
  email = document.getElementById("email").value;
  confemail = document.getElementById("confemail").value;

  // this is used to check the inputs given are met by the regex format given bellow
  emailResult = checkEmail(email);
  confemailResult = checkConfEmail(confemail);

  // Checking for errors in regards to first name
  if (firstname == "") {
    hideAllErrors();
    document.getElementById("firstnameError").style.display = "inline";
    document.getElementById("firstname").select();
    document.getElementById("firstname").focus();
    return false;

    // Checking for errors in regards to last name
  } else if (lastname == "") {
    hideAllErrors();
    document.getElementById("lastnameError").style.display = "inline";
    document.getElementById("lastname").select();
    document.getElementById("lastname").focus();
    return false;

    // Checking for errors in regards to phone number or field is empty
  } else if (phoneNumber == "") {
    hideAllErrors();
    document.getElementById("phoneNumberError").style.display = "inline";
    document.getElementById("phoneNumber").select();
    document.getElementById("phoneNumber").focus();
    return false;

    //used later to check is phone number meets 
  } else if (phoneNumeric == false) {
    hideAllErrors();
    document.getElementById("phoneNumberError").style.display = "inline";
    document.getElementById("phoneNumber").select();
    document.getElementById("phoneNumber").focus();
    return false;

    // Checking for errors in regards email or field is empty
  } else if (email == "") {
    hideAllErrors();
    document.getElementById("emailError").style.display = "inline";
    document.getElementById("email").select();
    document.getElementById("email").focus();
    return false;

    // Checking for errors in regards to email's result
  } else if (emailResult == false) {
    hideAllErrors();
    document.getElementById("emailError").style.display = "inline";
    document.getElementById("email").select();
    document.getElementById("email").focus();
    return false;

    // Checking for errors in regards to email's result being blank
  } else if (confemail == "") {
    hideAllErrors();
    document.getElementById("confemailError").style.display = "inline";
    document.getElementById("confemail").select();
    document.getElementById("confemail").focus();
    return false;

    // Checking for errors in regards to email's result
  } else if (confemailResult == false) {
    hideAllErrors();
    document.getElementById("confemailError").style.display = "inline";
    document.getElementById("confemail").select();
    document.getElementById("confemail").focus();
    return false;

  } else if (phoneNumber == "") {
    hideAllErrors();
    document.getElementById("phoneNumberError").style.display = "inline";
    document.getElementById("phoneNumber").select();
    document.getElementById("phoneNumber").focus();
    return false;

  } else if (phoneNumberResult == false) {
    hideAllErrors();
    document.getElementById("phoneNumberError").style.display = "inline";
    document.getElementById("phoneNumber").select();
    document.getElementById("phoneNumber").focus();
    return false;
  }

  // This is shown to show the user tjat the validation is complete and successful
  alert("First Name:" + firstname + "\n Last Name:" + lastname + "\n Phone Number:" + phoneNumber + "\n Email:" + email + "\n Confirm Email:" + confemail);
  return true;
}

//checks regex if phone number is using the correct formatting, this will accept numbers in the following format (+61 4** *** ***)
function IsNumeric(numstr) {
  mystring = numstr;
  if (mystring.match(/^\+61 4\d{2} \d{3} \d{3}$/)) {
    return true;
  } else
    return false;
}

//checks regex if email is using the correct formatting, this will accept emails in the follwoing format (***@***.com)
function checkEmail(inputvalue) {
  var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
  if (pattern.test(inputvalue)) {
    return true;
  } else {
    return false;
  }
}

//checks regex if confirm email is using the correct formatting, this will accept emails in the follwoing format (***@***.com)
function checkConfEmail(inputvalue) {
  var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
  if (pattern.test(inputvalue)) {
    return true;
  } else {
    return false;
  }
}

// This function hide the errors if validated correctly
function hideAllErrors() {
  document.getElementById("firstnameError").style.display = "none";
  document.getElementById("lastnameError").style.display = "none";
  document.getElementById("phoneNumberError").style.display = "none";
  document.getElementById("emailError").style.display = "none";
  document.getElementById("confemailError").style.display = "none";
}


// the following function gather the inputs from the registration page and declares the value of membership 
// cost, based on the given inputs the particular if statement is justified outputting the given cost for a 
// 12 month membership

function membershipCheck() {

  // declaring the cost variable
  let cost = document.getElementById('membershipCost');
  let membershipcost = 10;

  //gathering imputs from registration page
  age = parseInt(document.getElementById("ageRange").value);
  employment = document.getElementById("employmentstatus").checked;
  student = document.getElementById("studentstatus").checked;

  //sets a const for age for code minimisation
  const ageValid = age >= 16 && age <= 20

  if (ageValid) {
    membershipcost = 10;
    membershipcost *= 0.9;
  }
  if (employment == false) {
    membershipcost = 10;
    membershipcost *= 0.6;
  }
  if (student == true) {
    membershipcost = 10;
    membershipcost *= 0.95;
  }
  if (ageValid && employment == false) {
    membershipcost = 10;
    membershipcost *= 0.5;
  }
  if (ageValid && student == true) {
    membershipcost = 10;
    membershipcost *= 0.85;
  }
  if (student == true && employment == false) {
    membershipcost = 10;
    membershipcost *= 0.55;
  }
  if (ageValid && student == true && employment == false) {
    membershipcost = 10;
    membershipcost *= 0.45;
  }
  // the price is then displayed bellow the submit button within the registration page 
  // (multiplied by 12 as it is an annual membership)
  cost.innerHTML = "membership Cost for 12 months = $" + membershipcost * 12;
}