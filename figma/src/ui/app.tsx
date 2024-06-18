import "@ui/shared/styles/main.scss";
import Layout from "./shared/components/layout";
import Home from "./pages/home";
import Auth from "./shared/components/auth";

function App() {
  return (
    <Layout>
      <Auth>
        <Home />
      </Auth>
    </Layout>
  );
}

export default App;
