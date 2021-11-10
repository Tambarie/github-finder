import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/layouts/Navbar'
import Users from './components/users/Users'

const App = () => {
  const [users, setUsers] = useState({
    users: [],
    loading: false,
  })
  const setter = async () => {
    const response = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    setUsers(
      {
        users: response.data,
        loading: true,
      }
    )
    console.log(users)
  }

  useEffect(() => {
    setter()
  })qw

  const title = 'Github-finder'
  const icon = 'fab fa-github'
  return (
    <div className='App'>
      <Navbar title={title} icon={icon} />
      {/* <Users loading={users.loading} users={users.users} /> */}
    </div>
  )
}

export default App
