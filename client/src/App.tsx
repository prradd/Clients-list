import React, {Fragment} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "./components/AppNavbar";
import  DataTable from './components/DataTable';


const App = () => {

  return (
      <Fragment>
          <nav>
              <div>
                  <AppNavbar />
              </div>
          </nav>
          <main>
              <h1>ניהול משימות</h1>
              <div>
                  חיפוש
              </div>
              <DataTable></DataTable>
          </main>
      </Fragment>
  );
}

export default App;
