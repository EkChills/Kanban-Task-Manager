import React, { useContext } from 'react'
import styled from 'styled-components'
import { TasksContext } from '../store/Context'
import boardIcon from '../assets/icon-board.svg'
import addTask from '../assets/icon-add-task-mobile.svg'
import lightIcon from '../assets/icon-light-theme.svg'
import darkIcon from '../assets/icon-dark-theme.svg'
import hideSidebar from '../assets/icon-hide-sidebar.svg'


const Sidebar = () => {
  const { allBoards, sidebarOpen, setSidebarOpen, OpenSidebar, closeSidebar, changeBoard, tasksIndex,
  toggleTheme,isChecked, setIsChecked, handleCheck } = useContext(TasksContext);
  const boardTitle = allBoards.map(((item) => item.name))



  console.log(isChecked);

  return (
    <Wrapper>
      <aside className={` ${sidebarOpen ? 'side-bar side-bar-open' : 'side-bar'} ${!isChecked ? 'border-[#E4EBFA]' : 'border-[#3E3F4E]'} `}>
        <h3 className='text-grey text-[15px] mb-6 ml-[1.75rem] font-bold '>ALL BOARDS ({boardTitle.length})</h3>
        {
          boardTitle.map((item, index) => {
            return <div key={index} onClick={() => changeBoard(index)} className={`w-full board text-grey px-[1.17rem] rounded-r-full ${index === tasksIndex ? 'active-bcg' : null} flex items-center space-x-4 py-4`}>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" /></svg>
              <span className='text-[15px] font-bold '>{item}</span>
            </div>
          })
        }

        <div className='w-full board text-darkPurple px-[1.17rem] rounded-r-full flex items-center space-x-4 py-4'>
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" /></svg>
          <span className='flex items-center space-x-2 font-bold text-[15px]'>
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="#635FC7" d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z" /></svg>
            <p>Create New Board</p>
          </span>

        </div>


        <div className={` ${!isChecked ? 'bg-[#F4F7FD]' : 'bg-[#20212C]'} w-full ml-3  py-3  rounded-lg mt-auto flex items-center justify-around mb-4`}>
          <img src={lightIcon} alt="" />
          <input type="checkbox" checked={isChecked} onChange={handleCheck}  className="toggle toggle-secondary" />


          <img src={darkIcon} alt="" />
        </div>

        <div className='flex items-center space-x-3 ml-5 cursor-pointer' onClick={closeSidebar}>
          <img src={hideSidebar} alt="hide sidebar" />
          <h3 className='text-grey font-bold text-[15px] my-6'>Hide Sidebar</h3>
        </div>
      </aside>

    </Wrapper>
  )
}

const Wrapper = styled.div`

svg {
  fill: #828FA3;
}
 
 .side-bar {
  position: fixed;
  z-index: 0;
  top: 4.6rem;
  width: 19.15rem;
  bottom: 0;
  left: 0;
  padding: 2rem 1.75rem 0  0;
  background-color: var(--side-bar-bcg);
  display: flex;
  flex-direction: column;
  visibility: hidden;
 }

 .side-bar-open {  
  visibility: visible;
 }

 .active-bcg {
  background-color: #635FC7;
  color: #ffffff;
 }

 .active-bcg > svg {
  fill: #ffffff;
 }


  .board:hover {
    background-color: var(--board-hover-bcg);
    cursor: pointer;
    color: var(--sidebar-hover-clr);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export default Sidebar