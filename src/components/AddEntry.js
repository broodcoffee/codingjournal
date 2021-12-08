import { useState } from 'react';

const AddEntry = ({ onAdd }) => {
    const [entryType, setEntryType] = useState('');
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(true);

    const onSubmit = (e) => {
        e.preventDefault();
        
        if (entryType === 'task') {
            onAdd({ entryType, text, day, reminder });

            setEntryType('');
            setText('');
            setDay('');
            setReminder(true);
        }
        else if (entryType === 'thought') {
            onAdd({ entryType, text, day });

            setEntryType('');
            setText('');
            setDay('');
        }
        else {
            alert('Please indcate if your input is a "Task" or a "Thought"');
            return;
        }
    }


    const onReset = () => {
        window.confirm('This will clear all inputs. Continue?')
        setEntryType('');
        setText('');
        setDay('');
        setReminder(true);
        
    }

    return (
        <form className='add-form' onSubmit={onSubmit} onReset={onReset} >
            <div className='form-control form-control-check'>
                <p>Select Type:</p>
                <input type='radio' value='task' checked={entryType === 'task'} onChange={(e) => setEntryType(e.target.value)} required />
                <label>Task </label>
                <input type='radio' value='thought' checked={entryType === 'thought'} onChange={(e) => setEntryType(e.target.value)} />
                <label>Thought </label>
            </div> 
            <div className='form-control'>
                <label>Date: </label>
                <input type='date' value={day} onChange={(e) => setDay(e.target.value)} required pattern='\d{2}-\d{2}-\d{4}' />
            </div>
            <div className='form-control'>
                <label>Entry: </label>
                <input type='text' placeholder='Keep It Short and Sweet' value={text} onChange={(e) => setText(e.target.value)} required />
            </div>
            <div className='form-control form-control-btns'>
            <input className='btn btn-block' type='reset' value='Clear Text' />
            <input className='btn btn-block' type='submit' value='Save Text' />
            </div>
        </form>
    )
}

export default AddEntry;
