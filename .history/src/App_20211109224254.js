import axios from 'axios'
import React, { useState } from 'react'
import './App.css'
import Navbar from './components/layouts/Navbar'
import Users from './components/users/Users'

const  App = ()=> {
   const [users, setUsers]= ({
     users: []
   })


 const setter = async () =>{

 }
   \
    const response = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    console.log(response.data)
    this.setState({ users: response.data })
  }

  render() {
    const title = 'Github-finder'
    const icon = 'fab fa-github'
    return (
      <div className='App'>
        <Navbar title={title} icon={icon} />
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
    )
  }
}

export default App
