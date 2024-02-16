import { useState, useEffect } from 'react';
import CurrentUserContext from './current-user-context';
import { onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { auth } from '../firebase';

type ChildrenProps = {
  children: React.ReactNode
}

// export default function CurrentUserContextProvider({ children }) {
// convert the above line to a properly typed tsc function component
export default function CurrentUserContextProvider({ children }: ChildrenProps) {
  const [currentUser, setCurrentUser] = useState<User|null>(null);
  const context = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setCurrentUser);
    // list of user props https://firebase.google.com/docs/reference/js/firebase.User

    return () => unsubscribe();
  }, [])

  return (
    <CurrentUserContext.Provider value={ context }>
      {children}
    </CurrentUserContext.Provider>
  );
}