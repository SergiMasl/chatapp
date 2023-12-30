import { getDatabase, ref, set, onValue } from "firebase/database";
import firebaseApp from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const database = getDatabase();
console.log(database);

export function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, "users/" + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  })
    .then(() => {
      console.log("Data saved successfully!");
    })
    .catch((error) => {
      console.log(":The write failed...");
    });
}

export function ReadData(id) {
  const db = getDatabase();
  const users = ref(db, "users/" + id);
  onValue(users, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
}

/////

export function singUp(email, password) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
