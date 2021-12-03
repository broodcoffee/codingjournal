import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
                color={showAdd ? 'darkred' : 'green'} 
                text={showAdd ? 'Close' : 'Click to Add'} 
                onClick={onAdd}
            />
        </header>
    )
}

Header.defaultProps = {
    title: `Entry Form`,
}


export default Header;
