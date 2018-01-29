import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import moment from 'moment'
import styles from './Styles/HeaderStyle'

export default class Header extends Component {
  // Prop type warnings
  static propTypes = {
    date: PropTypes.instanceOf(moment).isRequired,
    title: PropTypes.string
  }

  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    const { date, title } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <Text style={styles.dayNumber}>{date.format('DD')}</Text>
          <View style={{ marginLeft: 7.5, marginTop: 2.5 }}>
            <Text style={styles.month}>{date.format('MMM').toUpperCase()}</Text>
            <Text style={styles.year}>{date.format('YYYY')}</Text>
          </View>
        </View>

        <Text style={styles.dayName}>{
          (title && title.toUpperCase()) || date.format('dddd')
        }</Text>
      </View>
    )
  }
}
