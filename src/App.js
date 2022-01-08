import './App.css';
import Navbar from './Components/Navbar';
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Students from './Components/Student/Students';
import Student from './Components/Student/Student';
import UpdateStudForm from './Components/Student/UpdateStudForm';
import AddStudent from './Components/Student/AddStudent';
import { Provider } from "react-redux";
import store from './store';
import Passengers from './Components/Airlines/Passengers';
import Passenger from './Components/Airlines/Passenger';
import AddPassenger from './Components/Airlines/AddAirlines';
import ViewPassenger from './Components/Airlines/ViewPassenger';









function App() {
  return (
    <Provider store={store} >
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Passengers />} />
          <Route exact path="/ViewPassenger" element={<ViewPassenger />} />
          <Route exact path="/Passenger/:id" element={<Passenger/>} />
          <Route exact path="/AddPassenger" element={<AddPassenger/>} />
          <Route exact path="/Students" element={<Students />} />
          <Route exact path="/Student/:id" element={<Student/>}/> 
          <Route exact path="/AddStudent" element={<AddStudent/>}/> 
          <Route exact path="/UpdateStudForm/:id" element ={<UpdateStudForm/>}/> 
        </Routes>
      </BrowserRouter>
     
    </div>
    </Provider>


  );
}

export default App;
