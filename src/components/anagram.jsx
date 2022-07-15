import React, { useState } from 'react'

import { TextInput, Button } from 'flowbite-react'
import { CheckIcon, XIcon } from '@heroicons/react/solid'

export const Anagram = () => {
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [isAnagram, setIsAnagram] = useState(null)

  const handleText1Change = (e) => setText1(e.target.value)
  const handleText2Change = (e) => setText2(e.target.value)

  const checkIsAnagram = (txt1, txt2) => {
    txt1 = txt1.replace(/[^\w]/g, '').toLowerCase()
    txt2 = txt2.replace(/[^\w]/g, '').toLowerCase()

    if (txt1.length !== txt2.length) {
      return false
    }

    let arrB = txt2.split('')

    for (let char of txt1) {
      if (!arrB.includes(char)) {
        return false
        break
      } else {
        arrB.splice(arrB.indexOf(char), 1)
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
          setIsAnagram(checkIsAnagram(text1, text2))
        }}
        outline={true}
        gradientDuoTone='cyanToBlue'
      >
        Check If Anagram
      </Button>

      <TextInput
        className='dark:border-gray-500 dark:bg-gray-600'
        value={text1}
        onChange={handleText1Change}
      />
      <TextInput
        className='dark:border-gray-500 dark:bg-gray-600'
        value={text2}
        onChange={handleText2Change}
      />

      {isAnagram === true ? (
        <CheckIcon className='h-10 w-10 text-green-500' />
      ) : (
        <XIcon className='h-10 w-10 text-red-500' />
      )}
    </div>
  )
}
