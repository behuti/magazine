import { Link } from "react-router-dom";
import BrutalistHeader from "../components/brutalistHeader/brutalistHeader";
import ContentTable from "../components/contentTable/contentTable";

const Home = () => {
  return (
    <>
      <BrutalistHeader sectionId>
        <p>
          EH magazine is a{" "}
          <strong>
            <s>minimal, brutalism look</s>
          </strong>{" "}
          news portal, where you can find all the last updates regarding
          fashion, sports, technology and much more. 
          <br />
          <br />
          Welcome to our very <Link>first virtual release.</Link>
        </p>
      </BrutalistHeader>
      <ContentTable />
    </>
  );
};
export default Home;
