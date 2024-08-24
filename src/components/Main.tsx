/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../css/style.css";

const Main: React.FC = () => {
  return (
    <div className="page-wrapper">
      {/* Header section */}
      <header className="section-hero_home">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-hero">
              <div className="w-layout-grid header_component">
                <div className="hero-heading_content">
                  <div className="hero-eyebrow_wrapper">
                    <p
                      style={{
                        transform: "translate3d(0, 25px, 0) scale3d(1, 1, 1)",
                        opacity: 0,
                      }}
                      className="hero-eyebrow"
                    >
                      Virtual Ridealongs for Outside Sales and Service
                    </p>
                  </div>
                  <div className="margin-bottom margin-small">
                    <h1 className="heading-17">The End of Ridealongs</h1>
                  </div>
                  <div className="service-titan">
                    <img
                      src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/655873176ee50ee797113fba_service%20titan%20official.svg"
                      loading="lazy"
                      alt=""
                      className="image-2"
                    />
                  </div>
                  <div className="hero-subheading_text-wrapper">
                    <p className="text-size-medium text-color-neutral-300">
                      Coach your reps with virtual ridealongs to
                      <span className="text-span-highlight">
                        increase their sales
                      </span>
                    </p>
                  </div>
                  <div className="base-space-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="heading-video_wrapper home">
          <div className="hero-video_wrapper">
            <div className="hero-video_overlay"></div>
            <div
              data-poster-url="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e603cc2db2704bcbac9858_d650be74-253d-426a-bba1-9fb13fe414d5-poster-00001.jpg"
              data-video-urls="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e603cc2db2704bcbac9858_d650be74-253d-426a-bba1-9fb13fe414d5-transcode.mp4,https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e603cc2db2704bcbac9858_d650be74-253d-426a-bba1-9fb13fe414d5-transcode.webm"
              data-autoplay="true"
              data-loop="true"
              data-wf-ignore="true"
              className="hero_video w-background-video w-background-video-atom"
            >
              <video
                id="0180d487-5d54-2f52-c5fa-02300db8ff68-video"
                autoPlay
                loop
                style={{
                  backgroundImage:
                    "url('https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e603cc2db2704bcbac9858_d650be74-253d-426a-bba1-9fb13fe414d5-poster-00001.jpg')",
                }}
                muted
                playsInline
                data-wf-ignore="true"
                data-object-fit="cover"
              >
                <source
                  src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e603cc2db2704bcbac9858_d650be74-253d-426a-bba1-9fb13fe414d5-transcode.mp4"
                  data-wf-ignore="true"
                />
                <source
                  src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e603cc2db2704bcbac9858_d650be74-253d-426a-bba1-9fb13fe414d5-transcode.webm"
                  data-wf-ignore="true"
                />
              </video>
            </div>
          </div>
        </div>
      </header>

      {/* social-proof */}
      <section className="section_social-proof">
        <div className="padding-section-small">
          <div className="social-proof_component">
            <div className="padding-global">
              <div className="container-large">
                <div className="text-align-center">
                  <h3 style={{ color: "yellow" }}>Join the movement</h3>
                </div>
              </div>
              <div className="spacer-medium"></div>
            </div>
            <div className="carousel-wrap">
              <div style={{ opacity: 1 }} className="carousel-container">
                <div
                  style={{
                    WebkitTransform:
                      "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="sh carousel top"
                >
                  <div className="cl-oont">
                    <a
                      href="https://www.johnmooreservices.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/652d41e328baab12e7f5dd6f_John%20Moore%20Logo.svg"
                        alt="John Moore  Logo"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://www.kohler.com/"
                      target="_blank"
                      className="cl-container w-inline-block"
                      rel="noreferrer"
                    >
                      <img
                        sizes="(max-width: 479px) 32vw, (max-width: 767px) 23vw, (max-width: 991px) 15vw, 12vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e24f1da0f8fb65451ef8f4_Kohler-p-500.webp   500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e24f1da0f8fb65451ef8f4_Kohler-p-800.webp   800w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e24f1da0f8fb65451ef8f4_Kohler-p-1080.webp 1080w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e24f1da0f8fb65451ef8f4_Kohler.webp        2560w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e24f1da0f8fb65451ef8f4_Kohler.webp"
                        loading="lazy"
                        className="co-logo-2 smaller"
                      />
                    </a>
                    <a
                      href="https://a1garage.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 31vw, (max-width: 767px) 21vw, (max-width: 991px) 14vw, 11vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e266679091d3941bf_A1%20Garage-p-500.png  500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e266679091d3941bf_A1%20Garage.webp      1176w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e266679091d3941bf_A1%20Garage.webp"
                        loading="lazy"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://www.rebath.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/652d41e312c0f72d90c648d3_Re%20Bath%20Logo.svg"
                        alt="Re Bath  Logo"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://www.renewalbyandersen.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 47vw, (max-width: 767px) 23vw, (max-width: 991px) 15vw, 12vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e4275d205cb155f77_renewal%20by%20anderson%201-p-500.webp  500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e4275d205cb155f77_renewal%20by%20anderson%201-p-800.webp  800w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e4275d205cb155f77_renewal%20by%20anderson%201.webp       1040w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e4275d205cb155f77_renewal%20by%20anderson%201.webp"
                        loading="lazy"
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a
                      href="https://www.rescueairtx.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/652d41e21a71fa3f8fdf7a14_Rescue%20Logo.svg"
                        alt="Rescue Air Logo"
                        className="co-logo-2 wide"
                      />
                    </a>
                    <a
                      href="https://www.floridawindowanddoor.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/652d41e288d7d0edca58c7e3_Florida%20Window%20Logo.svg"
                        alt="Florida Window and Door Logo"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://www.hoffmannbros.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/669993c3fd7feb166b0cfd2e_hoffman%20brothers.png"
                        alt=""
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a
                      href="https://geteco.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 38vw, (max-width: 767px) 23vw, (max-width: 991px) 15vw, 12vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e7a7b450928af115e_ECO-p-500.webp   500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e7a7b450928af115e_ECO-p-800.webp   800w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e7a7b450928af115e_ECO-p-1080.webp 1080w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e7a7b450928af115e_ECO.webp        1864w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e7a7b450928af115e_ECO.webp"
                        loading="lazy"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://www.goettl.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e474a57ed96286f55_Goettle.webp"
                        alt=""
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a
                      href="https://www.blantonsair.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 23vw, (max-width: 767px) 16vw, (max-width: 991px) 10vw, 8vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e396e4a0ec76fdca8_header_logo%402x-p-500.webp 500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e396e4a0ec76fdca8_header_logo%402x.webp       864w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e396e4a0ec76fdca8_header_logo%402x.webp"
                        loading="lazy"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://apexhi.com.au/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 24vw, (max-width: 767px) 17vw, (max-width: 991px) 11vw, 9vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e78180fa3aa318c91_apex-p-500.png 500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e78180fa3aa318c91_apex.webp      926w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e78180fa3aa318c91_apex.webp"
                        loading="lazy"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://www.abbywindows.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706eb2d44c09712258c8_Abby%20Window%20%26%20Expterios.webp"
                        alt=""
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://summersphc.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 47vw, (max-width: 767px) 23vw, (max-width: 991px) 15vw, 12vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706eb70c9f6ec4f1fc1d_Summers-p-500.webp   500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706eb70c9f6ec4f1fc1d_Summers-p-800.webp   800w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706eb70c9f6ec4f1fc1d_Summers-p-1080.webp 1080w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706eb70c9f6ec4f1fc1d_Summers.webp        1794w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706eb70c9f6ec4f1fc1d_Summers.webp"
                        loading="lazy"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://windowdepotusa.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 47vw, (max-width: 767px) 23vw, (max-width: 991px) 15vw, 12vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e28d199e25afaae45_Window%20Depot-p-500.webp   500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e28d199e25afaae45_Window%20Depot-p-800.webp   800w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e28d199e25afaae45_Window%20Depot-p-1080.webp 1080w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e28d199e25afaae45_Window%20Depot-p-1600.webp 1600w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e28d199e25afaae45_Window%20Depot-p-2000.webp 2000w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e28d199e25afaae45_Window%20Depot.webp        2391w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e28d199e25afaae45_Window%20Depot.webp"
                        loading="lazy"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://hansons.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e39a0cd178d3a3d32_1800%20Hanson.webp"
                        alt=""
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a
                      href="http://www.mcwilliamsandson.com"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e71fa160677896898_McWilliams.webp"
                        alt=""
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a href="#" className="cl-container w-inline-block">
                      <img
                        sizes="(max-width: 479px) 31vw, (max-width: 767px) 22vw, (max-width: 991px) 14vw, 11vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e396e4a0ec76fdc84_Fur-p-500.webp  500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e396e4a0ec76fdc84_Fur-p-800.webp  800w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e396e4a0ec76fdc84_Fur.webp       1192w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e396e4a0ec76fdc84_Fur.webp"
                        loading="lazy"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://www.fhfurr.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 31vw, (max-width: 767px) 21vw, (max-width: 991px) 14vw, 11vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e266679091d3941bf_A1%20Garage-p-500.png  500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e266679091d3941bf_A1%20Garage.webp      1176w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e266679091d3941bf_A1%20Garage.webp"
                        loading="lazy"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://itsjustplumbsmart.com/"
                      target="_blank"
                      className="cl-container w-inline-block"
                      rel="noreferrer"
                    >
                      <img
                        sizes="(max-width: 479px) 47vw, (max-width: 767px) 23vw, (max-width: 991px) 15vw, 12vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/664b698501e97ad95fc4439f_image%2062-p-500.png   500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/664b698501e97ad95fc4439f_image%2062-p-800.png   800w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/664b698501e97ad95fc4439f_image%2062-p-1080.png 1080w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/664b698501e97ad95fc4439f_image%2062-p-1600.png 1600w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/664b698501e97ad95fc4439f_image%2062.webp       1639w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/664b698501e97ad95fc4439f_image%2062.webp"
                        loading="lazy"
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a
                      href="https://www.fivestargroup.com/"
                      target="_blank"
                      className="cl-container w-inline-block"
                      rel="noreferrer"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/66393227fee3069b9985e679_five.webp"
                        alt=""
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a
                      href="https://expohomeimprovement.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/652d41e2996852f5d826141e_Expo%20Home%20Logo.svg"
                        alt="ExpoHome Logo"
                        className="co-logo-2"
                      />
                    </a>
                  </div>
                  <div className="cl-oont">
                    <a
                      href="https://www.johnmooreservices.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/652d41e328baab12e7f5dd6f_John%20Moore%20Logo.svg"
                        alt="John Moore  Logo"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://www.kohler.com/"
                      target="_blank"
                      className="cl-container w-inline-block"
                      rel="noreferrer"
                    >
                      <img
                        sizes="(max-width: 479px) 32vw, (max-width: 767px) 23vw, (max-width: 991px) 15vw, 12vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e24f1da0f8fb65451ef8f4_Kohler-p-500.webp   500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e24f1da0f8fb65451ef8f4_Kohler-p-800.webp   800w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e24f1da0f8fb65451ef8f4_Kohler-p-1080.webp 1080w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e24f1da0f8fb65451ef8f4_Kohler.webp        2560w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e24f1da0f8fb65451ef8f4_Kohler.webp"
                        loading="lazy"
                        className="co-logo-2 smaller"
                      />
                    </a>
                    <a
                      href="https://a1garage.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 31vw, (max-width: 767px) 21vw, (max-width: 991px) 14vw, 11vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e266679091d3941bf_A1%20Garage-p-500.png  500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e266679091d3941bf_A1%20Garage.webp      1176w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e266679091d3941bf_A1%20Garage.webp"
                        loading="lazy"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://www.rebath.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/652d41e312c0f72d90c648d3_Re%20Bath%20Logo.svg"
                        alt="Re Bath  Logo"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://www.renewalbyandersen.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 47vw, (max-width: 767px) 23vw, (max-width: 991px) 15vw, 12vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e4275d205cb155f77_renewal%20by%20anderson%201-p-500.webp  500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e4275d205cb155f77_renewal%20by%20anderson%201-p-800.webp  800w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e4275d205cb155f77_renewal%20by%20anderson%201.webp       1040w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e4275d205cb155f77_renewal%20by%20anderson%201.webp"
                        loading="lazy"
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a
                      href="https://www.rescueairtx.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/652d41e21a71fa3f8fdf7a14_Rescue%20Logo.svg"
                        alt="Rescue Air Logo"
                        className="co-logo-2 wide"
                      />
                    </a>
                    <a
                      href="https://www.floridawindowanddoor.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/652d41e288d7d0edca58c7e3_Florida%20Window%20Logo.svg"
                        alt="Florida Window and Door Logo"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://www.hoffmannbros.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/669993c3fd7feb166b0cfd2e_hoffman%20brothers.png"
                        alt=""
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a
                      href="https://geteco.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 38vw, (max-width: 767px) 23vw, (max-width: 991px) 15vw, 12vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e7a7b450928af115e_ECO-p-500.webp   500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e7a7b450928af115e_ECO-p-800.webp   800w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e7a7b450928af115e_ECO-p-1080.webp 1080w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e7a7b450928af115e_ECO.webp        1864w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e7a7b450928af115e_ECO.webp"
                        loading="lazy"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://www.goettl.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e474a57ed96286f55_Goettle.webp"
                        alt=""
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a
                      href="https://www.blantonsair.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 23vw, (max-width: 767px) 16vw, (max-width: 991px) 10vw, 8vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e396e4a0ec76fdca8_header_logo%402x-p-500.webp 500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e396e4a0ec76fdca8_header_logo%402x.webp       864w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e396e4a0ec76fdca8_header_logo%402x.webp"
                        loading="lazy"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://apexhi.com.au/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 24vw, (max-width: 767px) 17vw, (max-width: 991px) 11vw, 9vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e78180fa3aa318c91_apex-p-500.png 500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e78180fa3aa318c91_apex.webp      926w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e78180fa3aa318c91_apex.webp"
                        loading="lazy"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://www.abbywindows.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706eb2d44c09712258c8_Abby%20Window%20%26%20Expterios.webp"
                        alt=""
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://summersphc.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 47vw, (max-width: 767px) 23vw, (max-width: 991px) 15vw, 12vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706eb70c9f6ec4f1fc1d_Summers-p-500.webp   500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706eb70c9f6ec4f1fc1d_Summers-p-800.webp   800w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706eb70c9f6ec4f1fc1d_Summers-p-1080.webp 1080w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706eb70c9f6ec4f1fc1d_Summers.webp        1794w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706eb70c9f6ec4f1fc1d_Summers.webp"
                        loading="lazy"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://windowdepotusa.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 47vw, (max-width: 767px) 23vw, (max-width: 991px) 15vw, 12vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e28d199e25afaae45_Window%20Depot-p-500.webp   500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e28d199e25afaae45_Window%20Depot-p-800.webp   800w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e28d199e25afaae45_Window%20Depot-p-1080.webp 1080w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e28d199e25afaae45_Window%20Depot-p-1600.webp 1600w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e28d199e25afaae45_Window%20Depot-p-2000.webp 2000w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e28d199e25afaae45_Window%20Depot.webp        2391w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e28d199e25afaae45_Window%20Depot.webp"
                        loading="lazy"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://hansons.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e39a0cd178d3a3d32_1800%20Hanson.webp"
                        alt=""
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a
                      href="http://www.mcwilliamsandson.com"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e71fa160677896898_McWilliams.webp"
                        alt=""
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a href="#" className="cl-container w-inline-block">
                      <img
                        sizes="(max-width: 479px) 31vw, (max-width: 767px) 22vw, (max-width: 991px) 14vw, 11vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e396e4a0ec76fdc84_Fur-p-500.webp  500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e396e4a0ec76fdc84_Fur-p-800.webp  800w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e396e4a0ec76fdc84_Fur.webp       1192w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e396e4a0ec76fdc84_Fur.webp"
                        loading="lazy"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://www.fhfurr.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 31vw, (max-width: 767px) 21vw, (max-width: 991px) 14vw, 11vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e266679091d3941bf_A1%20Garage-p-500.png  500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e266679091d3941bf_A1%20Garage.webp      1176w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e266679091d3941bf_A1%20Garage.webp"
                        loading="lazy"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://itsjustplumbsmart.com/"
                      target="_blank"
                      className="cl-container w-inline-block"
                      rel="noreferrer"
                    >
                      <img
                        sizes="(max-width: 479px) 47vw, (max-width: 767px) 23vw, (max-width: 991px) 15vw, 12vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/664b698501e97ad95fc4439f_image%2062-p-500.png   500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/664b698501e97ad95fc4439f_image%2062-p-800.png   800w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/664b698501e97ad95fc4439f_image%2062-p-1080.png 1080w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/664b698501e97ad95fc4439f_image%2062-p-1600.png 1600w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/664b698501e97ad95fc4439f_image%2062.webp       1639w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/664b698501e97ad95fc4439f_image%2062.webp"
                        loading="lazy"
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a
                      href="https://www.fivestargroup.com/"
                      target="_blank"
                      className="cl-container w-inline-block"
                      rel="noreferrer"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/66393227fee3069b9985e679_five.webp"
                        alt=""
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a
                      href="https://expohomeimprovement.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/652d41e2996852f5d826141e_Expo%20Home%20Logo.svg"
                        alt="ExpoHome Logo"
                        className="co-logo-2"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-wrap">
              <div style={{ opacity: 1 }} className="carousel-container">
                <div
                  style={{
                    WebkitTransform:
                      "translate3d(-50%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(-50%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(-50%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="sh carousel btm"
                >
                  <div className="cl-oont">
                    <a
                      href="https://www.turnpointservices.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e270700925e70d81c5471a_Turnpoint.webp"
                        alt=""
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a
                      href="https://www.ridgetopexteriors.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2b6620e0de450d89d4fce_Ridgetop.webp"
                        alt=""
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a
                      href="https://www.windownation.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e27070d4b8ad5b22b0dad8_window%20nation.webp"
                        alt=""
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a
                      href="https://www.windowworld.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e27070be444189fffec592_Window%20Wold.webp"
                        alt=""
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://www.pjfitz.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e270703ba99971d3be11f2_PJ%20Fitzpatrik.webp"
                        alt=""
                        className="co-logo-2"
                      />
                    </a>
                    <a href="#" className="cl-container w-inline-block">
                      <img
                        sizes="(max-width: 479px) 26vw, (max-width: 767px) 18vw, (max-width: 991px) 12vw, 9vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f474a57ed962871b9_Jacuzzi-p-500.png 500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f474a57ed962871b9_Jacuzzi.webp      997w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f474a57ed962871b9_Jacuzzi.webp"
                        loading="lazy"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://www.mistersparky.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/666bcade058ee35ececebb12_sparky%5C.png"
                        alt=""
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://www.pella.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 41vw, (max-width: 767px) 20vw, (max-width: 991px) 13vw, 11vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f86d71b3ab7e7a004_Pella%20Windows%20and%20Doors-p-500.webp 500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f86d71b3ab7e7a004_Pella%20Windows%20and%20Doors.webp       800w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f86d71b3ab7e7a004_Pella%20Windows%20and%20Doors.webp"
                        loading="lazy"
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a
                      href="https://www.cardinalhvac.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e80a80ef6bb3ff970_Cardinal.webp"
                        alt=""
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a
                      href="https://leesair.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 21vw, (max-width: 767px) 14vw, (max-width: 991px) 9vw, 7vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f07716a5b7a36e2a2_Lees%20Plumming-p-500.webp 500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f07716a5b7a36e2a2_Lees%20Plumming.webp       782w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f07716a5b7a36e2a2_Lees%20Plumming.webp"
                        loading="lazy"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://www.improveitusa.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f979fae6e43aa87a9_Improve%20It%20USA.webp"
                        alt=""
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://longhomeproducts.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 24vw, (max-width: 767px) 17vw, (max-width: 991px) 11vw, 9vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f266679091d394255_LongHome-p-500.webp 500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f266679091d394255_LongHome-p-800.webp 800w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f266679091d394255_LongHome.webp       919w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f266679091d394255_LongHome.webp"
                        loading="lazy"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://www.leafhome.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 47vw, (max-width: 767px) 23vw, (max-width: 991px) 15vw, 12vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f3ba99971d3be1160_image%2050-p-500.png   500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f3ba99971d3be1160_image%2050-p-800.png   800w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f3ba99971d3be1160_image%2050-p-1080.png 1080w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f3ba99971d3be1160_image%2050.webp       1884w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f3ba99971d3be1160_image%2050.webp"
                        loading="lazy"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://greatdayimprovements.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 42vw, (max-width: 767px) 23vw, (max-width: 991px) 15vw, 12vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f8d1be8187e3cce8e_GreatDay%20Imporvements-p-500.png  500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f8d1be8187e3cce8e_GreatDay%20Imporvements-p-800.png  800w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f8d1be8187e3cce8e_GreatDay%20Imporvements.webp      1585w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f8d1be8187e3cce8e_GreatDay%20Imporvements.webp"
                        loading="lazy"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://appleroof.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f266679091d394208_Apple%20Roofing.webp"
                        alt=""
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://www.groundworks.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 47vw, (max-width: 767px) 23vw, (max-width: 991px) 15vw, 12vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f28d199e25afaae87_GroundWorks-p-500.png   500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f28d199e25afaae87_GroundWorks-p-800.png   800w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f28d199e25afaae87_GroundWorks-p-1080.png 1080w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f28d199e25afaae87_GroundWorks.webp       3376w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f28d199e25afaae87_GroundWorks.webp"
                        loading="lazy"
                        className="co-logo-2 smaller"
                      />
                    </a>
                    <a
                      href="https://www.4feldco.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e8aca95a0454365b2_Feldco.webp"
                        alt=""
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a
                      href="https://www.rescuerooter-los-angeles.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 33vw, (max-width: 767px) 17vw, (max-width: 991px) 11vw, 9vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e78180fa3aa318cb4_ARS-p-500.webp 500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e78180fa3aa318cb4_ARS.webp       651w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e78180fa3aa318cb4_ARS.webp"
                        loading="lazy"
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a
                      href="https://www.southernairnow.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 38vw, (max-width: 767px) 19vw, (max-width: 991px) 12vw, 10vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706edfabffb3208334ea_Southern%20Air-p-500.webp 500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706edfabffb3208334ea_Southern%20Air.webp       747w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706edfabffb3208334ea_Southern%20Air.webp"
                        loading="lazy"
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a
                      href="https://petermanhvac.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 47vw, (max-width: 767px) 23vw, (max-width: 991px) 15vw, 12vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/669994c1bbcd325899c5ed77_petermen-p-500.png 500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/669994c1bbcd325899c5ed77_petermen-p-800.png 800w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/669994c1bbcd325899c5ed77_petermen.png       860w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/669994c1bbcd325899c5ed77_petermen.png"
                        loading="lazy"
                        className="co-logo-2 larger"
                      />
                    </a>
                  </div>
                  <div className="cl-oont">
                    <a
                      href="https://www.turnpointservices.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e270700925e70d81c5471a_Turnpoint.webp"
                        alt=""
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a
                      href="https://www.ridgetopexteriors.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2b6620e0de450d89d4fce_Ridgetop.webp"
                        alt=""
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a
                      href="https://www.windownation.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e27070d4b8ad5b22b0dad8_window%20nation.webp"
                        alt=""
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a
                      href="https://www.windowworld.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e27070be444189fffec592_Window%20Wold.webp"
                        alt=""
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://www.pjfitz.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e270703ba99971d3be11f2_PJ%20Fitzpatrik.webp"
                        alt=""
                        className="co-logo-2"
                      />
                    </a>
                    <a href="#" className="cl-container w-inline-block">
                      <img
                        sizes="(max-width: 479px) 26vw, (max-width: 767px) 18vw, (max-width: 991px) 12vw, 9vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f474a57ed962871b9_Jacuzzi-p-500.png 500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f474a57ed962871b9_Jacuzzi.webp      997w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f474a57ed962871b9_Jacuzzi.webp"
                        loading="lazy"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://www.mistersparky.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/666bcade058ee35ececebb12_sparky%5C.png"
                        alt=""
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://www.pella.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 41vw, (max-width: 767px) 20vw, (max-width: 991px) 13vw, 11vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f86d71b3ab7e7a004_Pella%20Windows%20and%20Doors-p-500.webp 500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f86d71b3ab7e7a004_Pella%20Windows%20and%20Doors.webp       800w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f86d71b3ab7e7a004_Pella%20Windows%20and%20Doors.webp"
                        loading="lazy"
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a
                      href="https://www.cardinalhvac.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e80a80ef6bb3ff970_Cardinal.webp"
                        alt=""
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a
                      href="https://leesair.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 21vw, (max-width: 767px) 14vw, (max-width: 991px) 9vw, 7vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f07716a5b7a36e2a2_Lees%20Plumming-p-500.webp 500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f07716a5b7a36e2a2_Lees%20Plumming.webp       782w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f07716a5b7a36e2a2_Lees%20Plumming.webp"
                        loading="lazy"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://www.improveitusa.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f979fae6e43aa87a9_Improve%20It%20USA.webp"
                        alt=""
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://longhomeproducts.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 24vw, (max-width: 767px) 17vw, (max-width: 991px) 11vw, 9vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f266679091d394255_LongHome-p-500.webp 500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f266679091d394255_LongHome-p-800.webp 800w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f266679091d394255_LongHome.webp       919w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f266679091d394255_LongHome.webp"
                        loading="lazy"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://www.leafhome.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 47vw, (max-width: 767px) 23vw, (max-width: 991px) 15vw, 12vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f3ba99971d3be1160_image%2050-p-500.png   500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f3ba99971d3be1160_image%2050-p-800.png   800w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f3ba99971d3be1160_image%2050-p-1080.png 1080w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f3ba99971d3be1160_image%2050.webp       1884w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f3ba99971d3be1160_image%2050.webp"
                        loading="lazy"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://greatdayimprovements.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 42vw, (max-width: 767px) 23vw, (max-width: 991px) 15vw, 12vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f8d1be8187e3cce8e_GreatDay%20Imporvements-p-500.png  500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f8d1be8187e3cce8e_GreatDay%20Imporvements-p-800.png  800w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f8d1be8187e3cce8e_GreatDay%20Imporvements.webp      1585w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f8d1be8187e3cce8e_GreatDay%20Imporvements.webp"
                        loading="lazy"
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://appleroof.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f266679091d394208_Apple%20Roofing.webp"
                        alt=""
                        className="co-logo-2"
                      />
                    </a>
                    <a
                      href="https://www.groundworks.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 47vw, (max-width: 767px) 23vw, (max-width: 991px) 15vw, 12vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f28d199e25afaae87_GroundWorks-p-500.png   500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f28d199e25afaae87_GroundWorks-p-800.png   800w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f28d199e25afaae87_GroundWorks-p-1080.png 1080w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f28d199e25afaae87_GroundWorks.webp       3376w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706f28d199e25afaae87_GroundWorks.webp"
                        loading="lazy"
                        className="co-logo-2 smaller"
                      />
                    </a>
                    <a
                      href="https://www.4feldco.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e8aca95a0454365b2_Feldco.webp"
                        alt=""
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a
                      href="https://www.rescuerooter-los-angeles.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 33vw, (max-width: 767px) 17vw, (max-width: 991px) 11vw, 9vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e78180fa3aa318cb4_ARS-p-500.webp 500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e78180fa3aa318cb4_ARS.webp       651w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706e78180fa3aa318cb4_ARS.webp"
                        loading="lazy"
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a
                      href="https://www.southernairnow.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 38vw, (max-width: 767px) 19vw, (max-width: 991px) 12vw, 10vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706edfabffb3208334ea_Southern%20Air-p-500.webp 500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706edfabffb3208334ea_Southern%20Air.webp       747w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e2706edfabffb3208334ea_Southern%20Air.webp"
                        loading="lazy"
                        className="co-logo-2 larger"
                      />
                    </a>
                    <a
                      href="https://petermanhvac.com/"
                      className="cl-container w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 47vw, (max-width: 767px) 23vw, (max-width: 991px) 15vw, 12vw"
                        srcSet="
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/669994c1bbcd325899c5ed77_petermen-p-500.png 500w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/669994c1bbcd325899c5ed77_petermen-p-800.png 800w,
                              https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/669994c1bbcd325899c5ed77_petermen.png       860w
                            "
                        alt=""
                        src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/669994c1bbcd325899c5ed77_petermen.png"
                        loading="lazy"
                        className="co-logo-2 larger"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* how-it-works */}
      <section className="section_how-it-works">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section">
              <div className="section-title_component is-center">
                <h2 className="heading-style-h2 is-mobile-center">
                  How it Works
                </h2>
              </div>
              <div className="w-layout-grid comp-3-cols">
                <div className="rel">
                  <div
                    className="how_it-works_lottie"
                    data-animation-type="lottie"
                    data-src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/6531326ed145762acbb89a17_Rilla_HomepageAnimation_Talk.json"
                    data-loop="1"
                    data-direction="1"
                    data-autoplay="1"
                    data-is-ix2-target="0"
                    data-renderer="svg"
                    data-default-duration="5.366666666666666"
                    data-duration="0"
                  ></div>
                  <div className="btm-border"></div>
                </div>
                <div className="rel">
                  <div
                    className="how_it-works_lottie"
                    data-animation-type="lottie"
                    data-src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/6531326e38710da771f153cd_Rilla_Homepage_Capture.json"
                    data-loop="1"
                    data-direction="1"
                    data-autoplay="1"
                    data-is-ix2-target="0"
                    data-renderer="svg"
                    data-default-duration="4.533333333333333"
                    data-duration="0"
                  ></div>
                  <div className="btm-border"></div>
                </div>
                <div className="rel">
                  <div
                    className="how_it-works_lottie"
                    data-animation-type="lottie"
                    data-src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/6531326e8f84ee2e9c62fa7a_Rilla_HomepageAnimation_Analyse.json"
                    data-loop="1"
                    data-direction="1"
                    data-autoplay="1"
                    data-is-ix2-target="0"
                    data-renderer="svg"
                    data-default-duration="5.233333333333333"
                    data-duration="0"
                  ></div>
                  <div className="btm-border"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About-us */}
      <section className="section_about-us">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section">
              <div className="w-layout-grid _2-cols_component">
                <div>
                  <h2>Gain 100% Visibility into Every Sales Conversation</h2>
                  <p className="text-size-medium text-color-neutral-300">
                    Virtual ridealongs give you recordings, transcriptions,
                    summaries, and analytics from every sales visit. Review
                    them, make comments, create highlights, and more.
                  </p>
                </div>
                <div className="_2-cols_img-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65e0fd988ebfeabd006ae65a_CleanShot%202024-02-29%20at%201%E2%80%AF.55.18%402x.webp"
                    loading="lazy"
                    alt=""
                  />
                  <div className="benefits_1-left-accent_img-wrapper">
                    <img
                      src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65302432a3d7bc494191d35f_Benefits%201-accent_3.svg"
                      loading="lazy"
                      alt="a white and purple banner with the words, you are of the increase of the"
                      className="benefits_1-accent-img_2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="padding-section">
              <div
                data-w-id="ea61e738-b5d0-209d-8893-18b0879f3f8b"
                className="w-layout-grid _2-cols_component"
              >
                <div className="_2-cols_img-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/653135487a4c6a311269985c_benifit_img-2.webp"
                    loading="lazy"
                    alt="a woman sitting at a table talking to another woman"
                    className="_2-cols_img"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/653135350b17888f7f098b10_benifit-2-accent-3.svg"
                    loading="lazy"
                    alt="a white background with black text and a black and white photo"
                    className="benefits_2-accent-img_1"
                  />
                  <div className="benefits_2-right-accent_img-wrapper">
                    <img
                      src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/6531353505b5264489cee30d_benifit-2-accent-2.svg"
                      loading="lazy"
                      alt="a checklist is shown with the words checklist on it"
                      className="benefits_2-accent-img_3"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/653135197d14e0820ce79df6_Frame%201000002286.svg"
                      loading="lazy"
                      alt="a white background with a black and white logo"
                      className="benefits_2-accent-img"
                    />
                  </div>
                </div>
                <div className="_2-cols_content-wrapper">
                  <h2>Save Time and Coach 8x Faster</h2>
                  <p className="text-size-medium text-color-neutral-300">
                    Sales managers who coach with Rilla &#x27;s AI are 8x faster
                    and 20x more efficient. Give all your reps feedback every
                    day. And allow your managers to coach 2x the number of reps.
                  </p>
                </div>
              </div>
            </div>
            <div className="padding-section">
              <div className="w-layout-grid _2-cols_component">
                <div className="_2-cols_content-wrapper">
                  <h2>Coach from anywhere.</h2>
                  <p className="text-size-medium text-color-neutral-300">
                    With Rilla, you can coach from anywhere. Your sales managers
                    no longer need to live in a plane. They can coach all your
                    reps right from their home or office.
                  </p>
                </div>
                <div className="_2-cols_img-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65313da48043896283548e57_benefit_img-3.webp"
                    loading="lazy"
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 44vw, 40vw"
                    alt="two men shaking hands over a laptop computer"
                    className="_2-cols_img"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65313da4e9036b4a4e1d2d1c_benifit-3-accent-1.svg"
                    loading="lazy"
                    alt="the speed of a car is shown on the screen"
                    className="benefits_3-accent-img_2"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/6495c3883043fba53eb20a14/65313da4db37f3c2575f00b6_benifit-3-accent-2.svg"
                    loading="lazy"
                    alt="a screenshot of a text message that reads, use al - suggested comment"
                    className="benefits_3-accent-img_1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Win-more */}
      <section className="section_win-more">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section">
              <div className="section-title_component is-center">
                <h2>
                  Win More With <span className="primary">Rilla</span>
                </h2>
              </div>
              <div className="w-layout-grid comp-3-cols is-win_more">
                <div className="win-more_item">
                  <div className="how-it-works_content-wrapper">
                    <div className="how-it-works_main-number">
                      <span>40</span>%
                    </div>
                    <p className="text-size-medium min-rem">
                      Avg increase in close rates.
                    </p>
                  </div>
                </div>
                <div className="win-more_item">
                  <div className="how-it-works_content-wrapper">
                    <div className="how-it-works_main-number">
                      <span>8</span>X
                    </div>
                    <p className="text-size-medium min-rem">
                      Avg time savings for Sales Managers.
                    </p>
                  </div>
                </div>
                <div className="win-more_item">
                  <div className="how-it-works_content-wrapper">
                    <div className="how-it-works_main-number">
                      <span>17</span>%
                    </div>
                    <p className="text-size-medium min-rem">
                      Avg increase in ticket price.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section_cta">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section">
              <div className="cta_component">
                <div className="cta-content_wrapper">
                  <div className="cta-heading-wrapper">
                    <h2 className="heading-15">
                      Save Time. Coach Better. Win More.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Main;
