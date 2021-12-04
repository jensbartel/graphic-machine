import { useState } from 'react';

const Inquiry = () => {
    const [inquiry, setInquiry] = useState({
        firstname: '',
        lastname: '',
        email: '',
        message: '',
        alert: '',
    });

    const { firstname, lastname, email, message, alert } = inquiry;

    const onChange = e => setInquiry({ ...inquiry, [e.target.name]: e.target.value });

    return (
        <form>
            <div className='form-for-name'>
                <div>
                    <label htmlFor='name'>First Name*</label>
                    <br />
                    <input type='text' name='firstname' value={firstname} onChange={onChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor='name'>Last Name*</label>
                    <br />
                    <input type='text' name='lastname' value={lastname} onChange={onChange} />
                </div>
            </div>
            <div className='form-group'>
                <label htmlFor='name'>Email Address*</label>
                <br />
                <input type='text' name='email' value={email} onChange={onChange} />
            </div>
            <div className='form-group'>
                <label htmlFor='message'>Message*</label>
                <textarea type='text' name='message' value={message} onChange={onChange}>
                    Enter text here...
                </textarea>
            </div>
            <p>* = required</p>
            {alert !== '' && <h4>{alert}</h4>}
            <input type='submit' value='Submit' className='submit' />
        </form>
    );
};

export default Inquiry;
