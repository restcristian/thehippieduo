import * as React from "react"
import Nav from "../components/Nav"
import Banner from "../sections/Home/Banner"
import Gallery from "../sections/Home/Gallery"
import GiftList from "../sections/Home/GiftList"
import Location from "../sections/Home/Location"
import QA from "../sections/Home/QA"
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
      <Gallery />
      <QA />
      <Location />
    </main>
  )
}

export default IndexPage
