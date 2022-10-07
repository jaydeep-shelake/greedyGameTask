import style from '../styles/Form.module.css'
import { useState } from 'react';
const Form = () => {

  const [state,setState]=useState({name:null,email:null,mobNo:null,url:null,money:null,errors:{name:"",email:"",mobNo:"",url:"",money:"",}})
  
  const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };

  const validEmailRegex=RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

  const mobReg= RegExp(/^\d{10}$/);

  const urlReg=RegExp("((http|https)://)(www.)?"
  + "[a-zA-Z0-9@:%._\\+~#?&//=]"
  + "{2,256}\\.[a-z]"
  + "{2,6}\\b([-a-zA-Z0-9@:%"
  + "._\\+~#?&//=]*)")

  const handleChange=(event)=>{
    event.preventDefault()
    const { name, value } = event.target;
    let errors= state.errors
    console.log(name,value)
    switch (name) {
      case 'name': 
        errors.name = 
          value.length < 0
            ? 'Please Enter number!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'mobNo': 
      errors.mobNo = 
      mobReg.test(value)
        ? ''
        : 'Mob No is not valid!';
        break;
      case 'url': 
      errors.url = 
      urlReg.test(value)
        ? ''
        : 'Url is not valid';
        break;

      default:
        break;
    }
    setState({errors,[name]:value})
  }

  const handleSubmit=(e)=>{
     e.preventDefault()
     if(validateForm(state.errors)) {
       console.log(state.name,state.email,state.mobNo,state.url,state.money)
    }else{
      console.error('Invalid Form')
    }
  }

const {errors} = state
console.log(errors)
  return (
    <form className={style.from} onSubmit={handleSubmit}>
        <div className={style.from_upperInputs}>
        <div className={style.from_inputContainer}>
         <label htmlFor="name">Name</label>
         <input onChange={handleChange} type="text" name='name' id='name' placeholder='Enter your Full Name' className={errors.name.length > 0&& style.errorinput}/>
         {errors.name.length > 0 && 
                <span className={style.error}>{errors.name}</span>}
        </div>
        <div className={style.from_inputContainer}>
         <label htmlFor="email">Email</label>
         <input className={errors.email.length > 0&& style.errorinput} onChange={handleChange} type="email" id='email' name="email" placeholder='Enter your Email Address' noValidate/>
         {errors.email.length > 0 && 
                <span className={style.error}>{errors.email}</span>}
        </div>
        </div>
        <div className={style.from_inputContainer}>
         <label htmlFor="no">Phone Number</label>
         <input onChange={handleChange} type="text" id='no' name='mobNo' placeholder='Enter your phone number with country code' className={errors.mobNo.length > 0&& style.errorinput} />
         {errors.mobNo.length > 0 && 
                <span className={style.error}>{errors.mobNo}</span>}
        </div>
        <div className={style.from_inputContainer}>
         <label htmlFor="website">App/Website Link <span>(optional)</span></label>
         <input onChange={handleChange} type="text" id='website' name='url' placeholder='Enter you App/Website you wish to monetise' className={errors.url.length > 0&& style.errorinput} />
         {errors.url.length > 0 && 
                <span className={style.error}>{errors.url}</span>}
        </div>
        <div className={style.from_inputContainer}>
         <label htmlFor="revenue">Monthly Revenue (USD)</label>
         <input onChange={handleChange} type="text" id='revenue' name='money' placeholder='Enter your Average monthly revenue in USD' lassName={errors.money.length > 0&& style.errorinput} />
         {errors.money.length > 0 && 
                <span className={style.error}>{errors.money}</span>}
        </div>
        <button type='submit'>Get Started</button>

        <p>By signing up, you agree to our <span>Terms </span>and <span>Privacy</span> Policy</p>
    </form>
  )
}

export default Form