import Navbar from './Components/Navbar'
import HomePage from './HomePage'
import './styles.css'
import CVpdf from './Components/CVpdf'
import {  Routes, Route } from "react-router-dom";
import { useState } from 'react'

function App() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [about, setAbout] = useState("")

  const [school, setSchool] = useState('');
  const [titleOfStudy, settitleOfStudy] = useState("")
  const [fromDate, setfromDate] = useState("")
  const [toDate, settoDate] = useState("")

  const [company, setcompany] = useState('');
  const [position, setposition] = useState("")
  const [fromJobDate, setfromJobDate] = useState("")
  const [toJobDate, settoJobDate] = useState("")
  const [tasks, setTasks] = useState("")

  const handleChange = (e) => {
    
    if(e.target.id === "name") {
      setName(e.target.value); 

    } else if (e.target.id === "lastName") {
      setLastName(e.target.value);

    } else if (e.target.id === "email") {
      setEmail(e.target.value);

    }else if (e.target.id === "phone") {
      setPhone(e.target.value);

    } else if(e.target.id === "about") {
      setAbout(e.target.value)
    }
    
  


    if(e.target.id === "school") {
      setSchool(e.target.value); 

    } else if (e.target.id === "studyTitle") {
      settitleOfStudy(e.target.value);

    } else if (e.target.id === "fromDate") {
      setfromDate(e.target.value);

    }else if (e.target.id === "toDate") {
      settoDate(e.target.value);

    }

    if(e.target.id === "company") {
      setcompany(e.target.value); 

    } else if (e.target.id === "position") {
      setposition(e.target.value);

    } else if (e.target.id === "fromDateJob") {
      setfromJobDate(e.target.value);

    }else if (e.target.id === "ToDateJob") {
      settoJobDate(e.target.value);

    }else if (e.target.id === "Tasks") {
      setTasks(e.target.value);

    }  
    const person = { name, lastName, email, phone, school, titleOfStudy, fromDate, toDate
    , company, position, toJobDate, fromJobDate, tasks, about }
    console.log(person)
  };

  return (
    
  <div>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage  handleChange={handleChange} name={name} lastName={lastName} email={email}phone={phone} about={about} 
       school={school} titleOfStudy={titleOfStudy} fromDate={fromDate} toDate={toDate} 
        company={company} position={position} fromJobDate={fromJobDate} toJobDate={toJobDate} tasks={tasks} />}/>
        
      <Route path='/CVpdf' element={<CVpdf name={name} lastName={lastName} email={email}phone={phone} about={about} 
       school={school} titleOfStudy={titleOfStudy} fromDate={fromDate} toDate={toDate} 
        company={company} position={position} fromJobDate={fromJobDate} toJobDate={toJobDate} tasks={tasks}  />} /> 

    </Routes>
   
  </div>
  );
}

export default App;
