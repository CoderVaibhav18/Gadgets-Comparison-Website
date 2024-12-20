import styles from "./About.module.css";

const About = () => {
  const { aboutSection, aboutContainer, aboutContent, btn, aboutImage } =
    styles;
  return (
    <section className={aboutSection} id="about">
      <div className={aboutContainer}>
        <div className={aboutContent}>
          <h1>About DealHunt</h1>
          <p>
            Welcome to <strong>DealHunt</strong>, your go-to platform for
            comparing products from multiple websites. We simplify shopping by
            showing you the best deals, prices, and ratings all in one place.
            Say goodbye to endless browsing and save time and money with
            DealHunt!
          </p>
          <p>
            With real-time price comparisons and links to the seller&apos;s
            website, we ensure you get the best value for your purchases.
            Explore a seamless shopping experience tailored to your needs.
          </p>
          <a href="#Home" className={btn}>
            Browse Products
          </a>
        </div>
        <div className={aboutImage}>
          <img src="/images/about.png" alt="About DealHunt" />
        </div>
      </div>
    </section>
  );
};

export default About;
