import React from 'react';
import './App.css';
import AyodaiLogo from './images/ayodai.png'

function App() {
  return (/**
       <BrowserRouter>
       <Routes>
       <Route index path={'/'} element={<DashboardPage/>}/>
       <Route  path={'/ayodai'} element={<DashboardPage/>}/>
       </Routes>
       </BrowserRouter>
       **/
      <div className={'container shadow p-3 m-auto bg-white rounded '}>
          <div className={'row justify-content-md-center'}>
              <div className={'col-md-auto p-3 bg-white rounded'}>
                  <img src={AyodaiLogo} alt={'Ayodai logo'}></img>
              </div>
          </div>
          <div className={'row p-3 m-auto bg-white'}>
              <div className={'col'}>1 Day</div>
              <div className={'col'}>2 Hours</div>
              <div className={'col'}>3 Minutes</div>
              <div className={'col'}>4 Seconds</div>
          </div>
          <div className={'row justify-content-md-center'}>
              <div className={'col-md-auto p-3 bg-white rounded'}>
                  <label> Under construction</label>
              </div>

          </div>
      </div>
  );
}

export default App;
