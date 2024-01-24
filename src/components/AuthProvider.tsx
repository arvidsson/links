import { onAuthStateChanged, signOut } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { AuthContext } from "./AuthContext";
import { User } from "../auth";

type AuthProviderProps = {
  children?: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const getUser = async () => {
          const userSnapshot = await getDoc(doc(db, "users", user.uid));
          if (userSnapshot.exists()) {
            const data = userSnapshot.data();
            setUser({
              id: userSnapshot.id,
              name: data.name,
              email: data.email,
            });
          }
        };

        getUser();
      }
      setLoading(false);
    });
    return unsubscribe;
  }, [setUser]);

  const logOut = () => {
    signOut(auth);
    setUser(null);
    navigate("/");
  };

  const value = {
    user,
    setUser,
    logOut,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
