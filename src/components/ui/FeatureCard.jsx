import CardIcon from "./CardIcon"
function FeatureCard({ item }) {
    return (
        <div className="feature__card card">
            <CardIcon src={item.src} />
            <h4 className="card__title">{item.title}</h4>
            <p className="card__desc">{item.desc}</p>
        </div>
    )
}
export default FeatureCard