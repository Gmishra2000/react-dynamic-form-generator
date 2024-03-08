import React, { useState } from 'react'
import LeftPanel from './LeftPanel';
import "../Styles/Form.css";
import DynamicFormRenderer from './DynamicFormRenderer';
import JsonUploader from './JsonUploader';
const Form = ({ formFields }) => {
   const [uploadedData, setUploadedData] = useState(null);

  const handleFileUpload = (jsonData) => {
    setUploadedData(jsonData);
  };
  
  return (
    <div className="container">
      <div className="left-panel">
        <LeftPanel />
        <JsonUploader onFileUpload={handleFileUpload}/>
      </div>

      <div className="right-panel">
        <DynamicFormRenderer formFields={formFields} />
        {uploadedData && <DynamicFormRenderer formFields={uploadedData} />}
      </div>
    </div>
  );
}

export default Form