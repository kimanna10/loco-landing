import Container from "../layouts/Container"
import TextBlock from "../ui/TextBlock";
import Head from "../layouts/Head";
import Title from "../ui/Title";
import FeatureCard from "../ui/FeatureCard";
import { features } from "../../data/data";

function FeatureSection() {
    const title = "Everything you need to ship"
    const desc = "Our platform brings together the essential tools for product development. From concept to deployment, we streamline every step of your workflow."
    const tagline = "Capabilities"

    return (<section className="feature">
        <Container className="feature__wrapper">
            <div className="feature__head">
                <Head className="feature__headblock" tagline={tagline} >
                    <Title className="feature__title" title={title} />
                </Head>
                <TextBlock className="feature__desc" content={desc} />
            </div>

            <div className="feature__content">
                {features.map(item => (
                    <FeatureCard item={item} />
                ))}
            </div>
        </Container>
    </section >)
}
export default FeatureSection;