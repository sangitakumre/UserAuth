import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './Redux/store'
import Index from './Components/index'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Dashboard from './Components/Dashboard/Dashboard'
import SignUp from './Components/SignUp/SignUp'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Index>
            <Route exact path="/" component={Home}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/signup" component={SignUp}/>
          </Index>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
