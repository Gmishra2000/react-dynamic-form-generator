import React, { useState } from 'react';
import "../Styles/common.css";
import { useJSONContext } from '../context/JSONContext';

const Checkbox = () => {
  const { addGeneratedJSON } = useJSONContext();

  const [formData, setFormData] = useState({
    id: '',
    label: '',
    type: 'checkbox',
    validation: {
      required: false
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleValidationChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      validation: {
        ...prevData.validation,
        [name]: checked
      }
    }));
  };

  const generateJson = () => {
    const jsonFormat = JSON.stringify(formData, null, 2);
    console.log(jsonFormat);
    addGeneratedJSON(formData);
  };

  return (
    <div className='form-attribute-fields'>
      <label>ID:</label>
      <input
        type="text"
        name="id"
        value={formData.id}
        onChange={handleInputChange}
      />

      <label>Label:</label>
      <input
        type="text"
        name="label"
        value={formData.label}
        onChange={handleInputChange}
      />

      <div>
        <label className='check-box'>
          Required:
          <input
            type="checkbox"
            name="required"
            checked={formData.validation.required}
            onChange={handleValidationChange}
          />
        </label>
      </div>

      <button onClick={generateJson}>Generate JSON</button>
    </div>
  );
};

export default Checkbox;
