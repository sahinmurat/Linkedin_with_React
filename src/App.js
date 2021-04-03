import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Login from "./Login";
import Widget from "./Widget";


function App() {
  const user = useSelector(selectUser);
  // const user = 'aa'


  const dispatch = useDispatch();

  console.log('user', user)

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      }
      else {
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      )}
      {/* App Body */}
    </div>
  );
}

export default App;

