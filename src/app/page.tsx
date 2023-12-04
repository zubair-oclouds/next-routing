import action from './actions'
import Link from 'next/link'

const getWelcome1 = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve('Home Page')
    }, 2000)
  })
}

const getWelcome = async () => {
  // const res = await fetch('http://localhost:3000/api/hello')
  const res = await fetch('http://localhost:3000/api/hello', {
    cache: 'no-store',
  })
  // const res = await fetch('http://localhost:3000/api/hello', {
  //   next: { tags: ['collection'] },
  // })
  // const res = await fetch('http://localhost:3000/api/hello', {
  //   next: { revalidate: 100 },
  // })
  const { message } = await res.json()
  return message
}

export default async function Home() {
  // setTimeout(() => {
  //   action()
  // }, 4000)
  const data: string = await getWelcome()
  return (
    <>
      <div>{data}</div>
      <Link href={'/test'}>Open Modal</Link>
    </>
  )
}
