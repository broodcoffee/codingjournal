import { useState } from 'react';


const AddEntry = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(true);

    const onSubmit = (e) => {
        e.preventDefault();
        
        if (!text) {
            alert('Please add an input');
            return;
        }

        onAdd({ text, day, reminder });

        setText('');
        setDay('');
        setReminder(true);
    }


    const onReset = () => {
        window.confirm('This will clear all inputs. Continue?')
        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className='add-form' onSubmit={onSubmit} onReset={onReset} >
            {/*
            <div className='form-control form-control-check'>
                <input type='radio' value='task'  required />
                <label>Task </label>
                <input type='radio' value='thought' />
                <label>Thought </label>
            </div> 
            */}
            <div className='form-control'>
                <label>Date: </label>
                <input type='date' value={day} onChange={(e) => setDay(e.target.value)} required/>
            </div>
            <div className='form-control'>
                <label>Entry: </label>
                <textarea type='text' rows={5} placeholder='Add Text' value={text} onChange={(e) => setText(e.target.value)} required/>
            </div>
            <div className='form-control form-control-btns'>
            <input className='btn btn-block' type='reset' value='Clear Text' />
            <input className='btn btn-block' type='submit' value='Save Text' />
            </div>
        </form>
    )
}

export default AddEntry;
