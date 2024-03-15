import { createContext, useContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user.uid);

      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  const createAccount = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);

      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      if (auth.currentUser) {
        await auth.signOut();
        console.log("Logged out");
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    // Cleanup function
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, createAccount, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
