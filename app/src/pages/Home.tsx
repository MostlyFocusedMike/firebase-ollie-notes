import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useContext } from 'react';
import CurrentUserContext from '../contexts/current-user-context';

function Home() {
  const { currentUser } = useContext(CurrentUserContext);
  const signInWithGooglePopUp = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider).catch(console.warn);
    // The listener in the CurrentUserContextProvider that will update the currentUser state
  }

  const signOutUser = async () => signOut(auth)

  return (
    <>
    <header>
      <p>Ollie Notes</p>
    </header>
    <main>
      <h1>Ollie Notes</h1>
      <h2>Sign In</h2>
      {
        currentUser
        ? <div>
            <h2>Welcome {currentUser.displayName}</h2>
            <img src={currentUser.photoURL || ""} alt={currentUser.displayName || ""} />
            <p>{currentUser.email}</p>
            <button onClick={signOutUser}>Sign Out</button>
          </div>
        : <button onClick={signInWithGooglePopUp}>Sign in with Google</button>
      }
    </main>
    </>
  )
}

export default Home
