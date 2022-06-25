import { render, screen } from '@testing-library/react'
import {List} from './index';

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

describe('List component', () => {
  const {container} = render(<List items={listItems}/>)
  it('It should render listItems', () => {
    const coconuts = screen.getAllByTestId("list-item");
    console.log(coconuts)
    expect(coconuts).toBeTruthy()
  })
})
