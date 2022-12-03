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
  const [showAddBoardModal, setShowAddBoardModal] = useState(false)
  const [showAddNewTaskModal, setShowAddNewTaskModal] = useState(false)
  const [showEditTaskTray, setShowEditTaskTray] = useState(false)
  const [showEditBoardTray, setShowEditBoardTray] = useState(false)
  const [AddedTasks, setAddedTasks] = useState({
    title: '',
    description: '',
    subtasks: '',
    status: 'Todo'
  })

  const handleAddedTaskChange = (e) => {
    const {name, value} = e.target
    setAddedTasks(prev => ({...prev, [name]: value }))
  }



  const OpenSidebar = () => {
    setSidebarOpen(true)
  }

  
  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  const openShowAddBoardModal = () => {
    setShowAddBoardModal(true)
  }

  const closeShowAddBoardModal = () => {
    setShowAddBoardModal(false)
  }

  const changeBoard = (boardIndex) => {
    setTasksIndex(boardIndex)
  }

  const openAddNewTaskModal = () => {
    setShowAddNewTaskModal(true)
  }

  const closeAddNewTaskModal = () => {
    setShowAddNewTaskModal(false)
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

  
  const handleCheck =(e) => {
    setIsChecked(e.target.checked)
  }


  useEffect(() => {
    toggleTheme()
    document.documentElement.className = theme
  },[theme, isChecked])
  

  return (
    <TasksContext.Provider value={{allBoards, tasksIndex, sidebarOpen,isChecked, setIsChecked,  setSidebarOpen,
    OpenSidebar, closeSidebar, changeBoard, showSelected, setShowSelected, openViewTasksModal,closeViewTasksModal,
    handleCheck, showAddBoardModal, setShowAddBoardModal, openShowAddBoardModal, closeShowAddBoardModal,
    openAddNewTaskModal, closeAddNewTaskModal, showAddNewTaskModal, setShowAddNewTaskModal,
    AddedTasks, setAddedTasks, handleAddedTaskChange, showEditTaskTray, setShowEditTaskTray,
    showEditBoardTray,setShowEditBoardTray}}>
      {children}
    </TasksContext.Provider>
  )
}

export {AppProvider, TasksContext}