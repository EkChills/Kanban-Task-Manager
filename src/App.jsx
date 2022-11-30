import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import BoardDisplay from './components/BoardDisplay'
import SelectBoardModal from './components/modals/SelectBoardModal'

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <BoardDisplay />
    </div>
  )
}

export default App