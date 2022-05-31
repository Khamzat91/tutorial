import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import './index.css'
import Home from "./pages/Home";
import About from "./pages/About";
import {FullPost} from "./pages/FullPost";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

// function Route({path, elements, exact}) {
//   const pathname = window.location.pathname;
//
//   if (exact) {
//     if (path === pathname) {
//       return elements
//     }
//   } else {
//     if (pathname.includes(path)) {
//       return elements
//     }
//   }
//   return null;
// }


const App = () => {
  // const postId = window.location.pathname.split('/post/')[1]

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/post/:id' element={<FullPost/>}/>
          <Route path='/not-found' element={<NotFound/>}/>
          <Route path='*' element={<Navigate to='not-found'/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;