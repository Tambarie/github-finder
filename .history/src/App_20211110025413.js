import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/layouts/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'

const App = () => {
  const [users, setUsers] = useState([])
  const [state, setState] = useState(true)
  const [alert, setAlarm] = useState({
    message : null,
    color : ''
  })

  const searchUsers = async (text) => {
    const response = await axios(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    setUsers(response.data.items)
    setState(false)
  }

  useEffect(() => {
    searchUsers()
  }, [])

  const clearUsers = () => {
    setUsers([])
  }

  const setAlert = (message, color)=>{
    setAlarm({
      message:message,
      color:color
    })

  }
  const title = 'Github-finder'
  const icon = 'fab fa-github'
  return (
    <div className='App'>
      <Navbar title={title} icon={icon} />
      <Search
        searchUsers={searchUsers}
        clearUsers={clearUsers}
        display={users.length > 0 ? true : false}
        setAlert={setAlert}
      />
      <Users loading={state} users={users} />
    </div>
  )
}

export default App
