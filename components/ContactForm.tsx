'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm } from '../app/actions';
import styles from './ContactForm.module.css';

const initialState = {
    success: false,
    message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className={styles.submitButton} aria-disabled={pending}>
      {pending ? 'Submitting...' : 'Send Message'}
    </button>
  );
}

const ContactForm = () => {
  const [state, formAction] = useFormState(submitContactForm, initialState);

  return (
    <form action={formAction} className={styles.form}>
      <div className={styles.inputGroup}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required />
      </div>
      <SubmitButton />
      {state.message && <p className={state.success ? styles.success : styles.error}>{state.message}</p>}
    </form>
  );
};

export default ContactForm;
