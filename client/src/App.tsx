import React from 'react';
import './App.css';
import  DataTable from './components/DataTable';

const App: React.FC = () => {

  return (
      <main>
          <h1>ניהול משימות</h1>
          <div>
              חיפוש
          </div>
          <DataTable></DataTable>
      </main>

  );
}

export default App;
