const LogHeader = ({ entryType }) => {
    const today = new Date();

    return (
        <div>
            <h1>{entryType} for {today.toLocaleDateString()}</h1>            
        </div>
    )
}

export default LogHeader;
