import './App.css';

import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import LoginPage from '../LoginPage/LoginPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage'
import MoviesListPage from '../MoviesListPage/MoviesListPage';

import {movies} from '../../data'



function App() {
  //state that hold empty string thats 'user'
  const [user, setUser] = useState('')

  //function that wants to update the user useState,
  //this function is passed down to loginPage as props so it can update the state
  const addNewUser=(name)=>{
    setUser(name)
  }
  
  return (
    <main className="App">
      {user ? 
      <>
        <Navbar user={user} />
        <Routes>
          <Route path='/' element={<MoviesListPage movies={movies} />} />
          <Route path='/actors' element={<ActorListPage movies={movies} />} />
          <Route path='/moviedetails/:title' element={<MovieDetailPage movies={movies} />} />
        </Routes>
        
      </>
      :
      <LoginPage addNewUser={addNewUser}  />
      }


    </main>
  );
}

export default App;
