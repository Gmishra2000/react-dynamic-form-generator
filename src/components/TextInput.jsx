import React, { useState } from 'react';
import "../Styles/common.css";
import CommonInputFields from './CommonInputFields';

const TextInput = () => {
  const [formData, setFormData] = useState({
    id: '',
    label: '',
    type: 'text',
    validation: {
      required: false,
      minLength: 0,
      maxLength: 0,
    },
  });

  return <CommonInputFields formData={formData} setFormData={setFormData} formType='text' />;
};

export default TextInput;
