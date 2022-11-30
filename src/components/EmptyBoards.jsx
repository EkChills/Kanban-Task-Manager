import React, { useContext } from 'react'
import { TasksContext } from '../store/Context'
import styled from 'styled-components'
import AddNew from './buttons/AddNew'
import addTask from '../assets/icon-add-task-mobile.svg'



const EmptyBoards = () => {
  const { allBoards } = useContext(TasksContext)

  return (
    <Wrapper>


      <h3 className='font-bold text-grey text-[12px] md:text-[15px] lg:text-[18px]'>This board is empty. Create a new column to get started</h3>
      <AddNew>
        <span className='flex items-center space-x-2'>
          <img src={addTask} alt="add" />
          <p>Add New Column</p>
        </span>
      </AddNew>


    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
  justify-content: center;
  align-items: center;
  width: calc(100% - 19.15rem);
  padding: 0 1rem;
  margin-left: 19.15rem;
  background-color: var(--main-bcg);

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`

export default EmptyBoards