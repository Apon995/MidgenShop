import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';



export default function App() {
  return (
    <>
      <header className='bg-[#C2EFD4]'>
        <Header />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>




    </>
  )
}


