function Container({ children, variant = "main", className = "" }) {
    return (
        <div className={`container container--${variant} ${className}`}>
            {children}
        </div>
    )
}
export default Container;