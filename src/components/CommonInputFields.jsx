import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import "../Styles/common.css";
import { useJSONContext } from '../context/JSONContext';

const CommonInputFields = ({ formData, setFormData, formType }) => {
  const { addGeneratedJSON } = useJSONContext();


  useEffect(() => {
    if (formData && formData.id) {
      setFormData(formData);
    }
  }, [formData, setFormData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleValidationChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      validation: {
        ...prevData.validation,
        [name]: value,
      },
    }));
  };

  const handleValidationCheckBoxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      validation: {
        ...prevData.validation,
        [name]: checked,
      },
    }));
  };

  const handleInputTypeChange = (e) => {
    const newInputType = e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      type: newInputType,
      options: newInputType === 'select' ? [] : prevData.options, 
    }));
  };

  const handleOptionsChange = (e, index) => {
    const newOptions = [...formData.options];
    newOptions[index] = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      options: newOptions,
    }));
  };

  const addOption = () => {
    setFormData((prevData) => ({
      ...prevData,
      options: [...prevData.options, ''],
    }));
  };

  const removeOption = (index) => {
    const newOptions = [...formData.options];
    newOptions.splice(index, 1);
    setFormData((prevData) => ({
      ...prevData,
      options: newOptions,
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
      <input type='text' name='id' value={formData.id} onChange={handleInputChange} />

      <label>Label:</label>
      <input type='text' name='label' value={formData.label} onChange={handleInputChange} />

      {formType === 'select' && (
        <div className='add-options'>
          <label>Options:</label>
          {formData.options.map((option, index) => (
            <div key={index}>
              <input
                type='text'
                value={option}
                onChange={(e) => handleOptionsChange(e, index)}
              />
              <button type='button' onClick={() => removeOption(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type='button' onClick={addOption}>
            Add Option
          </button>
        </div>
      )}

      {formType === 'text' && (
        <div>
          <label>Type:</label>
          <select
            name='inputType'
            value={formData.type}
            onChange={handleInputTypeChange}
          >
            <option value='text'>Text</option>
            <option value='email'>Email</option>
            <option value='phoneNumber'>Phone Number</option>
          </select>
        </div>
      )}

      <label>Validation:</label>
      <div>
        <label className='check-box'>
          Required:
          <input
            type='checkbox'
            name='required'
            checked={formData.validation.required}
            onChange={handleValidationCheckBoxChange}
          />
        </label>
      </div>

      

      {formType === 'text' && (
        <>
        <div>
          <label>Min Length:</label>
          <input
            type='number'
            name='minLength'
            value={formData.validation.minLength}
            onChange={handleValidationChange}
          />
        </div>
        <div>
          <label>Max Length:</label>
          <input
            type='number'
            name='maxLength'
            value={formData.validation.maxLength}
            onChange={handleValidationChange}
          />
        </div>
        
        </>
      )}

      <button onClick={generateJson}>Generate JSON</button>
    </div>
  );
};

CommonInputFields.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  formType: PropTypes.string.isRequired,
};

export default CommonInputFields;
