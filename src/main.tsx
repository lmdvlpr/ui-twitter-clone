import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'

import { Tweet } from './components/Tweet'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Separator } from './components/Separator'

import tweets from './tweets-data.json'

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
              key={tweet.id}
              id={tweet.id}
              avatar={tweet.avatar}
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
