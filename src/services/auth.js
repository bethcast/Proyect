import { getAuth,  createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import app from ".";
import { doc, setDoc } from "firebase/firestore";
import db from "./database";

const auth = getAuth(app);


function login(email,password){
    signInWithEmailAndPassword(auth,email,password)
    .then ((userCrential) =>{
        //signed in
        const user = userCrential.user;
        console.log(user)
        //...
    })
    .catch((error) =>{
        const errorCode = error.code;
        const errorMessage = error.errorMessage;
        console.log(errorCode, errorMessage)
    });
    }

    function singup (params) {
        const {email, password, displayName} = params;

        const auth = getAuth (app);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentiaL) =>{
            //signed in
            const user = userCredential.user;
            console.log(userCredentiaL)

            setDoc(
                doc(db, "profiles", user.id),
                {
                    email,
                    uid: user.uid,
                    displayName
                }
            );
            //...

        })
        .catch ((error) =>{
            const errorCode = error.code;
            const errorMessage = error.errorMessage;
            console.log(errorCode, errorMessage);
            //..
        });
    }

export{ login, singup }

//Collections and Documents

