import { useState } from 'react';
import './Password.css'
function Password(){
    return <div className="container">
     <div className="show-password">
      <input type="text" className='text-input'/>
      <button className='copy'>Copy Text</button>

     </div>
     <div className="length">
      <p>Select Password length(**8-50 characters**):</p>
      <input type='number' />
     </div>
     <div className="checkbox">
      <div>     
         <input type='checkbox' />
      <label>Include upper case</label>
      </div>

      <div>
      <input type='checkbox' />
      <label>Include lower case</label>
      </div>

      <div>      
        <input type='checkbox' />
      <label>Include numbers</label>
      </div>

      <div>
      <input type='checkbox' />
      <label>Include symbols</label>
      </div>
     </div>
    

      <div>  
        <button id="genrate-password-btn">Generate Password</button>
      </div>
      </div>

}

export default Password;