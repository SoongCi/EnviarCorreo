import React from 'react';
import emailjs from '@emailjs/browser';

export const Mailer = () => {

    const sendEmail = (event) => {
        event.preventDefault();
    
        emailjs.sendForm('service_83m0ara','template_wz2uz4x',event.target,'E-ENIt8MchQ1eQ908')
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    return (
        <div className='div-form'>
            <h1 className='title-form'>Contactanos</h1>
            <form className='form-mail' onSubmit={sendEmail}>
                <label>Nombre</label>
                <input type="text" name='user_name'/>
                <hr />
    
                <label>Email</label>
                <input type="email" name='user_email' />
                <hr />
    
                <label>Mensaje</label>
                <textarea name="user_message" id="" cols="30" rows="10"></textarea>
                <hr />
                <button>Send</button>
            </form>
        </div>
    )
}
