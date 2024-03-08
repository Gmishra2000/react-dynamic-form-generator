import React, { useState } from 'react';
import "../Styles/common.css";
import CommonInputFields from './CommonInputFields';

const Dropdown = () => {
  const [formData, setFormData] = useState({
    id: '',
    label: '',
    type: 'select',
    options: [],
    validation: {
      required: false
    }
  });

  return <CommonInputFields formData={formData} setFormData={setFormData} formType='select' />;
};
export default Dropdown;
