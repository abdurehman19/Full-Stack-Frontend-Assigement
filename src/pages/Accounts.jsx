import React from 'react'
import { Link } from 'react-router-dom'
import './Accounts.css'

function Accounts() {
  return (
    <div className="accounts-page">
      <div className="accounts-card">
        <h1>Welcome</h1>
        <p>Sign up ya login kar ke apna account access karo</p>

        <div className="accounts-actions">
          <Link to="/signup" className="btn btn-primary">
            Sign Up
          </Link>
          <Link to="/login" className="btn btn-outline">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Accounts