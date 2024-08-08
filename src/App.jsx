import { useState } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import SideBar from "./components/SideBar";
import Bottombar from "./components/BottomBar";
import EmailList from "./components/EmailList"
import EmailContent from "./components/EmailContent.jsx";

function App() {
const [openEmail, setOpenEmail] = useState(null)

  return (
    <>
      <Header />
      <Container>
        <div className="flex flex-col md:flex-row gap-2 xl:gap-4 h-full relative">
          <SideBar />
          <EmailList setOpenEmail={setOpenEmail} />
           <EmailContent email={openEmail} />         
          <Bottombar />
        </div>
      </Container>
    </>
  );
}

export default App;
