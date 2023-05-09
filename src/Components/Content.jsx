import React from 'react'
import {Routes, Route} from 'react-router-dom'

const Content = () => {
  return (
    <div>
         <Routes>
            <Route path='/' element={<OverviewDashboard />}></Route>
            <Route path='/staffs' element={<StaffsDashboard />}></Route>
            <Route path='/preference-settings' element={<Preference />}></Route>
            <Route path='/profile-settings' element={<EditProfileForm initialValues={data}/>}></Route>
            <Route path="/logout" element={<Login />}> </Route>
        </Routes>
    </div>
  )
}

export default Content
