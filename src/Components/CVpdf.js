import phoneimg from './call.svg'
import mailimg from './mail.svg'
import img1 from './img1.jpg'
import { useReactToPrint } from 'react-to-print'
import { useRef } from 'react'


export default function CVpdf(props) {

 


  const uploadImage = () => {
    if(props.userImage === undefined) {
      return (
        <img src={img1} alt="userImage" />
      )
    } else  {
      return (
        <img src={URL.createObjectURL(props.userImage)} alt="userImage" />
      )
    }
  }

 

  const showDate = (fromDate, toDate) => {
   
    const currentDate =  new Date().toLocaleDateString('en-CA')
   
    

    if(toDate === currentDate) {
      return (
        <h4> {fromDate + " " + "-"}  Till Date </h4>
      )
    } else  {
      return (
        <h4> {fromDate  + " " + "-"}  {toDate} </h4>
      )
    }
  }

  



  return (
    <div className="CV">
      <div ref={props.componentRef} className="container">
        <div className="left_side">
          <div className="profileText">
            <div className="imgBx">{uploadImage()}</div>
            <h2>
              {props.name} {props.lastName} <br></br>{" "}
              <span>{props.profession}</span>
            </h2>
          </div>
          <div className="contactInfo">
            <h3 className="title">Contact Info</h3>
            <ul>
              <li className="icon">
                <span className="icon">
                  <img src={phoneimg} alt="" />
                </span>
                <span className="text">{props.phone}</span>
              </li>
              <li className="icon">
                <span className="icon">
                  <img src={mailimg} alt="" />
                </span>
                <span className="text">{props.email}</span>
              </li>
            </ul>
          </div>

          <div className="contactInfo education">
            <h3 className="title">Education</h3>
            <ul>
              <li className="icon">
                <span className="text">{props.school}</span>
              </li>
              <li className="icon">
                <span className="text">{props.titleOfStudy}</span>
              </li>
              <li className="text">{showDate(props.fromDate, props.toDate)}</li>
            </ul>
          </div>
        </div>
        <div className="right_side">
          <div className="about">
            <h2 className="title2">About me</h2>
            <p>{props.about}</p>
          </div>
          <div className="experience">
            <h2 className="title2">Experience</h2>
            <div className="box">
              <div className="year_company">
                {showDate(props.fromJobDate, props.toJobDate)}
                <h4> {props.company} </h4>
                <h4> {props.position} </h4>
              </div>
              <div className="text">
                <p> {props.tasks} </p>
              </div>
            </div>
            <br />
            <div className="box">
              <div className="year_company">
                {showDate(props.fromJobDate1, props.toJobDate1)}
                <h4> {props.company1} </h4>
                <h4> {props.position1} </h4>
              </div>
              <div className="text">
                <p> {props.tasks1} </p>
              </div>
            </div>
            <br />
            <div className="hobbies">
              <h2 className="title2">Hobbies</h2>
              <div className="box">
                <p className="text">{props.hobbies}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
