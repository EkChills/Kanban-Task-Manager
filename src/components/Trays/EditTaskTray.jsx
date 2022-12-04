import React, { useEffect } from 'react'
import ReactDOM  from 'react-dom'
import styled from 'styled-components'
import { TasksContext } from '../../store/Context'
import EditTask from '../modals/EditTask'

const EditTaskTray = ({found, findEditItem, info}) => {
  const {showEditTaskTray, allBoards, tasksIndex,setShowEditTaskTray, AddedTasks, setAddedTasks, setShowEditTaskModal,setShowSelected } = React.useContext(TasksContext)

  const foundItem = findEditItem()?.tasks
  const foundEditedItem = foundItem?.find((item) => item.title === found)
  const foundItemIndex = foundItem?.indexOf(foundEditedItem)
  const portalElement = document.getElementById('portals')

  const {columns} = allBoards[tasksIndex]

  const colFound =  columns.find((item) => item.name === info.status)


  // // console.log(foundEditedItem);
  // console.log(colFound);


  
  
  
  
  return (
    <Wrapper>
      <div className={`flex flex-col space-y-5 main-cont ${showEditTaskTray ? 'show' : 'dont-show'} z-50 transition-all ease-in-out  show rounded-lg py-5 px-4 w-[7rem] md:w-[10rem]  md:pr-6`}>
        <p className='text-grey text-[13px] cursor-pointer' onClick={() => {
          findEditItem()
          setShowSelected(false)
          setShowEditTaskModal(true)
        }} >Edit Task</p>
        <p className='text-deepRed text-[13px] cursor-pointer'>Delete task</p>
      </div>
      {ReactDOM.createPortal(<EditTask foundItem={foundItem} colFound={colFound} foundEditedItem={foundEditedItem} foundItemIndex={foundItemIndex} />, portalElement)}
    </Wrapper>

  )
}

const Wrapper = styled.div`
.show {
  visibility: visible;
  opacity: 1;
  z-index: 50;
}

.dont-show {
  visibility: hidden;
  opacity: 0;
}
position: absolute;
top: 4.5rem;
right: -3rem;
  .main-cont {
    background-color: var(--tray-color);
  }

  @media screen and (min-width:768px) {
    right: -5.6rem;
  }
`

export default EditTaskTray