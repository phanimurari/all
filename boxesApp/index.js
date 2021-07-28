function Box(props) {
  const { text } = props;
  return <div className={text}>{text}</div>;
}

const element = (
  <div>
    <h1>Boxes</h1>
    <div className="boxes-container">
      <Box text={"Small"} />
      <Box text={"Medium"} />
      <Box text={"Large"} />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
