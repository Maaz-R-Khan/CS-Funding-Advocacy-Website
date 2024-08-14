let themeButton = document.getElementById("theme-button");
// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {

    // Write your code to manipulate the DOM here
document.body.classList.toggle("dark-mode") ;
} 

themeButton.addEventListener("click", toggleDarkMode); 

// Add your query for the sign now button here

const signNowButton = document.getElementById("sign-now-button");


// Refactored addSignature function to accept person object
const addSignature = (person) => {
  const { name, hometown } = person;
  const signatureElement = document.createElement("p");
  const signatureText = `${name} from ${hometown} supports this.`;
  signatureElement.textContent = signatureText;
  const signaturesSection = document.querySelector(".signatures");
  signaturesSection.appendChild(signatureElement);
}

  
// Refactored validateForm function
const validateForm = () => {
   console.log("Form submitted");
  let containsErrors = false;
  let petitionInputs = document.getElementById("sign-petition").elements;
  let person = {
    name: petitionInputs["name"].value,
    hometown: petitionInputs["hometown"].value,
    email: petitionInputs["email"].value
  };

  for (let input of Object.values(petitionInputs)) {
    if (input.value.length < 2) {
      input.classList.add('error');
      containsErrors = true;
    } else {
      input.classList.remove('error');
    }
  }

  if (!containsErrors) {
    addSignature(person);
    toggleModal(person); 
    for (let input of Object.values(petitionInputs)) {
      input.value = "";
    }
  }
}

  signNowButton.addEventListener('click', validateForm);

let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}; 

let revealableContainers = document.querySelectorAll('.revealable');

const reveal = () => {
  let windowHeight = window.innerHeight;

  for (let i = 0; i < revealableContainers.length; i++) {
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');
    } else {
      revealableContainers[i].classList.remove('active');
    }
  }
};

window.addEventListener('scroll', reveal); 

const toggleModal = (person) => {
   console.log("Modal toggled"); 
  const modal = document.getElementById("thanks-modal");
  const modalContent = document.getElementById("thanks-modal-content");

  modal.style.display = "flex";
  modalContent.textContent = `Thank you so much ${person.name}!`;

  setTimeout(() => {
    modal.style.display = "none";
  }, 4000);
}

const scaleImage = () => {
  const modalImage = document.getElementById("modal-image");
  let scaleFactor = 1;

  setInterval(() => {
    scaleFactor = scaleFactor === 1 ? 0.8 : 1;
    modalImage.style.transform = `scale(${scaleFactor})`;
  }, 500);
}
console.log("Script loaded successfully");  

