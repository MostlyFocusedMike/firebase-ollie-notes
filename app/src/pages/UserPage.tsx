import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import CurrentUserContext from '../contexts/current-user-context';

function UserPage() {
  const { currentUser } = useContext(CurrentUserContext);
  if (!currentUser) return <Navigate to='/sign-in' />

  const signOutUser = async () => signOut(auth)

  return (
    <>
      <h1>{currentUser.displayName}</h1>
      <img
        referrerPolicy='no-referrer'
        src={currentUser.photoURL || ""}
        alt={currentUser.displayName || ""}
      />
      <p>{currentUser.email}</p>
      <button onClick={signOutUser}>Sign Out</button>
    </>
  )
}

export default UserPage
