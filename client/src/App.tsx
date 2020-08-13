import React, {Fragment} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "./components/AppNavbar";
import  DataTable from './components/DataTable';

import { Provider } from "react-redux";
import store from "./store";



const App = () => {

  return (
      <Provider store={store}>
          <Fragment>
              <nav>
                  <div>
                      <AppNavbar />
                  </div>
              </nav>
              <main>
                  <h1>ניהול משימות</h1>
                  <DataTable></DataTable>
              </main>
          </Fragment>
      </Provider>

  );
}

export default App;
