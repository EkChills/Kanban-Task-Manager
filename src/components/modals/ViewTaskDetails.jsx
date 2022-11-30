import React, { useState } from 'react'
import styled from 'styled-components'
import { TasksContext } from '../../store/Context'
import elipse from '../../assets/icon-vertical-ellipsis.svg'


const ViewTaskDetails = ({ info }) => {
  const { allBoards, changeBoard, tasksIndex, isChecked, showSelected, setShowSelected, closeViewTasksModal } = React.useContext(TasksContext);
  const boardTitle = allBoards.map(((item) => item.name))

  console.log(info);

  

  const completed = info?.subtasks?.reduce((total, item) => {
    if (item.isCompleted === true) {
      return total + 1
    }
    return total
  }, 0)

  return (
    <Wrapper>
      <div className={`${showSelected ? 'main-modal show-modal' : 'main-modal'} px-7`} onClick={closeViewTasksModal} >
        <div className='flex flex-col space-y-6 modal-content rounded-md p-6' onClick={(e) => e.stopPropagation()}>
          <div className='flex items-center space-x-8 justify-between'>
            <h2 className={`text-[18px] font-bold max-w-[387px] ${isChecked ? 'text-pureWhite' : 'text-darkBlack'}`}>{info.title}</h2>
            <img src={elipse} alt="elipse menu" />
          </div>
          <div>
            <p className={`text-[15px] max-w-[426px] text-grey`}>{info.description}</p>
          </div>
          <div className='flex flex-col'>
            <span className='text-[13px] text-grey mb-4 font-bold'>Subtasks ({completed} of {info.subtasks?.length})</span>
            <div className='flex flex-col space-y-3'>
              {info?.subtasks?.map((task) => {
                return (
                  <div className='flex items-center space-x-4 '>
                    <input type="checkbox" className='checkbox checkbox-secondary' checked={task.isCompleted} id='subtasks' />
                    <label htmlFor="subtasks" className={`text-grey max-w-[416px] ${!isChecked && task.isCompleted && 'text-grey crossed'} ${!isChecked && !task.isCompleted && 'text-darkBlack'} ${isChecked && task.isCompleted && 'text-grey crossed' } ${isChecked && !task.isCompleted && 'text-pureWhite'} `}>{task.title}</label>
                  </div>
                )
              })}
            </div>
          </div>
          <div></div>
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
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
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

  .crossed {
    position: relative;
  }
  .crossed::before {
    position: absolute;
    content: "";
    top: 13px;
    left: 0;
    right: 0;
    width: 100%;
    height: 1px;
    background-color: #828FA3;
  }

  
 .active-bcg {
  background-color: #635FC7;
  color: #ffffff;
 }

 .active-bcg > svg {
  fill: #ffffff;
 }
`

export default ViewTaskDetails