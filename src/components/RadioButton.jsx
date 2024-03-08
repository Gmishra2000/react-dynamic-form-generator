import React, { useState } from 'react';
import "../Styles/common.css";
import CommonInputFields from './CommonInputFields';

const RadioButton = () => {
  const [formData, setFormData] = useState({
    id: '',
    label: '',
    type: 'radio',
    options: [],
    validation: {
      required: false
    }
  });

  return <CommonInputFields formData={formData} setFormData={setFormData} formType='select' />;
};

export default RadioButton;
