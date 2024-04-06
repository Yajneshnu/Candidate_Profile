// pages/index.js
import Head from "next/head";
import InitForm from '../Components/InitForm'
export default function Home() {
  return (
    <>
      <Head>
        <title>Dashbord</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InitForm />
    </>
  );
}