import React from 'react'

export default function Jobs(props) {

    const handleSubmit = (e) => {
        e.preventDefault()
       
    }

  return (
    <header>
        
        <div className="form">
        <h1>Exprerience</h1>
            <form onSubmit={handleSubmit} >
                <div className="upper">
                    <div className="company">
                        <label htmlFor="company">Company Name</label>
                        <input type="text" placeholder='Company Name...' required
                        onChange={props.handleChange} id="company" value={props.company} />   
                    </div>
                    <div className="position">
                        <label htmlFor="position">Position</label>
                        <input type="text" placeholder='Position...' required
                        onChange={props.handleChange} id="position"  value={props.position} />
                    </div>
                </div> 
                <div className="lower">  
                    <div className="from">
                        <label htmlFor="from">From</label>
                        <input type="date"  required 
                        onChange={props.handleChange} id="fromDateJob"  value={props.fromJobDate} />
                    </div>
                    <div className="to">
                        <label htmlFor="to">To</label>
                        <input type="date"  required  
                        onChange={props.handleChange} id="ToDateJob" value={props.toJobDate} />
                    </div>
                </div>
                <div className="tasksContainer">
                    <div className="tasks">
                        <textarea type="text" placeholder='Enter Tasks here...' 
                        onChange={props.handleChange} id="Tasks" value={props.tasks} />
                    </div>
                </div>  
              
            </form>
        </div>
    </header>
  )
}
