import React from "react";
import { useForm } from "../../../../hooks/useForm";
import { Button } from "../../../Button/Button/Button";
import styles from "./GetInTouch.module.scss";

interface ContactFormProps {}

export const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const { formData, errors, handleInput, isFormValid } = useForm();
  return (
    <form
      noValidate
      action="https://formspree.io/f/xyyoollv"
      method="POST"
      className={styles.contactForm}
    >
      <label className={styles.emailName}>
        <span>Name</span>
        <input
          className={errors.name && styles.invalid}
          onChange={handleInput}
          value={formData.name}
          name="name"
          type="text"
          required
          placeholder="John Doe"
        />
      </label>
      <label className={styles.emailLabel}>
        <span>Email</span>
        <input
          className={errors.fromAddress && styles.invalid}
          onChange={handleInput}
          value={formData.email}
          name="email"
          type="email"
          required
          placeholder="example@gmail.com"
        />
      </label>
      <label className={styles.emailMessage}>
        <span>Message</span>
        <textarea
          rows={6}
          className={errors.message && styles.invalid}
          onChange={handleInput}
          value={formData.message}
          name="message"
          required
          placeholder="Hey there!"
        />
      </label>

      <div className={styles.buttonContainer}>
        <Button
          text="Submit"
          colour="#00FFFF"
          //   backgroundColour="#00FFFF"
          size="lg"
          variant="outline"
          // type="secondary"
        />
      </div>
    </form>
  );
};
