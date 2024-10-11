import { Component } from "react"
import Header from "./components/header/Header"
import NavMenu from "./menu/NavMenu"
import About from "./sections/about/About"
import Contact from "./sections/contact/Contact"
import Skills from "./sections/skills/Skills"
import Timeline from "./components/timeline/Timeline"
import Footer from "./components/Footer"
import ContentResponseTypes from "./types/ContentResponseTypes"
import MainLoader from "./components/loaders/MainLoader/MainLoader"
import content from "./content"

interface State {
  content: ContentResponseTypes
  loading: boolean
}

class App extends Component<{}, State> {

  state = {
    content: content,
    loading: true,
  }

  componentDidMount(): void {
      this.handleLoadSplash()
  }

  handleLoadSplash = () => {
    setTimeout(() => {
      this.setState({loading: false})
    }, 100)
  }

  render() {

    const { loading } = this.state

    return (
      <div className="App">
          {!loading && <div className={`${loading ? "AppLoading" : "AppNotLoading"}`}>
            <NavMenu />
            <Header />
            <About about={content.about} />
            <Timeline timelineItems={content.timelineItems} />
            <Skills skillItems={content.skillItems} />
            {/* <Portfolio portfolioItems={content.portfolioItems} /> */}
            <Contact />
            <Footer text="JaronGarcia" />
          </div>}
        {loading && <MainLoader />}
      </div >
    )
  }
}

export default App