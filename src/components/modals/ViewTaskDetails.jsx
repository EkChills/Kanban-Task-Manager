import React, { useState, useRef, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { TasksContext } from '../../store/Context'
import elipse from '../../assets/icon-vertical-ellipsis.svg'
import EditTaskTray from '../Trays/EditTaskTray'


const ViewTaskDetails = ({ info }) => {
  const wrapped = useRef(null);
  let firstUpdate = useRef(true)
  const { allBoards,  tasksIndex, isChecked, setShowEditTaskTray, showEditTaskTray, showSelected,  closeViewTasksModal,setShowSelected } = React.useContext(TasksContext);
  const { columns } = allBoards[tasksIndex]




  const openTaskTray = () => {
    setShowEditTaskTray(true)
  }

  const closeTaskTray = () => {
    setShowEditTaskTray(false)
  }
  


  const completed = info?.subtasks?.reduce((total, item) => {
    if (item.isCompleted === true) {
      return total + 1
    }
    return total
  }, 0)

 

  if(wrapped.current) {
    wrapped.current.addEventListener('click', () => {
      closeTaskTray()
    })
  }

  const findEditItem = () => {
    const found = columns.find((item) => item.name === info.status)
    return found
  }





  return (
    <Wrapper>
      <div className={`${showSelected ? 'main-modal show-modal' : 'main-modal'} px-7`} onClick={() => {
        setShowSelected(false)
        closeTaskTray()
        }} >
        <div className='flex flex-col space-y-6 modal-content rounded-md p-6' ref={wrapped} onClick={(e) => {
          e.stopPropagation()
        }}>
          <div className='flex items-center space-x-8 justify-between relative'>
            <h2 className={`text-[18px] font-bold max-w-[387px] ${isChecked ? 'text-pureWhite' : 'text-darkBlack'}`}>{info.title}</h2>
            <img src={elipse} alt="elipse menu " className='cursor-pointer' onClick={openTaskTray} />
            <EditTaskTray found={info.title} info={info} findEditItem={findEditItem} />
          </div>
          <div>
            <p className={`text-[15px] max-w-[426px] text-grey`}>{info.description}</p>
          </div>
          <div className='flex flex-col'>
            <span className='text-[13px] text-grey mb-4 font-bold'>Subtasks ({completed} of {info.subtasks?.length})</span>
            <div className='flex flex-col space-y-2'>
              {info?.subtasks?.map((task, index) => {
                return (
                  <div key={index} className='flex items-center space-x-4 form-cont p-4 rounded-lg'>
                    <input type="checkbox" className='checkbox checkbox-secondary' checked={task.isCompleted} id='subtasks' />
                    <label htmlFor="subtasks" className={`text-grey font-bold text-[13px] md:text-[15px] max-w-[416px] ${!isChecked && task.isCompleted && 'text-grey crossed'} ${!isChecked && !task.isCompleted && 'text-darkBlack'} ${isChecked && task.isCompleted && 'text-grey crossed'} ${isChecked && !task.isCompleted && 'text-pureWhite'} `}>{task.title}</label>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='flex flex-col space-y-3'>
            <label htmlFor="select" className='text-[13px] md:text-[15px] font-bold curr-stat '>Current Status</label>
            <select className={`select ${!isChecked ? 'select-secondary' : 'select-primary' } w-full`}>
              {columns.map((item, index) => {
                return <option key={index}  className="" value={item.name}>{item.name}</option>
              })}
            </select>
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
 
  .form-cont {
    background: var(--main-bcg);
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
    z-index: 50;
    transition: all .5s ease-in-out;
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

  .curr-stat {
    color:var(--stat-color)
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