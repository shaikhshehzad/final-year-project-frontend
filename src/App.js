import logo from './logo.svg';
import './App.css';
import Parent from './components/practice_components/Parent';
// import Child01 from './components/practice_components/Child01';
// import Child02 from './components/practice_components/Child02';

// import Users from './components/Users';
// import Trial from './components/Trial_01';
{/* <Users count="5" subtitle="Active Users">list of users</Users>
<Trial/> */}

function App() {
  return (
    <div className="App">

      Hi from par-ent
     
        <Parent AN="15">List of Children </Parent>
   
    </div>
  );
}

export default App;
