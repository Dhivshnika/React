import '../login/login.css'
import { useState } from 'react';
import mail from '../../assets/mail.png';
import pwds from '../../assets/pwd.png';
import girl from '../../assets/girl.png';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const navigate = useNavigate();
    const handleEmailChange = (e) => {
        const inputValue = e.target.value;
        setEmail(inputValue);
    };
    const handlePwdChange = (e) => {
        const inputValue = e.target.value;
        setPwd(inputValue);
    };
    const handleLogin = () => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;;
        const isValid = emailRegex.test(email);
        if (isValid && pwd != "") {
            navigate('/form');
        }
        else {
            alert('Enter valid mail Id and Password');
        }
    };
    return (
        <div className='mainContainer'>
            <div className='loginBox'>
                <h4 className='login'>Login</h4>
                <div className='mailBox'>
                    <img src={mail} alt='mail' height='20' width='20' />
                    <input type='mail' required placeholder='User Mail' value={email}
                        onChange={handleEmailChange} />
                </div>
                <div className='passwordBox'>
                    <img src={pwds} alt='mail' height='20' width='20' />
                    <input type='password' required placeholder='Password' value={pwd}
                        onChange={handlePwdChange} />
                </div>
                <div className='button' onClick={handleLogin}>Login Now</div>
            </div>
            <div className='designBox'>
                <img src={girl} alt='girl' height={400} width={400} className='designImg' />
            </div>
        </div>
    )
}
export default Login;