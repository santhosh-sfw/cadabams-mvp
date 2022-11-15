import React from 'react'
import AppoinmentCalender from '../Calender/AppoinmentCalender'
import UpcommingAppoinmentIndividual from './UpcommingAppoinmentIndividual'
const UpcommingAppoinment = ({ list }) => {
  return (
    <div>
      <AppoinmentCalender />
      <UpcommingAppoinmentIndividual list={list} />
    </div>
  )
}

export default UpcommingAppoinment