import React, { useState } from 'react'

import { TextInput, Button } from 'flowbite-react'
import { CheckIcon, XIcon } from '@heroicons/react/solid'

export const Palindrome = () => {
  const [palindrome, setPalindrome] = useState('')
  const [isPal, setIsPalindrome] = useState(null)

  const handleTextChange = (e) => setPalindrome(e.target.value)

  const isPalindrome = (txt) => {
    var re = /[\W_]/g
    var lowRegStr = txt.toLowerCase().replace(re, '')
    var reverseStr = lowRegStr.split('').reverse().join('')

    setIsPalindrome(reverseStr === lowRegStr)
  }

  return (
    <div className='flex justify-center pt-10'>
      {/*  */}
      <Button
        className=''
        onClick={() => {
          isPalindrome(palindrome)
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
