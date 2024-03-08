import { createContext, useContext, useState } from 'react';

const JSONContext = createContext();

export const JSONProvider = ({ children }) => {
  const [generatedJSONs, setGeneratedJSONs] = useState(
    []
  );

  const addGeneratedJSON = (json) => {
    setGeneratedJSONs((prevJSONs) => [...prevJSONs, json]);
  };
   const removeGenerateJson = (index) => {
    setGeneratedJSONs((prevJSONs) => prevJSONs.filter((_, i) => i !== index));
  };
  return (
    <JSONContext.Provider value={{ generatedJSONs, addGeneratedJSON,removeGenerateJson }}>
      {children}
    </JSONContext.Provider>
  );
};

export const useJSONContext = () => {
  return useContext(JSONContext);
};
