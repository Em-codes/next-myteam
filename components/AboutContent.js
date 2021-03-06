import Directors from "./Directors";
import Sponsors from "./Sponsors";

const AboutContent = () => {
    return (
        <>
            <section className="jungle relative overflow-hidden">
            <img className='page-art-about-2' src="/images/bg-pattern-about-2-contact-1.svg" />
                <div className="gen-wrapper lg:pt-40 pt-20 lg:pb-40 pb-32">
                    <Directors/>
                </div>
                <img className='page-art-about-3' src="/images/bg-pattern-home-4-about-3.svg" />
            </section>
            <Sponsors />
        </>
    );
}

export default AboutContent;