import React from 'react'
import styled from 'styled-components'
import { TasksContext } from '../../store/Context'
import boardIcon from '../../assets/icon-board.svg'
import lightIcon from '../../assets/icon-light-theme.svg'
import darkIcon from '../../assets/icon-dark-theme.svg'


const AddNewTaskModal = ({isModalOpen, open, close}) => {
  const { allBoards, changeBoard, tasksIndex, isChecked, handleCheck } = React.useContext(TasksContext);
  const boardTitle = allBoards.map(((item) => item.name))

  return (
    <Wrapper>
      <div className={`${isModalOpen ? 'main-modal show-modal' : 'main-modal'  }`} onClick={close} >
      <div className='flex flex-col modal-content rounded-md w-[17.5rem] pr-3 pl-3  mt-6' onClick={(e) => e.stopPropagation()}>
        <h3 className='text-grey text-[15px] mb-3 mt-3 ml-[1.75rem] font-bold '>ALL BOARDS ({boardTitle.length})</h3>
        {
          boardTitle.map((item, index) => {
            return <div key={index} onClick={() => changeBoard(index)} className={`w-full board text-grey px-[1.17rem] ${index === tasksIndex ? 'active-bcg' : null} rounded-r-full flex items-center space-x-4 py-4`}>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"/></svg>
              <span className='text-[15px] font-bold '>{item}</span>
            </div>
          })
        }

        <div className='w-full board text-darkPurple px-[1.17rem] rounded-r-full flex items-center space-x-4 py-4'>
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"/></svg>
          <span className='flex items-center space-x-2 font-bold text-[15px]'>
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="#635FC7" d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z" /></svg>
            <p>Create New Board</p>
          </span>
        </div>

        <div className={`${!isChecked ? 'bg-[#F4F7FD]' : 'bg-[#20212C]'} w-full py-4  rounded-xl mt-4 flex items-center justify-around mb-4`}>
          <img src={lightIcon} alt="" />
          <input type="checkbox" className="toggle toggle-secondary" onChange={handleCheck} />

          
          <img src={darkIcon} alt="" />
        </div>

      </div>
      </div>
      
    </Wrapper>
  )
}

const Wrapper = styled.div`

svg {
  fill: #828FA3;
}
 
  
  .main-modal {
    position: fixed;
    top: 4.7rem;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: grid;
    justify-items: center;
    align-items:flex-start;
    transition: all .1s ease-in-out;
    visibility:hidden;
    z-index: -1;

  }

  .show-modal {
    visibility: visible;
    z-index: 10;
  }

  .modal-content {
    background-color: var(--nav-bcg);
  }

  .board:hover {
    background-color: var(--board-hover-bcg);
    cursor: pointer;
    color: var(--sidebar-hover-clr);
  }

  
 .active-bcg {
  background-color: #635FC7;
  color: #ffffff;
 }

 .active-bcg > svg {
  fill: #ffffff;
 }
`

export default AddNewTaskModal