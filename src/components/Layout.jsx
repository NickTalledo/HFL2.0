import Footer from "./Footer";
import Nav from "./Nav";
import PropTypes from "prop-types";
function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
