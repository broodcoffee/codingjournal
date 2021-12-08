const LogHeader = ({ logType }) => {
    const today = new Date();

    return (
        <div>
            <h1>{logType} for {today.toLocaleDateString()}</h1>            
        </div>
    )
}

export default LogHeader;
