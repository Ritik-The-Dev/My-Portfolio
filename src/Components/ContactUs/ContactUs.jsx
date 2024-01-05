import React, { useEffect, useState } from 'react'
import './ContactUs.css'
import Modal from 'react-modal';

const ContactUs = (props) => {
 const [name, setName] = useState('')
 const [email, setemail] = useState('')
 const [message, setmessage] = useState('')
 const[isLoading,setisOpen] = useState(false)
 const [modalIsOpen, setIsOpen] = useState(false);

 const handleSubmit = async (e) => {
    e.preventDefault();
    setisOpen(true)
    if (email.includes("@") === true && email.includes(".") === true && name && message) {
      const data = await fetch('https://portfoliobackends-3628.onrender.com/api/v1/AddFormData', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, message }),
      })
      const response = await data.json();
      console.log(response)
      setisOpen(false)
      if (response.success === true) {
        setName("");
        setemail("");
        setmessage("");
        setIsOpen(true);
      }
      else {
        alert("Error in Submission of the form", response.data)
        setName("");
        setemail("");
        setmessage("");
      }
    }
    else if (email.includes("@") === false || email.includes(".") === false) {
      alert("Enter a Valid Email")
      setemail("");
    }
    else {
      alert("All Fields are Mandatory")
    }
 }

 const closeModal = () => {
    setIsOpen(false);
 }

 const Data = async()=>{
  await fetch('https://portfoliobackends-3628.onrender.com/');
}
useEffect(()=>{
  Data();
},[])

 return (
    <div>
      <div className="form" ref={props.contactRef}>
        <div className="ferm">
          <h1 id='cme'>Contact Me</h1>
          <p id='fil'>Please fill out form below to discuss any work opportunities</p>
          <form>
            <input type="name" placeholder='Your Name' id='nameee' value={name} onChange={(e) => setName(e.target.value)} /><br />
            <input type="email" placeholder='Your Email' id='Email' value={email} onChange={(e) => setemail(e.target.value)} /><br />
            <input type="message" placeholder='Your Message' id='Message' value={message} onChange={(e) => setmessage(e.target.value)} /><br />
            <button className="butn" onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
      {
        isLoading === true?       
        <Modal
        isOpen={true}
        onRequestClose={closeModal}
        contentLabel="Modal"
        overlayClassName="Overlay"
        className="Modal"
      >
        <h2>Your Form has been Submitting pls Wait</h2>
        <br />
        <button onClick={closeModal} className='BTN'>Close</button>
      </Modal>: null
      }
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        overlayClassName="Overlay"
        className="Modal"
      >
        <h2>Your Form has been Successfully Submitted</h2>
        <br />
        <button onClick={closeModal} className='BTN'>Close</button>
      </Modal>
    </div>
 )
}

export default ContactUs