import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const HomePage = () => <h1>Home</h1>
const Dashboard = () => <h1>Dashboard</h1>

const Layout = () => (
  <div className="primary-layout">
    <header>
      <h1>Our React Router 4 App</h1>
    </header>
    <nav>
      <ul>
        <li>Home</li>
        <li>Dashboard</li>
      </ul>
    </nav>
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/dashboard" component={Dashboard} />
    </main>
    <footer>
      <p>Common Footer here</p>
    </footer>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <Layout />
      </Router>
    )
  }
}

export default App
