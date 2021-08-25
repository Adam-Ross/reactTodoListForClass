import React from 'react'
import axios from 'axios'
import Loading from './components/Loading'
import Todos from './components/Todos'
import SingleTodo from './components/SingleTodo'
import './App.css'



class App extends React.Component {
  state = {
    loading: false,
    todos: [],
    singleTodo: null
  }


  async componentDidMount() {
    this.setState({loading: true})
    const res = await axios('https://jsonplaceholder.typicode.com/todos')
    this.setState({loading: false, todos: res.data})
  }


  render() {
    const {loading, todos, singleTodo} = this.state

    const getTodo = async (id) => {
      // set loading to true
      this.setState({loading: true})
      // make api call with proper id passed in
      const res = await axios(`https://jsonplaceholder.typicode.com/todos/${id}`)
      // console.log(the actual todo item)
      this.setState({singleTodo: res.data})
      this.setState({loading: false})
    }

    const changeLoadingAndSingleTodo = () => {
      this.setState({singleTodo: null})
      this.setState({loading: false})
    }


    if(singleTodo) {
      return <SingleTodo singleTodo={singleTodo} changeLoadingAndSingleTodo={changeLoadingAndSingleTodo}/>
    } else if(loading) {
      return <Loading />
    } else {
      return <Todos todos={todos} getTodo={getTodo}/>
    }
  }
}

export default App;






// handle loading state
  // Make loading comp
  // do contitional rendering 

// pass todos down as props to todos comp

// render todoItem compontnt

// make getting singe todo functionality and pass it down 

// make handler for handling get request for single todo