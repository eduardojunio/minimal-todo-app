import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  toDosToggle: ['index']
})

export const ToDosTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: [
    { task: 'Workout', completed: false },
    { task: 'Go to the moon', completed: false },
    { task: 'Surf', completed: false },
    { task: 'Do some fucking thing', completed: true },
    { task: 'Go to the supermarket', completed: true }
  ]
})

/* ------------- Selectors ------------- */

export const ToDosSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const toggle = (state, { index }) => {
  const data = state.data.asMutable({ deep: true })
  data[index].completed = !data[index].completed
  return state.merge({ data })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TO_DOS_TOGGLE]: toggle
})
