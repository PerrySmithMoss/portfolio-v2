import React, { useState } from "react";
import { useForm } from "../../../../hooks/useForm";
import { Button } from "../../../Button/Button/Button";
import styles from "./GetInTouch.module.scss";

interface ContactFormProps {}

interface IEmailRes {
  status: number;
  msg: string;
  info: null | string;
  preview: null | string;
}

export const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const { formData, errors, handleInput, isFormValid, setFormData } = useForm();
  const [isEmailReponseOK, setIsEmailReponseOK] = useState<null | boolean>(
    null
  );
  const [emailResponse, setEmailResponse] = useState<null | string>(null);

  const handleSubmit = async () => {
    const valid = isFormValid();

    if (valid) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_ROOT_URL}/api/getInTouch`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ contact: formData }),
        }
      );

      const data: IEmailRes = await res.json();

      if (data.status === 200) {
        setIsEmailReponseOK(true);
      } else {
        setIsEmailReponseOK(false);
      }

      setEmailResponse(data.msg);

      setFormData((prev) => ({
        ...prev,
        name: "",
        email: "",
        message: "",
      }));
    }
  };

  return (
    <form className={styles.contactForm}>
      <label className={styles.emailName}>
        <span>
          Name <span style={{ color: "#ef4444" }}>*</span>
        </span>
        <input
          className={errors.name && styles.invalid}
          onChange={handleInput}
          value={formData.name}
          name="name"
          type="text"
          required
          placeholder="Enter your name"
        />
        {errors.name && (
          <p style={{ paddingTop: "6px" }} className={styles.error}>
            {errors.name}
          </p>
        )}
      </label>
      <label className={styles.emailLabel}>
        <span>
          Email <span style={{ color: "#ef4444" }}>*</span>
        </span>
        <input
          className={errors.email && styles.invalid}
          onChange={handleInput}
          value={formData.email}
          name="email"
          type="email"
          required
          placeholder="Enter your email"
        />
        {errors.email && (
          <p style={{ paddingTop: "6px" }} className={styles.error}>
            {errors.email}
          </p>
        )}
      </label>
      <label className={styles.emailMessage}>
        <span>
          Message <span style={{ color: "#ef4444" }}>*</span>
        </span>
        <textarea
          rows={6}
          className={errors.message && styles.invalid}
          onChange={handleInput}
          value={formData.message}
          name="message"
          required
          placeholder="Enter your message"
        />
        {errors.message && <p className={styles.error}>{errors.message}</p>}

        {isEmailReponseOK ? (
          <p className={styles.success}>{emailResponse}</p>
        ) : (
          <p className={styles.error}>{emailResponse}</p>
        )}
      </label>
      <div className={styles.buttonContainer}>
        <Button
          text="Submit"
          submissionType="submit"
          colour="#00FFFF"
          size="lg"
          variant="outline"
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
};
