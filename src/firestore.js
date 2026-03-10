import { db } from "./firebase.js";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function addUser(name, school) {

    try {

        const docRef = await addDoc(collection(db, "users"), {
            name: name,
            school: school
        });

        console.log("User ID:", docRef.id);

    } catch (error) {
        console.error(error);
    }
}

export async function getUsers(){

    const snapshot = await getDocs(collection(db,"users"));

    snapshot.forEach((doc)=>{
        console.log(doc.id, doc.data());
    });

}