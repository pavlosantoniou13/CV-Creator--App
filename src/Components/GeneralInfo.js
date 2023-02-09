import React from 'react'

export default function GeneralInfo(props) {
   
    const handleSubmit = (e) => {
        e.preventDefault()
       
    }

  return (
    <header>
        
        <div className="form">
        <h1>General Information</h1>
            <form  onSubmit={handleSubmit}>
                <div className="upper">
                    <div className="firstName">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" placeholder='First Name...' required
                         onChange={props.handleChange} id="name" value={props.name} />   
                    </div>
                    <div className="lastName">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" placeholder='Last Name...' required 
                       onChange={props.handleChange} id="lastName" value={props.lastName} />
                    </div>
                </div> 
                <div className="lower">  
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Email...' required 
                       onChange={props.handleChange} id="email" value={props.email} />
                    </div>
                    <div className="phone">
                        <label htmlFor="phone">Phone number</label>
                        <input type="number" placeholder='(00)+ 123-456-789' required
                        onChange={props.handleChange} id="phone" value={props.phone} />
                    </div>
                </div>  
                <div className="tasksContainer">
                    <div className="about">
                        <textarea type="text" placeholder='Write something about yourself...' 
                        onChange={props.handleChange} id="about" value={props.about} />
                    </div>
                </div>  
            </form>
        </div>
    </header>
  )
}
