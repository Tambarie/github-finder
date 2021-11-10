import axios from 'axios'
import React, { Component } from 'react'
import './App.css'
import Navbar from './components/layouts/Navbar'
import Users from './components/users/Users'

class App extends Component {
  state = {
    users: [],
    loading: false,
  }
  async componentDidMount() {
    console.log
    this.setState({ users: true })
    const response = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
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
