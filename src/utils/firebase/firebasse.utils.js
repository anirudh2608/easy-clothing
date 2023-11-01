import { initializeApp } from 'firebase/app'

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth"

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    updateDoc,
} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDAgfxkXasBXIq1w4qlM-vjcuyp7xwklQk",
    authDomain: "react-clothing-db-30ae1.firebaseapp.com",
    projectId: "react-clothing-db-30ae1",
    storageBucket: "react-clothing-db-30ae1.appspot.com",
    messagingSenderId: "130389671810",
    appId: "1:130389671810:web:a9c2df6c19d40b5972999b"
};



const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const db = getFirestore(firebaseApp);


export const getCurrentUserCartItems = async (userId) => {

    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    const { cart } = docSnap.data()
    return cart

}



export const updateUserCartItems = async (userAuthId, cartItems) => {

    let cart = []
    cartItems.forEach((item) => {
        cart.push(
            {
                id: item.id,
                quantity: item.quantity
            })
    })

    const userDocRef = doc(db, 'users', userAuthId)

    await updateDoc(userDocRef, {
        cart: cart
    });
}



export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return

    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                cart: [],
                ...additionalInformation
            })
        }
        catch (err) {
            console.log(`Error = ${err}`)
        }
    }

    return userSnapshot
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return

    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth);

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (userAuth) => {
                unsubscribe();
                resolve(userAuth);
            },
            reject
        );
    });
};  