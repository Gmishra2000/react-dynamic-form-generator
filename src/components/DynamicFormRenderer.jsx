import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import "../Styles/common.css";
import { useJSONContext } from '../context/JSONContext';

const DynamicFormRenderer = ({ formFields }) => {
   const {  removeGenerateJson } = useJSONContext();
  
  const handleRemoveField = (index) => {
    const updatedFormField = formFields.splice(index, 1);
    removeGenerateJson(updatedFormField)
  
  };
  const renderFormField = (field) => {
    const fieldKey = uuidv4();
    const { id, label, type, validation, options } = field;
  
    switch (type) {
      case 'text':
      case 'number':
      case 'email':
        return (
          <div key={fieldKey}>
            <label htmlFor={id}>{label}:</label>
            <input type={type} name={id} id={id} required={validation.required} />
          </div>
        );
      case 'select':
        return (
          <div key={fieldKey}>
            <label htmlFor={id}>{label}:</label>
            <select name={id} id={id} required={validation.required}>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        );
      case 'checkbox':
        return (
          <div key={fieldKey} >
            <label className='check-box'>
              <input type="checkbox" name={id} id={id} required={validation.required} />
              {label}
            </label>
          </div>
        );
      case 'radio':
        return (
          <div key={fieldKey} className='radio-box'>
            <label className='radio-box'>{label}:</label>
            <div>
            {options.map((option) => (
              <label key={option} className='radio-box'>
                <input type="radio" name={id} id={option} value={option} required={validation.required} />
                {option}
              </label>
            ))}
            </div>
          </div>
        );
      case 'file':
        return (
          <div key={fieldKey}>
            <label htmlFor={id}>{label}:</label>
            <input type="file" name={id} id={id} required={validation.required} />
              {validation.allowedTypes.length > 0 && (
            <span className="file-types-info">
              Allowed file types: {validation.allowedTypes.join(', ')}
            </span>
          )}
          {validation.maxSize > 0 && (
            <span className="file-size-info">
              Maximum file size: {validation.maxSize} bytes
            </span>
          )}
          </div>
        );
      case 'textarea':
        return (
          <div key={fieldKey}>
            <label htmlFor={id}>{label}:</label>
            <textarea name={id} id={id} required={validation.required}></textarea>
          </div>
        );
      default:
        return null;
    }
  };

  const handleFormChange = (e) => {
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = formFields.every((field) => {
      const { id, validation } = field;
      if (validation.required) {
        const fieldValue = e.target[id]?.value;
        return fieldValue && fieldValue.trim() !== '';
      }
      return true;
    });

    if (isValid) {
      // can add more logic here
      console.log('Form submitted successfully!');
    } else {
      console.error('Validation failed. Please fill in all required fields.');
    }
  };
  return (
     <form className='form-attribute-fields' onChange={handleFormChange} onSubmit={handleSubmit}>
      <div className='form-attribute-fields'>
        Create Your dynamic Form here
        {formFields.map((field, index) => (
          
          <div key={uuidv4()} className='form-inputs'>
            {renderFormField(field, index)}
           
            <button type='button' onClick={() => handleRemoveField(index)}>
              Remove
            </button>
          
          </div>
        ))}
      </div>
      
      {formFields.length > 0 && (
        <div className='submit-button-container'>
          <button type='submit'>Submit</button>
        </div>
      )}
    </form>
  );
};

export default DynamicFormRenderer;
