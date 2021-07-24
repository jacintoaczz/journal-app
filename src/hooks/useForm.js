import { useState } from "react";

/**
 * @description Useful for handling the values that comes from an input (just text inputs for now). The name you pass to the hook MUST be the same as the 'name' attribute of the input you want to handle.
 * @param {object} initialState - The name(s) of the input(s) to handle.
 * @param {object} validations - Validations for the desired fields.
 * @returns {array} An array containing [inputValues, handleInputChange, reset]
 *
 * @example
 * const [inputValues, handleInputChange, reset] = useForm({email:'email@domain.com', password: '123456'})
 * // You could extract the values too if you want to work with them more easily.
 * const {email, password} = inputValues;
 */
export const useForm = (initialState = {}, validations = {}) => {
  const [inputValues, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...inputValues,
      [target.name]: target.value,
    });
  };

  const validateInputs = () => {
    let valid = true;
    const newErrors = {};
    // Checking for validation rules
    for (const key in validations) {
      // Value of the field that we're validating
      const value = inputValues[key];
      // Validation rules for this key
      const validation = validations[key];

      // Required field validation
      if (validation?.required?.value && !value) {
        valid = false;
        newErrors[key] = validation?.required?.message;
      }

      // Custom field validations
      const custom = validation?.custom;
      if (custom?.isValid && !custom.isValid(value)) {
        valid = false;
        newErrors[key] = custom.message;
      }
    }

    if (!valid) {
      setErrors(newErrors);
      return valid;
    }

    setErrors({});
    return valid;
  };

  return [inputValues, errors, handleInputChange, validateInputs, reset];
};
