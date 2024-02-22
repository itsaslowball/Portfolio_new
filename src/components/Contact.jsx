import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import "./Contact.css";

export const Contact = () => {



  const form = useRef();

  const openEmail = () => {
    // Implement your email sending logic here
    window.location.href = "mailto:priyanshu.sjce@gmail.com";
  };

  const openWhatsApp = () => {
    // Implement your WhatsApp logic here
    // For example, you can use a WhatsApp API or open the WhatsApp Web URL
    window.open("https://web.whatsapp.com/send?phone=8987245791");
  };

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        "service_g6cp998",
        "template_20ojhe7",
        form.current,
        {
          publicKey: "ZW-67t-2qVRxAJeA8",
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  

  return (
    <div className="contact" id="Contact">
      <h1>Contact Me</h1>

      <div className="contact-box">
        <div className="inner-box">
          <div className="whatsapp">
            <button
              className="email btn btn-outline-primary"
              onClick={openEmail}
            >
              <IoMailOpenOutline /> Email
            </button>
            <button
              className="whats btn btn-outline-success"
              onClick={openWhatsApp}
            >
              <FaWhatsapp /> WhatsApp
            </button>
          </div>

          <div className="form-div">
            <form className="form" ref={form} onSubmit={sendEmail}>
              <input
                className="name-input"
                type="text"
                name="from_name"
                placeholder="  Name"
              />

              <input
                className="email-input"
                type="email"
                name="from_email"
                placeholder="  Email"
              />

              <input
                className="subject-input"
                type="text"
                name="email_subject"
                placeholder="  Subject"
              />

              <textarea
                className="message-input"
                name="message"
                placeholder="Write Your Message"
              />

              <input className="btn btn-primary" type="submit" value="Send" />
            </form>
          </div>

          <div className="socials">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/your-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{color:'#0C6DFD'}}
                >
                  <FaLinkedin />  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/your-github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Github
                </a>
              </li>
              <li>
                <a
                  href="https://leetcode.com/your-leetcode"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{color:'#cc7e3f'}}
                >
                  <SiLeetcode />  LeetCode
                </a>
              </li>
              <li>
                <a
                  href="https://geeksforgeeks.org/your-geeksforgeeks"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{color:'#2f9339'}}
                >
                  <SiGeeksforgeeks />  GeeksforGeeks
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
