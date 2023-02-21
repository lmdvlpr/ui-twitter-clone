import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'

import { Tweet } from './components/Tweet'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Separator } from './components/Separator'

// import tweetsData from './tweet-data.json'

const tweets = [
  {
    "id": 1,
    "userName": "Lucas Mota",
    "nickName": "@lmdvlpr",
    "content": "Aproveitando o feriado de carnaval para recriar a interface do Twitter com o Diego Fernandes da Rocketseat na Masterclass React 2023."
  },
  {
    "id": 2,
    "userName": "Janaína Alves",
    "nickName": "@ajanamota",
    "content": "Vai, sapato! Se declara logo pra Amanda! 😍."
  },
  {
    "id": 3,
    "userName": "Angelo Alves",
    "nickName": "@anjoff",
    "content": "Respeita o pai! Aqui é so CAPA no frifas! 😝"
  },
  {
    "id": 4,
    "userName": "Diego Fernandes",
    "nickName": "@diego3g",
    "content": "Vem conferir a Masterclass React que eu preparei para você entender de uma vez por todas o báscio de React e iniciar 2023 do jeito certo (link na bio) ⚛🚀."
  },
  {
    "id": 5,
    "userName": "Mayk Brito",
    "nickName": "@maykbrito",
    "content": "Vem comigo aprender a criar o teu primeiro site! Estou falando do projeto da Rocketseat chamado DevLinks (link na bio)."
  }
]

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">

      <Sidebar />

      <div className="content">
        <main className="timeline">

          <Header title="Home" />

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/lmdvlpr.png" alt="User Avatar" />
              <textarea name="tweet" id="tweet" placeholder="What's happening?" />
            </label>
            <button type="submit">Tweet</button>
          </form>

          <Separator />

          {tweets.map(tweet => {
            return <Tweet
              id={tweet.id}
              userName={tweet.userName}
              nickName={tweet.nickName}
              content={tweet.content}
            />
          }
          )}
        </main>
      </div>
    </div>
  </React.StrictMode >,
)
