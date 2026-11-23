import TagLine from "../ui/TagLine"

function Head({ tagline, className = "", children }) {
    return (
        <div className={`headblock ${className}`}>
            <TagLine text={tagline} />
            {children}
        </div>
    )
}
export default Head