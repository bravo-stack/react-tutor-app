

const Modal = ({name, email}) => {
  return (
    <div>
        <div className='modal'>
            <p style={pStyle}>Welcome {name}!<br /><br />{email}</p>
        </div>
    </div>
  )
}

const pStyle = {
    color:  'rgb(1,171,20)'
}

Modal.defaultProps = {
    email: ""
}

export default Modal