import {createRoot} from "react-dom/client"
import "./index.css"; 
const root=createRoot(document.getElementById("root"))

function Header(){
  return(<div className="header">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"alt="React Logo" className="logo"/>
          <h2 className="title">Rules of JSX</h2>
        </div>)
}

function List(){
  return(<ul className="rules">
          <li>Must enclose JSX in a Root Element</li>
          <li>Close the Tags Properly</li>
          <li>Use className for CSS class (since class is reserved in JS)</li>
          <li>Use camelCase for attributes</li>
          <li>Use curly braces {"{}"} for JS inside JSX</li>
        </ul>)
}
 function Reuse(){
  return(
    <div className="app">
      <div className="card">
      <Header/>
      <List/>
      </div>
    </div>
  )
 }
root.render(<Reuse/>);


