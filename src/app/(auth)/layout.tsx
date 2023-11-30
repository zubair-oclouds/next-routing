export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h2>Inner Layout</h2>
      {children}
    </>
  )
}
