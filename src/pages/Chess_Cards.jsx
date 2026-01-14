import { useState } from 'react'
import '../style/Chess_Card.css'
import italianImg from '../assets/Chess.webp'
import viennaImg from '../assets/R.jpg'
import queensImg from '../assets/Queens-Gambit-Opening.png'
import londonImg from '../assets/26a-300x300.webp'
import twoKnightsImg from '../assets/D.png'
import ChessBoard from '../components/ChessBoard'
import TestBoard from '../components/Test.jsx'


function Chess_Card() {
  const [openIndex, setOpenIndex] = useState(null)

  const openings = [
  {
    name: 'Italian Game',
    img: italianImg,
    desc: 'The Italian Game focuses on quick development and control of the center, leading to open and tactical positions.'
  },
  {
    name: 'Vienna Game',
    img: viennaImg,
    desc: 'The Vienna Game is an aggressive opening that supports early kingside attacks while keeping central control.'
  },
  {
    name: "Queen's Gambit",
    img: queensImg,
    desc: 'The Queen’s Gambit offers a pawn to gain strong central control and long-term positional pressure.'
  },
  {
    name: 'London System',
    img: londonImg,
    desc: 'The London System is a solid and flexible opening that is easy to learn and hard to counter.'
  },
  {
    name: 'Two Knights Defence',
    img: twoKnightsImg,
    desc: 'The Two Knights Defence leads to sharp tactical play and early attacks on the king.'
  }
]


  return (
    <div id="contain">
      <h1>List of Chess Openings</h1>

      <ul className="opening-list">
        {openings.map((opening, index) => (
          <li
            key={index}
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            <span className="opening-name">{opening.name}</span>

            {openIndex === index && (
              <div className="opening-detail">
                <img
                  src={opening.img}
                  alt={opening.name}
                  className="opening-img"
                />
                <p className="opening-desc">{opening.desc}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
        <div className="chess-page">
    <ChessBoard />
  </div>

      
    </div>
  )
}

export default Chess_Card
