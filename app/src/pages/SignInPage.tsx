import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import CurrentUserContext from '../contexts/current-user-context';

export default function SignInPage() {
  const { currentUser } = useContext(CurrentUserContext);

  if (currentUser) return <Navigate to= {`/users/${currentUser.uid}`} />

  const signInWithGooglePopUp = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider).catch(console.warn);
    // The listener in the CurrentUserContextProvider that will update the currentUser state
  }

  return (
    <>
      <h2>Sign In</h2>
      <button onClick={signInWithGooglePopUp}>Sign in with Google</button>
    </>
  )
}
