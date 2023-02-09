import React from 'react'
import img1 from './img1.jpg'
import phoneimg from './call.svg'
import mailimg from './mail.svg'


export default function CVpdf(props) {
  return (
    <div className='CV'>
     
    
      <div className="container">
        <div className="left_side">
          <div className="profileText">
            <div className="imgBx">
              <img src={img1} alt="lala" />
            </div>
            <h2>{props.name} {props.lastName} <br></br> <span>Web Developer</span></h2>
          </div>
          <div className="contactInfo">
            <h3 className="title">Contact Info</h3>
            <ul>
              <li className='icon'>
                <span className="icon"><img src={phoneimg} alt="" /></span>
                <span className="text">{props.phone}</span>

              </li>
              <li className='icon'>
                <span className="icon"><img src={mailimg} alt="" /></span>
                <span className="text">{props.email}</span>

              </li>
            </ul>
          </div>

          <div className="contactInfo education">
            <h3 className="title">Contact Info</h3>
            <ul>
              <li className='icon'>
                <span className="text">{props.school}</span>
              </li>
              <li className='icon'>
                <span className="text">{props.titleOfStudy}</span>
              </li>
              <li className='icon'>
                <span className="text"> {props.fromDate} - {props.toDate}</span>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="right_side">
          <div className="about">
            <h2 className="title2">Profile</h2>
            <p>{props.about}</p>
          </div>
          <div className="about">
            <h2 className="title2">Experience</h2>
            <div className="box">
              <div className="year_company">
              <h4> {props.fromJobDate} - {props.toJobDate} </h4>
                <h4> {props.company} </h4>
                <h4> {props.position} </h4>
              </div>
              <div className="text">
                <p> {props.tasks} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     


    </div>


    
  )
}
