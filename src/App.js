
import './App.css';
import { useEffect, useState } from 'react';
import Home from './Home';
import SignIn from './Signin'
import { auth } from './firebase'

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth.uid,
        email: userAuth.email
      }
      if (userAuth) {
        console.log('userAuth', userAuth)
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return unsubscribe
  }, [])
  return (
    <div className="App">
      {user ? <Home /> : <SignIn />}
    </div>
  );
}

export default App;
