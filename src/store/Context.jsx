import React, {useState, useEffect} from 'react'
import data from '../data.json'




const TasksContext = React.createContext();

const AppProvider = ({children}) => {
  const [tasksIndex, setTasksIndex] = useState(0)
  const [allBoards, setAllBoards] = useState(data.boards)
  const [theme, setTheme] = useState('light-mode')
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [showSelected, setShowSelected] = useState(false)



  const OpenSidebar = () => {
    setSidebarOpen(true)
  }

  
  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  const changeBoard = (boardIndex) => {
    setTasksIndex(boardIndex)
  }

  const toggleTheme = () => {
    if (isChecked) {
      setTheme('dark-mode')
    } else {
      setTheme('light-mode')
    }
  }

  const openViewTasksModal = () => {
    setShowSelected(true)
  }

  
  const closeViewTasksModal = () => {
    setShowSelected(false)
  }


  useEffect(() => {
    toggleTheme()
    document.documentElement.className = theme
  },[theme, isChecked])
  

  return (
    <TasksContext.Provider value={{allBoards, tasksIndex, sidebarOpen,isChecked, setIsChecked,  setSidebarOpen,
    OpenSidebar, closeSidebar, changeBoard, showSelected, setShowSelected, openViewTasksModal,closeViewTasksModal}}>
      {children}
    </TasksContext.Provider>
  )
}

export {AppProvider, TasksContext}