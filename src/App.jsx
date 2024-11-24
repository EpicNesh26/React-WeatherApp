import { useState } from 'react'
import './App.css'
import Weather from './components/Weather'
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
</style>

function App() {

  return (
    <div className="App text-black min-h-[100vh] grid bg-[#e2d4ff] font-inter">
      <Weather/>
    </div>
  )
}

export default App
