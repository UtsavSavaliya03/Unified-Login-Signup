import React, { useState } from 'react';
import './LoginSignup.scss';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';

export default function LoginSignup() {

    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className='login-signup-container px-4 px-md-5'>
            <div className='head'>
                <img className='cursor-pointer' src='Assets/Logo/Logo.svg' alt='icon' />
            </div>
            <div className='body py-5'>
                <div className='row m-0 p-0'>
                    <div className='col-md-5 px-0'>
                        <div className='d-flex align-items-center h-100'>
                            <div>
                                <p className='main-text mb-4'>Trade with First Decentralised Forex Brocker</p>
                                <p className='m-0 description'>In a never-before-seen decentralized deposit & Withdrawal style.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-7 mt-5 mt-md-0 px-0'>
                        <div className='forms-wrapper h-100'>
                            <div className='form-side-padding'>
                                <div className='form-container px-3 px-md-5 py-4'>
                                    <div className='slider-container row m-0 col-0'>
                                        <button className={`col-6 ${isLogin ? 'btn-active' : null}`} onClick={() => setIsLogin(!isLogin)}>Login</button>
                                        <button className={`col-6 ${!isLogin ? 'btn-active' : null}`} onClick={() => setIsLogin(!isLogin)}>Sign up</button>
                                    </div>
                                    {
                                        isLogin ? (
                                            <LoginForm />
                                        ) : (
                                            <SignupForm />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
