import { useState } from 'react'
import './App.css'

export function TwiterFollowCard( {formatUserName, user}) {

  const [isFollowing, setIsFollowing] = useState(user.isFollowing)

  const textButton = isFollowing ? "Siguiendo": "Seguir"
  const buttonClassName = isFollowing 
    ? "tw-followCard-button isFollowing"
    : "tw-followCard-button "

    return (
        <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img 
            className="tw-followCard-avatar"
            alt="El avatar de Miguel" 
            src={`src/assets/${user.userName}.jpg`} />
          <div className="tw-followCard-info">
            <strong> {user.name} </strong>
            <span className='tw-followCard-userName'>{formatUserName(user.userName)}</span>
          </div>
        </header>
  
        <aside>
          <button 
            className={buttonClassName}
            onClick={ () => setIsFollowing(!isFollowing) }
          >
            <span className='tw-followCard-text'>{textButton}</span>
            <span className='tw-followCard-stopFollow'>Dejar de Seguir</span>
          </button>
        </aside>
        
      </article>
    )
}
