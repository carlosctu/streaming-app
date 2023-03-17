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

    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const handleGithubSignIn = () => {
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider)
    }
    const handleFacebookSignIn = () => {
        const provider = new FacebookAuthProvider();
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
        handleGoogleSignIn,
        handleGithubSignIn,
        handleFacebookSignIn,
        logOut,
        user,
        setUser
    }}>
        {children}
    </AuthContext.Provider>
}

export const UserAuth = () => useContext(AuthContext);





export function handleSignUpWithPopUp(signUpWith) {
    const provider = getProvider(signUpWith)
    console.log(provider)
    signInWithPopup(auth, provider).then((result) => {
        console.log(result)
        // console.log("Olá")
    }).catch((error) => {
        console.log(error);
    })
}

export function handleEmailSignUp(email, password) {
    // const navigate = useNavigate()
    createUserWithEmailAndPassword(auth, email, password)
        .then((_) => {
            console.log("Caiu no create user")
            // navigate('/Login')
        })
        .catch((error) => {
            console.log("deu error")
            console.log(error)
            if (error.code === "auth/email-already-in-use") {
                return toast("Usuário já cadastrado")
            }
            return toast("Favor tente novamente em alguns segundos")
        })
}

