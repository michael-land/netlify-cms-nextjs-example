import Layout from "./AppLayout";
import Content from "./AppContent";
import Header from "./AppHeader";
import Footer from "./AppFooter";

interface App {
  Layout: Layout;
  Content: Content;
  Header: Header;
  Footer: Footer;
}

const App = {
  Layout,
  Content,
  Header,
  Footer
};

export default App;
