import React from 'react'
import EmptyBoards from './EmptyBoards'
import MainBoard from './MainBoard'
import { useContext } from 'react'
import { TasksContext } from '../store/Context'

const BoardDisplay = () => {
const {allBoards} = useContext(TasksContext)
  
  if(allBoards[0].columns === []) {
    return <EmptyBoards />
  }

  return <MainBoard />
}

export default BoardDisplay