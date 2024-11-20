import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [forgetEmail, setForgetEmail] = useState(null);
  const [bookedService, setBookedService] = useState([]);

  const authInfo = {
    user,
    setUser,
    handelLogin,
    handelRegister,
    handelLogout,
    handelUpdateProfile,
    handelGoogleAuth,
    loading,
    setLoading,
    forgetEmail,
    setForgetEmail,
    handelForgetPassword,
    bookedService,
    setBookedService,
  };

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      subscribe();
    };
  }, []);

  function handelLogin(email, password) {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  function handelRegister(email, password) {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function handelLogout() {
    return signOut(auth);
  }

  function handelUpdateProfile(data) {
    setLoading(true);
    return updateProfile(auth.currentUser, data);
  }

  function handelGoogleAuth() {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  }

  function handelForgetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element,
};

export default AuthProvider;
