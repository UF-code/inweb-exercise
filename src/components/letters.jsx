import React, { useState } from 'react'

import { TextInput, Button } from 'flowbite-react'

export const Letters = () => {
  const [text, setText] = useState('')
  const [frequency, setFrequency] = useState(null)

  const handleTextChange = (e) => setText(e.target.value)

  const LetterFrequency = (txt) => {
    var freq = {}
    for (var i = 0; i < txt.length; i++) {
      var character = txt.charAt(i)
      if (freq[character]) {
        freq[character]++
      } else {
        freq[character] = 1
      }
    }

    setFrequency(freq)
    console.log(freq)
  }

  return (
    <div className='flex justify-center pt-10'>
      {/*  */}
      <Button
        className=''
        onClick={() => {
          LetterFrequency(text)
        }}
        outline={true}
        gradientDuoTone='cyanToBlue'
      >
        Calculate the Frequency
      </Button>

      <TextInput
        className='dark:border-gray-500 dark:bg-gray-600'
        value={text}
        onChange={handleTextChange}
      />

      {frequency &&
        Object.keys(frequency).map((key, idx) => (
          <h1 className='h-10 w-10 text-green-500 text-2xl'>
            {key}: {frequency[key]}
          </h1>
        ))}
    </div>
  )
}
