import { FaTimes } from 'react-icons/fa';

//const storedEntry = localStorage.getItem("entrys");
//JSON.parse(storedEntry);
const Entry = ({ entry, onDelete, onToggle }) => {
    
    return (
        <div 
            className={`entry ${entry.reminder ? 'reminder' : ''} `} 
            onDoubleClick={() => onToggle(entry.id)}
        >
            <h3>
                {entry.text}{' '}
                <FaTimes 
                    style={{ color: 'darkred', cursor: 'pointer'}}
                    onClick={() => onDelete(entry.id)} 
                />
            </h3>
            <p><strong>{entry.day}</strong>
               <br />ID: {entry.id}
            </p>
        </div>
    )

}
export default Entry;
