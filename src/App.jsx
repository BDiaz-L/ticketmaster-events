import { useState } from 'react';
import Navbar from './components/Navbar';
import Events from './components/Events';
import SignUpForm from './components/SignUpForm';
import './App.css'

function App() {
  const [searchValue, setSearchValue] = useState('');

  const handleNavbarSearch = (value) => {
    setSearchValue(value);
  };


  return (
    <> {/*
     <Navbar onSearch={handleNavbarSearch}/>
     <Events searchTerm={searchValue}/>
    */}
    <SignUpForm/>
    </>
  )
}

export default App
