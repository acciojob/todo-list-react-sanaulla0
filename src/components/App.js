
import React , {useState} from "react";
import './../styles/App.css';


const App = () => {
  const [data,setData] = useState('');
  const[updatedata , setUpdatedata] = useState('');
  const [defi , setDefi] =useState([]);
  const[click , setClick] = useState(true);
  const [index , setIndex] = useState(null);
  const handleclick = ()=>{
        
        setDefi([...defi,data]);
        setData('');
  }
  const handleEdit=(index)=>{

          setIndex(index);
          setClick(false);


  }
  const handlesave = ()=>{
    const update = [...defi];
    update[index] = updatedata;
    setDefi(update);
    setUpdatedata('');
    setIndex(null); // reset the index value after saving the updated data
    setClick(true);
  }
  const handledelete = (index)=>{
           const update = [...defi];
           update.splice(index,1);
           setDefi(update);
  }
   

  return (
    <div>
        {/* Do not remove the main div */}
        <div className="add_tasks_section">
          <h1>To Do List</h1>
        <input type="text" onChange={(e)=>setData(e.target.value)} />
        <button onClick={handleclick}>Add</button>
        </div>
              <div >
              {click ? (
                <div className="tasks_section">
                  
                {defi.map((item, index)=>(
                     <div key={index}>{item}
                      <button className="edit" value={index} key={index} onClick={()=>handleEdit(index)}>edit</button>
              <button className="delete" value={index} onClick={()=>handledelete(index)}>delete</button>
                     </div>
                ))}
                </div>
                 
                    
              ) : (
                <div className="task" >
                  
                <input className="input" type="text"  onChange={(e)=>setUpdatedata(e.target.value)} />
                
                <button className="save" onClick={handlesave}>save</button>
                </div>
              )}
              
            
                </div>  
          
    </div>
  )
}

export default App
