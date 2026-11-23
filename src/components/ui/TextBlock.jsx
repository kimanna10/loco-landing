function TextBlock({ className = "", content }) {
    return (
        <p className={`desc ${className}`}>
            {content}
        </p>
    )

}
export default TextBlock