import React from 'react'

import { Palindrome } from './components/palindrome'
import { Anagram } from './components/anagram'
import { Rotation } from './components/rotation'
import { Reverse } from './components/reverse'
import { Letters } from './components/letters'
import { RandomText } from './components/randomText'

export const App = () => {
  return (
    <div className='bg-slate-800 h-screen'>
      <Palindrome />
      <Anagram />
      <Rotation />
      <Reverse />
      <Letters />
      <RandomText />
    </div>
  )
}
