import React from 'react';
import Table from './Table';
import Data from './Data';

const Content = ({ output, input, updatedData, computeDecimalResponse ,setInput, computeData, clearData, deleteData }) => {
  return (
      <main className='main-sect'>
        <Data 
          output={output}
          input={input}
        />
        <Table 
          setInput={setInput}
          input={input}
          updatedData={updatedData}
          computeData={computeData}
          computeDecimalResponse={computeDecimalResponse}
          clearData={clearData}
          deleteData={deleteData}
        />
      </main>
    
  )
}

export default Content