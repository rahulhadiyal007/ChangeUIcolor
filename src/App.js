import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { InputComponent } from './theme';


function App() {
 
       const [ui, setui] = useState(null);
      
           const getcolor = (color) =>{
                    setui(color); 
           }

      
    return (
         <div className='mainc' style={{background: `${ui}`}} >
               <InputComponent  getcolor={getcolor} />  
                
         </div>
    );

    
}
  
export default App;
