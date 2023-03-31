import Navbar from './Components/Navbar'
import HomePage from './HomePage'
import './styles.css'
import CVpdf from './Components/CVpdf'
import {  Routes, Route } from "react-router-dom";
import { useRef, useState } from 'react'
import Axios from 'axios';
import { useReactToPrint } from 'react-to-print';

function App() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [location, setLocation] = useState("")
  const [profession, setProfession] = useState("")
  const [linkedin, setLinkedin] = useState("")
  const [github, setGithub] = useState("")

  const [about, setAbout] = useState("")
  const [hobbies, setHobbies] = useState("")
  const [userImage, setUserImage] = useState()

  const [school, setSchool] = useState('');
  const [titleOfStudy, settitleOfStudy] = useState("")
  const [fromDate, setfromDate] = useState("")
  const [toDate, settoDate] = useState("")

  const [company, setcompany] = useState('');
  const [position, setposition] = useState("")
  const [fromJobDate, setfromJobDate] = useState("")
  const [toJobDate, settoJobDate] = useState("")
  const [tasks, setTasks] = useState("")

  const [company1, setcompany1] = useState('');
  const [position1, setposition1] = useState("")
  const [fromJobDate1, setfromJobDate1] = useState("")
  const [toJobDate1, settoJobDate1] = useState("")
  const [tasks1, setTasks1] = useState("")

  

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

    }  else if(e.target.id === "location") {
      setLocation(e.target.value)

    } else if(e.target.id === "profession") {
      setProfession(e.target.value)

    } else if(e.target.id === "hobbies") {
      setHobbies(e.target.value)

    }  else if(e.target.id === "linkedin") {
      setLinkedin(e.target.value)

    }  else if(e.target.id === "github") {
      setGithub(e.target.value)

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

    if(e.target.id === "company1") {
      setcompany1(e.target.value); 

    } else if (e.target.id === "position1") {
      setposition1(e.target.value);

    } else if (e.target.id === "fromDateJob1") {
      setfromJobDate1(e.target.value);

    }else if (e.target.id === "ToDateJob1") {
      settoJobDate1(e.target.value);

    }else if (e.target.id === "Tasks1") {
      setTasks1(e.target.value);

    }  
    
    

    const person = { name, lastName, email, phone, school, titleOfStudy, fromDate, toDate, profession, location, hobbies
    , company, position, toJobDate, fromJobDate, tasks, about, profession, location,
     company1, position1, toJobDate1, fromJobDate1, tasks1, userImage, linkedin, github }
    console.log(person)
  };


  const handleUpload = (e) => {
    setUserImage(e.target.files[0])
    
  }

  const componentRef = useRef()

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Resume'
  })

  return (
    
  <div>
    <Navbar handlePrint={handlePrint} />
    <Routes>
      <Route path='/' element={<HomePage  handleChange={handleChange} name={name} lastName={lastName} email={email}phone={phone} about={about} profession={profession} location={location} hobbies={hobbies} 
       school={school} titleOfStudy={titleOfStudy} fromDate={fromDate} toDate={toDate} 
        company={company} position={position} fromJobDate={fromJobDate} toJobDate={toJobDate} tasks={tasks}
        company1={company1} position1={position1} fromJobDate1={fromJobDate1} toJobDate1={toJobDate1} tasks1={tasks1} linkedin={linkedin} github={github}
        handleUpload={handleUpload} />}/>
        
      <Route path='/CVpdf' element={<CVpdf name={name} lastName={lastName} email={email}phone={phone} about={about} profession={profession} location={location} hobbies={hobbies}
       school={school} titleOfStudy={titleOfStudy} fromDate={fromDate} toDate={toDate} 
        company={company} position={position} fromJobDate={fromJobDate} toJobDate={toJobDate} tasks={tasks}
        company1={company1} position1={position1} fromJobDate1={fromJobDate1} toJobDate1={toJobDate1} tasks1={tasks1}
        userImage={userImage} componentRef={componentRef} linkedin={linkedin} github={github}  />} /> 

    </Routes>
   
  </div>
  );
}

export default App;
