import { useEffect } from 'react'
import './App.css'
import MainMenu from './components/MainMenu'
import AllRoutes from './routes'
import { useGlobalStore } from './store'
import { getUserAccessTokenLocalStorage } from './utils'

function App() {
  const {setToken}= useGlobalStore()

  useEffect(()=>{
    setToken(getUserAccessTokenLocalStorage())
  },[])

  return (
    <>
      <MainMenu />
      <AllRoutes />
    </>
  )
}

export default App
