import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './Styles/ToDoItemStyle'
import { Images } from '../Themes'

export default class ToDoItem extends Component {
  // Prop type warnings
  static propTypes = {
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool,
    onPress: PropTypes.func
  }

  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    const { task, completed, onPress } = this.props

    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text
          style={[styles.task, {
            color: completed ? '#bdc0ca' : '#3e434f'
          }]}>{task}</Text>
        <View
          style={[styles.circle, {
            borderColor: completed ? '#50e3a4' : '#eef0f5'
          }]}>
          {completed ? (
            <Image
              source={Images.checkedIcon}
              style={{ width: 20, height: 16 }} />
          ) : null}
        </View>
      </TouchableOpacity>
    )
  }
}
