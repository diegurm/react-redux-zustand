import { Provider as ReactProvider } from "react-redux";

import { store } from "./store";

import { TodoList } from './components/TodoList'
import { AddTodo } from './components/AddTodo'
import './App.css'

function App() {

  return (
    <>
      <ReactProvider store={store}>
        <TodoList />
        <AddTodo />
      </ReactProvider>
    </>
  )
}

export default App
