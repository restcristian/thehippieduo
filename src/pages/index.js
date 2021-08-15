import * as React from "react"
import Nav from "../components/Nav"
import Banner from "../sections/Home/Banner"
import '../shared/reset.scss'

// markup
const IndexPage = () => {
  return (
    <main>
      <header>
        <Nav />
      </header>
      <Banner />
    </main>
  )
}

export default IndexPage
