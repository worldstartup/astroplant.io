import s from "./modules/Header.module.css";
import { Button } from "./Button";

import Link from "next/link";

export function Header() {
    // similiar to componentDidMount, but for functional components, and triggers after rendering. We can only reference the DOM once this hook is triggered

    return (
        <header className={s.header} id='header'>
            <div className={s.container}>
                <Link href='/'>
                    <img src='/images/logo.svg' className={s.logo} />
                </Link>

                <div className={s.nav}>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                    <Button href='earthlings' label='Join the Community'></Button>
                </div>
            </div>
        </header>
    );
}
