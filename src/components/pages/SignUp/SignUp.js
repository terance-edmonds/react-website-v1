import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {TiWarning} from 'react-icons/ti'
import './SignUp.css'

function SignUp() {

    const [goToNextForm, setNextForm] = useState(false)

    const NextForm = () => {
        if (document.getElementById("signup_fname").value == '' || document.getElementById("signup_lname").value == '' || document.getElementById("signup_uname").value == '' || document.getElementById("signup_pass").value == '' || document.getElementById("signup_cpass").value == '' || document.getElementById("signup_warning-text").innerHTML != '') {
            document.getElementById("signup_warning-icon").style.opacity = 1
            document.getElementById("signup_warning-text").innerHTML = "All fields are required"
            return
        }
        setNextForm(true)
    }

    const handleChange = () => {
        document.getElementById('signup_warning-icon').style.opacity = 0
        document.getElementById('signup_warning-text').innerHTML = "" 
    }

    const handleChange2 = () => {
        document.getElementById('signup_warning-icon-2').style.opacity = 0
        document.getElementById('signup_warning-text-2').innerHTML = "" 
    }

    const confirmPassword = () =>{
        if (document.getElementById("signup_pass").value !== document.getElementById("signup_cpass").value) {
            document.getElementById("signup_warning-icon").style.opacity = 1
            document.getElementById("signup_warning-text").innerHTML = "password doesn't match"
            return
        }
        if(document.getElementById("signup_cpass").value === ''){
            document.getElementById("signup_warning-icon").style.opacity = 0
            document.getElementById("signup_warning-text").innerHTML = ''
        }
        if(document.getElementById("signup_pass").value === document.getElementById("signup_cpass").value){
            document.getElementById("signup_warning-icon").style.opacity = 0
            document.getElementById("signup_warning-text").innerHTML = ''
        }
    }

    const FirstForm = () => setNextForm(false)

    const handleSignUp = () =>{
        if (document.getElementById('signup_pn').value == '' || document.getElementById('signup_email').value == '' || document.getElementById('signup_address').value == ''){
            document.getElementById("signup_warning-icon-2").style.opacity = 1
            document.getElementById("signup_warning-text-2").innerHTML = "all fields are required"
            return
        }else{
            document.getElementById("signup_warning-icon-2").style.opacity = 0
            document.getElementById("signup_warning-text-2").innerHTML = ""
            return
        }
    }

    return (
        <div className="signup__container container">
            <h1 className="singup__head">Sign Up</h1>
            <div className="signup__form-wrapper">
                <div className="signup__inside-form-wrapper">

                    <div className={goToNextForm ? "signup__form signup__form1-state-2" : "signup__form signup__form1-state-1"}>
                        <div className="signup__form-item">
                            <input id='signup_fname' autoComplet="off" type="text" name="signup_fname" className="signup__input" placeholder="First name" onChange={handleChange}/>
                            <input id='signup_lname' autoComplet="off" type="text" name="signup_lname" className="signup__input" placeholder="Last name" onChange={handleChange}/>
                        </div>

                        <input id="signup_uname" autoComplet="off" type="text" name="signup_uname" className="signup__input" placeholder="Username" onChange={handleChange}/>

                        <div className="signup__form-item">
                            <input id='signup_pass' autoComplet="off" type="password" name="signup_pass" className="signup__input" placeholder="Password"  onChange={handleChange}/>
                            <input id='signup_cpass' autoComplet="off" type="password" name="signup_upass" className="signup__input" onChange={confirmPassword} placeholder="Confirm password"/>
                        </div>

                        <div className="signup__warning-section">
                            <p id="signup_warning-icon"><TiWarning/></p><p id="signup_warning-text"></p>
                        </div>

                        <div className="signup__form-bottom-wrapper">
                            <Link to='/login' className="signup__link">Sign in instead</Link>
                            <button className="signup__btn" onClick={NextForm}>Next</button>
                        </div>
                    </div>

                    <div className={goToNextForm ? "signup__form signup__form2-state-2" : "signup__form signup__form2-state-1"}>

                        <input id='signup_pn' autoComplet="off" type="text" name="signup_pn" className="signup__input" placeholder="Phone number" onChange={handleChange2}/>
                        <input id='signup_email' autoComplet="off" type="email" name="signup_email"className="signup__input" placeholder="Email" onChange={handleChange2}/>
                        <input id='signup_address' autoComplet="off" type="text" name="signup_address" className="signup__input" placeholder="Address" onChange={handleChange2}/>
                        
                        <div className="signup__warning-section">
                            <p id="signup_warning-icon-2"><TiWarning/></p><p id="signup_warning-text-2"></p>
                        </div>

                        <div className="signup__form-bottom-wrapper">
                            <p className="signup__back-text" onClick={FirstForm}>Back</p>
                            <button className="signup__btn" onClick={handleSignUp}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
