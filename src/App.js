import './App.scss';
// import {Form} from "formik";
import Form from "./Form/Form";


function App() {
  return (
      <div className='wrapper'>
        <img className='img' src={require('./images/img.png')}/>
        <Form />
      </div>
  );
}

export default App;
