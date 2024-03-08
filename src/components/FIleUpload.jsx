import React, { useState } from 'react';
import "../Styles/common.css";
import { useJSONContext } from '../context/JSONContext';

const FileUpload = () => {
  const { addGeneratedJSON } = useJSONContext();

  const [formData, setFormData] = useState({
    id: "",
    label: "",
    type: "file",
    validation: {
      required: false,
      allowedTypes: [], // Array of allowed file types, e.g., ['pdf', 'jpg']
      maxSize: 0, // Maximum file size in bytes
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleValidationChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      validation: {
        ...prevData.validation,
        [name]: checked,
      },
    }));
  };

  const handleAllowedTypesChange = (e) => {
    const allowedTypes = e.target.value.split(",");
    setFormData((prevData) => ({
      ...prevData,
      validation: {
        ...prevData.validation,
        allowedTypes: allowedTypes.map((type) => type.trim()),
      },
    }));
  };

  const handleMaxSizeChange = (e) => {
    const maxSize = parseInt(e.target.value, 10);
    setFormData((prevData) => ({
      ...prevData,
      validation: {
        ...prevData.validation,
        maxSize: isNaN(maxSize) ? 0 : maxSize,
      },
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

      <div>
        <label>Allowed Types (comma-separated):</label>
        <input
          type="text"
          name="allowedTypes"
          value={formData.validation.allowedTypes.join(",")}
          onChange={handleAllowedTypesChange}
        />
      </div>

      <div>
        <label>Max Size (bytes):</label>
        <input
          type="number"
          name="maxSize"
          value={formData.validation.maxSize}
          onChange={handleMaxSizeChange}
        />
      </div>

      <button onClick={generateJson}>Generate JSON</button>
    </div>
  );
};

export default FileUpload;
