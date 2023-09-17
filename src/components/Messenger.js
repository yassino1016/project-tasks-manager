import React from 'react'

function Messenger() {
  return (
    <div className="messenger">
      <h1>Messenger</h1><br/>
      <p style={{color:'#0984e3'}}>This is a messenger page.</p>
      <button type='submit'>Send Message</button>
      <hr />
      <form action="/action_page.php" method="post">
        <label for="fname"><b>First Name:</b></label>&nbsp;&nbsp;
        <input type="text" placeholder="name" name="firstname" required /><br/><br/>
        <label for="lname"><b>Last Name:</b></label>&nbsp;&nbsp;<input type="text" placeholder="name" name= "lastname" required /><br/><br/>
        <textarea rows="5" cols="67"></textarea><br/><br/>
      </form>
    </div>
  )
}

export default Messenger
