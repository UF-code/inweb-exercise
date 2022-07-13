import React from 'react'

import { Palindrome } from './components/palindrome'
import { Anagram } from './components/anagram'

export const App = () => {
  return (
    <div className='bg-slate-800 h-screen'>
      <Palindrome />
      <Anagram />
    </div>
  )
}
