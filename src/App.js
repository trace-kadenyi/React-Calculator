import { useState } from 'react';
import Header from "./components/Header";
import Content from './components/Content';


function App() {
  let [input, setInput] = useState([]);
  const [output, setOutput] = useState(0);


  const updatedData = (e) => {
    setInput(input + (e.target.id))
  }

  
 const computeData = () => {
   try {
     // eslint-disable-next-line
     let result = Function('return ' + input)();
     let numberedOutput = Number(result);
     var finalOutput = (result - Math.floor(result)) !== 0;
     if(finalOutput) {
       setOutput(numberedOutput.toFixed(2))
       setInput(numberedOutput.toFixed(2)) 
     } else {
      setOutput(result)
      setInput(result)
     }     
   } catch(err) {
    setOutput('Error!');
   }
 }

 const computeDecimalResponse = () => {
  try {
    // eslint-disable-next-line
    let result = Function('return ' + input)();
    let numberedOutput = Number(result);
    setOutput(numberedOutput)
    setInput(numberedOutput)
  } catch (err) {
    setOutput('Error!')
  }
 }

 const clearData = () => {
   setInput('')
   setOutput(0)
   
 }

 const deleteData = () => {
   if(input.length) {
    setInput(input.slice(0, -1));
    setOutput(0)
   } else {
     setInput('')
     setOutput(0)
   }
   
 }

  return (
    <div className="App">
      <Header />
      <Content 
        output={output}
        input={input}
        updatedData={updatedData}
        setInput={setInput}
        computeData={computeData}
        computeDecimalResponse={computeDecimalResponse}
        clearData={clearData}
        deleteData={deleteData}
      />
    </div>
  );
}

export default App;
