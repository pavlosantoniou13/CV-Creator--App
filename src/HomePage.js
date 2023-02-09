import GeneralInfo from './Components/GeneralInfo'
import Education from './Components/Education'
import Jobs from './Components/Jobs'

import React from 'react'

export default function HomePage(props) {

  return (
    <div>
        <GeneralInfo handleChange={props.handleChange} name={props.name} lastName={props.lastName} email={props.email}phone={props.phone} about={props.about} />
        <Education handleChange={props.handleChange}  school={props.school} titleOfStudy={props.titleOfStudy} fromDate={props.fromDate} toDate={props.toDate} />
        <Jobs handleChange={props.handleChange} company={props.company} position={props.position} fromJobDate={props.fromJobDate} toJobDate={props.toJobDate} tasks={props.tasks} />
    </div>
  )
}
