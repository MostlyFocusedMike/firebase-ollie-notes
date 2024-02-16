import { useState, useEffect } from 'react';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { auth } from './firebase';

function App() {
  const [user, setUser] = useState<User|null>(null);
  const signInWithGooglePopUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      console.log(result.user);
    } catch (error) {
      console.error(error);
    }
  }

  const signOutUser = async () => {
    await signOut(auth)
    console.log('signed out!:');
  }

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          console.log('user:', user);
          const uid = user.uid;
          setUser(user);
          // ...
          console.log("uid", uid)
        } else {
          // User is signed out
          // ...
          setUser(null);
          console.log("user is logged out")
        }
      });

}, [])

  return (
    <>
    <header>
      <p>Ollie Notes</p>
    </header>
    <main>
      <h1>Ollie Notes</h1>
      <h2>Sign In</h2>
      {
        user
        ? <div>
            <h2>Welcome {user.displayName}</h2>
            <img src={user.photoURL || ""} alt={user.displayName || ""} />
            <p>{user.email}</p>
            <button onClick={signOutUser}>Sign Out</button>
          </div>
        : <button onClick={signInWithGooglePopUp}>Sign in with Google</button>
      }
    </main>
    </>
  )
}

export default App
