import Head from "next/head";
import RootLayout from "../components/layouts/RootLayout";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Next Home Page</title>
        <meta name="home page" description="This is in created by next js" />
      </Head>
      <h1>This is home page</h1>
    </div>
  );
};
export default HomePage;
HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
