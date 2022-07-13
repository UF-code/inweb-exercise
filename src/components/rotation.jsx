import React, { useState } from 'react'

import { TextInput, Button } from 'flowbite-react'
import { CheckIcon, XIcon } from '@heroicons/react/solid'

export const Rotation = () => {
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [isRotation, setIsRotation] = useState(null)

  const handleText1Change = (e) => setText1(e.target.value)
  const handleText2Change = (e) => setText2(e.target.value)

  const checkIsRotation = (txt1, txt2) => {
    setIsRotation(txt1.length == txt2.length && (txt1 + txt1).indexOf(txt2) != -1)
  }

  return (
    <div className='flex justify-center pt-10'>
      {/*  */}
      <Button
        className=''
        onClick={() => {
          checkIsRotation(text1, text2)
        }}
        outline={true}
        gradientDuoTone='cyanToBlue'
      >
        Check If Rotation
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

      {isRotation === true ? (
        <CheckIcon className='h-10 w-10 text-green-500' />
      ) : (
        <XIcon className='h-10 w-10 text-red-500' />
      )}
    </div>
  )
}
