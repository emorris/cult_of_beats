import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../reducers/counterSlice'

export default function Links() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    )
}