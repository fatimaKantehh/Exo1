
import HomePage from "../components/HomePage";
import Link from "next/link";

const IndexPage = () => {
  return(
    <div>
      <HomePage/>
      <hr />
      <Link href="/product">Products</Link>
      <br />
      <Link href="/About">About</Link>
      <br />
      <Link href="/Movies">Les Films</Link>
    </div>
  );
  
};
export default IndexPage;
