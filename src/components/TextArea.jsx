import React, { useState } from 'react';
import "../Styles/common.css";
import CommonInputFields from './CommonInputFields';

const TextArea = () => {
  const [formData, setFormData] = useState({
    id: '',
    label: '',
    type: 'textarea',
    validation: {
      required: false,
      minLength: 0,
      maxLength: 0,
    },
  });

  return <CommonInputFields formData={formData} setFormData={setFormData} formType='textarea' />;
};

export default TextArea;
