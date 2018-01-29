import { StyleSheet } from 'react-native'
import Fonts from '../../Themes/Fonts'

const circleSize = 30

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20
  },
  task: {
    ...Fonts.style.h4
  },
  circle: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    backgroundColor: 'transparent',
    borderWidth: 3.5,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
