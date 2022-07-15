import React from 'react'

import { Palindrome } from './components/palindrome'
import { Anagram } from './components/anagram'
import { Rotation } from './components/rotation'
import { Reverse } from './components/reverse'
import { Letters } from './components/letters'
import { RandomText } from './components/randomText'
import { TitleCase } from './components/titleCase'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export const App = () => {
  return (
    <Router>
      <div className='bg-slate-800 h-screen '>
        <nav className='flex justify-center'>
          {/* <Link className='text-white m-5 underline focus:underline-offset-4' to='/'> */}
          <Link className='text-white m-5  focus:text-red-500 focus:underline' to='/'>
            Palindrome
          </Link>
          <Link className='text-white m-5  focus:text-red-500 focus:underline' to='/anagram'>
            Anagram
          </Link>
          <Link className='text-white m-5  focus:text-red-500 focus:underline' to='/rotation'>
            Rotation
          </Link>
          <Link className='text-white m-5  focus:text-red-500 focus:underline' to='/reverse'>
            Reverse
          </Link>
          <Link className='text-white m-5  focus:text-red-500 focus:underline' to='/letters'>
            Letters
          </Link>
          <Link className='text-white m-5  focus:text-red-500 focus:underline' to='/randomtext'>
            Randomtext
          </Link>
          <Link className='text-white m-5  focus:text-red-500 focus:underline' to='/titlecase'>
            Titlecase
          </Link>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/anagram'>
            <Anagram />
          </Route>
          <Route path='/rotation'>
            <Rotation />
          </Route>
          <Route path='/reverse'>
            <Reverse />
          </Route>
          <Route path='/letters'>
            <Letters />
          </Route>
          <Route path='/randomtext'>
            <RandomText />
          </Route>
          <Route path='/titlecase'>
            <TitleCase />
          </Route>
          <Route path='/'>
            <Palindrome />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
