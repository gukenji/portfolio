import React, { useRef, useState, useEffect, createElement } from 'react'
import emailjs from '@emailjs/browser'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { isMobile } from 'react-device-detect'
import ClipLoader from 'react-spinners/ClipLoader'

const Contacts = () => {
  const form = useRef()
  const emailMirror = useRef()
  const messageMirror = useRef()
  const nameMirror = useRef()
  const submitResult = useRef()

  const w = window.innerWidth
  const system = window.navigator.userAgentData.platform

  const nameTextArea = useRef()
  const emailTextArea = useRef()
  const messageTextArea = useRef()
  const nameLabel = useRef()
  const emailLabel = useRef()
  const messageLabel = useRef()

  const [submitText, setSubmitText] = useState(null)
  const [nameValidationWarn, setNameValidationWarn] = useState(null)
  const [emailValidationWarn, setEmailValidationWarn] = useState(null)
  const [messageValidationWarn, setMessageValidationWarn] = useState(null)
  const [loadingSubmit, setLoadingSubmit] = useState(false)
  const [existError, setExistError] = useState(true)
  const sendEmail = (e) => {
    e.preventDefault()
    setLoadingSubmit(true)
    console.log(loadingSubmit)
    emailjs.sendForm('service_ozj7ubn', 'template_ye4n9jk', form.current, 'jLdOxN9R4ESMRHdhC').then(
      (result) => {
        console.log(result.text)
        setSubmitText('E-mail enviado com sucesso!')
        clearInputs()
        setLoadingSubmit(false)
        setExistError(true)
      },
      (error) => {
        console.log(error.text)
        setLoadingSubmit(false)
      }
    )
  }

  const handleSelectionChange = (area, key) => {
    var cursorPos
    if (key == 8) {
      cursorPos = area.current?.selectionStart - 1
    } else if (key == 32) {
      cursorPos = area.current?.selectionStart + 1
    } else {
      cursorPos = area.current?.selectionStart
    }
    const text = area.current?.value
    var new_text = ''
    for (var i = 0; i < text.length; i++) {
      text[i] == ' ' ? (new_text += '\xa0') : (new_text += text[i])
    }
    var textBeforeCursor = new_text.substring(0, cursorPos)
    var textAfterCursor = new_text.substring(cursorPos)

    area.current.previousSibling.innerHTML = `<span style="word-break:break-all;">${textBeforeCursor}<span style="width: 10px;  position:absolute;animation: blink 1s infinite;">&nbsp;</span>${textAfterCursor}</span>`
  }

  const removeCaretVisibility = (mirror) => {
    if (mirror.current.children[0]) mirror.current.removeChild(mirror.current.children[0])
  }

  const clearInputs = () => {
    nameTextArea.current.value = ''
    emailTextArea.current.value = ''
    messageTextArea.current.value = ''
  }

  const validateTextLength = (text, length) => {
    var new_text = text.trimStart()
    return new_text.length > length
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }
  const checkIfErrors = () => {
    if (
      validateEmail(emailTextArea.current?.value) == null ||
      !validateTextLength(nameTextArea.current?.value, 0) ||
      !validateTextLength(messageTextArea.current?.value, 0)
    )
      return setExistError(true)
    return setExistError(false)
  }

  const handleKey = (e) => {
    checkIfErrors()
    if (e.target == nameTextArea.current) {
      handleSelectionChange(nameTextArea, e.keyCode)
    } else if (e.target == messageTextArea.current) {
      handleSelectionChange(messageTextArea, e.keyCode)
    } else if (e.target == emailTextArea.current) {
      handleSelectionChange(emailTextArea, e.keyCode)
    }
  }

  useEffect(() => {
    const nameWidth = nameTextArea.current?.getBoundingClientRect().width - 4
    nameMirror.current.style.width = `${nameWidth}px`

    const emailWidth = emailTextArea.current?.getBoundingClientRect().width - 4
    emailMirror.current.style.width = `${emailWidth}px`

    const messageWidth = messageTextArea.current?.getBoundingClientRect().width - 4
    messageMirror.current.style.width = `${messageWidth}px`
    handleSelectionChange(nameTextArea, null)

    document.addEventListener('selectionchange', (e) => {
      if (e.target.activeElement == nameTextArea.current) {
        handleSelectionChange(nameTextArea, null)
      } else if (e.target.activeElement == messageTextArea.current) {
        handleSelectionChange(messageTextArea, null)
      } else if (e.target.activeElement == emailTextArea.current) {
        handleSelectionChange(emailTextArea, null)
      }
      checkIfErrors()
      if (submitText != '') setSubmitText('')
    })
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
        className={`bg-[#2e3436] text-sm md:text-base flex text-white flex-col m-7 gap-6 rounded-bl-lg rounded-br-lg p-4 mt-0`}
        noValidate
        autoComplete="off">
        <label className="flex text-sm md:text-base items-center relative" ref={nameLabel}>
          nome =
          <div
            className={`absolute z-0 top-0 right-0 h-full overflow-hidden text-transparent font-area mt-[1px] mb-[1px] ml-[2px] mr-[2px] text-sm md:text-base`}
            ref={nameMirror}></div>
          <input
            autoFocus
            name={'user_name'}
            ref={nameTextArea}
            onKeyDown={handleKey}
            onFocus={() => setNameValidationWarn('')}
            onBlur={() => {
              removeCaretVisibility(nameMirror)
              validateTextLength(nameTextArea.current.value, 0)
                ? setNameValidationWarn('')
                : setNameValidationWarn('Preencha esse campo.')
            }}
            className={`flex-1 relative z-1 caret-transparent bg-transparent text-white  text-sm md:text-base font-area b-0 focus:outline-none ${
              nameValidationWarn?.length > 0 ? 'border-[#b24b4b4a] b-2 border-double' : 'border-none'
            }`}></input>
          <p
            style={{
              margin: `${nameTextArea.current?.getBoundingClientRect().height / 2}px 0 0 ${
                nameLabel.current?.getBoundingClientRect().width - nameTextArea.current?.getBoundingClientRect().width
              }px`
            }}
            className={`absolute top-3 md:top-4 text-xs flex border-md ${nameValidationWarn?.length > 0 ? 'p-1' : ''}`}>
            {nameValidationWarn}
          </p>
        </label>
        <label className="flex items-center relative text-sm md:text-base" ref={emailLabel}>
          email =
          <div
            className={`absolute z-0 top-0 right-0 h-full overflow-hidden text-transparent font-area mt-[1px] mb-[1px] ml-[2px] mr-[2px] text-sm md:text-base`}
            ref={emailMirror}></div>
          <input
            name={'user_email'}
            ref={emailTextArea}
            onKeyDown={handleKey}
            onFocus={() => setEmailValidationWarn('')}
            onBlur={() => {
              removeCaretVisibility(emailMirror)
              validateEmail(emailTextArea.current.value) == null
                ? setEmailValidationWarn('Digite um email valido.')
                : setEmailValidationWarn('')
            }}
            className={`flex-1 relative z-1 caret-transparent bg-transparent text-white  text-sm md:text-base font-area b-0 focus:outline-none ${
              emailValidationWarn?.length > 0 ? 'border-[#b24b4b4a] b-2 border-double' : 'border-none'
            }`}></input>
          <p
            style={{
              margin: `${emailTextArea.current?.getBoundingClientRect().height / 2}px 0 0 ${
                emailLabel.current?.getBoundingClientRect().width - emailTextArea.current?.getBoundingClientRect().width
              }px`
            }}
            className={`absolute top-3 md:top-4 text-xs flex border-md ${
              emailValidationWarn?.length > 0 ? 'p-1' : ''
            }`}>
            {emailValidationWarn}
          </p>
        </label>
        <label className="flex items-center relative text-sm md:text-base" ref={messageLabel}>
          <span className="self-start mt-[2px]">mensagem =</span>
          <div
            className={`absolute z-0 top-0 right-0 h-full overflow-hidden text-transparent font-area mt-[1px] mb-[1px] ml-[3px] mr-[2px] text-sm md:text-base`}
            ref={messageMirror}></div>
          <textarea
            name={'message'}
            ref={messageTextArea}
            rows={3}
            onKeyDown={handleKey}
            onFocus={() => setMessageValidationWarn('')}
            onBlur={() => {
              removeCaretVisibility(messageMirror)
              validateTextLength(messageTextArea.current.value, 0)
                ? setMessageValidationWarn('')
                : setMessageValidationWarn('Preencha esse campo')
            }}
            className={`flex-1 relative z-1 caret-transparent bg-transparent text-white  text-sm md:text-base font-area b-0 focus:outline-none ${
              messageValidationWarn?.length > 0 ? 'border-[#b24b4b4a] b-2 border-double' : 'border-none'
            }`}></textarea>
          <p
            style={{
              margin: `${messageTextArea.current?.getBoundingClientRect().height}px 0 0 ${
                messageLabel.current?.getBoundingClientRect().width -
                messageTextArea.current?.getBoundingClientRect().width
              }px`
            }}
            className={`absolute top-0 text-xs flex border-md ${messageValidationWarn?.length > 0 ? 'p-2' : ''}`}>
            {messageValidationWarn}
          </p>
        </label>
        <div className="flex flex-col gap-1 mt-4">
          <p
            style={{ width: '100%' }}
            className="text-base text-center mt-0 mb-0 md:mt-1 text-[#16a34a] font-bold italic w-3/4">
            {submitText}
          </p>
          <Button
            disabled={existError}
            type="submit"
            variant="contained"
            color="primary"
            className="md:w-1/2 md:self-center mt-0 disabled:bg-[#1976d2] disabled:opacity-50 disabled:text-white">
            {loadingSubmit ? (
              <ClipLoader
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
                className="self-center"
                color="#ffffff"
              />
            ) : (
              'Enviar'
            )}
          </Button>
        </div>
      </Box>
    </Box>
  )
}

export default Contacts
