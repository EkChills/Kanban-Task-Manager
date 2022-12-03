import React from 'react'
import styled from 'styled-components'
import { TasksContext } from '../../store/Context'
import add from '../../assets/icon-add-task-mobile.svg'
import boardIcon from '../../assets/icon-board.svg'
import lightIcon from '../../assets/icon-light-theme.svg'
import darkIcon from '../../assets/icon-dark-theme.svg'
import { useState, useEffect } from 'react'


const EditTask = ({ foundEditedItem, foundItemIndex, foundItem }) => {
  const [inputErrors, setInputErrors] = useState({
    titleError: false,
    descriptionError: false,
    subtasksError: false
  })
  const { allBoards, changeBoard, tasksIndex, isChecked, showAddNewTaskModal, handleCheck,
    AddedTasks, setAddedTasks, handleAddedTaskChange, showEditTaskModal, setShowEditTaskModal,
    openEditTaskModal, closeEditTaskModal } = React.useContext(TasksContext);
  const boardTitle = allBoards.map(((item) => item.name))
  const { columns } = allBoards[tasksIndex]

  const EditTask = () => {
    columns.map((item, index) =>  {
      if(item.name === AddedTasks.status) {
        item.tasks[foundItemIndex] =   {
          "title": AddedTasks.title,
          "description": AddedTasks.description,
          "status": AddedTasks.status,
          "subtasks": AddedTasks.subtasks
        }
        
      }
    })
  }


  // function handleDescErr() {
  //   if(AddedTasks.description === '') {
  //     setInputErrors(prev => ({...prev, descriptionError:true}))
  //   } else {
  //     setInputErrors(prev => ({...prev, descriptionError:false}))
  //   }
  // }
  function handleErrorChange() {

    if (AddedTasks.subtasks === '') {
      setInputErrors(prev => ({ ...prev, subtasksError: true }))
    } else {
      setInputErrors(prev => ({ ...prev, subtasksError: false }))
    }

    if (AddedTasks.description === '') {
      setInputErrors(prev => ({ ...prev, descriptionError: true }))
    } else {
      setInputErrors(prev => ({ ...prev, descriptionError: false }))
    }

    if (AddedTasks.title === '') {
      setInputErrors(prev => ({ ...prev, titleError: true }))
    } else {
      setInputErrors(prev => ({ ...prev, titleError: false }))
    }

  }

  useEffect(() => {
    setAddedTasks({
      title: foundEditedItem?.title,
      description: foundEditedItem?.description,
      subtasks: foundEditedItem?.subtasks,
      status: foundEditedItem?.status
    })
  }, [foundEditedItem])








  // useEffect(() => {
  //   handleErrorChange()
  // },[inputErrors.titleError, inputErrors.descriptionError, inputErrors.subtasksError])

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (inputErrors.titleError || inputErrors.descriptionError || inputErrors.subtasksError) {
      return
    }
    EditTask()
    closeEditTaskModal()
    setAddedTasks({
      title: '',
      description: '',
      subtasks: '',
      status: 'Todo'
    })
  }


  return (
    <Wrapper>
      <div className={`${showEditTaskModal ? 'main-modal show-modal' : 'main-modal'}`} onClick={closeEditTaskModal} >
        <form className='flex flex-col form-control modal-content min-w-[300px] w-[85%] max-w-[500px] p-6 rounded-lg space-y-5' onSubmit={onSubmitHandler} onClick={(e) => e.stopPropagation()}>
          <h3 className='text-[18px] font-bold tasks-text'>Edit Task</h3>
          <div className={`flex flex-col space-y-2 ${inputErrors.titleError && 'error'} `}>
            <label htmlFor="title" className='curr-stat text-[12px] font-bold'>Title</label>
            <input onChange={handleAddedTaskChange} onKeyUp={handleErrorChange} onBlur={handleErrorChange} name="title" value={AddedTasks.title} id='title' type="text" placeholder="e.g Take cofee break" className={`input placeholder:text-grey  placeholder:font-semibold text-[13px] bg-inherit ${inputErrors.titleError ? 'error-border' : 'border-input '} w-full`} />
          </div>
          <div className={`flex flex-col space-y-2 ${inputErrors.descriptionError && 'error'}`}>
            <label htmlFor="description" className='curr-stat text-[12px] font-bold'>Description</label>
            <textarea onChange={handleAddedTaskChange} onKeyUp={handleErrorChange} onBlur={handleErrorChange} name="description" value={AddedTasks.description} className={`textarea textarea-bordered bg-inherit ${inputErrors.descriptionError ? 'error-border' : 'border-input '} text-[13px]`} placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."></textarea>
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="subtasks" className='curr-stat text-[12px] font-bold'>Subtasks</label>
            {AddedTasks.subtasks && AddedTasks.subtasks?.map((item, index) => {
              return (
                <div key={index} className={`flex items-center space-x-2 ${inputErrors.subtasksError && 'error-subtask'}`}>
                  <input id='subtasks' type="text" name="subtasks" onKeyUp={handleErrorChange} onBlur={handleErrorChange} onChange={handleAddedTaskChange} value={item.title} placeholder="e.g Take cofee break" className={`input placeholder:text-grey placeholder:font-semibold bg-inherit ${inputErrors.subtasksError ? 'error-border' : 'border-input'} text-[13px]  w-full`} />
                  <svg className='remove' width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" /><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" /></g></svg>
                </div>
              )
            })
            }
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

.error {
  position: relative;
}

.error::after {
  position: absolute;
  content: "Can't be empty";
  top: 2.5rem;
  right: 0px;
  color: #EA5555;
  width: 100px;
  font-size: 13px;
  z-index: 57;
  /* background-color: #EA5555; */
}

.error-subtask {
  position: relative;
}

.error-subtask::after {
  position: absolute;
  content: "Can't be empty";
  top: 1rem;
  right: 17px;
  color: #EA5555;
  width: 100px;
  font-size: 13px;
  z-index: 57;
}

.subtask-btn {
  background-color: var(--subtasks-btn);
  border: none;
}

.error-border {
  border-color: #EA5555;
  border-width: 1px;
  border-style: solid;
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

export default EditTask