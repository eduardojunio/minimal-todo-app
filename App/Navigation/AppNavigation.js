import { StackNavigator } from 'react-navigation'
import ToDosScreen from '../Containers/ToDosScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  ToDosScreen: { screen: ToDosScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ToDosScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
