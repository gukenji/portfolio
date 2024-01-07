import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
const Contacts = () => {
  const form = useRef()
  const w = window.innerWidth
  const [clicked, setClicked] = useState(false)
  console.log(w > 500)
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_ozj7ubn',
        'template_ye4n9jk',
        form.current,
        'jLdOxN9R4ESMRHdhC'
      )
      .then(
        (result) => {
          console.log(result.text)
          console.log('a')
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <Box
      component="form"
      onSubmit={sendEmail}
      onMouseEnter={() => {
        setClicked(true)
      }}
      onMouseLeave={() => {
        setClicked(false)
      }}
      ref={form}
      className={`bg-white ${
        clicked ? 'opacity-100' : 'opacity-90'
      } z-10 relative flex flex-col m-7 top-[40%] rounded-lg p-2 w-75`}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="off">
      <TextField
        id="outlined-number"
        label="Nome"
        name={'user_name'}
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        id="outlined-number"
        label="E-mail"
        name={'user_email'}
        type={'email'}
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        id="standard-basic"
        label="Mensagem"
        variant="standard"
        multiline
        rows={3}
        name={'message'}></TextField>
      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </Box>
  )
}

export default Contacts
