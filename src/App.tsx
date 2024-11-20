import './App.css'

function App() {
  const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const dummy2 = [1, 2, 3, 4, 5, 6, 7, 8]
  const dummy3 = [1, 2, 3, 4, 5, 6]
  return (
    <>

      <div className='pt-[21px] md:pt-[49px] overflow-hidden'>

        <nav className=' px-[25px] md:px-[70px] flex justify-between   w-full '>
          <div className="logo max-w-[124.76px] "><img src="images/Logo.svg" alt="ARME Logo" /></div>

          <div className="links hidden md:gap-4 md:flex">
            <button className='flex text-sm font-semibold text-nowrap justify-center items-center gap-4 text-white bg-black px-3 rounded-full w-[156px] h-[53px]'>
              Join Us <img src="images/inverse/telegram.svg" width={"20px"} alt="telegram" />
              <img src="images/inverse/x.svg" width={"20px"} alt="X (formerly Twitrter)" />
            </button>
            <button className='flex text-sm font-semibold justify-center items-center gap-4 text-white bg-black px-3 rounded-full w-[126px] h-[53px]'>
              Git
              <img src="images/inverse/GitBook - Icon - Light 1.svg" width={"20px"} alt="gitbook" />
              <img src="images/inverse/github.svg" width={"20px"} alt="github" />
            </button>
          </div>
          <div className='md:hidden'>
            <button className='flex text-sm font-semibold justify-center items-center gap-4 text-white bg-black px-3 rounded-full w-[52px] h-[52px]'>
            </button>
          </div>
        </nav>


        <section className=" px-[25px] md:px-[110px] hero flex flex-col text-center items-center gap-[40px] justify-center md:h-screen mt-[103px] md:mt-0">
          <div className="head md:text-2xl text-xl font-normal md:font-semibold font-inter ">X-Arme Collection</div>
          <div className="title tracking-tighter md:text-7xl text-5xl font-semibold text-center">The Gamified Lifestyle <br className='hidden md:inline' /> and Growth SuperApp.</div>
          <div className="subtitle text-lg text-[#636363] md:text-xl font-medium text-center ">A community-oriented, utility-driven product hub <br className='hidden md:inline' /> on The Open Network.</div>

          <button className='bg-[#4A6BFF] border-[black] rounded-[70px] border-[2px] w-[247px] md:w-[310px] h-[54px] md:h-[66px] text-white md:text-lg text-sm '>Enter MotherApp<img className='inline px-2 h-2 md:h-5' src="images/inverse/telegram.svg" alt="" /></button>

        </section>

        <section className=" px-[25px] md:px-[110px] companies-starch my-[70px]">
          <div className="singleline h-12 flex gap-[60px] w-full justify-between animate-scroll items-center ">
            {
              dummy2.map((e, index) => (
                <div key={index} className="org"><img className='min-w-20 ' src={`images/brnd logo/${e}q.svg`} height={"19px"} alt="" /> </div>
              ))
            }
            {
              dummy2.map((e, index) => (
                <div key={index} className="org"><img className='min-w-20 ' src={`images/brnd logo/${e}q.svg`} height={"19px"} alt="" /> </div>
              ))
            }
            {
              dummy2.map((e, index) => (
                <div key={index} className="org"><img className='min-w-20 ' src={`images/brnd logo/${e}q.svg`} height={"19px"} alt="" /> </div>
              ))
            }
            {
              dummy2.map((e, index) => (
                <div key={index} className="org"><img className='min-w-20 ' src={`images/brnd logo/${e}q.svg`} height={"19px"} alt="" /> </div>
              ))
            }

          </div>
          <div className="title tracking-tighter md:text-7xl text-5xl font-semibold items-start my-[70px] ">
            Telegram’s First Modular <br className='hidden md:flex' /> Web3 Superapp
          </div>

        </section>

        <section className=" px-[25px] md:px-[110px]  bg-[#F9FAF9] product h-full pb-[20px] my-[20px] flex flex-col ">`


          <div className="wrap flex flex-col justify-center bg- items-center gap-[49px] w-full ">

            <div className="imagesthings  flex flex-col  md:flex-row flex-wrap gap-[30px] max-w-full justify-start  ">

              {
                dummy3.map((e, index) => (
                  <div key={index} className="itemng basis-[30%] text-white rounded-[32px] overflow-hidden max-h-[370x] max-w-[487px] ">

                    <img width={"407px"} src={`images/${e}o.svg`} alt="" />
                  </div>

                ))


              }


            </div>
            <button className='bg-[#4A6BFF] border-[black] rounded-[70px] border-[2px] w-[247px] md:w-[310px] h-[54px] md:h-[66px] text-white md:text-lg text-sm '> View More<img className='inline px-2 h-2 md:h-3' src="images/arrowDown.svg" alt="" /></button>

          </div>
        </section>


        <section className=" px-[25px] md:px-[110px] features h-full  mt-[80px] ">
          <div className="title tracking-tighter md:text-7xl text-5xl mb-2 font-semibold text-start">
            The XARME MotherApp
          </div>
          <div className="subtitle text-lg tracking-tight md:text-2xl font-medium text-start text-[#636363]">
            It is the first modular, Web3 GameFi SuperApp on Telegram, consisting <br className='hidden md:flex' />
            of an evolving and dynamic suite of integrated products and use-cases.
          </div>

          <div className="imagelist flex flex-col md:flex-row md:flex-wrap pt-[70px] md:pt-[153px]   ">
            <div className="imageitem animate-slideUp md:flex flex-col md:mb-[-70px] justify-end w-[360px] basis-1/3 ">
              <div className="lil-title">
                <img src="images/xot/1f.svg" alt="image1" />
              </div>
            </div>

            <div className="imageitem animate-slideUp md:flex flex-col mt-[-51px] md:mt-[0px] md:mb-[70px] w-[360px] basis-1/3 ">
              <div className="lil-title">
                <img src="images/xot/6f.svg" alt="image1" />
              </div>
            </div>
            <div className="imageitem animate-slideUp md:flex flex-col mt-[-51px] md:mt-[0px] md:mb-[-100px] justify-end w-[360px] basis-1/3 ">
              <div className="lil-title">
                <img src="images/xot/3f.svg" alt="image1" />
              </div>
            </div>
            <div className="imageitem animate-slideUp md:flex flex-col mt-[-51px] md:mt-[0px] md:justify-center w-[360px] basis-1/3 ">
              <div className="lil-title">
                <img src="images/xot/5f.svg" alt="image1" />
              </div>
            </div>
            <div className="imageitem animate-slideUp md:flex flex-col mt-[-51px] md:mt-[-70px] w-[360px] basis-1/3 ">
              <div className="lil-title">
                <img src="images/xot/4f.svg" alt="image1" />
              </div>
            </div>
            <div className="imageitem animate-slideUp md:flex flex-col mt-[-51px] md:mt-[0px] md:justify-center w-[360px] basis-1/3 ">
              <div className="lil-title">
                <img src="images/xot/2f.svg" alt="image1" />
              </div>
            </div>

          </div>
        </section>

        <section className=" px-[25px] md:px-[110px] specs h-full animate-scroll">

          <div className="itemlist flex gap-[28px] justify-evenly flex-nowrap   ">
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

        </section>

        <section className="md:bg-[#F9FAF9] product h-full flex flex-col md:flex-row justify-between mt-[70px] items-start md:items-center">
          <div className="main-title flex flex-col gap-y-6 basis-3/12 px-[25px] py-[47px] md:pl-[110px]">
            <div className="subtitle">X-on-Ton</div>
            <div className="title tracking-tighter md:text-7xl text-5xl font-semibold text-start">The Crazy <br /> Stats</div>
          </div>

          <div className="li bg-[#F9FAF9]  basis-9/12 px-[20px] md:px-[110px] ">
            <div className="liitems animate-slideIn flex my-5 md:my-[70px] text-[25px] md:text-[44px] text-wrap tracking-tight font-medium justify-end items-center ml-[66px] ">
              <span className='bg-[#9DC4F5] w-[33px] h-[33px] md:w-[58px] md:h-[58px] flex justify-center items-center border-[1px] md:border-[2px] border-black  mx-5 px-2 py-1  rounded-[100%] text-[10px] md:text-[14px]'>500m</span>
              500 million posts per day
            </div>
            <div className="liitems animate-slideIn flex my-5 md:my-[70px] text-[25px] md:text-[44px] text-wrap tracking-tight font-medium justify-center items-center ml-[36px] ">
              <span className='bg-[#9DC4F5] w-[33px] h-[33px] md:w-[58px] md:h-[58px] flex justify-center items-center border-[1px] md:border-[2px] border-black  mx-5 px-2 py-1 rounded-[100%] text-[10px] md:text-[14px]'>100b</span>
              100 billion+ impressions per day
            </div>
            <div className="liitems animate-slideIn flex my-5 md:my-[70px] text-[25px] md:text-[44px] text-wrap tracking-tighter font-medium justify-start items-center ml-0 ">
              <span className='bg-[#9DC4F5] w-[33px] h-[33px] md:w-[58px] md:h-[58px] flex justify-center items-center border-[1px] md:border-[2px] border-black  mx-5 px-2 py-1 rounded-[100%] text-[10px] md:text-[14px]'>250k</span>
              250,000 posts with atleast 1m <br className="hidden md:inline" /> impressions per day
            </div>
            <div className="liitems animate-slideIn flex my-5 md:my-[70px] text-[25px] md:text-[44px] text-wrap tracking-tight font-medium justify-start items-center ml-[23px] ">
              <span className='bg-[#FF5A4D] w-[33px] h-[33px] md:w-[58px] md:h-[58px] flex justify-center items-center border-[1px] md:border-[2px] border-black  mx-5 px-2 py-1 rounded-[100%] text-[10px] md:text-[14px]'>1.5m</span>
              1.5 million new <br className="inline md:hidden" />  signups everyday
            </div>
            <div className="liitems animate-slideIn flex my-5 md:my-[70px] text-[25px] md:text-[44px] text-wrap tracking-tight font-medium justify-center items-center ml-[36px] ">
              <span className='bg-[#FF5A4D] w-[33px] h-[33px] md:w-[58px] md:h-[58px] flex justify-center items-center border-[1px] md:border-[2px] border-black  mx-5 px-2 py-1 rounded-[100%] text-[10px] md:text-[14px]'>14%</span>
              Users spending 14% more time <br className="hidden md:inline" /> on X
            </div>
            <div className="liitems animate-slideIn flex my-5 md:my-[70px] text-[25px] md:text-[44px] text-wrap tracking-tight font-medium justify-end items-center ml-[66px]">
              <span className='bg-[#FBE74E] w-[33px] h-[33px] md:w-[58px] md:h-[58px] flex justify-center items-center border-[1px] md:border-[2px] border-black  mx-5 px-2 py-1 rounded-[100%] text-[10px] md:text-[14px]'>No.1</span>
              The number 1 news channel <br className="hidden md:inline" /> on Earth
            </div>
          </div>

        </section>

        <section className=" px-[25px] md:px-[110px] program flex h-full flex-col gap-5 md:gap-10 justify-center mt-16 md:mb-0 mb-16 items-center text-center">

          <div className="title tracking-tighter md:text-7xl text-5xl font-semibold  ">
            XARME  <img className='w-11 inline' src="images/emoji/peacesign.svg" alt="" /> <br className="inline md:hidden" />   Creators <br />
            program
          </div>

          <div className="text w-[100vw] tracking-tighter md:text-2xl text-[14px] font-semibold font-inter mt-12 md:mt-24 ">
            Join thousands of creators in the XARME Creators Program
          </div>

          <div className="rowsofimage flex justify-center gap-1  md:gap-3 items-center mb-2 ">
            {
              dummy.map((e, index) => (

                <div key={index} className="imagesbox bg-slate-800 rounded-full overflow-hidden w-[33px] h-[33px] md:w-[58px] md:h-[58px] ">
                  <img src={`images/users/${e}im.svg`} alt="prof" />
                </div>
              ))
            }
          </div>

          <button className='bg-[#4A6BFF] border-[black] rounded-[70px] border-[2px] w-[247px] md:w-[310px] h-[54px] md:h-[66px] text-white md:text-lg text-sm '>
            Join Now
          </button>

        </section>

        <section className=" px-[25px] hidden md:px-[110px] bg-[#F9FAF9] footer h-[70vh] md:flex flex-col justify-between pt-14 ">
          <div className="foot-wrap gap-[70px] justify-center flex flex-col">
            <div className="straigntline md:flex justify-around text-2xl font-medium">
              <div className="subtitle  text-center">
                Apply as KOL
              </div>
              <div className="subtitle  text-center">Apply for Collab</div>
              <div className="subtitle  text-center">Join our Team</div>
              <div className="subtitle  text-center"> Investors Walkthrough</div>
              <div className="subtitle  text-center">Our Whitepaper</div>
            </div>
            <div className="straightLine-center self-center flex gap-[120px]">
              <div className="socialIcon"><img src="images/Link - X → SVG.svg" alt="X (formerly Twitrter)" /></div>
              <div className="socialIcon"><img src="images/GitBook - Icon - Light 1.svg" alt="gitbook" /></div>
              <div className="socialIcon"><img src="images/Link - GitHub → SVG.svg" alt="github" /></div>
              <div className="socialIcon"><img src="images/telegram.svg" alt="telegram" /></div>
            </div>
          </div>
          <img className='' src="images/ARME.svg" alt="" />

        </section>

      </div>

    </>
  )
}

export default App
