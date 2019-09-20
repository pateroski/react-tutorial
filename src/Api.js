import React, { Component } from 'react'
import './App.css';
//Another app to test fetch API in componentDidMount moment
class App extends Component {
  state = {
    data: [],
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url =
      'https://www.metaweather.com/api/location/search/?query=san'

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result,
        })
      })
  }

  render() {
    const { data } = this.state

    const result = data.map((entry, index) => {
      return <li key={index}>{entry.title}</li>
    })

    return (
      <ul>{result}</ul>
    )
  }
}

export default App