function ButtonLink({ href, content, variant = "primary", size = "small" }) {
    return (
        <a href={href} className={`btn btn--${size} btn--${variant}`}>{content}</a>
    )
}
export default ButtonLink