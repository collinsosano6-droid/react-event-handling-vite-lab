// Code SubmitButton Component Here

function SubmitButton (){
    function handleEnter(){
        console.log("Mouse Entering")
    }
    function handleExit(){
        console.log("Mouse Exiting")
    }
    return(
        <>
            <button onMouseEnter={handleEnter} 
            onMouseLeave={handleExit} type="submit">Submit Password</button>
        </>
    )
}

export default SubmitButton;