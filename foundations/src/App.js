import './App.css'
import './Styles/reset.css'

import { List } from './components/List'

const listItems = [
  {
    date: new Date(2022, 10, 23),
    title: 'Wine',
    price: 200,
  },
  {
    date: new Date(1987, 3, 3),
    title: 'Beer',
    price: 1222,
  },
  {
    date: new Date(2022, 12, 11),
    title: 'Coconuts',
    price: 23,
  },
]

function App() {
  return (
    <div className="App">
      <List items={listItems} />
    </div>
  )
}

export default App
