import logo from '../logo.svg';
import './App.css'
import _ from 'lodash'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import store from "../store";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
const App = ()=>{
  const {contacts,user,activeUserId} = store.getState()
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)}/>
      <Main user={user} activeUserId={activeUserId}/>
      </div>
  )
}

export default App;
