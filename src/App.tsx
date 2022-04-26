import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route
        path="/"
      >
        <Home />
      </Route>
      <Route
        path="/pokemon/:id"
      >
        <Pokemon />
      </Route>
    </Router>
  )
}

export default App
