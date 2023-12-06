import "./PageInput.css";
function PageInput(props) {
  return (
    <>
      <div className="InputBox">
        <div>{props.children}</div>
        <input
          type={props.type}
          placeholder={props.placeholder}
          className="pageInput"
        />
      </div>
    </>
  );
}

export default PageInput;
