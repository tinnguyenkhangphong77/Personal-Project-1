import "../static/footer.scss";

const Footer = (props) => {
  console.log(props);
  return (
    <div className="flex footer">
      {props.data.map((item) => {
        return (
          <div key={item.col_number}>
            {item.col_values.map((value) => {
              return <p key={value}>{value}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
