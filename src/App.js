import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import FormHeader from './components/FormHeader';
import Entrys from './components/Entrys';
import AddEntry from './components/AddEntry';
import Footer from './components/Footer';

const App = () => {
  const [showAddEntry, setShowAddEntry] = useState(false);

  //variable name misspelled to avoid confursion with reserved word
  const [entrys, setEntrys] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: '2021-02-05',
      reminder: true, 
  },
  {
    id: 2,
    text: 'Meeting at School',
    day: '2021-02-06',
    reminder: true, 
  },
  {
    id: 3,
    text: 'Food Shopping',
    day: '2021-02-05',
    reminder: false, 
  },
  ]);

  //Add Task
  const addEntry = (entry) => {
    const id = Date.now();
    const newEntry = { id, ...entry };
    setEntrys([...entrys, newEntry]);
  }
  
  useEffect(() => {
    localStorage.setItem("entrys", JSON.stringify(entrys));
  }, [entrys]);
  

  //Delete Entry
  const deleteEntry = (id) => {
    setEntrys(entrys.filter((entry) => entry.id !== id));
    console.log(id);
  }

  //Delete All Entries
  const deleteAll = (e) => {
    e.preventDefault();
    window.confirm('This will delete all entries. Continue?');
    setEntrys([]);      
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setEntrys(entrys.map((entry) => 
      entry.id === id ? 
      { ...entry, reminder: !entry.reminder } 
      : entry
      )
    );
  }


  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <div className='container'>
          <FormHeader 
            onAdd={() => setShowAddEntry(!showAddEntry)} 
            showAdd={showAddEntry}
          />
          {showAddEntry && <AddEntry onAdd={addEntry} />}
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className='container'>
          {entrys.length > 0 ? 
            <Entrys 
              entrys={entrys}
              onDelete={deleteEntry}
              onToggle={toggleReminder} 
            />
            : 'No Entries To Show' }
            <Footer onClick={deleteAll}/>
        </div>
      </Grid>
      {/*
      <Grid item xs={4}>
        <div className='container'>
          {entrys.length > 0 ? 
            <Entrys 
              entrys={entrys}
              onDelete={deleteEntry}
              onToggle={toggleReminder} 
            />
          : 'No Entries To Show' }
          <Footer onClick={deleteAll}/>
        </div>
      </Grid>
      */}
    </Grid>
  );
}

export default App;
