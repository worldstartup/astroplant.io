import Head from "next/head";
import { Header } from "../components/Header";
import { Spacer } from "../components/Spacer";
import { Hero } from "../components/Hero";
import { Community } from "../components/Community";
import { Supporters } from "../components/Supporters";

export default function Home() {
    return (
        <>
            <Head>
                <title>Astroplant</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header></Header>
            <Hero></Hero>
            <Spacer margin={"16rem auto"}></Spacer>
            <Community></Community>
            <Spacer margin={"16rem auto"}></Spacer>
            <Supporters></Supporters>
            <Spacer margin={"16rem auto"}></Spacer>
        </>
    );
}
