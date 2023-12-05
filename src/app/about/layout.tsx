export default function RootLayout(props: {
  children: React.ReactNode
  analytics: React.ReactNode
  team: React.ReactNode
}) {
  return (
    <>
      <h2>Inner Layout</h2>
      {props.children}
      {props.analytics}
      {props.team}
    </>
  )
}
