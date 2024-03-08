import { JSONProvider, useJSONContext } from './context/JSONContext'
import Form from './components/Form'
import './App.css'

function App() {
  
  return (
    <JSONProvider>
      <AppContent />
    </JSONProvider>
  )
}

function AppContent() {
  const { generatedJSONs } = useJSONContext();
  console.log(generatedJSONs,"in app ");
  return (
    <div>
      <h1>Dynamic Form Generator</h1>
      <Form formFields={generatedJSONs} />
    </div>
  );
}
export default App
