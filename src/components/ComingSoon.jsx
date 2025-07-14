const ComingSoon = () => {
  return (
    <section className="entrance-message">
      <div className="h-full col-center gap-6 lg:gap-10">
        <img src="/images/logo.webp" alt="logo" className="entrance-logo" />

        <div className="text-wrapper">
          <h3 className="gradient-title md:text-[68px] text-[60px] font-round-bold font-bold uppercase md:leading-[59px] leading-[52px] text-center ">
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

export default ComingSoon;
