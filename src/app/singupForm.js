import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from './firebase.js'


const signupForm = document.querySelector('#signupForm');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = signupForm['signupEmail'].value;
    const password = signupForm['signupPassword'].value;

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials);

        const signupModal = document.querySelector('#signupModal');
        const modal = bootstrap.Modal.getInstance(signupModal);
        modal.hide();

    } catch (error) {
        console.log(error)
    }







})