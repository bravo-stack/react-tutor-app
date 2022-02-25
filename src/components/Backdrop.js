import Modal from "./Modal"

const Backdrop = ({login}) => {
  return (
    <div className="backdrop">
        <Modal name={login.username} email={login.email} />
    </div>
  )
}

export default Backdrop