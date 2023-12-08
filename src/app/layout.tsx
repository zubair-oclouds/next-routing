import React from 'react'

export const metadata = {
  title: {
    absolute: '',
    default: 'Next.js Tutorial - Routing',
    template: '%s | Routing',
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* <header style={{ backgroundColor: 'lightblue', padding: '1rem' }}>
          <p>Header</p>
        </header> */}
        {children}
        {modal}
        {/* <footer style={{ backgroundColor: 'ghostwhite', padding: '1rem' }}>
          <p>Footer</p>
        </footer> */}
      </body>
    </html>
  )
}
