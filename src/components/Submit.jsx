import React, { useState } from 'react';
// Make sure to import the necessary Email library or configure it properly

function Submit() {
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    // Function to handle form submission and send the email
    const sendEmail = (e) => {
        e.preventDefault(); // Prevent the form from actually submitting and refreshing the page

        // Your email sending logic here, using Email.send or any other email library
        // Ensure you have the correct email configuration and credentials

        // Example using Email.send
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "md.erhenede@gmail.com",
            Password: "password",
            To: to,
            From: "you@isp.com",
            Subject: subject,
            Body: body
        }).then(message => alert(message));
    };

    return (
        <div>
            <form onSubmit={sendEmail}>
                <input
                    type="email"
                    placeholder="To"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                    placeholder="Body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Submit;
