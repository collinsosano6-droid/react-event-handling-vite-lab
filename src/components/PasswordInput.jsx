// Code PasswordInput Component Here

function PasswordInput (){
    function handleChange(e){
        console.log("Entering password...")
    }
    return(
        <>
        <input onChange={handleChange} type="password" placeholder="Enter password" />
        </>
    )
}

export default PasswordInput;