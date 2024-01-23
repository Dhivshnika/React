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
        const symbol = email.indexOf('@');
        const dot = email.indexOf('.');
        let count1 = 0, count2 = 0, count3 = 0, count4 = 0;
        for (let i = 0; i < pwd.length; i++) {
            if (pwd.charAt(i) >= 'a' && pwd.charAt(i) <= 'z') {
                count1++;
            }
            if (pwd.charAt(i) >= 'A' && pwd.charAt(i) <= 'Z') {
                count2++;
            }
            if (pwd.charAt(i) >= '0' && pwd.charAt(i) <= '9') {
                count3++;
            }
            else {
                count4++;
            }
        }
        if (symbol < 1 || dot < symbol + 2 || dot + 2 >= email.length) {
            alert('Enter valid mail Id');
        }
        else {
            if (pwd.length < 8 || count1 < 1 || count2 < 1 || count3 < 1 || count4 < 1) {
                alert("Password must be 8 digits and should contain atleast one capital letter,small letter,digits and special character");
            }
            else {
                navigate('/form');
            }
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