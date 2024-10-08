const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
    const handleInputChanged = (event) => {
        const value = event.target.value;
        let errorText;
        if(isNaN(value) || value.length <= 0 ) { 
          errorText = 'Please enter a valid number'
        } else {
          errorText = ''
        }
        setCurrentNOE(value)
        setErrorAlert(errorText) 
      }
      
    return (
        <div id="number-of-events">
            <label>
                Number of Events:
            <input 
            type="text"
            defaultValue="32"
            onChange={handleInputChanged}
            data-testid="numberOfEventsInput"
            />
            </label>
        </div>
    )
};
export default NumberOfEvents;