import React, { useState } from 'react'

import { TextInput, Button } from 'flowbite-react'

export const TitleCase = () => {
  const [text, setText] = useState('')
  const [titleCase, setTitleCase] = useState('')

  const handleTextChange = (e) => setText(e.target.value)

  const toTitleCase = (txt) => {
    return txt
      .toLowerCase()
      .split(' ')
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      })
      .join(' ')
  }

  return (
    <div className='flex justify-center pt-10'>
      {/*  */}
      <Button
        className=''
        onClick={() => {
          setTitleCase(toTitleCase(text))
        }}
        outline={true}
        gradientDuoTone='cyanToBlue'
      >
        Title Case
      </Button>

      <TextInput
        className='dark:border-gray-500 dark:bg-gray-600'
        value={text}
        onChange={handleTextChange}
      />

      {titleCase && <h1 className='h-10 w-10 text-green-500 text-2xl'>{titleCase}</h1>}
    </div>
  )
}
