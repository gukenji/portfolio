import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'
import FormGroup from '@mui/material/FormGroup'
import { FormLabel } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
const Contacts = () => {
  const form = useRef()
  const w = window.innerWidth
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
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    // <div className="absolute z-10 bottom-pad_form right-pad_form m-auto w-3/4 md:w-2/4">
    //   <form ref={form} onSubmit={sendEmail}>
    //     <FormGroup className="bg-white/60 flex gap-5 p-7 rounded-md">
    //       <TextField
    //         variant="standard"
    //         label="Nome"
    //         name={'user_name'}></TextField>
    //       <TextField
    //         variant="standard"
    //         label="Email"
    //         name={'user_email'}
    //         type={'email'}></TextField>
    //       <TextField
    //         id="standard-basic"
    //         label="Mensagem"
    //         variant="standard"
    //         multiline
    //         rows={3}
    //         name="message"
    //       />
    //       <Button type="submit" variant="contained" color="primary">
    //         Enviar
    //       </Button>
    //     </FormGroup>
    //   </form>
    // </div>
    <Box
      component="form"
      className="bg-white"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="off">
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>
      <div>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          disabled
          id="filled-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          variant="filled"
        />
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true
          }}
          variant="standard"
        />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          variant="standard"
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
        />
      </div>
    </Box>
  )
}

export default Contacts
