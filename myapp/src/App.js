import React, { useState } from 'react';

import { Homepage, Capsules, Search } from './pages'
import { Navbar, Footer } from './components'
import './App.css';

function App() {
  const [value, setValue] = useState("")
  const [filterType, setFilterType] = useState("")
  return (
    <>
      <Navbar />
      <Homepage />
      <Search setValue={setValue} setFilterType={setFilterType} filterType={filterType} />
      <Capsules filterType={filterType} value={value} />
      <Footer />
    </>
  );
}

export default App;
