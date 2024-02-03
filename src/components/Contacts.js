import React, { useRef, useState, useEffect, createElement } from 'react'
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
  const emailMirror = useRef()
  const messageMirror = useRef()
  const nameMirror = useRef()
  const caret = useRef()
  const w = window.innerWidth
  const system = window.navigator.userAgentData.platform

  var cursorNameStatus = true
  const nameTextArea = useRef()

  var cursorEmailStatus = false
  const emailTextArea = useRef()

  var cursorMessageStatus = false
  const messageTextArea = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_ozj7ubn', 'template_ye4n9jk', form.current, 'jLdOxN9R4ESMRHdhC').then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
  }

  const handleSelectionChange = (area, mirror) => {
    const cursorPos = area.current?.selectionStart
    const textBeforeCursor = area.current?.value.substring(0, cursorPos)
    const textAfterCursor = area.current?.value.substring(cursorPos)
    console.log(cursorPos)
    area.current.previousSibling.innerHTML = `${textBeforeCursor}<span style="width: 4px;  position:absolute;animation: blink 1s infinite;">&nbsp;</span>${textAfterCursor}`
  }

  useEffect(() => {
    const nameWidth = nameTextArea.current?.getBoundingClientRect().width - 4
    nameMirror.current.style.width = `${nameWidth}px`

    const emailWidth = emailTextArea.current?.getBoundingClientRect().width - 4
    emailMirror.current.style.width = `${emailWidth}px`

    const messageWidth = messageTextArea.current?.getBoundingClientRect().width - 4
    messageMirror.current.style.width = `${messageWidth}px`
    handleSelectionChange(nameTextArea, nameMirror)
  }, [])

  return (
    <Box className="relative z-10 top-[40%] md:left-[25%] md:w-1/2 w-auto">
      <p
        className={`bg-[#555753] text-[#EEEEEC] ml-7 mr-7 text-center rounded-tl-lg border-b-2 rounded-tr-lg p-2 mb-0  text-sm md:text-base`}>
        user@{system.toLowerCase()}-{isMobile ? 'mobile' : 'computer'}: /contacts/send_email
      </p>
      <p className={`bg-white text-sm md:text-base text-black text-center m-7 border-b-2 mb-0 mt-0`}>
        {/* <span>GNU Nano 4.3</span> */}
        <span className="">File: form.txt</span>
      </p>
      <Box
        component="form"
        onSubmit={sendEmail}
        ref={form}
        className={`bg-[#2e3436] text-sm md:text-base flex text-white flex-col m-7 gap-2 rounded-bl-lg rounded-br-lg p-4 mt-0`}
        noValidate
        autoComplete="off">
        <label className="flex text-sm md:text-base items-center relative">
          nome =
          <div
            className={`absolute z-0 top-0 right-0 h-full overflow-hidden text-transparent font-area mt-[1px] mb-[1px] ml-[2px] mr-[2px] text-sm md:text-base`}
            ref={nameMirror}></div>
          <input
            autoFocus
            name={'user_name'}
            ref={nameTextArea}
            onClick={() => handleSelectionChange(nameTextArea, nameMirror)}
            onChange={() => handleSelectionChange(messageTextArea, messageMirror)}
            className="flex-1 relative z-1 caret-transparent bg-transparent border-none text-white  text-sm md:text-base font-area b-0 focus:outline-none"></input>
        </label>
        <label className="flex items-center relative text-sm md:text-base">
          email =
          <div
            className={`absolute z-0 top-0 right-0 h-full overflow-hidden text-transparent font-area mt-[1px] mb-[1px] ml-[2px] mr-[2px] text-sm md:text-base`}
            ref={emailMirror}></div>
          <input
            name={'user_email'}
            ref={emailTextArea}
            onClick={() => handleSelectionChange(emailTextArea, emailMirror)}
            className="flex-1 relative z-1 caret-transparent bg-transparent border-none text-white  text-sm md:text-base font-area b-0 focus:outline-none"></input>
        </label>
        <label className="flex items-center relative text-sm md:text-base">
          <span className="self-start mt-[2px]">mensagem =</span>
          <div
            className={`absolute z-0 top-0 right-0 h-full overflow-hidden text-transparent font-area mt-[1px] mb-[1px] ml-[2px] mr-[2px] text-sm md:text-base`}
            ref={messageMirror}></div>
          <textarea
            name={'message'}
            onClick={() => handleSelectionChange(messageTextArea, messageMirror)}
            onKeyUp={() => handleSelectionChange(messageTextArea, messageMirror)}
            ref={messageTextArea}
            rows={3}
            className="flex-1 relative z-1 caret-transparent bg-transparent border-none text-white  text-sm md:text-base font-area b-0 focus:outline-none"></textarea>
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
        <Button type="submit" variant="contained" color="primary" className="md:w-1/2 md:self-center">
          Enviar
        </Button>
      </Box>
    </Box>
  )
}

export default Contacts
