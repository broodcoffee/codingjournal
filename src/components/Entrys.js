import Entry from './Entry';

const Entrys = ({ entrys, onDelete, onToggle }) => {
    
    
    return (
        <>
          {entrys.map((entry) => (
              <Entry 
                key={entry.id} 
                entry={entry}
                onDelete={onDelete} 
                onToggle={onToggle}
              />
          ))}  
        </>
    )
}

export default Entrys;
