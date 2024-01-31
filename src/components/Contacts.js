import React, { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { isMobile } from 'react-device-detect'
const Contacts = () => {
  const form = useRef()
  const cursorName = useRef()
  const cursorEmail = useRef()
  const cursorMessage = useRef()
  const w = window.innerWidth
  const [clicked, setClicked] = useState(false)
  const system = window.navigator.userAgentData.platform
  var cursorNameStatus = true
  var cursorEmailStatus = false
  var cursorMessageStatus = false
  const nameTextArea = useRef()
  const emailTextArea = useRef()
  const messageTextArea = useRef()
  const nameCursorPos = nameTextArea.current?.selectionStart
  const emailCursorPos = emailTextArea.current?.selectionStart
  const messageCursorPos = messageTextArea.current?.selectionStart
  const nameTextBeforeCursor = nameTextArea.current?.value.substring(
    0,
    nameCursorPos
  )
  const nameTextAfterCursor =
    nameTextArea.current?.value.substring(nameCursorPos)
  const emailTextBeforeCursor = emailTextArea.current?.value.substring(
    0,
    emailCursorPos
  )
  const emailTextAfterCursor =
    emailTextArea.current?.value.substring(emailCursorPos)
  const messageTextBeforeCursor = messageTextArea.current?.value.substring(
    0,
    messageCursorPos
  )
  const messageTextAfterCursor =
    messageTextArea.current?.value.substring(messageCursorPos)

  console.log(nameTextBeforeCursor)
  console.log(emailTextBeforeCursor)

  console.log(messageTextBeforeCursor)

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

  const handleChange = (e) => {
    console.log(e)
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (cursorStatus) {
  //       cursor.current.style.opacity = 0
  //       cursorStatus = false
  //     } else {
  //       cursor.current.style.opacity = 1
  //       cursorStatus = true
  //     }
  //   }, 300)
  //   return () => clearInterval(interval)
  // }, [])
  return (
    <Box className="relative z-10 top-[40%] md:left-[25%] md:w-1/2 w-auto">
      <p
        className={`bg-[#555753] text-[#EEEEEC] ml-7 mr-7 text-center rounded-tl-lg border-b-2 rounded-tr-lg p-2 mb-0  md:text-lg text-sm`}>
        user@{system.toLowerCase()}-{isMobile ? 'mobile' : 'computer'}:
        /contacts/send_email
      </p>
      <p
        className={`bg-white text-sm text-black text-center m-7 border-b-2 mb-0 mt-0 md:text-lg`}>
        {/* <span>GNU Nano 4.3</span> */}
        <span className="">File: form.txt</span>
      </p>
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
        className={`bg-[#2e3436] flex text-white flex-col m-7 gap-2 rounded-bl-lg rounded-br-lg p-4 mt-0`}
        noValidate
        autoComplete="off">
        <label className="flex text-lg items-center">
          nome=
          <span className="text-3xl" ref={cursorName}>
            ∎
          </span>
          <input
            autoFocus
            name={'user_name'}
            ref={nameTextArea}
            onChange={handleChange}
            className="flex-1 bg-[#2e3436] border-none text-lg text-white"></input>
        </label>
        <label className="flex text-lg items-center">
          email=
          <span className="text-3xl" ref={cursorEmail}>
            ∎
          </span>
          <input
            name={'user_email'}
            ref={emailTextArea}
            className="flex-1 bg-[#2e3436] border-none text-lg text-white"></input>
        </label>
        <label className="flex text-lg items-center">
          mensagem=
          <span className="text-3xl" ref={cursorEmail}>
            ∎
          </span>
          <textarea
            name={'message'}
            ref={messageTextArea}
            rows={3}
            className="flex-1 bg-[#2e3436] border-none text-lg text-white"></textarea>
        </label>
        {/* <TextField
          id="outlined-number"
          label="Nome"
          name={'user_name'}
          className="md:w-full bg-white"
          InputLabelProps={{
            shrink: true
          }}
          InputProps={{
            class: 'bg-white'
          }}
        />
        <TextField
          id="outlined-number"
          label="E-mail"
          className="md:w-full m1"
          name={'user_email'}
          type={'email'}
          InputLabelProps={{
            shrink: true,
            class: 'text-white'
          }}
        /> */}
        {/* <TextField
          id="standard-basic"
          label="Mensagem"
          className="md:w-full"
          variant="standard"
          multiline
          rows={4}
          name={'message'}></TextField> */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="md:w-1/2 md:self-center">
          Enviar
        </Button>
      </Box>
    </Box>
  )
}

export default Contacts
