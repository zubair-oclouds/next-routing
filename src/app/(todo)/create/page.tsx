'use client'

import { useFormState } from 'react-dom'
import { useFormStatus } from 'react-dom'
import { createCookie } from '../actions'
import classes from './page.module.css'

const initialState = {
  message: '',
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button className={classes.button} type="submit" aria-disabled={pending}>
      Add
    </button>
  )
}

const page = () => {
  const [state, formAction] = useFormState(createCookie, initialState)
  return (
    <form action={formAction}>
      <label className={classes.label} htmlFor="todo">
        Enter Token
      </label>
      <input
        className={classes.input}
        type="text"
        id="todo"
        name="todo"
        required
      />
      <SubmitButton />
      <p aria-live="polite" role="status">
        {state?.message}
      </p>
    </form>
  )
}

export default page
