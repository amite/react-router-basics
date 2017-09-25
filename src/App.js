import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const HomePage = () => <h1>Home</h1>
const Dashboard = () => <h1>Dashboard</h1>

const fidgetSpinnersInventory = [
  { name: 'Batman Batarang Alloy', url: 'batman-alloy', price: 499 },
  { name: 'Gear Type Pure Metal', url: 'gear-metal', price: 299 },
  { name: 'Pirates of the Caribbean', url: 'pirates-carribean', price: 1499 }
]

const FidgetyStoreSubLayout = () => {
  return (
    <div>
      <h1>Fidgety - Fidget Spinner Store</h1>
      {fidgetSpinnersInventory.map(fidget => {
        return (
          <h5>
            <Link to={`fidgets/${fidget.url}`}>{fidget.name}</Link>
          </h5>
        )
      })}
    </div>
  )
}

const Layout = () => (
  <div className="primary-layout">
    <header>
      <h1>Our React Router 4 App</h1>
    </header>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/fidgets">Fidgets</Link>
        </li>
      </ul>
    </nav>
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/fidgets" component={FidgetyStoreSubLayout} />
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
