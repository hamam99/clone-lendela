import { TextField, TextareaAutosize } from '@mui/material'
import Button from '@mui/material/Button'
import React from 'react'

const Form = () => {
  return (
    <div className="w-full">
      <h1 className="font-extrabold text-3xl py-2">CONTACT US</h1>
      <p>
        Do you have any feedback or comments? Or just want to say hi? Give us a
        call or send us an e-mail!
      </p>
      <div>
        <div className="w-full  flex gap-4 mt-6">
          <TextField
            label="Email"
            variant="outlined"
            type={'email'}
            className="w-[50%]"
          />
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            className="w-[50%]"
          />
        </div>
        <TextField
          id="outlined-basic"
          label="Message"
          variant="outlined"
          className="w-full mt-4"
          multiline={true}
          minRows={5}
          maxRows={5}
        />
      </div>
      <button className="w-full bg-green-500 py-2 font-bold text-white mt-6 hover:bg-green-400 rounded-md">
        SUBMIT
      </button>
    </div>
  )
}

export default Form
