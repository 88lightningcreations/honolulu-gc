'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm } from '@/app/actions';
import styles from './ContactForm.module.css';

const initialState = {
  message: "",
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
        {state.errors?.name && <p className={styles.error}>{state.errors.name[0]}</p>}
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        {state.errors?.email && <p className={styles.error}>{state.errors.email[0]}</p>}
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" />
        {state.errors?.phone && <p className={styles.error}>{state.errors.phone[0]}</p>}
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" required />
        {state.errors?.subject && <p className={styles.error}>{state.errors.subject[0]}</p>}
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required />
        {state.errors?.message && <p className={styles.error}>{state.errors.message[0]}</p>}
      </div>
      <SubmitButton />
      {state.message === 'Success!' && <p className={styles.success}>Message sent successfully!</p>}
    </form>
  );
};

export default ContactForm;
