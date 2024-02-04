import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Admin from './Components/Admin'
import Add from './Components/Add'
import View from './Components/View'
import Edit from './Components/Edit'
import PageNotFound from './Components/PageNotFound'
function App() {
  return (
    <div className="App">
     {/* <h1>CONTACT_APP</h1> */}
     
     <Header/>
     <Routes>
     <Route path='/' element={<Admin/>}/>
     <Route path='add' element={<Add/>}/>
    <Route path='view/:id' element={<View/>}/>
    <Route path='edit/:id' element={<Edit/>}/>
    <Route path ='*' element={<PageNotFound/>}/>
     </Routes>
<br />
<br />
<br />
<br />
     <Footer/>
    </div>
  );
}

export default App;
