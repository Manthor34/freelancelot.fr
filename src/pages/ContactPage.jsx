import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import MainNavbar from '../components/MainNavbar';
import "../styles/pages/Contact.scoped.scss";

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [sendError, setSendError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: !name ? `Le nom est requis` : null,
      email: !email ? `L'e-mail est requis` : null,
      message: !message ? `Le message est requis` : null,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    setIsSending(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      phone,
      subject: subject || 'Contact',
      message,
    };

    emailjs
      .send(
        window.REACT_APP_EMAILJS_SERVICE_ID,
        window.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        window.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          setIsSending(false);
          setIsSent(true);
          setName('');
          setEmail('');
          setPhone('');
          setSubject('');
          setMessage('');
          setErrors({});
        },
        (error) => {
          setIsSending(false);
          setSendError('Une erreur est survenue lors de l\'envoi de votre e-mail. Veuillez réessayer plus tard.');
        }
      );
  };

  return (
    <div className='contactContainer'>
      <MainNavbar />
      <div className='container'>
        <h1>Contactez-nous</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Téléphone (facultatif)</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Sujet (facultatif)</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className={`form-control ${errors.message ? 'is-invalid' : ''}`}
              id="message"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
          </div>
          {isSending && (
            <div className="alert alert-info" role="alert">
              Envoi de votre message...
            </div>
          )}
          {isSent && (
            <div className="alert alert-success" role="alert">
              Votre message a été envoyé. Merci !
            </div>
          )}
          {sendError && (
            <div className="alert alert-danger" role="alert">
              {sendError}
            </div>
          )}
          <div className="contactButtonContainer">
            <button type="submit" className="contactButton" disabled={isSending}>
              {isSending ? 'Envoi...' : 'Envoyer'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
