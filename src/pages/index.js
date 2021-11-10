import React, {useState} from "react"
import HashTagLink from "../components/HashTagLink"
import Layout from "../components/Layout/Layout"
import LoadingScreen from "../components/LoadingScreen"
import Nav from "../components/Nav"
import ScrollButton from "../components/ScrollButton"
import Banner from "../sections/Home/Banner"
import Gallery from "../sections/Home/Gallery"
import GiftList from "../sections/Home/GiftList"
import GoodBye from "../sections/Home/GoodBye"
import Location from "../sections/Home/Location"
import QA from "../sections/Home/QA"
import RSVP from "../sections/Home/RSVP"
import SaveTheDate from "../sections/Home/SaveTheDate"
import '../shared/reset.scss'

// markup
const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Layout>
      <main>
      <LoadingScreen isLoading ={isLoading} />
      <header>
        <Nav />
      </header>
      <Banner />
      <SaveTheDate />
      <GiftList />
      <Gallery />
      <QA />
      <Location />
      <RSVP />
      <GoodBye />
      <ScrollButton />
      <HashTagLink />
    </main>
    </Layout>
  )
}

export default IndexPage
