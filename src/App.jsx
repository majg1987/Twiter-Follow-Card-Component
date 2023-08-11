import './App.css'
import { TwiterFollowCard } from './TwiterFollowCard'

function App() {

  const formatUserName = (userName) => `@${userName}`

  const users = [
    {
      userName: "julianDev",
      name: "Julian Muñoz",
      isFollowing: true
    },
    {
      userName: "paulaDev",
      name: "Paula Gil",
      isFollowing: true
    },
    {
      userName: "rebecaDev",
      name: "Rebeca Martinez",
      isFollowing: false
    },
    {
      userName: "raulDev",
      name: "Raul Gonzalez",
      isFollowing: false
    },
  ]

  return (
    <section className='App'>
      {
        users.map((user, index) => ( 
          <TwiterFollowCard 
          formatUserName={formatUserName}
          user = {user}
          key={index}
          />
        ))
  
      }
    </section>
  )
}

export default App
