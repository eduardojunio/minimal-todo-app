import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import moment from 'moment'
import { connect } from 'react-redux'
import ToDosActions from '../Redux/ToDosRedux'

// Styles
// import styles from './Styles/ToDosScreenStyle'
import Header from '../Components/Header'
import ToDoItem from '../Components/ToDoItem'

class ToDosScreen extends Component {
  render () {
    return (
      <View style={{ flex: 1, backgroundColor: '#f0efe9', paddingVertical: 60, paddingHorizontal: 30 }}>
        <View style={{ flex: 1, backgroundColor: '#fff', paddingVertical: 20 }}>
          <Header date={moment()} />
          <FlatList
            style={{ marginTop: 10 }}
            data={this.props.todos.data}
            renderItem={({ item, index }) => (
              <ToDoItem
                onPress={() => this.props.toggleToDo(index)}
                task={item.task}
                completed={item.completed} />
            )}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  toggleToDo: index => dispatch(ToDosActions.toDosToggle(index))
})

// High Order Component
export default connect(mapStateToProps, mapDispatchToProps)(ToDosScreen)
