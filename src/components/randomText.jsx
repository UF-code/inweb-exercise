import React, { useState } from 'react'

import { TextInput, Button } from 'flowbite-react'

export const RandomText = () => {
  const [randomText, setRandomText] = useState('')
  const [length, setLength] = useState(null)

  const handleLengthChange = (e) => setLength(e.target.value)

  const randomizedText = (lng) => {
    const lngint = parseInt(lng)
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    var result = ''
    for (var i = lngint; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)]

    setRandomText(result)
  }

  return (
    <div className='flex justify-center pt-10'>
      {/*  */}
      <Button
        className=''
        onClick={() => {
          randomizedText(length)
        }}
        outline={true}
        gradientDuoTone='cyanToBlue'
      >
        Generate Random Text
      </Button>

      <TextInput
        className='dark:border-gray-500 dark:bg-gray-600'
        value={length}
        onChange={handleLengthChange}
      />

      {randomText && <h1 className='h-10 w-10 text-green-500 text-2xl'>{randomText}</h1>}
    </div>
  )
}
