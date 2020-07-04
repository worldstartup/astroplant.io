import Head from "next/head";
import { Header } from "../components/Header";
import { Spacer } from "../components/Spacer";
import { Hero } from "../components/Hero";
import { Community } from "../components/Community";
import { Supporters } from "../components/Supporters";
import { Earthlings } from "../components/Earthlings";
import { Footer } from "../components/Footer";
import dynamic from "next/dynamic";

import { getHome } from "../services/middleman";

const Loader = dynamic(() => import("react-preloaders").then((loaders) => loaders.Cube), {
    ssr: false,
});

export default function Home({ home }) {
    return (
        <>
            <Head>
                <title>Astroplant</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Loader
                color={"var(--main-color)"}
                time={1000}
                animation='slide'
                background='linear-gradient(321deg, rgba(28,19,31,1) 0%, rgba(20,15,43,1) 100%)'
            />
            <Header></Header>
            <Hero data={home}></Hero>
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

export async function getStaticProps() {
    return {
        props: {
            home: await getHome(),
        },
    };
}
