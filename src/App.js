// import FormHook from './components/FormHook'
// import './App.css';
import {BrowserRouter,Link,Switch,Route,Redirect} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import UserProfile from  './components/UserProfile'
import Technologies from './components/Technologies';


function App() {
  return (
  //  <div>
  //    <FormHook/>
  //  </div> 

   //Horizantal Nav_bar
   <BrowserRouter>
   <div>
    {/* <p>How are you</p> */}
     <ul className="nav bg-dark justify-content-center">
       <li className="nav-item">
         <Link className="nav-link" to="/home">Home</Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/register">Register</Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/login">Login</Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/technologies">Technologies</Link>
       </li>
     </ul>

     {/*switch */}
     <Switch>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
        <Route path='/userprofile/:username'>
            <UserProfile/>
        </Route>

        <Route path="/technologies">
          <Technologies/>
        </Route>

        <Route path="/">
          <Redirect to="/login" />
        </Route>
     </Switch>
   </div>
   </BrowserRouter>

  )
}

export default App;
