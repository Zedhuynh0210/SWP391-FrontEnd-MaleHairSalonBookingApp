import Footer from "./footer";
import Header from "./header";

export function BasePage({children}) {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
);
}