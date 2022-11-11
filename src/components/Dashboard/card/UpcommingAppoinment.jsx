import React from 'react'
import AppoinmentCalender from '../Calender/AppoinmentCalender'
import UpcommingAppoinmentIndividual from './UpcommingAppoinmentIndividual'
const UpcommingAppoinment = () => {
  return (
    <div>
      <AppoinmentCalender />
      <UpcommingAppoinmentIndividual />
    </div>
  )
}

export default UpcommingAppoinment