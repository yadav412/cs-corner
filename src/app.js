import { auth, db } from '../src/firebase.js';
import { signup, login } from '../src/auth.js';
import { addUser, getUsers } from '../src/firestore.js';

// Auth
document.getElementById("signup").onclick = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    await signup(email, password);
    document.getElementById("authStatus").innerText = "Signed up!";
};

document.getElementById("login").onclick = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    await login(email, password);
    document.getElementById("authStatus").innerText = "Logged in!";
};

// Firestore
document.getElementById("addUser").onclick = async () => {
    const name = document.getElementById("name").value;
    const school = document.getElementById("school").value;
    await addUser(name, school);
    alert("User added!");
};

document.getElementById("getUsers").onclick = async () => {
    const snapshot = await getUsers();
    const list = document.getElementById("usersList");
    list.innerHTML = "";
    snapshot.forEach(doc => {
        const li = document.createElement("li");
        li.innerText = `${doc.id} - ${doc.data().name} (${doc.data().school})`;
        list.appendChild(li);
    });
};

// Functions API
document.getElementById("callApi").onclick = async () => {
    const res = await fetch('https://us-central1-portal-d517a.cloudfunctions.net/api/hello');
    const data = await res.json();
    document.getElementById("apiResult").innerText = JSON.stringify(data);
};