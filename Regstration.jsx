import React from 'react'
import './reg.css'

export default function Regstration() {
  return (
    <form class="body">
    <div class="raj">
        <h2><span class="note">Sign-up-</span>Form</h2>
        <label>FirstName</label>
        <input type="text" id="name"></input><br></br>
        <label>LastName</label>
        <input type="text" id="Lastname"></input><br />
        <label>Email</label>
        <input type="email"></input><br />
        <label>Password</label>
        <input type="password"></input><br />
        <label>Conform password</label>
        <input type="password"></input><br /><br />
        <input type="submit" value="Register" id="sub"></input>
        <input type="reset" id="reset"></input>

        </div>
    </form>
  )
}
