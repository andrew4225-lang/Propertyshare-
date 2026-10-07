"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const properties = [
    {
      city: "Orlando, FL",
      type: "Luxury Short-Term Rental",
      price: "$425,000",
      investment: "$5,000",
      return: "8.4%",
    },
    {
      city: "Tampa, FL",
      type: "Modern Vacation Home",
      price: "$385,000",
      investment: "$5,000",
      return: "9.1%",
    },
    {
      city: "Miami, FL",
      type: "Premium Airbnb Property",
      price: "$610,000",
      investment: "$10,000",
      return: "10.2%",
    },
  ];

  return (
    <main className="site">
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #f7f9fc;
          color: #102033;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        .site {
          min-height: 100vh;
        }

        .nav {
          background: white;
          border-bottom: 1px solid #e7ebf0;
          padding: 18px 6%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 20;
        }

        .logo {
          font-size: 25px;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .logo span {
          color: #16a36a;
        }

        .links {
          display: flex;
          gap: 28px;
          align-items: center;
          font-size: 15px;
          font-weight: 600;
        }

        .button {
          background: #16a36a;
          color: white;
          padding: 12px 19px;
          border-radius: 9px;
          font-weight: 700;
          border: 0;
          cursor: pointer;
        }

        .hero {
          padding: 90px 6% 75px;
          background:
            radial-gradient(circle at top right, #dff8eb 0, transparent 38%),
            linear-gradient(135deg, #f7fbf9, #ffffff);
        }

        .heroGrid {
          max-width: 1180px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.15fr .85fr;
          gap: 55px;
          align-items: center;
        }

        .badge {
          display: inline-block;
          background: #e5f7ef;
          color: #08794b;
          padding: 8px 13px;
          border-radius: 30px;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        h1 {
          font-size: clamp(42px, 6vw, 72px);
          line-height: .98;
          letter-spacing: -3px;
          margin: 0 0 24px;
        }

        .green {
          color: #16a36a;
        }

        .heroText {
          color: #5b6878;
          font-size: 19px;
          line-height: 1.6;
          max-width: 650px;
          margin-bottom: 30px;
        }

        .heroButtons {
          display: flex;
          gap: 13px;
          flex-wrap: wrap;
        }

        .secondary {
          background: white;
          color: #102033;
          border: 1px solid #dce3ea;
        }

        .heroCard {
          background: white;
          border: 1px solid #e2e9e5;
          border-radius: 20px;
          padding: 28px;
          box-shadow: 0 20px 60px rgba(16, 32, 51, .10);
        }

        .cardTitle {
          font-size: 14px;
          color: #697586;
          margin-bottom: 10px;
        }

        .bigNumber {
          font-size: 38px;
          font-weight: 800;
          margin-bottom: 25px;
        }

        .stat {
          display: flex;
          justify-content: space-between;
          padding: 16px 0;
          border-top: 1px solid #edf0f2;
        }

        .stat strong {
          color: #16a36a;
        }

        .section {
          max-width: 1180px;
          margin: auto;
          padding: 75px 6%;
        }

        .sectionHeader {
          text-align: center;
          margin-bottom: 40px;
        }

        .sectionHeader h2 {
          font-size: 40px;
          margin: 0 0 12px;
          letter-spacing: -1.5px;
        }

        .sectionHeader p {
          color: #687587;
          font-size: 17px;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .step {
          background: white;
          border: 1px solid #e4e9ee;
          border-radius: 16px;
          padding: 28px;
        }

        .number {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #e5f7ef;
          color: #08794b;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .step h3 {
          margin: 0 0 10px;
          font-size: 20px;
        }

        .step p {
          color: #687587;
          line-height: 1.6;
          margin: 0;
        }

        .properties {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .property {
          background: white;
          border-radius: 17px;
          overflow: hidden;
          border: 1px solid #e3e8ed;
        }

        .propertyImage {
          height: 150px;
          background: linear-gradient(135deg, #dcefe7, #b7ddcc);
          display: flex;
          align-items: flex-end;
          padding: 18px;
          color: #075e3a;
          font-weight: 800;
        }

        .propertyBody {
          padding: 22px;
        }

        .propertyBody h3 {
          margin: 0 0 7px;
        }

        .propertyBody p {
          color: #697586;
          margin: 0 0 18px;
        }

        .propertyBottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .return {
          color: #16a36a;
          font-weight: 800;
        }

        .cta {
          margin: 20px 6% 75px;
          border-radius: 22px;
          padding: 55px;
          text-align: center;
          background: #102033;
          color: white;
        }

        .cta h2 {
          font-size: 40px;
          margin: 0 0 14px;
        }

        .cta p {
          color: #c7d0da;
          max-width: 650px;
          margin: 0 auto 25px;
          line-height: 1.6;
        }

        .footer {
          background: white;
          border-top: 1px solid #e4e9ee;
          padding: 30px 6%;
          display: flex;
          justify-content: space-between;
          color: #687587;
          font-size: 14px;
        }

        @media (max-width: 800px) {
          .links {
            display: none;
          }

          .heroGrid,
          .steps,
          .properties {
            grid-template-columns: 1fr;
          }

          .hero {
            padding-top: 60px;
          }

          .cta {
            padding: 35px 22px;
          }

          .footer {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>

      <nav className="nav">
        <div className="logo">
          Property<span>Share</span>
        </div>

        <div className="links">
          <a href="#how">How It Works</a>
          <a href="#properties">Properties</a>
          <a href="#about">About</a>
          <button className="button">Log In</button>
        </div>

        <button
          className="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Get Started
        </button>
      </nav>

      {menuOpen && (
        <div style={{
          background: "white",
          padding: "18px 6%",
          borderBottom: "1px solid #ddd",
          textAlign: "center"
        }}>
          Create an account to start exploring investment opportunities.
        </div>
      )}

      <section className="hero">
        <div className="heroGrid">
          <div>
            <div className="badge">
              INVEST IN REAL ESTATE DIFFERENTLY
            </div>

            <h1>
              Own a piece of
              <br />
              <span className="green">great property.</span>
            </h1>

            <p className="heroText">
              PropertyShare makes real-estate investing accessible.
              Explore carefully selected rental properties and invest
              alongside other investors without owning or operating
              the entire property yourself.
            </p>

            <div className="heroButtons">
              <button className="button">Explore Properties</button>
              <button className="button secondary">
                How It Works
              </button>
            </div>
          </div>

          <div className="heroCard">
            <div className="cardTitle">
              Example investment opportunity
            </div>

            <div className="bigNumber">$5,000</div>

            <div className="stat">
              <span>Target property</span>
              <strong>Orlando, FL</strong>
            </div>

            <div className="stat">
              <span>Estimated annual return</span>
              <strong>8.4%</strong>
            </div>

            <div className="stat">
              <span>Property value</span>
              <strong>$425K</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="how">
        <div className="sectionHeader">
          <h2>Real estate made simpler.</h2>
          <p>
            A straightforward way to discover and participate in
            real-estate opportunities.
          </p>
        </div>

        <div className="steps">
          <div className="step">
            <div className="number">1</div>
            <h3>Explore</h3>
            <p>
              Browse rental properties available through the
              PropertyShare marketplace.
            </p>
          </div>

          <div className="step">
            <div className="number">2</div>
            <h3>Choose</h3>
            <p>
              Review property details, projected performance and
              investment requirements.
            </p>
          </div>

          <div className="step">
            <div className="number">3</div>
            <h3>Invest</h3>
            <p>
              Select an opportunity that fits your goals and track
              your investment from your dashboard.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="properties">
        <div className="sectionHeader">
          <h2>Featured properties</h2>
          <p>
            Sample opportunities for the PropertyShare marketplace.
          </p>
        </div>

        <div className="properties">
          {properties.map((property) => (
            <div className="property" key={property.city}>
              <div className="propertyImage">
                {property.city}
              </div>

              <div className="propertyBody">
                <h3>{property.type}</h3>

                <p>
                  Property value: {property.price}
                  <br />
                  Starting investment: {property.investment}
                </p>

                <div className="propertyBottom">
                  <span>Target return</span>
                  <span className="return">
                    {property.return}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta" id="about">
        <h2>Build your real-estate portfolio.</h2>

        <p>
          Discover PropertyShare and see how fractional real-estate
          investing could become part of your long-term strategy.
        </p>

        <button className="button">
          Start Exploring
        </button>
      </section>

      <footer className="footer">
        <strong>PropertyShare</strong>
        <span>Real estate investing, reimagined.</span>
        <span>© 2026 PropertyShare</span>
      </footer>
    </main>
  );
}
