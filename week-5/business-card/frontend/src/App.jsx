import { BusinessCard } from './components/BusinessCard'

function App() {
  const name = "Subham";
  const description = "Student of Harkirat's 0-100 Cohort 2";
  const interests = ["React", "JavaScript", "Web3"];
  const socialMediaLinks = [
    {
      "index": 0,
      "category": "LinkedIn",
      "link": "https://www.linkedin.com/in/subham-paul-079795142/"
    },
    {
      "index": 1,
      "category": "Twitter",
      "link": "https://twitter.com/proofofcode_"
    },
    {
      "index": 2,
      "category": "Github",
      "link": "https://github.com/SubhamPaul21/"
    }
  ]

  return (
    <>
      <BusinessCard name={name} description={description} interests={interests} socialMediaLinks={socialMediaLinks}></BusinessCard>
    </>
  )
}

export default App
