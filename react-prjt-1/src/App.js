import React from "react";
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = (props) => {

  return (

    <div className='app-wrapper'>    {/*   компонента        */}
      <Header />                     {/*   подкомпонента     */}
      <Navbar />                     {/*   подкомпонента     */}
      <div className='app-wrapper-content'>

        <Routes>
          <Route path="/profile/*" element={<Profile state={props.state.profilePage} addPost={props.addPost} />} />
          <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogPage} />} />
          <Route path='/friends*' element={<Friends state={props.state.sidebarPage} />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>

      </div>
    </div>
  
  );
}

export default App;