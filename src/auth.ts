import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "./firebase";

export type User = {
  id: string;
  name: string;
  email: string;
};

export const login = async (email: string, password: string) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    if (user) return true;
  } catch (error: any) {
    console.log("Failed to login: ", error.message);
  }
  return false;
};

export const signup = async (
  name: string,
  email: string,
  password: string,
  confirmPassword: string
): Promise<boolean> => {
  try {
    if (password === confirmPassword) {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userData = {
        name,
        email,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      await setDoc(doc(db, "users", userCredential.user.uid), userData);
      return true;
    }
  } catch (error: any) {
    console.log("Failed to signup: ", error.message);
  }
  return false;
};
