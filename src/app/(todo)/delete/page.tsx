'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { deleteCookie } from '../actions'
import classes from './page.module.css'

const initialState = {
  message: '',
}

function DeleteButton() {
  const { pending } = useFormStatus()

  return (
    <button className={classes.button} type="submit" aria-disabled={pending}>
      Delete
    </button>
  )
}

const page = () => {
  const [state, formAction] = useFormState(deleteCookie, initialState)
  return (
    <form action={formAction}>
      <label className={classes.label} htmlFor="todo">
        Cookie Name
      </label>
      <input
        className={classes.input}
        type="text"
        id="todo"
        name="todo"
        required
      />
      <DeleteButton />
      <p aria-live="polite" role="status">
        {state?.message}
      </p>
    </form>
  )
}

export default page
