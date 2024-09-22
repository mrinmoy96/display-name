import React, { useState } from 'react'

const Display = () => {
	const[firstName, setFirstName]=useState("");
	const[lastName, setLastName]=useState("");
	const[fullName, setFullName]=useState("");
	const[error, setError]=useState("")

	const handleSubmit=(e)=>{
		e.preventDefault();
		if (!firstName || !lastName) {
			setError("Both first name and last name are required.");
			return;
		}
		setFullName(`${firstName} ${lastName}`)
		 setError("")
	}

  return (
	<div>
		<h1>Full Name Display</h1>
		<form onSubmit={handleSubmit}>
		   <div>
		     <label htmlFor="firstName">First Name:</label>
			 <input 
			 type="text" 
			 id="firstName"
			 value={firstName}
             onChange={(e)=>setFirstName(e.target.value)}
			 />
		   </div>
		   <div>
		     <label htmlFor="">Last Name:</label>
			 <input 
			 type="text" 
				id="lastName"
				value={lastName}
				onChange={(e)=>setLastName(e.target.value)}
			 />
		   </div>
		   <button type="submit" disabled={!firstName || !lastName}>Submit</button>
			
		</form>
		{error && <p style={{ color: "red" }}>{error}</p>}
		{fullName && <p>Full Name: {fullName}</p>}
	
	</div>
  )
}

export default Display