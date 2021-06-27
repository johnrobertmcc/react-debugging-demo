const Modal = ({ closeModal , modal, defaultState, setCompleted }) => {
  const showHideClassName = modal ? "modal display-block" : "modal display-none";
  const reset = () => {
      setCompleted(defaultState);
      closeModal()
  }

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        Thanks for completing the course! Feel free to share with friends, and I hope it was helpful.
        <br></br>
        Check out my other repos <a className='gh-link' href='https://github.com/michealengland/react-debugging-demo'>here</a>!
        <br></br>
        <button className="btn reset" onClick={() =>reset()}> Try Again? </button>
        <p className='hint'>if you cheated, try again and do it right</p>
      </div>
    </div>
  );
};

export default Modal;