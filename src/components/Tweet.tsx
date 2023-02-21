import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import './Tweet.css'


interface TweetProps {
  id: number,
  userName: string,
  nickName: string,
  content: string
}

export function Tweet(props: TweetProps) {
  return (
    <a href='#' className="tweet">
      <img src="https://github.com/lmdvlpr.png" alt="User Avatar" />

      <div className="tweet-content">

        <div className="tweet-content-header">
          <strong>{props.userName}</strong>
          <span>{props.nickName}</span>
        </div>

        <p>{props.content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
          </button>
          <button type="button">
            <ArrowsClockwise />
          </button>
          <button type="button">
            <Heart />
          </button>
        </div>

      </div>
    </a>
  )
}