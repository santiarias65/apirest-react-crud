import logo from './logo.svg';
import './App.css';
//importamos los componentes
import ComponentesShowBlogs from './blog/ShowBlogs';
import ComponentesCreateBlog from './blog/CreateBlog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComponentesUpdateBlog from './blog/EditBlog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ComponentesShowBlogs />} />
          <Route path='/create' element={ <ComponentesCreateBlog />} />
          <Route path='/edit/:id' element={ <ComponentesUpdateBlog />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
