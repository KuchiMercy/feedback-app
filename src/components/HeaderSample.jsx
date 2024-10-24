import Button from "./Button";

const Header = ({ title, style }) => {
  const HeaderStyles = {
    backgroundColor: "green"
  }
  return <div className="container">

    <Button style={HeaderStyles} />
  </div>;
};

export default Header;
