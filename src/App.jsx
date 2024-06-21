import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Container } from '@mui/material'

function App() {

  return (
    <>
    <Container fixed>
      <Navbar />
      <Outlet />
    </Container>
    </>
  )
}

export default App
