import { useState } from "react";
import Backdrop from "./components/Backdrop";
import Card from "./components/Card";
import MultipleInputForm from "./components/MultipleInputForm";

function App() {

    // FORM NAME
    const [name, setName] = useState("")

    // MULTIPLE INPUT FORM DATA/STATE
    const [logins, setLogins] = useState({})

    // MODAL CONTROLLER STATE
    const [status, setStatus] = useState(false)

    // ACTIVATE MODAL
    const showModal = () => {
      setStatus(true)
      setTimeout(() => {
          setStatus(false)
      }, 4000);
  }

    return (
      <div className="App">
        <MultipleInputForm setLoginDetails={setLogins} showModal={showModal} />
        {status===true&&<Backdrop login={logins} />}
        <Card />
      </div>
    );
}

export default App;
