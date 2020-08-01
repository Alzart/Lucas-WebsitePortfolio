import React from "react"
import Header from "./header"
import "./layout.css"

interface Props {
  location: Location
  children?: any
}

const Layout = ({ location, children }: Props) => {
  return (
    <>
      <Header selected={location.pathname} />
      <main>{children}</main>
    </>
  )
}

export default Layout
