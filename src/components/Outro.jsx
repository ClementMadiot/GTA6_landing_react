import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Outro = () => {
  useGSAP(() => {
    gsap.set(".final-message", { marginTop: "-100vh", opacity: 0});

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".final-message",
        start: "top 30%",
        end: "top 10%",
        scrub: true,
      },
    });

    tl.to(".final-content", { opacity: 0, duration: 1, ease: "power1.inOut" });
    tl.to(".final-message", { opacity: 1, duration: 2, ease: "power1.inOut" });
  });

  return (
    <section className="final-message black-gradient-bg">
      <div className="h-full col-center gap-10">
        <img src="/images/logo.webp" alt="logo" className="w-52" />

        <div>
          <h3 className="gradient-title lg:text-8xl lg:leading-[88px] md:text-[68px] text-[60px] font-round-bold font-semibold uppercase md:leading-[59px] leading-[52px] text-center ">
            Coming <br /> May 26 <br /> 2026
          </h3>
        </div>

        <div className="flex-center gap-10">
          <img src="/images/ps-logo.svg" className="md:w-32 w-20" />
          <img src="/images/x-logo.svg" className="md:w-52 w-40" />
        </div>
      </div>
    </section>
  );
};

export default Outro;
