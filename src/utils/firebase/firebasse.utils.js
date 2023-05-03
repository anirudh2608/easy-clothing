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
    collection,
    writeBatch,
    query,
    getDocs,
    updateDoc,
} from "firebase/firestore"

import { firebaseSecurityKey } from './firebase.key';

const {
    firebase_ApiKey,
    firebase_AuthDomain,
    firebase_AppId,
    firebase_MessagingSenderId,
    firebase_ProjectId,
    firebase_StorageBucket
} = firebaseSecurityKey

const firebaseConfig = {
    apiKey: firebase_ApiKey,
    authDomain: firebase_AuthDomain,
    projectId: firebase_ProjectId,
    storageBucket: firebase_StorageBucket,
    messagingSenderId: firebase_MessagingSenderId,
    appId: firebase_AppId
};


const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const db = getFirestore(firebaseApp);

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)

    objectToAdd.forEach(object => {
        const docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object)
    });

    await batch.commit()
}

export const getCurrentUserCartItems = async (userId) => {

    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    const { cart } = docSnap.data()
    return cart

}
export const getCollectionAndDocuments = async () => {
    const collectionRef = collection(db, "categories")
    const q = query(collectionRef)

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());

}

export const updateUserCartItems = async (userAuthId, cartItems) => {
    const userDocRef = doc(db, 'users', userAuthId)

    await updateDoc(userDocRef, {
        cart: cartItems
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