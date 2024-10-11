import Footer from "./footer";

export function BasePage({children}) {
  return (
    <>
    {children}
    <Footer/>
    </>
);
}