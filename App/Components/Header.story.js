import React from 'react'
import { storiesOf } from '@storybook/react-native'
import moment from 'moment'
import Header from './Header'

storiesOf('Header')
  .add('Default', () => (
    <Header date={moment('2018-01-02')} />
  ))
  .add('w/ Title', () => (
    <Header
      title={'Add a ToDo'}
      date={moment('2018-01-02')} />
  ))
