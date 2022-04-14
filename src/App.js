import {useState} from 'react'
import ReactMarkdown from 'react-markdown';
import './App.css';


function App() {
const [markdown,setMarkDown]=useState('')

  return (
    <div className="App">
      <textarea onChange={(e)=>setMarkDown(e.target.value)} className='markdown' value={markdown} placeholder="Write markdown here...">
      </textarea>
      <div className='text'>
        <ReactMarkdown>
           {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
