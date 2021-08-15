import * as React from "react"
import Nav from "../components/Nav"
import Banner from "../sections/Home/Banner"
import GiftList from "../sections/Home/GiftList"
import SaveTheDate from "../sections/Home/SaveTheDate"
import '../shared/reset.scss'

// markup
const IndexPage = () => {
  return (
    <main>
      <header>
        <Nav />
      </header>
      <Banner />
      <SaveTheDate />
      <GiftList />
    </main>
  )
}

export default IndexPage
