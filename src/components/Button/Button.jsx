
import style from './Button.module.css';

function Button(props) {

    // this is called Destrcuting
    const {isOutline, text, icon, ...rest} = props 

  return (
    <>
    <button {...rest} className={isOutline ? style.outline_btn : style.primary_btn}>
        {icon}
        {text}
    </button>
    </>
  )
}

export default Button
