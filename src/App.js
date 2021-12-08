import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import LogHeader from './components/LogHeader';
import FormHeader from './components/FormHeader';
import Entrys from './components/Entrys';
import AddEntry from './components/AddEntry';
import Footer from './components/Footer';

const App = () => {
  const [showAddEntry, setShowAddEntry] = useState(false);
  //variable name misspelled to avoid confusion with reserved word
  const [entrys, setEntrys] = useState([]);

  //Add Task
  const addEntry = (entry) => {
    const id = Date.now();
    const newEntry = { id, ...entry };
    setEntrys([...entrys, newEntry]);
    console.log(id);
  }
  
  useEffect(() => {
    localStorage.setItem("entrys", JSON.stringify(entrys));
  }, [entrys]);
  

  //Delete Entry
  const deleteEntry = (id) => {
    setEntrys(entrys.filter((entry) => entry.id !== id));
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
          <LogHeader logType='Tasks' />
          {entrys.length > 0 ? 
            <Entrys 
              entrys={entrys}  
              onDelete={deleteEntry}
              onToggle={toggleReminder} 
            />
            : 'No Entries To Show'  
          }
          {entrys.length !== 0 && <Footer onClick={deleteAll} />}
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className='container'>
          <LogHeader logType='Thoughts' />
          {entrys.length > 0 ? 
            <Entrys 
              entrys={entrys}
              onDelete={deleteEntry}
              onToggle={toggleReminder} 
            />
          : 'No Entries To Show' }
          {entrys.length !== 0 && <Footer onClick={deleteAll} />}
        </div>
      </Grid>
    </Grid>
  );
}

export default App;
