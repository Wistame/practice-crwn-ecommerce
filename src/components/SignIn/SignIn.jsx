import React, { useState }from 'react'
import './SignIn.scss'
import FormInput from '../FormInput/FormInput'
const SignIn = () =>{
    
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');

    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sing in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='email' 
                    value={email}
                    handleChange={e => setEmail(e.target.value)} 
                    required />
                <label>Email</label>
                <FormInput 
                    name='password'
                    type='passoword' 
                    value={password}
                    handleChange={e => setPassword(e.target.value)}

                    required />
                <label>Password</label>

                <input type='submit' value='Submit Form' />

            </form>
        </div>
)}

export default SignIn