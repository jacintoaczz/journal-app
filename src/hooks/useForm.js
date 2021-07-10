import { useState } from "react";

/**
 * @description Useful for handling the values that comes from an input (just text inputs for now). The name you pass to the hook MUST be the same as the 'name' attribute of the input you want to handle.
 * @param {object} initialState - The name(s) of the input(s) to handle.
 * @returns {array} An array containing [inputValues, handleInputChange, reset]
 *
 * @example
 * const [inputValues, handleInputChange, reset] = useForm({email:'email@domain.com', password: '123456'})
 * // You could extract the values too if you want to easily work with them.
 * const {email, password} = inputValues;
 */
export const useForm = (initialState = {}) => {
  const [inputValues, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...inputValues,
      [target.name]: target.value,
    });
  };

  return [inputValues, handleInputChange, reset];
};
