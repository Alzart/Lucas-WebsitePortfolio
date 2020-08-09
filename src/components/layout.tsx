import React from "react"
import Header from "./header"
import "./layout.css"
import { globalHistory } from "@reach/router"

interface Props {
  children?: any
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header selected={globalHistory.location.pathname} />
      <main>{children}</main>
    </>
  )
}

export default Layout
