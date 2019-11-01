import Nav from "../components/nav";

const Layout = props => {
  return (
    <>
      <Nav />
      {props.children}
    </>
  );
};

export default Layout;
