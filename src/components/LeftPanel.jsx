import React, { useState } from 'react'
import TextInput from './TextInput';
import Dropdown from './Dropdown';
import Checkbox from './CheckBox';
import RadioButton from './RadioButton';
import FileUpload from './FIleUpload';
import TextArea from './TextArea';

const LeftPanel = () => {
  const [selectedFieldType, setSelectedFieldType] = useState('');

  const handleFieldTypeChange = (e) => {
    setSelectedFieldType(e.target.value);
  };

  const renderSelectedComponent = () => {
    switch (selectedFieldType) {
      case 'text':
        return <TextInput />;
      case 'dropdown':
        return <Dropdown />;
      case 'checkbox':
        return <Checkbox />;
      case 'radio':
        return <RadioButton />;
      case 'file':
        return <FileUpload />;
      case 'textarea':
        return <TextArea />;
      default:
        return null;
    }
  };

  return (
    <div>
      <label>Select Field Type:</label>
      <select value={selectedFieldType} onChange={handleFieldTypeChange}>
        <option value="">Select</option>
        <option value="text">Text Input</option>
        <option value="dropdown">Dropdown</option>
        <option value="checkbox">Checkbox</option>
        <option value="radio">Radio Button</option>
        <option value="file">File Upload</option>
        <option value="textarea">Textarea</option>
      </select>

      {renderSelectedComponent()}
    </div>
  );
}

export default LeftPanel