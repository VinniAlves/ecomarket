import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,BrowserRouter as Router , Route, Routes, Link, RouterProvider} from "react-router-dom"
import Home from './Home/JS/Home'
import Registrar from './Registro/JS/Registrar';
import Login from './Login/JS/Login';
import Catalogo from './Menu/Catalogo/JS/Catalogo';
import CadastroProduto from './Menu/CadastroProduto/JS/CadastroProduto';
import Teste from './Teste'
import EditarProduto from './Menu/EditarProduto/JS/EditarProduto';


const routes = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
{
  path: '/registro',
  element: <Registrar/>
},
{
  path: '/login',
  element: <Login/>
},
{
  path: '/catalogo',
  element: <Catalogo/>
},
{
  path: '/cadastroproduto',
  element: <CadastroProduto/>
},
{path: "/teste",
element: <Teste/>
},
{path: "/editarproduto",
element: <EditarProduto/>
},

])


function App() {
  return (
     <RouterProvider router={routes}/>
  );
}

export default App;