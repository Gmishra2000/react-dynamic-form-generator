import React, { useState } from 'react';

const JsonUploader = ({ onFileUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const jsonData = JSON.parse(event.target.result);
        onFileUpload(jsonData);
      };
      reader.readAsText(file);
    }
  };

  return (
    <>
    <label htmlFor="file">Upload Your Json Form</label>
    <input type="file" accept=".json"  onChange={handleFileChange} />
    </>
  );
};

export default JsonUploader;
