function buttonClick1(elem){
	var b = document.getElementById(elem);
	if(b.style.display !== 'block'){
		b.style.display = 'block';
	}else{
		b.style.display = 'none';
	}
}

function registerButton(){
	var reg = document.getElementById("form-fillout");
	var info = document.getElementById("register-info");
	if(reg.style.display !== 'block'){
		reg.style.display = 'block';
		info.style.display = 'none';
	}else{
		reg.style.display = 'none';
		info.style.display = 'block';
	}
}


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length){
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
    
}

var slideIndex2 = 0;
showSlides2();

function showSlides2(){
    var j;
    var slides = document.getElementsByClassName("mySlides2");
    
    for(j = 0; j < slides.length; j++){
        slides[j].style.display = "none";
    }
    slideIndex2++;
    
    if(slideIndex2 > slides.length){
        slideIndex2 = 1;
    }
    
    slides[slideIndex2 - 1].style.display = "block";
    setTimeout(showSlides2, 5000);
}



//Form Validation
var valid;
//if input is filled out correctly or not, do one of these actions
function Validation(elem, helperMsg, valid){
	if(elem.value.match(valid)){
		elem.style.border = '2px solid green';
		return true;
	}else{
	elem.value = "";
	elem.placeholder = helperMsg;
	elem.style.border= '2px solid red';
	}
}

//validate first and last name inputs
function nameValid(elem, helperMsg) {
	valid = /^[a-zA-Z]+$/;
	Validation(elem, helperMsg, valid);
	
}

//validate email input
function emailValid(elem, helperMsg){
	valid = /^[\w\-\.+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]{2,4}$/;
	Validation(elem, helperMsg, valid);
}

//validate street address
function Address(elem, helperMsg){
	valid = /^[0-9]{1,5}\s[a-zA-Z]+/;
	Validation(elem, helperMsg, valid);
}

//validate suburb
function Suburb(elem, helperMsg){
    valid = /^[a-zA-Z]+$/;
    Validation(elem, helperMsg, valid);
}

//validate state
function stateValid(elem, helperMsg){
    var options = document.getElementById('state').options;
    valid = /^N[SWT]|Q[LD]|S[A]|T[AS]|W[A]|V[IC]$/;
    for(var i = 0; i < options.length; i++){
        Validation(elem, helperMsg, valid);
    }
}

//validate postcode
function Postcode(elem, helperMsg){
    valid = /^[0-9]{4}$/;
    Validation(elem, helperMsg, valid);
}

//validate gender
function gender(helperMsg){
    var gender = document.getElementsByName('Gender');
	var msg = document.getElementById('genderSpan');
	if(!gender[0].checked && !gender[1].checked){
		msg.innerHTML = '<br>' + helperMsg;
		msg.style.color = 'red';
	}else{
		msg.innerHTML = '';
		return true;
	}
}

//validate date
function validateDate(elem, helperMsg){
	valid = document.getElementById('dob').value.substring(0, 4);
	var inputDate = document.getElementById('dob').value;
	var currentDate = new Date();
	var currentYear = parseInt(currentDate.getFullYear());
	if(valid > currentYear || !Date.parse(inputDate)){
		elem.value = "";
		elem.placeholder = helperMsg;
		elem.style.border= '2px solid red';
	}
	else{
		elem.style.border = '2px solid green';
		return true;
	} 
}

//next button
function Next(){
	var next = document.getElementById('next');
	var firstName, lastName, dob, email, streetAddress, suburb, state, country, postcode, gender;
	firstName =document.getElementById('firstName');
	lastName =document.getElementById('lastName');
	dob = document.getElementById('dob');
	email = document.getElementById('email');
	streetAddress = document.getElementById('streetAddress');
	suburb = document.getElementById('suburb');
	state = document.getElementById('State');
	country = document.getElementById('country');
	postcode = document.getElementById('postcode');
	gender = document.getElementsByName('Gender');
	
	if(firstName.style.border ==='2px solid green' &&  
        lastName.style.border === '2px solid green' && 
        dob.style.border === '2px solid green'   && 
        email.style.border === '2px solid green' &&
        streetAddress.style.border === '2px solid green' && 
        suburb.style.border === '2px solid green' && 
        state.style.border === '2px solid green' && 
        postcode.style.border === '2px solid green')
	{
		window.alert ('Congratulations! You are now registered for Yoga Retreat!');
		firstName.value = "";
		lastName.value = "";
		dob.value = "";
		email.value = "";
		streetAddress.value = "";
		suburb.value = "";
		state.value = "";
		postcode.value = "";
		for(var i = 0; i < gender.length; i++){
			gender[i].checked = false;
		}
        firstName.style.border = "";  
        lastName.style.border = ""; 
        dob.style.border = "";
        email.style.border = "";
        streetAddress.style.border = "";
        suburb.style.border = "";
        state.style.border = "";
        postcode.style.border = "";
	}
}
Next();
