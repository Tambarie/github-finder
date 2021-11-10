import axios from 'axios'
import React, { useState } from 'react'
import './App.css'
import Navbar from './components/layouts/Navbar'
import Users from './components/users/Users'

const  App = ()=> {
   const [users, setUsers]= ({
     users: [],
     loading: false
   })


 const setter = async () =>{

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
