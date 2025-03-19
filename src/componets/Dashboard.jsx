import React from 'react'
import Admin from './Admin'
function Dashboard(props) {
  return (
    <div>
        {
      props.role==="admin"?<Admin/>:null
        }
    </div>
  )
}

export default Dashboard
