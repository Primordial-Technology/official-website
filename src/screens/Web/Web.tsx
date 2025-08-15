import React from "react";

export const Web = (): JSX.Element => {
  // Navigation data
  const navigationItems = [
    { text: "For Artist", href: "#artists" },
    { text: "For Investors", href: "#investors" },
    { text: "For Industry Professionals", href: "#professionals" },
  ];

  // Stakeholder data for the black section
  const stakeholders = [
    {
      title: "Investors",
      description:
        "Provide differentiated returns and access to a community of industry participants to fund other creative projects",
      position: { top: "39px", left: "174px" },
    },
    {
      title: "Artists",
      description:
        "Empowering artists with not only capital but professional development and freedom to launch future projects",
      position: { top: "265px", left: "174px" },
    },
    {
      title: "Industry Professionals",
      description:
        "Access to a wider pipeline of creatives and benefit from network effects in the likes of a creative agency",
      position: { top: "71px", left: "1060px" },
    },
    {
      title: "Music Tech",
      description:
        "Create an open platform for other technologists to make the industry more transparent and data-driven",
      position: { top: "335px", left: "1060px" },
    },
  ];

  return (
    <div
      className="bg-white grid justify-items-center [align-items:start] w-screen"
      data-model-id="107:6389"
    >
      <div className="bg-white overflow-hidden w-[1440px] h-[2600px] relative">
        {/* Header Navigation */}
        <header className="absolute top-0 left-0 w-full z-10">
          <img
            className="absolute w-[172px] h-8 top-[34px] left-[50px]"
            alt="Primordial Logo"
            src="https://c.animaapp.com/iORgyB1o/img/group-118@2x.png"
          />

          <nav className="absolute top-5 left-[424px] flex gap-4">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="[font-family:'Founders_Grotesk-Bold',Helvetica] font-bold text-[21.8px] tracking-[-0.22px] leading-[70px] whitespace-nowrap"
              >
                <span className="text-[#2d2246] tracking-[-0.05px]">
                  {item.text}{" "}
                </span>
                <span className="text-[#7e44f3] tracking-[-0.05px]">//</span>
              </a>
            ))}
          </nav>

          <div className="absolute w-[180px] h-[45px] top-[29px] left-[1050px]">
            <button className="absolute w-[180px] h-[30px] top-2 left-0 bg-[#7e44f3] rounded-[3px]" />
            <span className="absolute top-0 left-11 [font-family:'Fira_Code',Helvetica] font-bold text-white text-sm tracking-[0] leading-[45px] whitespace-nowrap">
              Contact us
            </span>
          </div>
        </header>

        {/* Hero Section */}
        <section className="absolute w-[1440px] h-[600px] top-[100px] left-0 bg-[url(https://c.animaapp.com/iORgyB1o/img/still-2025-05-03-141559-3-5-1-1.png)] bg-cover bg-[50%_50%]">
          <h1 className="absolute w-[380px] top-12 left-[50px] [font-family:'Founders_Grotesk_X-Cond_SmBd',Helvetica] font-semibold text-white text-[66px] tracking-[0] leading-[60px] uppercase">
            PRIMORDIAL IS A QUANT-DRIVEN MUSIC INVESTMENT VENTURE RESHAPING HOW
            THE WORLD INVESTS IN MUSIC.
          </h1>
        </section>

        {/* Mission Section */}
        <section className="h-[600px] top-[700px] bg-[url(https://c.animaapp.com/iORgyB1o/img/vector.svg)] bg-cover absolute w-[1440px] left-0">
          <div className="relative w-[1300px] h-[600px] left-[117px] bg-[url(https://c.animaapp.com/iORgyB1o/img/group.png)] bg-cover">
            <img
              className="absolute w-[77px] h-[88px] top-[89px] left-[524px]"
              alt="Mission Icon"
              src="https://c.animaapp.com/iORgyB1o/img/group-162@2x.png"
            />

            <h2 className="absolute top-[209px] left-[466px] [font-family:'Founders_Grotesk-Bold',Helvetica] font-bold text-white text-4xl tracking-[0] leading-[45px] whitespace-nowrap">
              Our Mission
            </h2>

            <p className="absolute w-[380px] top-[264px] left-[366px] [font-family:'Founders_Grotesk-Regular',Helvetica] font-normal text-white text-[23px] text-center tracking-[0] leading-[normal]">
              To build a new ecosystem where capital and creativity co-exist —
              unlocking new forms of artistic expression, financial opportunity,
              and cultural impact. <br />
              We are here to redefine how value flows through music — We&apos;re
              creating the next evolution of the music market: transparent,
              data-rich, win-win.
            </p>
          </div>
        </section>

        {/* Creative & Investment Facing Section */}
        <section className="h-[600px] top-[1300px] bg-[url(https://c.animaapp.com/iORgyB1o/img/01-1.png)] bg-cover bg-[50%_50%] absolute w-[1440px] left-0">
          <div className="absolute top-[205px] left-[150px]">
            <h3 className="[font-family:'Founders_Grotesk-Bold',Helvetica] font-bold text-black text-4xl tracking-[0] leading-[45px] whitespace-nowrap">
              Creative Facing
            </h3>
            <p className="w-[380px] mt-[45px] [font-family:'Founders_Grotesk-Regular',Helvetica] font-normal text-black text-[23px] tracking-[0] leading-[normal]">
              We believe music is more than a product — it&apos;s legacy,
              evolution, and emotion. And the people behind it deserve more than
              a payout. They deserve partnership. <br />
              At Primordial, we treat rights holders as collaborators.
            </p>
          </div>

          <div className="absolute top-[205px] left-[950px]">
            <h3 className="[font-family:'Founders_Grotesk-Bold',Helvetica] font-bold text-black text-4xl tracking-[0] leading-[45px] whitespace-nowrap">
              Investment Facing
            </h3>
            <p className="w-[380px] mt-[45px] [font-family:'Founders_Grotesk-Regular',Helvetica] font-normal text-black text-[23px] tracking-[0] leading-[normal]">
              Our system unlocks hidden value, avoids hype cycles, and builds
              portfolios designed for the dual objectives of performance and
              resilience in diverse market conditions.
            </p>
          </div>

          <img
            className="absolute w-80 h-[468px] top-[63px] left-[584px]"
            alt="Central Diagram"
            src="https://c.animaapp.com/iORgyB1o/img/group-163@2x.png"
          />
        </section>

        {/* Stakeholders Section */}
        <section className="h-[600px] top-[1900px] bg-black overflow-hidden absolute w-[1440px] left-0">
          <div className="absolute w-[899px] h-[588px] top-8 left-[90px]">
            <div className="absolute w-[896px] h-[581px] top-[7px] left-0">
              <div className="relative h-[561px]">
                <img
                  className="absolute w-[596px] h-[526px] top-0 left-[300px] aspect-[1.13]"
                  alt="Stakeholder Visualization"
                  src="https://c.animaapp.com/iORgyB1o/img/1111-1.png"
                />

                <img
                  className="absolute w-[460px] h-[305px] top-[255px] left-[-90px] aspect-[1.41] object-cover"
                  alt="Additional Visualization"
                  src="https://c.animaapp.com/iORgyB1o/img/222-1@2x.png"
                />
              </div>
            </div>

            {/* Stakeholder Content */}
            {stakeholders.slice(0, 2).map((stakeholder, index) => (
              <div
                key={index}
                className="absolute w-[178px]"
                style={{
                  top: stakeholder.position.top,
                  left: stakeholder.position.left,
                }}
              >
                <h4 className="[font-family:'Founders_Grotesk-Semibold',Helvetica] font-normal text-white text-[26px] tracking-[0] leading-[34.8px]">
                  {stakeholder.title}
                </h4>
                <p className="mt-5 [font-family:'Founders_Grotesk-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]">
                  {stakeholder.description}
                </p>
              </div>
            ))}

            <img
              className="absolute w-[516px] h-[516px] top-0 left-[383px]"
              alt="Ecosystem Diagram"
              src="https://c.animaapp.com/iORgyB1o/img/group-167.svg"
            />
          </div>

          {/* Right side stakeholders */}
          {stakeholders.slice(2).map((stakeholder, index) => (
            <div
              key={index + 2}
              className="absolute w-44"
              style={{
                top: stakeholder.position.top,
                left: stakeholder.position.left,
              }}
            >
              <h4
                className={`[font-family:'Founders_Grotesk-Semibold',Helvetica] font-normal text-white text-[26px] tracking-[0] ${
                  stakeholder.title === "Industry Professionals"
                    ? "leading-[26.8px]"
                    : "leading-[20.9px] whitespace-nowrap"
                }`}
              >
                {stakeholder.title}
              </h4>
              <p
                className="mt-5 [font-family:'Founders_Grotesk-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]"
              >
                {stakeholder.description}
              </p>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="h-[100px] top-[2500px] bg-[url(https://c.animaapp.com/iORgyB1o/img/vector-1.svg)] bg-cover absolute w-[1440px] left-0">
          <img
            className="absolute w-[172px] h-8 top-[34px] left-[50px] aspect-[5.39]"
            alt="Primordial Logo"
            src="https://c.animaapp.com/iORgyB1o/img/group-152@2x.png"
          />

          <p className="absolute top-[45px] left-[613px] [font-family:'Founders_Grotesk-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[18px] whitespace-nowrap">
            ©PRIMORDIAL 2025 // LEGAL // TERMS OF USE
          </p>

          <img
            className="absolute w-[180px] h-[30px] top-[37px] left-[1144px]"
            alt="Social Media Icons"
            src="https://c.animaapp.com/iORgyB1o/img/socials-icons.svg"
          />
        </footer>
      </div>
    </div>
  );
};
