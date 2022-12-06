import { useEffect, useState } from 'react'
import './App.css'
import startConfig from "./assets/start-config.json"
import Card, { QuickLinks, Link } from './Card';

function App() {
  let cards: QuickLinks[] = startConfig.quickLinks;
  const [painting, setPainting] = useState<string>()
  const [welcomeText, setWelcomeText] = useState<string>("")
  const welcomeTypes: string[] = ['good morning', 'good afternoon', 'good evening'];

  const getGreetingMessage = () => {
    const hour = new Date().getHours()
    if (hour < 12) setWelcomeText(`${welcomeTypes[0]}`);
    else if (hour < 18) setWelcomeText(`${welcomeTypes[1]}`);
    else setWelcomeText(`${welcomeTypes[2]}`);
  }

  const handleShuffleImage = () => {
    setPainting(`/img/${Math.floor(Math.random() * 300)}.jpg`)
  }

  useEffect(() => {
    getGreetingMessage();

    // pick a random image from public images directory
    handleShuffleImage()

    // initialize cards from startConfig
  }, []);

  return (
    <div className="App">
      <header>
        {welcomeText}
      </header>
      <main className='main'>
        <div className="image-container">
          <img src={`${painting}`} className="main-image"></img>
          <button className="shuffle-image-button" onClick={handleShuffleImage}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"></path></svg>
          </button>
        </div>

        <div className="right">
          <h1 className='title'>{startConfig.title}</h1>

          <form className="google-form" target='_blank' action='https://www.google.com/search' method="GET">
            <input type="text" name="q" id="q" autoFocus />
            <button type='submit' className='go-button'>GO</button>
          </form>
        </div>
      </main>
      <div className='quick-links-container'>
        <div className="card-stack">
          {cards.map(card => {
            return <Card data={card}></Card>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
