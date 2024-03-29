import React, {  useState } from 'react'

export default function Jobs(props) {
    
    const [formShow, setFormShow] = useState(false)

    

    const handleSubmit = (e) => {
        e.preventDefault()
       
    }

    const showCreateForm = () => {
        setFormShow(true)
        createNewForm()
    }

    const createNewForm = () => {
        if(formShow === true) {
            return (
                <div className="card-box">
                <form onSubmit={handleSubmit} >
                    <div className="upper">
                        <div className="company">
                            <label htmlFor="company">Company Name</label>
                            <input className='input' type="text" placeholder='Company Name...' required
                            onChange={props.handleChange} id="company1" value={props.company1} />   
                        </div>
                        <div className="position">
                            <label htmlFor="position">Position</label>
                            <input className='input' type="text" placeholder='Position...' required
                            onChange={props.handleChange} id="position1"  value={props.position1} />
                        </div>
                    </div> 
                    <div className="lower">  
                        <div className="from">
                            <label htmlFor="from">From</label>
                            <input className='input' type="date"  required 
                            onChange={props.handleChange} id="fromDateJob1"  value={props.fromJobDate1} />
                        </div>
                        <div className="to">
                            <label htmlFor="to">To</label>
                            <input className='input' type="date"  required  
                            onChange={props.handleChange} id="ToDateJob1" value={props.toJobDate1} />
                        </div>
                    </div>
                    <div className="tasksContainer">
                        <div className="tasks">
                            <textarea type="text" placeholder='Enter Tasks here...' 
                            onChange={props.handleChange} id="Tasks1" value={props.tasks1} />
                            
                        </div>
                    </div> 
                </form>
            </div>
    
            )
        } else {
            return
        }
       
    }

  return (
    <header>
        
        <div className="card">
            <h1>Exprerience</h1>
            <div className="card-box">
                <form onSubmit={handleSubmit} >
                    <div className="upper">
                        <div className="company">
                            <label htmlFor="company">Company Name</label>
                            <input className='input' type="text" placeholder='Company Name...' required
                            onChange={props.handleChange} id="company" value={props.company} />   
                        </div>
                        <div className="position">
                            <label htmlFor="position">Position</label>
                            <input className='input' type="text" placeholder='Position...' required
                            onChange={props.handleChange} id="position"  value={props.position} />
                        </div>
                    </div> 
                    <div className="lower">  
                        <div className="from">
                            <label htmlFor="from">From</label>
                            <input className='input' type="date"  required 
                            onChange={props.handleChange} id="fromDateJob"  value={props.fromJobDate} />
                        </div>
                        <div className="to">
                            <label htmlFor="to">To</label>
                            <input className='input' type="date"  required  
                            onChange={props.handleChange} id="ToDateJob" value={props.toJobDate} />
                        </div>
                    </div>
                    <div className="tasksContainer">
                        <div className="tasks">
                            <textarea type="text" placeholder='Enter Tasks here...' 
                            onChange={props.handleChange} id="Tasks" value={props.tasks} />
                            <div className='add-experience-container'> <p>Have More Work Experience?</p> 
                                <button onClick={showCreateForm} className="add-experience">Add</button>
                            </div>
                        </div>
                        
                    </div>  
                
                </form>
            </div>
           <div>{createNewForm()}</div> 
        </div>
    </header>
  )
}
