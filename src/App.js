import './App.css';
import Blogcard from './components/Blogcard';

import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
     <Navbar />
     <Hero />
     <div style={{background: '#F7F7F7',paddingBottom: '5rem '}}>
      <div className='container' style={{textAlign:'center'}}>
      <h1  style={{marginBottom: '2rem', paddingTop: '5rem'}}>Latest Blog!</h1>
     <Blogcard heading="Building  microsyatem" 
       content="iuhuififioajfidojaiod
       ohdidjaodiadasjiodjiasjdijaadpoas"/>
     <Blogcard />
     <Blogcard />
     <button className='btn btn-primary '>Load More</button>
     </div>
    </div>
     
     <Footer />
    </div>
  );
}

export default App;
