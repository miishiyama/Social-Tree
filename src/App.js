import React from "react"

import "./style.css"

import Header from "./components/Header"

import List from "./components/List"

import Section from "./components/Section"

import Social from "./components/Social"

import Twitter from "./assets/twitter.png"

import Twitch from "./assets/twitch.png"

import Instagram from "./assets/instagram.png"

import Linkedin from "./assets/linkedin.png"

import Github from "./assets/github.png"

const listLink = [
  {
    title: "Link 1"
  },
  {
    title: "Link 2"
  },
  {
    title: "Link 3"
  },
  {
    title: "Link 4"
  }
]

const socialLink = [
  {
    url: "https://twitter.com/",
    logo: `${ Twitter }`
  },
  {
    url: "https://www.twitch.tv/",
    logo: `${ Twitch }`
  },
  {
    url: "https://www.instagram.com/",
    logo: `${ Instagram }`
  },
  {
    url: "https://br.linkedin.com/",
    logo: `${ Linkedin }`
  },
  {
    url: "https://github.com/",
    logo: `${ Github }`
  }
]

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section>
          {
            listLink.map(function(item) {
              return (
                <List title={ item.title } />
              )
            })
          }
        </Section>
        <Section>
          {
            socialLink.map(function(item) {
              return (
                <Social url={ item.url } logo={ item.logo } />
              )
            })
          }
        </Section>
      </main>
    </div>
  )
}

export default App
