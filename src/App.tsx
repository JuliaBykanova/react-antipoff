import React, { useEffect, useState } from 'react';
import { hot } from "react-hot-loader/root";
import { Layout } from './shared/Layout';
import './main.global.css';
import './normalize.css';
import { applyMiddleware, createStore } from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { rootReducer } from './shared/store/reducer';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RegistrationForm } from './shared/RegistrationForm/RegistrationForm';
import { UserPage } from './shared/UserPage';


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));


function AppComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return(
    <Provider store={store}>
      {mounted &&
        <BrowserRouter>
          <Routes>
            <Route path="/users" element={<Layout/>}></Route>
            <Route path="/" element={<RegistrationForm/>}></Route>
            <Route path="/users/:id" element={<UserPage/>}></Route>
          </Routes>

        </BrowserRouter>

      }

    </Provider>



  );
};

export const App = hot(() => <AppComponent/>);
