import React, {useState} from 'react';

const AuthForm = ({ onSubmit, errors }) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    return (
        <div className='row'>
            <form className='col s4' onSubmit={() => onSubmit(email, password)}>
                <div className='input-field'>
                    <input
                        placeholder='Email'
                        value={email}
                        onChange={evt => setEmail(evt.target.value)}
                    />
                </div>
                <div className='input-field'>
                    <input
                        placeholder='Password'
                        value={password}
                        onChange={evt => setPassword(evt.target.value)}
                        type='password'
                    />
                </div>
                <div className='error'>
                    {/* key makes sure show only one div per error */}
                    {errors.map(error => <div key={error}>{error}</div>)}
                </div>

                <button className='btn'>Submit</button>
            </form>
        </div>
    );
};

export default AuthForm;