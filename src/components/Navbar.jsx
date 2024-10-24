import Button from "./Button";

const Navbar = ({ title, style }) => {
  const navbarStyles = {
    backgroundColor: "orange",
    borderRadius: "5px",
  };
  return (
    <div>
      <h1>{title}</h1>
      <Button style={navbarStyles} />
    </div>
  );
};

export default Navbar;
