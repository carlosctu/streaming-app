import { auth } from "./FirebaseConfig";
import {
    FacebookAuthProvider,
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

function getProvider(providerName) {
    const providers = {
        GITHUB: new GithubAuthProvider(),
        GMAIL: new GoogleAuthProvider(),
        FACEBOOK: new FacebookAuthProvider(),
    }
    return providers[providerName]
}

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({})

    const handleSignInWithPopUp = (providerName) => {
        const provider = getProvider(providerName)
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const onStateChanged = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser);
        })
        return () => onStateChanged();
    }, [])


    return <AuthContext.Provider value={{
        handleSignInWithPopUp,
        logOut,
        user,
        setUser
    }}>
        {children}
    </AuthContext.Provider>
}

export const UserAuth = () => useContext(AuthContext);

export function handleEmailSignUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((_) => {
        })
        .catch((error) => {
            if (error.code === "auth/email-already-in-use") {
                return toast("Usuário já cadastrado")
            }
            return toast("Favor tente novamente em alguns segundos")
        })
}

