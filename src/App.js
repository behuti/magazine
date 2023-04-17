import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/defaultLayout';
import Home from './routes/Home';
import Sports from './routes/Sports';
import Fashion from './routes/Fashion';
import Tech from './routes/Tech';
import ErrorPage from './routes/Error';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />} >
        <Route index element={<Home />}/>
        <Route path='sports' element={<Sports />}/>
        <Route path='fashion' element={<Fashion />}/>
        <Route path='tech' element={<Tech />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Route>
    </Routes>
  )
}

export default App;