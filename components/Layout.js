import Footer from "./Footer";
import Navbar from "./Navbar";

const ignoreList = [];
const Layout = ({ children }) => {
  return (
    <div className='content'>
      {ignoreList.includes(children.type.name) ? (
        children
      ) : (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
