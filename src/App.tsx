import './App.css'
import { useEffect, useRef, useState } from "react";

type RevealOnScrollProps = {
  children: React.ReactNode;
  animationClasses?: string; // Add customizable animation classes
};

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ children, animationClasses = "opacity-100 translate-y-0" }) => {

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) scrollObserver.unobserve(ref.current);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (ref.current) scrollObserver.observe(ref.current);

    return () => {
      if (ref.current) scrollObserver.unobserve(ref.current);
    };
  }, []);

  const classes = `transition-all duration-1000 transform 
        ${isVisible ? animationClasses : "opacity-0 translate-y-10"}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

const RevealOnScrollSlide: React.FC<RevealOnScrollProps> = ({ children, animationClasses = "opacity-100 transition-transform duration-300 ease-in-out animate-slideIn " }) => {

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) scrollObserver.unobserve(ref.current);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (ref.current) scrollObserver.observe(ref.current);

    return () => {
      if (ref.current) scrollObserver.unobserve(ref.current);
    };
  }, []);

  const classes = `transition-all duration-1000 transform 
        ${isVisible ? animationClasses : "opacity-0 translate-x-10"}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

function App() {
  const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const dummy2 = [1, 2, 3, 4, 5, 6]
  return (
    <>

      <div className='overflow-hidden'>

        <nav className='px-[25px] md:px-[70px] py-[12px] md:py-[24px] shadow-md flex justify-center bg-white/30 backdrop-blur-md md:justify-between fixed top-0 w-full z-50 bg-white'>
          <div className="logo max-w-[124.76px] "><img src="images/Logo.svg" alt="ARME Logo" /></div>

          <div className="links hidden md:gap-4 md:flex">
            <button className='flex text-sm font-semibold text-nowrap justify-center items-center gap-4 text-white bg-black px-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out w-[156px] h-[53px]'>
              Join Us  <a href="https://x.com/xarmebot" className='hover:animate-hover'> <img src="images/inverse/telegram.svg" width={"20px"} alt="telegram" /></a>
              <a href="" className='hover:animate-hover'><img src="images/inverse/x.svg" width={"20px"} alt="X (formerly Twitrter)" /></a>
            </button>
            <button className='flex text-sm font-semibold justify-center items-center gap-4 text-white bg-black px-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out w-[126px] h-[53px]'>
              Git
              <a href="https://x-arme-collective.gitbook.io" className='hover:animate-hover'>  <img src="images/inverse/GitBook - Icon - Light 1.svg" width={"20px"} alt="gitbook" /></a>
              <a href="https://github.com/XARME-COLLECTIVE/" className='hover:animate-hover'>  <img src="images/inverse/github.svg" width={"20px"} alt="github" /></a>
            </button>
          </div>

        </nav>

        <section className=" px-[25px] md:px-[110px] hero flex flex-col text-center items-center gap-[40px] justify-center md:h-screen mt-[103px] md:mt-0">
          <div className="head md:text-2xl text-xl font-normal md:font-semibold font-inter ">X-Arme Collective</div>
          <div className="title tracking-tighter md:text-7xl text-5xl font-semibold text-center">The Gamified Lifestyle <br className='hidden md:inline' /> and Growth SuperApp.</div>
          <div className="subtitle text-lg text-[#636363] md:text-xl font-medium text-center ">A community-oriented, utility-driven product hub <br className='hidden md:inline' /> on The Open Network.</div>
          <button className='bg-[#4A6BFF] border-[black] rounded-[70px] border-[2px] w-[247px] md:w-[310px] h-[54px] md:h-[66px] text-white md:text-lg text-sm '>Enter MotherApp<img className='inline px-2 h-2 md:h-5' src="images/inverse/telegram.svg" alt="" /></button>

        </section>
        <RevealOnScroll>
          <section className=" px-[25px] md:px-[110px] companies-starch mt-[70px]   md:mt-[-20px]">
            <div className="singleline md:mb-[70px] gap-[60px] flex items-center justify-center w-full ">
              {
                dummy2.map((e, index) => (
                 <img key={index} className='max-w-24 org border border-transparent hover:border-black rounded-lg hover:scale-125 transition-transform ease-in-out duration-300' src={`images/brnd logo/${e}q.svg`} alt="" /> 
                ))
              }

            </div>
            <div className="title tracking-tighter md:text-7xl text-5xl font-semibold items-start my-[60px] ">
              Telegram’s First Modular <br className='hidden md:flex' /> Web3 Superapp
            </div>

          </section>
        </RevealOnScroll>


        <RevealOnScroll>

          <section className=" px-[25px] md:px-[110px] md:pt-8  bg-[#F9FAF9] product h-full pb-[20px] my-[10px] flex flex-col ">


            <div className="wrap flex flex-col justify-center bg- items-center gap-[49px] w-full ">

              <div className="imagesthings flex flex-row flex-wrap items-center gap-[18px] md:gap-[30px] max-w-full justify-center md:justify-start  ">

                {
                  dummy2.map((e, index) => (
                    <div key={index} className="itemng basis-1/2 md:basis-[30%] text-white rounded-[15px] md:rounded-[32px]  overflow-hidden w-full max-w-[9.5rem] md:max-h-[370x] md:max-w-[487px] ">

                      <img width={"407px"} src={`images/${e}o.svg`} alt="" />
                    </div>

                  ))


                }


              </div>
              <a href=""><button className=' w-[247px] md:w-[310px] h-[54px] md:h-[66px] font-medium md:text-lg text-sm hover:scale-110 transition-transform duration-300 ease-in-out'>And More...</button></a>

            </div>
          </section>
        </RevealOnScroll>




        <RevealOnScroll>
          <section className=" px-[25px] md:px-[110px] features h-full  mt-[80px] ">
            <div className="title tracking-tighter md:text-7xl text-5xl mb-2 font-semibold text-start">
              The XARME MotherApp
            </div>
            <div className="subtitle text-lg tracking-tight md:text-2xl font-medium text-start text-[#636363]">
              It is the first modular, Web3 GameFi SuperApp on Telegram, consisting <br className='hidden md:flex' />
              of an evolving and dynamic suite of integrated products and use-cases.
            </div>

            <div className="imagelist flex flex-col md:flex-row md:flex-wrap pt-[70px] md:pt-[153px]   ">
              <div className="imageitem animate-slideUp md:flex flex-col md:mb-[-70px] justify-end w-[360px] basis-1/3  ">
                <div className="lil-title">
                  <img className='transition-transform duration-300 ease-in-out hover:animate-hoverL' src="images/xot/1f.png" alt="image1" />
                </div>
              </div>

              <div className="imageitem animate-slideUp md:flex flex-col mt-[-51px] md:mt-[0px] md:mb-[70px] w-[360px] basis-1/3 ">
                <div className="lil-title">
                  <img className='transition-transform duration-300 ease-in-out hover:animate-hoverL' src="images/xot/6f.png" alt="image1" />
                </div>
              </div>
              <div className="imageitem animate-slideUp md:flex flex-col mt-[-51px] md:mt-[0px] md:mb-[-100px] justify-end w-[360px] basis-1/3 ">
                <div className="lil-title">
                  <img className='transition-transform duration-300 ease-in-out hover:animate-hoverL' src="images/xot/3f.png" alt="image1" />
                </div>
              </div>
              <div className="imageitem animate-slideUp md:flex flex-col mt-[-51px] md:mt-[0px] md:justify-center w-[360px] basis-1/3 ">
                <div className="lil-title">
                  <img className='transition-transform duration-300 ease-in-out hover:animate-hoverL' src="images/xot/5f.png" alt="image1" />
                </div>
              </div>
              <div className="imageitem animate-slideUp md:flex flex-col mt-[-51px] md:mt-[-70px] w-[360px] basis-1/3 ">
                <div className="lil-title">
                  <img className='transition-transform duration-300 ease-in-out hover:animate-hoverL' src="images/xot/4f.png" alt="image1" />
                </div>
              </div>
              <div className="imageitem animate-slideUp md:flex flex-col mt-[-51px] md:mt-[0px] md:justify-center w-[360px] basis-1/3 ">
                <div className="lil-title">
                  <img className='transition-transform duration-300 ease-in-out hover:animate-hoverL' src="images/xot/2f.png" alt="image1" />
                </div>
              </div>

            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className=" px-[25px] md:px-[110px] specs h-full my-[60px]">

            <div className="itemlist flex gap-[28px] justify-evenly flex-row md:animate-scroll ">
              <div className="flex gap-[28px] justify-evenly flex-row overflow-x-auto md:overflow-visible">
                <div className="item tracking-tighter border border-black min-w-[300px] md:min-w-[421px] min-h-[300px] md:min-h-[421px] rounded-[35px] bg-[#9EC4F5] font-medium text-[26px] md:text-[32px] md:p-11 p-5 ">
                  Reinventing Rewards Sustainability and Introducing a new model of utility aggregation for web3 products.
                </div>
                <div className="item tracking-tighter border border-black min-h-[300px] md:min-h-[421px] min-w-[300px] md:min-w-[421px] rounded-[35px] bg-[#FCE74E] font-medium text-[26px] md:text-[32px] md:p-11 p-5  ">
                  XARME leverages user-specific, progressive, utility compartment unlocks to expand the project narrative and ensure dynamism of gameplay.
                </div>
                <div className="item tracking-tighter border border-black min-h-[300px] md:min-h-[421px] min-w-[300px] md:min-w-[421px] rounded-[35px] bg-[#C0C6FF] font-medium text-[26px] md:text-[32px] md:p-11 p-5  ">
                  Natively Integrated mechanisms for communication, game progression, community integration, collaboration and Organic Growth.
                </div>
                <div className="item tracking-tighter border border-black min-h-[300px] md:min-h-[421px] min-w-[300px] md:min-w-[421px] rounded-[35px] bg-[#FEC9DD] font-medium text-[26px] md:text-[32px] md:p-11 p-5  ">
                  A challenge of game theory, strategy, vision, Long-term positioning and balance
                </div>
              </div>
              <div className="hidden md:flex md:gap-[28px] justify-evenly md:flex-row">
                <div className="item tracking-tighter border border-black min-w-[347.82px] md:min-w-[421px] min-h-[347.82px] md:min-h-[421px] rounded-[35px] bg-[#9EC4F5] font-medium text-[26px] md:text-[32px] p-11 ">
                  Reinventing Rewards Sustainability and Introducing a new model of utility aggregation for web3 products.
                </div>
                <div className="item tracking-tighter border border-black min-h-[347.82px] md:min-h-[421px] min-w-[347.82px] md:min-w-[421px] rounded-[35px] bg-[#FCE74E] font-medium text-[26px] md:text-[32px] p-11  ">
                  XARME leverages user-specific, progressive, utility compartment unlocks to expand the project narrative and ensure dynamism of gameplay.
                </div>
                <div className="item tracking-tighter border border-black min-h-[347.82px] md:min-h-[421px] min-w-[347.82px] md:min-w-[421px] rounded-[35px] bg-[#C0C6FF] font-medium text-[26px] md:text-[32px] p-11  ">
                  Natively Integrated mechanisms for communication, game progression, community integration, collaboration and Organic Growth.
                </div>
                <div className="item tracking-tighter border border-black min-h-[347.82px] md:min-h-[421px] min-w-[347.82px] md:min-w-[421px] rounded-[35px] bg-[#FEC9DD] font-medium text-[26px] md:text-[32px] p-11  ">
                  A challenge of game theory, strategy, vision, Long-term positioning and balance
                </div>
              </div>
              <div className="hidden md:flex md:gap-[28px] justify-evenly md:flex-row">
                <div className="item tracking-tighter border border-black min-w-[347.82px] md:min-w-[421px] min-h-[347.82px] md:min-h-[421px] rounded-[35px] bg-[#9EC4F5] font-medium text-[26px] md:text-[32px] p-11 ">
                  Reinventing Rewards Sustainability and Introducing a new model of utility aggregation for web3 products.
                </div>
                <div className="item tracking-tighter border border-black min-h-[347.82px] md:min-h-[421px] min-w-[347.82px] md:min-w-[421px] rounded-[35px] bg-[#FCE74E] font-medium text-[26px] md:text-[32px] p-11  ">
                  XARME leverages user-specific, progressive, utility compartment unlocks to expand the project narrative and ensure dynamism of gameplay.
                </div>
                <div className="item tracking-tighter border border-black min-h-[347.82px] md:min-h-[421px] min-w-[347.82px] md:min-w-[421px] rounded-[35px] bg-[#C0C6FF] font-medium text-[26px] md:text-[32px] p-11  ">
                  Natively Integrated mechanisms for communication, game progression, community integration, collaboration and Organic Growth.
                </div>
                <div className="item tracking-tighter border border-black min-h-[347.82px] md:min-h-[421px] min-w-[347.82px] md:min-w-[421px] rounded-[35px] bg-[#FEC9DD] font-medium text-[26px] md:text-[32px] p-11  ">
                  A challenge of game theory, strategy, vision, Long-term positioning and balance
                </div>
              </div>


            </div>

          </section>

        </RevealOnScroll>

        <RevealOnScroll>
          <section className="md:bg-[#F9FAF9] product h-full flex flex-col md:flex-row justify-between mt-[60px] items-start md:items-center">
            <div className="main-title flex flex-col gap-y-6 basis-3/12 px-[25px] py-[47px] md:pl-[110px]">
              <div className="subtitle">X-on-Ton</div>
              <div className="title tracking-tighter md:text-7xl text-5xl font-semibold text-start">The Crazy <br /> Stats</div>
            </div>

            <div className="li bg-[#F9FAF9]  basis-9/12 px-[20px] md:px-[110px] ">

              <RevealOnScrollSlide>
                <div className="liitems hover:animate-everScale flex my-5 md:my-[70px] text-[25px] md:text-[44px] text-wrap tracking-tight font-medium justify-end items-center ml-[66px] ">
                  <span className='bg-[#9DC4F5] w-[33px] h-[33px] md:w-[58px] md:h-[58px] flex justify-center items-center border-[1px] md:border-[2px] border-black  mx-5 px-2 py-1  rounded-[100%] text-[10px] md:text-[14px]'>500m</span>
                  500 million posts per day
                </div>
              </RevealOnScrollSlide>
              <RevealOnScrollSlide>
                <div className="liitems hover:animate-everScale flex my-5 md:my-[70px] text-[25px] md:text-[44px] text-wrap tracking-tight font-medium justify-center items-center ml-[36px] ">
                  <span className='bg-[#9DC4F5] w-[33px] h-[33px] md:w-[58px] md:h-[58px] flex justify-center items-center border-[1px] md:border-[2px] border-black  mx-5 px-2 py-1 rounded-[100%] text-[10px] md:text-[14px]'>100b</span>
                  100 billion+ impressions per day
                </div>
              </RevealOnScrollSlide>
              <RevealOnScrollSlide>
                <div className="liitems hover:animate-everScale flex my-5 md:my-[70px] text-[25px] md:text-[44px] text-wrap tracking-tighter font-medium justify-start items-center ml-0 ">
                  <span className='bg-[#9DC4F5] w-[33px] h-[33px] md:w-[58px] md:h-[58px] flex justify-center items-center border-[1px] md:border-[2px] border-black  mx-5 px-2 py-1 rounded-[100%] text-[10px] md:text-[14px]'>250k</span>
                  250,000 posts with atleast 1m <br className="hidden md:inline" /> impressions per day
                </div>
              </RevealOnScrollSlide>
              <RevealOnScrollSlide>
                <div className="liitems hover:animate-everScale flex my-5 md:my-[70px] text-[25px] md:text-[44px] text-wrap tracking-tight font-medium justify-start items-center ml-[23px] ">
                  <span className='bg-[#FF5A4D] w-[33px] h-[33px] md:w-[58px] md:h-[58px] flex justify-center items-center border-[1px] md:border-[2px] border-black  mx-5 px-2 py-1 rounded-[100%] text-[10px] md:text-[14px]'>1.5m</span>
                  1.5 million new <br className="inline md:hidden" />  signups everyday
                </div>
              </RevealOnScrollSlide>
              <RevealOnScrollSlide>
                <div className="liitems hover:animate-everScale flex my-5 md:my-[70px] text-[25px] md:text-[44px] text-wrap tracking-tight font-medium justify-center items-center ml-[36px] ">
                  <span className='bg-[#FF5A4D] w-[33px] h-[33px] md:w-[58px] md:h-[58px] flex justify-center items-center border-[1px] md:border-[2px] border-black  mx-5 px-2 py-1 rounded-[100%] text-[10px] md:text-[14px]'>14%</span>
                  Users spending 14% more time <br className="hidden md:inline" /> on X
                </div>
              </RevealOnScrollSlide>
              <RevealOnScrollSlide>
                <div className="liitems hover:animate-everScale flex my-5 md:my-[70px] text-[25px] md:text-[44px] text-wrap tracking-tight font-medium justify-end items-center ml-[66px]">
                  <span className='bg-[#FBE74E] w-[33px] h-[33px] md:w-[58px] md:h-[58px] flex justify-center items-center border-[1px] md:border-[2px] border-black  mx-5 px-2 py-1 rounded-[100%] text-[10px] md:text-[14px]'>No.1</span>
                  The number 1 news channel <br className="hidden md:inline" /> on Earth
                </div>
              </RevealOnScrollSlide>
            </div>

          </section>

        </RevealOnScroll>

        <RevealOnScroll>
          <section className=" px-[25px] md:px-[110px] program flex h-full flex-col gap-5 md:gap-10 justify-center mt-16 md:mb-0 mb-16 items-center text-center">

            <div className="title tracking-tight md:text-7xl text-5xl  font-semibold  ">
              <img className='w-20 inline md:hidden' src="images/emoji/peacesign.svg" alt="" /> <br className="inline md:hidden" />
              XARME <img className='w-16 hidden md:inline' src="images/emoji/peacesign.svg" alt="" /><br className="inline md:hidden" />  Creators <br />
              program
            </div>

            <div className="text w-[100vw] tracking-tighter md:text-2xl text-[14px] font-medium font-inter mt-5 md:mt-6 ">
              Join thousands of creators in the <br className='md:hidden inline' /> XARME Creators Program
            </div>

            <div className="rowsofimage flex justify-center gap-2 flex-wrap md:gap-3  w-[60%] md:w-full items-center  ">
              {
                dummy.map((e, index) => (

                  <div key={index} className="imagesbox hover:scale-110 transition-transform duration-300 ease-in-out basis-1/5 bg-slate-800 rounded-full overflow-hidden max-w-[33px] md:max-w-[58px] h-[33px] md:w-[58px] md:h-[58px] ">
                    <img src={`images/users/${e}im.svg`} alt="prof" />
                  </div>
                ))
              }
            </div>

            <a href='https://forms.gle/ZwiVJXzhGL2bRJNC9'><button className='bg-[#4A6BFF] hover:scale-110 transition-transform duration-300 ease-in-out mt-5 border-[black] rounded-[70px] border-[2px] w-[247px] md:w-[310px] h-[54px] md:h-[66px] text-white md:text-lg text-sm '>
              Join Now
            </button></a>

          </section>

        </RevealOnScroll>
        <RevealOnScroll>
          <section className="md:bg-[#F9FAF9] footer h-full md:h-[70vh] md:flex flex-col justify-between mt-[70px] pt-14 ">
            <div className="foot-wrap gap-[70px] mb-1 px-[25px] md:px-[110px] justify-center flex flex-col">
              <div className="straigntline flex md:flex-row flex-col justify-around gap-y-2 text-2xl font-medium">
                <a href='https://forms.gle/ZwiVJXzhGL2bRJNC9' className='relative group'><div className="subtitle text-center">Apply as Creator</div>  <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#303332] transition-all group-hover:w-full duration-300 ease-in-out"></span></a>
                <a href='https://forms.gle/wJNs4tyvvtVKsKjNA' className='relative group'><div className="subtitle text-center">Apply for Collab</div>  <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#303332] transition-all group-hover:w-full duration-300 ease-in-out"></span></a>
                <a href='https://forms.gle/wJNs4tyvvtVKsKjNA' className='relative group'><div className="subtitle text-center">Join our Team</div>  <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#303332] transition-all group-hover:w-full duration-300 ease-in-out"></span></a>
                <a href='#' className='relative group'><div className="subtitle text-center"> Investors Walkthrough</div>  <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#303332] transition-all group-hover:w-full duration-300 ease-in-out"></span></a>
              </div>
              <div className="straightLine items-center justify-between md:justify-center gap-y-4 flex md:flex-row md:flex-nowrap flex-wrap md:gap-x-[120px]">
                <a href="https://x.com/xarmebot" className="socialIcon md:hover:animate-hover basis-1/2 md:basis-1/4 flex justify-center items-center"><img src="images/Link - X → SVG.svg" alt="X (formerly Twitrter)" /></a>
                <a href="https://x-arme-collective.gitbook.io" className="socialIcon md:hover:animate-hover basis-1/2 md:basis-1/4 flex justify-center items-center"><img src="images/GitBook - Icon - Light 1.svg" alt="gitbook" /></a>
                <a href="https://github.com/XARME-COLLECTIVE/" className="socialIcon md:hover:animate-hover basis-1/2 md:basis-1/4 flex justify-center items-center"><img src="images/Link - GitHub → SVG.svg" alt="github" /></a>
                <a href="" className="socialIcon md:hover:animate-hover basis-1/2 md:basis-1/4 flex justify-center items-center"><img src="images/telegram.svg" alt="telegram" /></a>
              </div>
            </div>
            <img className=' mt-16 md:mt-20 bottom-0 w-full' src="images/ARME.svg" alt="" />

          </section>

        </RevealOnScroll>
      </div>

    </>
  )
}

export default App
