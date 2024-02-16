import { createContext } from 'react';
import type { User } from 'firebase/auth';

type CurrentUserContext = {
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
}
const CurrentUserContext = createContext<CurrentUserContext>({
  currentUser: null,
  setCurrentUser: () => {}
});

export default CurrentUserContext;