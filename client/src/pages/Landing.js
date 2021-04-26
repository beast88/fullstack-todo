import React, { useState } from 'react'
import Signup from '../components/auth/Signup'
import Login from '../components/auth/Login'

import '../css/landing.css'

function Landing() {
  const [isSignup, setIsSignup] = useState(false)

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="customwidth h-75 border rounded-lg shadow">
        <div className="p-4 pt-5 h-100">
          {isSignup ? <Signup /> : <Login />}
          {/* If signup is false show login form else show signup form */}
        </div>
      </div>
    </div>
  );
}

export default Landing;