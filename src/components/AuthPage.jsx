import React from 'react'

const AuthPage = () => {
  return (
    <div>
        <form >
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Current Company" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        </form>
    </div>
  )
}

export default AuthPage