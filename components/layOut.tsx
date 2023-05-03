import { FunctionComponent, ReactNode } from "react";
import NavBar from "./navBar";

interface LayOut {
  children?: ReactNode;
}

const LayOut: FunctionComponent<LayOut> = ({ children }) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
};

export default LayOut;
