import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
    alignItems: 'center'
  },
  left: {
    flexDirection: 'row'
  },
  dayNumber: {
    ...Fonts.style.h1,
    fontSize: 38,
    color: Colors.text
  },
  month: {
    ...Fonts.style.h6,
    color: Colors.text
  },
  year: {
    ...Fonts.style.h6,
    color: Colors.text
  },
  dayName: {
    ...Fonts.style.h4,
    color: Colors.text
  }
})
