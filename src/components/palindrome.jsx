import React, { useState } from 'react'

import { TextInput, Button } from 'flowbite-react'
import { CheckIcon, XIcon } from '@heroicons/react/solid'

export const Palindrome = () => {
  const [palindrome, setPalindrome] = useState('')
  const [isPal, setIsPalindrome] = useState(null)

  const handleTextChange = (e) => setPalindrome(e.target.value)

  const isPalindrome = (txt) => {
    var re = /[^A-Za-z0-9]/g
    txt = txt.toLowerCase().replace(re, '')
    var len = txt.length
    for (var i = 0; i < len / 2; i++) {
      if (txt[i] !== txt[len - 1 - i]) {
        return false
      }
    }
    return true
  }

  return (
    <div className='flex justify-center items-center h-5/6'>
      {/*  */}
      <Button
        className=''
        onClick={() => {
          setIsPalindrome(isPalindrome(palindrome))
        }}
        outline={true}
        gradientDuoTone='cyanToBlue'
      >
        Check If Palindrome
      </Button>

      <TextInput
        className='dark:border-gray-500 dark:bg-gray-600'
        value={palindrome}
        onChange={handleTextChange}
      />

      {isPal === true ? (
        <CheckIcon className='h-10 w-10 text-green-500' />
      ) : (
        <XIcon className='h-10 w-10 text-red-500' />
      )}
    </div>
  )
}
