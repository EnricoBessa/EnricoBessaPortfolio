import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const { t } = useTranslation();

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'contact.errorName';
    if (!form.email.trim()) {
      newErrors.email = 'contact.errorEmailRequired';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'contact.errorEmailInvalid';
    }
    if (form.message.trim().length < 10) newErrors.message = 'contact.errorMessage';
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus(null);
      return;
    }

    setErrors({});
    setStatus('sending');

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLETE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
          title: 'Contato via portfólio',
          time: new Date().toLocaleString('pt-BR'),
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Email error:', error);
        setStatus('error');
      });
  };

  const statusMessageKey = {
    sending: 'contact.sending',
    success: 'contact.success',
    error: 'contact.errorSend',
  }[status];

  return (
    <section className="page-section contact-section">
      <div className="contact-card">
        <h1 className="page-title page-title--medium contact-card__title">{t('contact.title')}</h1>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="contact-name" className="form-label">
              <FaUser aria-hidden="true" focusable="false" />
              {t('contact.name')}
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              className="form-input"
              placeholder={t('contact.placeholderName')}
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
            />
            {errors.name && (
              <p id="contact-name-error" className="form-error">
                {t(errors.name)}
              </p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="contact-email" className="form-label">
              <FaEnvelope aria-hidden="true" focusable="false" />
              {t('contact.email')}
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              className="form-input"
              placeholder={t('contact.placeholderEmail')}
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
            />
            {errors.email && (
              <p id="contact-email-error" className="form-error">
                {t(errors.email)}
              </p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="contact-message" className="form-label">
              <FaCommentDots aria-hidden="true" focusable="false" />
              {t('contact.message')}
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              className="form-input"
              placeholder={t('contact.placeholderMessage')}
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
            />
            {errors.message && (
              <p id="contact-message-error" className="form-error">
                {t(errors.message)}
              </p>
            )}
          </div>

          <div className="contact-form__actions">
            <button type="submit" className="btn-primary" disabled={status === 'sending'}>
              {t('contact.submit')}
            </button>
          </div>

          {statusMessageKey && (
            <p className={`form-status form-status--${status}`} role="status">
              {t(statusMessageKey)}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
