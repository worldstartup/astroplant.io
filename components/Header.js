import s from "./modules/Header.module.css";
import { Button } from "./Button";

import Link from "next/link";

export function Header() {
    return (
        <header className={s.header} id='header'>
            <div className={s.container}>
                <Link href='/'>
                    <img src='/images/logo.png' className={s.logo} />
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
