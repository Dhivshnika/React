import { useState} from 'react';
import axios from 'axios';
import '../app/component/Logout/logout.css';
import { Flex } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { PhoneOutlined, SendOutlined, VideoCameraOutlined } from '@ant-design/icons';
import '../app/dashboard/dashboard.css';

function SendMessagePage () {
    const details = useSelector((state: any) => state.detailReducer);
    if(details.id === 1){
        var chat = useSelector((state: any) => state.andrewReducer);
    }
    else{
        var chat = useSelector((state: any) => state.davidReducer);
    }
    const dispatch = useDispatch();
    const recipient = details.phone;
    const [message, setMessage] = useState('');
    const [sending, setSending] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    console.log(chat);
    const handleSubmit = async () => {
        setSending(true);
        try {
            const response = await axios.post('/api/sendMessage', { to: recipient, message });
            console.log(response.data);
            const timeSent = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
            if (details.id === 1) {
                dispatch({
                    type: 'ADD_ANDREW',
                    message,
                    timeSent
                })
            } else {
                dispatch({
                    type: 'ADD_DAVID',
                    message,
                    timeSent
                })
            }
            setMessage('');
            setError('');
            setSuccessMessage('Message sent successfully!');
        } catch (error) {
            setError('Failed to send message.');
        }
        setSending(false);
    };
    
    

    return (
         <Flex className='mainContainer' vertical justify='space-between'>
            <Flex justify='space-between' style={{width:"95%",padding:"10px"}}>
                <Flex gap="20px" align='center'>
                    <img style={{borderRadius:"50px"}} src={details.image} alt="person" width={60} height={60}/>
                    <div style={{color:"white"}}>{details.name}</div>
                </Flex>
                <Flex gap="20px">
                    <VideoCameraOutlined style={{color:"#f6a192",fontSize:"20px"}}/>
                    <PhoneOutlined style={{color:"#f6a192",fontSize:"20px"}}/>
                </Flex>
            </Flex>
            <Flex className='chatContainer' vertical align='end' gap="20px">
                <div> </div>
                {chat.map((item:any)=>(
                    <Flex className='output-style'> 
                    <Flex>
                        <div className='chat'>{item.chat}</div>
                    </Flex>
                    <Flex justify='flex-end'>
                        <div className='time'>{item.time}</div>
                    </Flex>
                    </Flex>
                ))}
            </Flex>
            <Flex className='chatBox'>
                <input
                    type='text'
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    placeholder='Type here...'
                    required 
                />
                <SendOutlined onClick={handleSubmit} style={{fontSize:"20px",color:sending === true ?"blue":"gray",paddingRight:"5px"}}/>
            </Flex>
        </Flex>
    );
};

export default SendMessagePage;
