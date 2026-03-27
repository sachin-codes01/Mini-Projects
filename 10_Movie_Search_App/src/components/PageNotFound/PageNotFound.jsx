import React from 'react'
import { useNavigate } from 'react-router-dom'
import './PageNotFound.css'

const PageNotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="pnf-wrapper">
      <div className="pnf-bg-text">404</div>

      <div className="pnf-content">
        <div className="pnf-film-strip">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="pnf-frame" key={i} />
          ))}
        </div>

        <h1 className="pnf-title">Scene Not Found</h1>
        <p className="pnf-sub">
          Looks like this reel went missing from the vault.
        </p>

        <button className="pnf-btn" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
      </div>
    </div>
  )
}

export default PageNotFound