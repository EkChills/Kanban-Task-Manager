import React, { useContext, useState } from 'react'
import ReactDOM from 'react-dom'
import { TasksContext } from '../store/Context'
import styled from 'styled-components'
import AddNew from './buttons/AddNew'
import iconShowSidebar from '../assets/icon-show-sidebar.svg'
import ViewTaskDetails from './modals/ViewTaskDetails'
import AddNewTaskModal from './modals/AddNewTaskModal'


const MainBoard = () => {
  const { allBoards, tasksIndex, sidebarOpen, closeViewTaskModal, OpenSidebar,openViewTasksModal } = useContext(TasksContext)
  const [infoData, setInfoData] = useState({})
  const { columns } = allBoards[tasksIndex]

  const portalCont = document.getElementById('portals')


  const findTask = (theTitle) => {
   let found =  columns.map((item) => item.tasks).map(item => item.map((item) => item).find(item => item.title === theTitle)).reduce((total, item) => {
    if(!item) {
      return total
    } else {
      return total['found'] = item
    }
    
   }, {})
   setInfoData(found)
   openViewTasksModal()
   console.log(found);
  }

  


  return (
    <Wrapper>


      <div className={`${sidebarOpen ? 'board' : 'board board-full'} overflow-x-scroll px-6`}>
        <div className='flex items-start space-x-0'>
          {/* for tasks column */}
          {columns.map((column, index) => {
            const { name, tasks } = column
            return (
              <div key={index} className="flex flex-col space-y-4 mt-[6rem]">
                <div className="flex space-x-3 items-center">
                  <span className={`w-4 rounded-full ${name === 'Todo' ? 'bg-[#49C4E5]' : name === 'Doing' ? 'bg-[#8471F2]' : 'bg-[#67E2AE]'} p-[.55rem]`}></span>
                  <p className='text-grey text-[15px] font-semibold uppercase tracking-[.15rem]'>{name} ({tasks.length})</p>
                </div>

                {tasks.map((task, index) => {
                  const { title, description, status, subtasks } = task
                  const completed = subtasks.reduce((total, item) => {
                    if (item.isCompleted === true) {
                      return total + 1
                    }
                    return total
                  }, 0)
                  return (
                    <div onClick={() => findTask(title)} key={index} className='flex cursor-pointer flex-col min-w-[16rem]  task-board shadow-lg rounded-lg py-6 px-3 mr-6 w-72'>
                      <div className='max-w-[16rem] space-y-2'>
                        <h4 className='text-[16px]  font-bold'>{title}</h4>
                        <p className='text-[13px]  text-grey font-semibold'>{completed} of {subtasks.length} subtasks</p>
                      </div>

                    </div>
                  )
                })}
              </div>
            )
          })}

          {/* <div className='flex add-col-cont justify-center rounded-md items-center  w-72  px-10 cursor-pointer'>
            <div className='flex items-center space-x-1'>
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill=" #828FA3" d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z" /></svg>
            <p className='text-[15px] md:text-[18px] w-[7rem] text-grey font-semibold'>New Column</p>
            </div>
          </div> */}
        </div>

        {!sidebarOpen && <div onClick={OpenSidebar} className='text-red fixed hidden md:flex bg-darkPurple p-5  items-center cursor-pointer justify-center  left-0 bottom-8 rounded-r-full'>
          <img src={iconShowSidebar} alt="" />
        </div>}

      </div>


      {ReactDOM.createPortal(<ViewTaskDetails info={infoData} />, portalCont)}
      {/* {ReactDOM.createPortal(<AddNewTaskModal info={infoData} />, portalCont)} */}

    </Wrapper>
  )
}

const Wrapper = styled.div`





.add-col-cont {
  min-height: 100vh;
  margin-top: 8.4rem;
  background: var(--new-col-bcg);
}


.board {
  min-height: 100vh;
  width: calc(100% - 19.15rem);
  margin-left: 19.15rem;
  background-color: var(--main-bcg);
}

.board-full {
  width: 100%;
  margin-left: 0;
  box-sizing: border-box;
}

.task-board {
  background-color: var(--tasks-bcg);
  color: var(--tasks-text);
  transition: all .1s linear;
}

.task-board:hover {
  transform: translateY(5px);

}

/* .task-board > h4 {
  color: var(--taskstext)
} */

  @media screen and (max-width: 768px) {
    
    .board {
      width: 100%;
      margin-left: 0;
    }
  }
`

export default MainBoard