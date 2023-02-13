import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>

  )
}

export default App
