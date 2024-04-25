import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
    const [listItems, setListItems] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddList = ()=>{
      setListItems([...listItems,inputValue]);
      localStorage.setItem('items',JSON.stringify(listItems));
      setInputValue('');   
    }

    const storedItems = JSON.parse(localStorage.getItem('items') ?? '[]');
  return (
    <div>

      <div>
        <input 
          type="text" 
          value={inputValue}
          onChange={(e)=>setInputValue(e.target.value)}
        />
        <button onClick={handleAddList}>Add</button>
      </div>
      <div>
        <ul>
          {
            storedItems.map((item:string)=>{
              return <div>
                        <input type="checkbox" />
                        <li>{item}</li>
                      </div>
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default App
