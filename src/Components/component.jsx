import React from 'react'
import {Link} from 'react-router-dom'
function Component() {
  return (
    <div>
      <nav>
        <ul>
            <li>
                <Link to="./Contact.jsx"> Contact </Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Component
