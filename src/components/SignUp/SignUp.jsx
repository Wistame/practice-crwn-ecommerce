import React, {setState}from 'react'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import './SignUp.scss'

import { auth, createUserProfileDocument} from '../../firebase/firebase.utils'





const SignUp = () =>{

    const [displayName, setDisplayName] = setState('');
    const [email, setEmail] = setState('');
    const [password, setPassword] = setState('');
    const [confirmPassword, setConfirmPassword] = setState('');


    const handleSubmit = async e =>{
        e.preventDefault();
        if(password !== confirmPassword){
            alert('password dont match');
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email, 
                password
                );

            await createUserProfileDocument(user, { displayName });
            
            setDisplayName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            
        
        } catch(e) {
            console.log(e);
        }

    };
    const handleChange = e =>{
        const { name, value } = e.target;
        setDisplayName(value);
    }


    return (
        <div className='sign-up'>
            <h2 className='title'>I do no have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                    />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                    />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='password'
                    required
                    />
                <FormInput
                    type='password'
                    name='ConfirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='ConfirmPassword'
                    required
                    />
                    <CustomButton type='submit'>
                        SIGN UP
                    </CustomButton>

            </form>
        </div> 
    )
}

export default SignUp