import { useState } from "react";

type Errors = {
  name: string;
  email: string;
  message: string;
};

type FormData = {
  name: string;
  email: string;
  message: string;
};

export function useForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({
    name: "",
    email: "",
    message: "",
  });

  const emailRegex = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  );
  const nameRegex = new RegExp(/^[\w\d][^<>/\\&]*$/gim);
  const messageRegex = new RegExp(/^[\w\d][^<>/\\&]*$/gim);

  function isValid(value: string, name: string, regex: RegExp, text: string) {
    if (!value) {
      setErrors({ ...errors, [name]: `Please enter your ${text}.` });
      return false;
    } else if (!regex.test(value)) {
      setErrors({ ...errors, [name]: `Please check your ${text}.` });
      return false;
    } else {
      setErrors({ ...errors, [name]: "" });
      return true;
    }
  }

  function validateInput(name: string, value: string) {
    switch (name) {
      case "email":
        return isValid(value, name, emailRegex, "email address");
      case "name":
        return isValid(value, name, nameRegex, "name");
      case "message":
        return isValid(value, name, messageRegex, "message");
      default:
        break;
    }
  }

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { value, name } = e.target;
    // validate
    validateInput(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const isFormValid = () => {
    const formEntries = Object.entries(formData);
    const errorArray = Object.values(errors);
    const emptyVals = errorArray.filter((error) => error.length >  0);

    if (emptyVals.length > 0) {
      let result: { [key: string]: string } = {};

      formEntries.forEach((entry) => {
        if (!entry[1]) {
          result[entry[0]] = `Please enter your ${entry[0] === "email" ? "email address" : entry[0]}.`;
        }
      });

      setErrors({ ...errors, ...result });
    } else if (
      errorArray.length === 3 &&
      errorArray.filter(Boolean).length === 0
    ) {
      return true;
    }
    return false;
  };

  return { formData, errors, handleInput, isFormValid: isFormValid, setFormData };
}
