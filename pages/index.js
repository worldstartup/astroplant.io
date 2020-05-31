import Head from "next/head";
import { Header } from "../components/Header";
import { Spacer } from "../components/Spacer";
import { Hero } from "../components/Hero";
import { Community } from "../components/Community";
import { Supporters } from "../components/Supporters";
import { Earthlings } from "../components/Earthlings";
import { Footer } from "../components/Footer";
import dynamic from "next/dynamic";

const Loader = dynamic(() => import("react-preloaders").then((loaders) => loaders.Planets), {
    ssr: false,
});

export default function Home() {
    return (
        <>
            <Head>
                <title>Astroplant</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Loader />
            <Header></Header>
            <Hero></Hero>
            <Spacer height={"var(--spacer-height)"}></Spacer>
            <Community></Community>
            <Spacer height={"var(--spacer-height)"}></Spacer>
            <Supporters></Supporters>
            <Spacer height={"var(--spacer-height)"}></Spacer>
            <Earthlings></Earthlings>
            <Spacer bgColor={"black"} height={"var(--spacer-height)"}></Spacer>
            <Footer></Footer>
        </>
    );
}
