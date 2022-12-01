import React from 'react'
import styled from 'styled-components'
import { TasksContext } from '../../store/Context'
import add from '../../assets/icon-add-task-mobile.svg'
import boardIcon from '../../assets/icon-board.svg'
import lightIcon from '../../assets/icon-light-theme.svg'
import darkIcon from '../../assets/icon-dark-theme.svg'


const AddNewTaskModal = ({ isModalOpen, open, close }) => {
  const { allBoards, changeBoard, tasksIndex, isChecked, showAddNewTaskModal, handleCheck,
  AddedTasks, handleAddedTaskChange,  closeAddNewTaskModal} = React.useContext(TasksContext);
  const boardTitle = allBoards.map(((item) => item.name))
  const { columns } = allBoards[tasksIndex]

  const AddTask = () => {
    columns.map((item, index) =>  {
      if(item.name === AddedTasks.status) {
        item.tasks.push(
          {
              "title": AddedTasks.title,
              "description": AddedTasks.description,
              "status": AddedTasks.status,
              "subtasks": [
                {
                  "title": AddedTasks.subtasks,
                  "isCompleted": false
                }
              ]
            },
        )
      }
    })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    AddTask()
    closeAddNewTaskModal()
  }


  return (
    <Wrapper>
      <div className={`${showAddNewTaskModal ? 'main-modal show-modal' : 'main-modal'}`} onClick={closeAddNewTaskModal} >
        <form className='flex flex-col form-control modal-content min-w-[300px] w-[85%] max-w-[500px] p-6 rounded-lg space-y-5' onSubmit={onSubmitHandler} onClick={(e) => e.stopPropagation()}>
          <h3 className='text-[18px] font-bold tasks-text'>Add New Task</h3>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="title" className='curr-stat text-[12px] font-bold'>Title</label>
            <input onChange={handleAddedTaskChange} name="title" value={AddedTasks.title} id='title' type="text" placeholder="e.g Take cofee break" className="input placeholder:text-grey placeholder:font-semibold text-[13px] bg-inherit border-input  w-full" />
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="description" className='curr-stat text-[12px] font-bold'>Description</label>
            <textarea onChange={handleAddedTaskChange} name="description" value={AddedTasks.description} className="textarea textarea-bordered bg-inherit border-input  text-[13px]" placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."></textarea>
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="subtasks" className='curr-stat text-[12px] font-bold'>Subtasks</label>
            <div className='flex items-center space-x-2'>
              <input id='subtasks' type="text" name="subtasks" onChange={handleAddedTaskChange} value={AddedTasks.subtasks} placeholder="e.g Take cofee break" className="input placeholder:text-grey placeholder:font-semibold bg-inherit border-input  text-[13px] input-bordered w-full" />
              <svg className='remove' width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" /><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" /></g></svg>
            </div>
            <button type='button' className="btn rounded-full subtask-btn flex items-center space-x-2">
              <svg className='svg-add' width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="#635FC7" d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z" /></svg>
              <span className='text-darkPurple text-[13px] font-bold'>Add New Subtask</span>
            </button>
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="selects" className='curr-stat text-[12px] font-bold'>Status</label>
            <select name="status" onChange={handleAddedTaskChange} value={AddedTasks.status} id='selects' className="select  bg-inherit border-input  select-bordered w-full ">
              <option value="Todo">Todo</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <button className="btn rounded-full bg-darkPurple font-bold text-[13px]" type='submit'>
            Create Task
          </button>
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

.border-input{
  border-color: var(--input-border);
  border-width: 1px;
  border-style: solid;
  color: #828FA3;
}

.tasks-text {
  color: var(--tasks-text);
}

select  {
  color: var(--tasks-text);
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