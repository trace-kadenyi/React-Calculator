

const Table = ({ updatedData, input, setInput, computeData, computeDecimalResponse, clearData, deleteData }) => {
    return (
        <section className="theCalc">
            <table className="table">
                <tbody>
                <tr>
                    <td style={{border: "0px"}}></td>
                    <td style={{border: "0px"}}></td>
                    <td><button className="clear btn btn-primary" onClick={() => clearData()}>C</button></td>
                    <td><button className="btn btn-danger" onClick={()=> deleteData()}>DEL</button></td>
                </tr>
                <tr>
                    <td><button className="percentage btn btn-info" onClick={updatedData} id='%'>%</button></td>
                    <td><button className="square btn btn-info" onClick={updatedData} id='('>(</button></td>
                    <td><button className="square btn btn-info" onClick={updatedData} id=')'>)</button></td>
                    <td><button className="divide btn btn-info" onClick={updatedData} id='/'>/</button></td>
                </tr>
                <tr>
                    <td><button className="btn btn-secondary" onClick={updatedData} id='7'> 7 </button></td>
                    <td><button className="btn btn-secondary" onClick={updatedData} id='8'> 8 </button></td>
                    <td><button className="btn btn-secondary" onClick={updatedData} id='9'> 9 </button></td>
                    <td><button className="times btn btn-info" onClick={updatedData} id='*'>*</button></td>
                </tr>
                <tr>
                    <td><button className="btn btn-secondary" onClick={updatedData} id='4'> 4 </button></td>
                    <td><button className="btn btn-secondary" onClick={updatedData} id='5'> 5 </button></td>
                    <td><button className="btn btn-secondary" onClick={updatedData} id='6'> 6 </button></td>
                    <td><button className="minus btn btn-info" onClick={updatedData} id='-'>-</button></td>
                </tr>
                <tr>
                    <td><button className="btn btn-secondary" onClick={updatedData} id='1'> 1 </button></td>
                    <td><button className="btn btn-secondary" onClick={updatedData} id='2'> 2 </button></td>
                    <td><button className="btn btn-secondary" onClick={updatedData} id='3'> 3 </button></td>
                    <td><button className="plus btn btn-info" onClick={updatedData} id='+'>+</button></td>
                </tr>
                <tr>
                    <td><button className="btn btn-secondary" onClick={updatedData} id='0'> 0 </button></td>
                    <td><button className="decimal btn btn-info" onClick={updatedData} id='.'>.</button></td>
                    <td><button className="answer btn btn-primary" onClick={() => computeDecimalResponse()} id='Ans'>Ans</button></td>
                    <td><button className="equals btn btn-success" onClick={() => computeData()} id='='>=</button></td>
                </tr>
                </tbody>
            </table>
        </section>
    );
};

export default Table;