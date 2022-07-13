import React, { useState } from 'react'

import { TextInput, Button } from 'flowbite-react'

export const Reverse = () => {
  const [text, setText] = useState('')
  const [reverse, setReverse] = useState(null)

  const handleTextChange = (e) => setText(e.target.value)

  const reverseText = (txt) => {
    var newText = ''
    for (var i = txt.length - 1; i >= 0; i--) {
      newText += txt[i]
    }
    setReverse(newText)
  }

  return (
    <div className='flex justify-center pt-10'>
      {/*  */}
      <Button
        className=''
        onClick={() => {
          reverseText(text)
        }}
        outline={true}
        gradientDuoTone='cyanToBlue'
      >
        Convert to Reverse
      </Button>

      <TextInput
        className='dark:border-gray-500 dark:bg-gray-600'
        value={text}
        onChange={handleTextChange}
      />

      {reverse && <h1 className='h-10 w-10 text-green-500 text-2xl'>{reverse}</h1>}
    </div>
  )
}
