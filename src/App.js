import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const HomePage = () => <h1>Home</h1>
const Dashboard = () => <h1>Dashboard</h1>

class App extends Component {
  render() {
    return <h1>Hello Router</h1>
  }
}

export default App
