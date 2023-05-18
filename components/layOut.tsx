import { FunctionComponent, ReactNode } from "react";
import NavBar from "./navBar";
import Footer from "./footer";

interface LayOut {
  children?: ReactNode;
}

const LayOut: FunctionComponent<LayOut> = ({ children }) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <div>{children}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default LayOut;
