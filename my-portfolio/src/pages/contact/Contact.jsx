import './contact.scss'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <div className="textContainer">
        <h1>Let's work together</h1>
        <div className="item">
          <h2>Mail</h2>
          <span><a href="mailto:">shincyshnz@gmail.com</a></span>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type='text' placeholder='Name' required />
          <input type='email' placeholder='Email' required />
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
          <button>Submit</button>
        </form>

      </div>
    </div>
  )
}

export default Contact