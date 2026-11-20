import Logo from "../ui/Logo"
import { headerLinks } from "../../data/data"
import ButtonLink from "../ui/ButtonLink"

function Header() {
    return (<>
        <header className="header">
            <Logo />

            <div className="header__content">
                <nav className="header__nav">
                    {headerLinks.map((link) => (
                        <a href={link.href} className="header__link">{link.content}</a>
                    ))}
                </nav>
                <div className="header__actions">
                    <ButtonLink href="#" content="Sign in" variant="secondary" size="small" />
                    <ButtonLink href="#" content="Start" variant="primary" size="small" />
                </div>
            </div>

        </header>
    </>)
}
export default Header