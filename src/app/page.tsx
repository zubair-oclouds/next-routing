'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [name, setName] = useState('')
  const getWelcome = async () => {
    const res = await fetch('http://localhost:3000/api/hello')
    const { message } = await res.json()
    setName(message)
  }

  useEffect(() => {
    getWelcome()
  }, [name])
  return <div>Home Page {name}</div>
}
