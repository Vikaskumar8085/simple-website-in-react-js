
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Edit from './component/Edit';
import Home from './component/Home';
import Layout from './component/Layout';
import View from './component/View';
import Sea from './component/Sea';
class App extends React.Component{

  
  render(){
    return (
      <>
      <BrowserRouter>
      <Layout/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='#about' element={ <Edit/>}/>
        <Route path='' element={ <View/>}/>
        <Route path='' element={ <Sea/>}/>
      </Routes>
      </BrowserRouter>
   

     
      </>
    )
  }
}


export default App;
