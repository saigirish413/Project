import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
import { NextPage } from "next";
import Nav from "../components/Nav";
// import Sidebar from "../components/Sidebar";
// import Footer from "../components/Footer";

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};
type Props = AppProps & {
  Component: Page;
};

const App = ({ Component, pageProps }: AppProps) => {
  if (Component.getLayout) {
    return Component.getLayout(
      <div className="flex flex-col justify-between h-screen theme-base">
        <Component {...pageProps} />{" "}
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-between h-screen">
      <Nav></Nav>

      <div className="mb-auto ml-56">
        <Component {...pageProps} />
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default App;
