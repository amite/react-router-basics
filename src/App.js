import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
  </div>
)

const fidgetSpinnersInventory = [
  {
    id: 1,
    name: 'Batman Batarang Alloy',
    productUrl: 'batman-alloy',
    price: 499
  },
  { id: 2, name: 'Gear Type Pure Metal', productUrl: 'gear-metal', price: 299 },
  {
    id: 3,
    name: 'Pirates of the Caribbean',
    productUrl: 'pirates-carribean',
    price: 1499
  }
]

const findFidget = productUrl => {
  return fidgetSpinnersInventory.find(
    fidget => fidget.productUrl === productUrl
  )
}

const Fidget = ({ match }) => {
  const fidget = findFidget(match.params.productUrl)
  return !!fidget ? (
    <div>
      <h3>{fidget.name}</h3>
      <p>Price: {fidget.price}</p>
    </div>
  ) : (
    <h3>Fidget Not Found</h3>
  )
}

const FidgetListView = ({ match, fidgets }) => {
  return (
    <div>
      <ul>
        {fidgets.map(fidget => {
          return (
            <li key={fidget.id}>
              <Link to={`${match.path}/${fidget.productUrl}`}>
                {fidget.name}
              </Link>
            </li>
          )
        })}
      </ul>
      <hr />
      <Route path={`${match.path}/:productUrl`} component={Fidget} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a Fidget.</h3>}
      />
    </div>
  )
}

const FidgetsSubLayout = ({ match }) => (
  <div>
    <h2>Top 3 Fidgets</h2>
    <FidgetListView match={match} fidgets={fidgetSpinnersInventory} />
  </div>
)

const Layout = () => {
  return (
    <div>
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

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/fidgets" component={FidgetsSubLayout} />
    </div>
  )
}

const App = () => (
  <Router>
    <Layout />
  </Router>
)

export default App
