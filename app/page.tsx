import Image from "next/image";
import styles from "./page.module.css";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "WORKS", href: "#works" },
  { label: "SERVICES", href: "#services" },
  { label: "ABOUT ME", href: "#about" },
  { label: "CONTACTS", href: "#contacts" },
];

const services = [
  { icon: "/images/icon-computer.svg", w: 32, h: 32, title: "UX/UI DESIGN", text: "Websites & web products" },
  { icon: "/images/icon-palette.svg", w: 32, h: 32, title: "DASHBOARDS", text: "Admin panels & B2B SaaS" },
  { icon: "/images/icon-sparkles.svg", w: 32, h: 32, title: "AI-ASSISTED DESIGN", text: "Faster, smarter workflow" },
  { icon: "/images/icon-lotus.svg", w: 28.4167, h: 25.0833, title: "DESIGN SYSTEMS", text: "Consistent & scalable UI" },
];

export default function Home() {
  return (
    <div className={styles.page} id="home">
      <header className={styles.header}>
        <a href="#home" className={styles.logo}>
          SVITLANA DESIGN
        </a>
        <img className={styles.headerLine} src="/images/line-nav-left.svg" alt="" width={168} height={1} />
        <nav className={styles.nav} aria-label="Main">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <img className={styles.headerLine} src="/images/line-nav-right.svg" alt="" width={168} height={1} />
        <img className={styles.headerStar} src="/images/star.svg" alt="" width={20} height={20} />
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.intro}>
            <p className={styles.hello}>Hello, I&apos;m Svitlana</p>
            <div className={styles.role}>
              <img src="/images/line-hello.svg" alt="" width={81} height={2} />
              <img src="/images/star.svg" alt="" width={20} height={20} />
              <span>UI/UX Designer</span>
            </div>
            <h1 className={styles.title}>
              DESIGN
              <br />
              THAT
              <br />
              MAKES SENSE.
            </h1>
            <p className={styles.lead}>
              I design interfaces for websites and web products, including dashboards and admin panels for B2B SaaS,
              and use AI throughout my design process.
            </p>
            <div className={styles.actions}>
              <a href="#works" className={styles.primaryButton}>
                VIEW MY WORK
                <img src="/images/arrow.svg" alt="" width={34} height={14.7279} />
              </a>
              <a href="#contacts" className={styles.secondaryButton}>
                LET’S WORK TOGETHER
              </a>
            </div>
          </div>

          <div className={styles.portrait}>
            <div className={styles.portraitBg} />
            <div className={styles.portraitPhoto}>
              <Image src="/images/portrait.png" alt="Svitlana, UI/UX designer" fill priority sizes="(max-width: 1100px) 90vw, 415px" />
            </div>
            <div className={styles.portraitFrame} />
            <div className={styles.badge}>
              <img className={styles.badgeCircle} src="/images/badge-circle.svg" alt="" width={173} height={173} />
              <div className={styles.badgeText}>
                <span>DESIGN</span>
                <img src="/images/badge-line.svg" alt="" width={55} height={1} />
                <span>CREATIVITY</span>
                <img src="/images/badge-line.svg" alt="" width={55} height={1} />
                <span>STRATEGY</span>
                <img className={styles.badgeStar} src="/images/star.svg" alt="" width={20} height={20} />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.services} id="services" aria-label="What I do">
          {services.map((service, index) => (
            <div key={service.title} className={styles.serviceWrap}>
              {index > 0 && (
                <div className={styles.divider} aria-hidden="true">
                  <img src="/images/divider.svg" alt="" width={106} height={1} />
                </div>
              )}
              <div className={styles.service}>
                <span className={styles.serviceIcon}>
                  <img src={service.icon} alt="" width={service.w} height={service.h} />
                </span>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
