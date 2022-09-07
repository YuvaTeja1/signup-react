import "./styles.css";
export default function App() {
  return (
    <div className='container'>
    <div className='box'>
      <div className='heading-1'>Learn to paint by</div>
      <div className='heading-2'>watching others</div>
      <p className='para'>
        See how experienced painters create art in real-time. Watching scripted tutorials is great, but understanding how artists think is invaluable.
      </p>
      <div className='heading-3'>Try it free for 7 days then $20/mo there after</div> <br/>
      <div className='box-2'>
       <form action="#" onsubmit="required()">
          <input type="text" id="First_Name" name="First_Name" className='First_Name' placeholder='First Name' /> <br/>
          <input type="text" id="Last_Name" name="Last_Name" className='Last_Name' placeholder='Last Name' /> <br/>
          <input type="email" id="email" name="email" className='input-email' placeholder='Email Address' /> <br/>
          <input type="password" id="password" name="password" className='password' placeholder='Password' /> <br/>
          <button className='btn' type='submit' name="submit" value="submit">
            CLAIM YOUR FREE TRAIL
          </button>
          <h3 className='conclu'>By clicking the button you accepting <strong style={{"color":"red"}}>Teams & Condition</strong> </h3>
        </form>
      </div>
    </div>
    
  </div>
  );
}
