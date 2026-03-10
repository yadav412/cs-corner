import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export async function signup(email,password){

    try{

        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        console.log("User created:", userCredential.user);

    }catch(error){
        console.log(error);
    }

}

export async function login(email,password){

    const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
    );

    console.log("Logged in:",userCredential.user);

}