import { Routes, Route, Navigate} from 'react-router';
import './App.css';
import Home from './pages/home/home';
import { createStructuredSelector } from 'reselect';
import { selectActiveUser } from './redux/user/userSelectors';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import Dashboard from './pages/dashboard/dashboard';


function App({user}) {

  const [isAuthenticated, setIsAuthenticated] = useState(false);


  useEffect(() => {
    setIsAuthenticated(user);

  }, [user])

  

  return (
    <div>
      <Routes>
      
          <Route path="/" element={ 
            !isAuthenticated.currentUser ? <Home /> : <Navigate to="/dashboard" />
          } /> 
          <Route path="/dashboard" element={
              isAuthenticated.currentUser ? <Dashboard /> : <Navigate to="/" />
          }>
            
          </Route>
       
      </Routes>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  user: selectActiveUser
})

export default connect(mapStateToProps,null)(App);
