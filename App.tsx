import { Text, View } from 'react-native'
import React, { Component } from 'react'
import BookAShow from './src/bookashow'

export class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <BookAShow/>
      </View>
    )
  }
}

export default App