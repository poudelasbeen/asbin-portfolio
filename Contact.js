import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

const form = useRef();

const sendEmail = (e) => {
e.preventDefault();

emailjs.sendForm(
"service_puzjlxg",
"template_kj3r4do",
form.current,
"FnLeS5eUXZ_v0qb5F"
)
.then(
(result) => {
alert("Message sent successfully!");
},
(error) => {
alert("Failed to send message.");
}
);

e.target.reset();
};

return (

<section className="section">

<h2>Contact Me</h2>

<form ref={form} onSubmit={sendEmail} className="contact-form">

<input
type="text"
name="name"
placeholder="Your Name"
required
/>

<input
type="email"
name="email"
placeholder="Your Email"
required
/>

<textarea
name="message"
placeholder="Your Message"
required
/>

<button type="submit">
Send Message
</button>

</form>

{/* Contact Links */}

<div className="contact-info">

<p>📧 Email: <a href="mailto:poudel.asbeen@gmail.com">poudel.asbeen@gmail.com</a></p>

<p>💻 GitHub: 
<a href="https://github.com/poudelasbeen" target="_blank" rel="noreferrer">
 github.com/poudelasbeen
</a>
</p>

<p>🔗 LinkedIn: 
<a href="https://www.linkedin.com/in/poudelasbin/" target="_blank" rel="noreferrer">
 www.linkedin.com/in/poudelasbin/
</a>
</p>

</div>

</section>

);

}

export default Contact;