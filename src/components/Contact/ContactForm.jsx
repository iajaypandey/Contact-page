import Button from '../Button/Button'
import style from './ContactForm.module.css'
import { TbMessage } from "react-icons/tb";
import { IoCall } from "react-icons/io5";
import { GrMail } from "react-icons/gr";


function ContactForm() {

  function handleSubmit(event){
    event.preventDefault();
    console.log(event);
  }

  return (
    <section className={`${style.container} container`}>

      <div className={style.form_section}>
        <div className={style.top_btn}> 
            <Button text='VIA SUPPORT CHAT' icon={<TbMessage fontSize='24px'/>}/>
            <Button text='VIA CALL' icon={<IoCall fontSize='24px'/>} />
        </div>  
        <Button 
        isOutline={true}
        text='VIA EMAIL FORM' icon={<GrMail  fontSize='24px'/>} /> 
        
        <form onSubmit={handleSubmit}>
          <div className={style.form_controller}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' />
          </div>
          <div className={style.form_controller}>
            <label htmlFor="eail">Email</label>
            <input type="email" name='email' />
          </div>
          <div className={style.form_controller}>
            <label htmlFor="text">Text</label>
            <textarea name="text" />
          </div>
        </form>

        <div style={{display: 'flex', justifyContent: 'end'}}>
          <Button text='SUBMIT' />
        </div>

      </div>

      <div className={style.image_section}>
        <img src="/images/Service.png"/>
      </div>

    </section>
  )
}

export default ContactForm
