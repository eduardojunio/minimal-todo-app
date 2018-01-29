import React from 'react'
import { storiesOf } from '@storybook/react-native'
import ToDoItem from './ToDoItem'

storiesOf('ToDoItem')
  .add('Default', () => (
    <ToDoItem completed={false} task={'Go to the supermarket'} />
  ))
  .add('Checked', () => (
    <ToDoItem completed task={'Workout'} />
  ))
