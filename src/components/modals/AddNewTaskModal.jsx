import React from 'react'
import styled from 'styled-components'
import { TasksContext } from '../../store/Context'
import add from '../../assets/icon-add-task-mobile.svg'
import boardIcon from '../../assets/icon-board.svg'
import lightIcon from '../../assets/icon-light-theme.svg'
import darkIcon from '../../assets/icon-dark-theme.svg'


const AddNewTaskModal = ({ isModalOpen, open, close }) => {
  const { allBoards, changeBoard, tasksIndex, isChecked, showAddNewTaskModal, handleCheck } = React.useContext(TasksContext);
  const boardTitle = allBoards.map(((item) => item.name))

  return (
    <Wrapper>
      <div className={`${showAddNewTaskModal ? 'main-modal show-modal' : 'main-modal'}`} onClick={close} >
        <form className='flex flex-col form-control modal-content min-w-[300px] w-[85%] max-w-[500px] p-6 rounded-lg space-y-5'>
          <h3 className='text-[18px] font-bold'>Add New Task</h3>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="title" className='curr-stat text-[12px] font-bold'>Title</label>
            <input id='title' type="text" placeholder="e.g Take cofee break" className="input placeholder:text-grey placeholder:font-semibold text-[13px] input-bordered w-full" />
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="description" className='curr-stat text-[12px] font-bold'>Description</label>
            <textarea className="textarea textarea-bordered text-[13px]" placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."></textarea>
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="subtasks" className='curr-stat text-[12px] font-bold'>Subtasks</label>
            <div className='flex items-center space-x-2'>
              <input id='subtasks' type="text" placeholder="e.g Take cofee break" className="input placeholder:text-grey placeholder:font-semibold text-[13px] input-bordered w-full" />
              <svg className='remove' width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" /><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" /></g></svg>
            </div>
            <button className="btn rounded-full subtask-btn flex items-center space-x-2">
              <svg className='svg-add' width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="#635FC7" d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z" /></svg>
              <span className='text-darkPurple text-[13px] font-bold'>Add New Subtask</span>
            </button>
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="selects" className='curr-stat text-[12px] font-bold'>Title</label>
            <select id='selects' className="select select-bordered w-full ">
              <option disabled selected>Who shot first?</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        </form>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.div`

svg {
  fill: #828FA3;
}

.subtask-btn {
  background-color: var(--subtasks-btn);
  border: none;
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

  .remove {
    fill:"#828FA3";
    transition: all .3s ease-in-out;
  }

  .remove:hover {
    fill: #EA5555;
    cursor: pointer;
  }

  .curr-stat {
    color:var(--stat-color)
  }


  .modal-content {
    background-color: var(--nav-bcg);
  }
`

export default AddNewTaskModal