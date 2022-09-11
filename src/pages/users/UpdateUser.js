import React from 'react'
import { useParams } from 'react-router-dom';

function UpdateUser() {
  const { user_id } = useParams();
  console.log(user_id)
  return (
    <div>Update User user_id:  {user_id}</div>
  )
}

export default UpdateUser
