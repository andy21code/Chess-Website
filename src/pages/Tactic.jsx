import { useState } from 'react'
import '../style/Tactic.css'

function Tactic() {
  const [openIndex, setOpenIndex] = useState(null)

  const tactics = [
    {
      name: 'Fork',
      desc: 'A fork is a tactic where one piece attacks two or more enemy pieces at the same time.'
    },
    {
      name: 'Pin',
      desc: 'A pin happens when a piece cannot move without exposing a more valuable piece behind it.'
    },
    {
      name: 'Skewer',
      desc: 'A skewer is similar to a pin, but the more valuable piece is in front.'
    },
    {
      name: 'Battery',
      desc: 'A battery is when two pieces line up on the same file, rank, or diagonal to attack together.'
    },
    {
      name: 'Discovered Attack',
      desc: 'A discovered attack occurs when one piece moves and reveals an attack from another piece.'
    },
  {
    name: 'Double Check',
    desc: 'A double check is when two pieces give check at the same time, forcing the king to move.'
  },
  {
    name: 'Back Rank Mate',
    desc: 'A back rank mate happens when a king is trapped by its own pawns and checkmated on the last rank.'
  },
  {
    name: 'Deflection',
    desc: 'Deflection is a tactic where a defending piece is forced away from an important square or duty.'
  },
  {
    name: 'Zwischenzug',
    desc: 'Zwischenzug, or an in-between move, is an unexpected move played before an obvious recapture.'
  },
  {
    name: 'Overloading',
    desc: 'Overloading occurs when a defending piece has too many responsibilities and cannot handle them all.'
  },
  {
    name: 'Sacrifice',
    desc: 'A sacrifice involves giving up material to gain a positional or tactical advantage.'
  }
]
  

  return (
    <ul className="tactic-list">
      {tactics.map((tactic, index) => (
        <li
          key={index}
          onClick={() =>
            setOpenIndex(openIndex === index ? null : index)
          }
        >
          <span className="tactic-name">{tactic.name}</span>

          {openIndex === index && (
            <p className="tactic-desc">{tactic.desc}</p>
          )}
        </li>
      ))}
    </ul>
  )
}

export default Tactic
