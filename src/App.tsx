import './App.css'

function App() {
  const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const dummy2 = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <>

      <div className='px-[70px] pt-[49px]'>

        <nav className='flex justify-between   w-full '>
          <div className="logo "><img src="images/Logo.svg" alt="ARME Logo" /></div>

          <div className="home gap-4 flex">
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
        </nav>


        <section className="hero flex flex-col text-center items-center gap-[40px] justify-center h-screen">
          <div className="head text-2xl font-semibold font-inter ">X-Arme Collection</div>
          <div className="title text-7xl font-semibold text-center">The Gamified Lifestyle <br /> and Growth SuperApp.</div>
          <div className="subtitle text-xl font-medium text-center ">A community-oriented, utility-driven product hub <br /> on The Open Network.</div>

          <button className='bg-[#4A6BFF] border-[black] rounded-[70px] border-[2px] w-[310px] h-[66px] text-white text-lg '>Enter MotherApp<img className='inline px-2' src="images/inverse/telegram.svg" alt="" /></button>

        </section>

        <section className="companies-starch ">
          <div className="singleline flex gap-[60px] w-full justify-between  ">
            {
              dummy2.map((e, index) => (
                <div key={index} className="org"><img src={`images/brnd logo/${e}q.svg`} height={"18px"} alt="" /> </div>

              ))


            }
          </div>
        </section>

        <section className="product h-full mx-[20px] my-[50px] flex flex-col ">`
          <div className="title text-7xl font-semibold text-start mx-[70px] my-[70px] ">
            Telegram’s First Modular <br /> Web3 Superapp
          </div>

          <div className="wrap flex flex-col justify-center  items-center gap-[62px] w-full ">

            <div className="imagesthings flex flex-wrap gap-[50px] max-w-full justify-center  ">

              <div className="itemng basis-[30%] text-white rounded-[32px] overflow-hidden max-h-[270px] max-w-[387px] ">
                <div className="tops bg-black flex items-center justify-center h-[210px] w-[387px] text-3xl font-medium ">
                  @committeeofxarme
                </div>
                <div className="bots bg-[#3E3AFF] flex justify-between items-center px-[23px] py-[30px] rounded-b-[32px]  max-h-[66px] text-base font-normal ">
                  <div className="textmini">an IP of XARME Collective</div>
                  <img src="images/inverse/logo.svg" alt="logo" />
                </div>
              </div>
              <div className="itemng basis-[30%] text-white rounded-[32px] overflow-hidden max-h-[270px] max-w-[387px] ">
                <div className="tops bg-black flex items-center justify-center h-[210px] w-[387px] text-3xl font-medium ">
                  @artofmeme
                </div>
                <div className="bots bg-[#3E3AFF] flex justify-between items-center px-[23px] py-[30px] rounded-b-[32px]  max-h-[66px] text-base font-normal ">
                  <div className="textmini">an IP of XARME Collective</div>
                  <img src="images/inverse/logo.svg" alt="logo" />
                </div>
              </div>
              <div className="itemng basis-[30%] text-white rounded-[32px] overflow-hidden max-h-[270px] max-w-[387px] ">
                <div className="tops bg-black flex items-center justify-center h-[210px] w-[387px] text-3xl font-medium ">
                  @gemarket
                </div>
                <div className="bots bg-[#3E3AFF] flex justify-between items-center px-[23px] py-[30px] rounded-b-[32px]  max-h-[66px] text-base font-normal ">
                  <div className="textmini">an IP of XARME Collective</div>
                  <img src="images/inverse/logo.svg" alt="logo" />
                </div>

              </div>
              <div className="itemng basis-[30%] text-white rounded-[32px] overflow-hidden max-h-[270px] max-w-[387px] ">
                <div className="tops bg-black flex items-center justify-center h-[210px] w-[387px] text-3xl font-medium ">
                  @planetclicker
                </div>
                <div className="bots bg-[#3E3AFF] flex justify-between items-center px-[23px] py-[30px] rounded-b-[32px]  max-h-[66px] text-base font-normal ">
                  <div className="textmini">an IP of XARME Collective</div>
                  <img src="images/inverse/logo.svg" alt="logo" />

                </div>
              </div>
              <div className="itemng basis-[30%] text-white rounded-[32px] overflow-hidden max-h-[270px] max-w-[387px] ">
                <div className="tops bg-black flex items-center justify-center h-[210px] w-[387px] text-3xl font-medium ">
                  @armetakeover
                </div>
                <div className="bots bg-[#3E3AFF] flex justify-between items-center px-[23px] py-[30px] rounded-b-[32px]  max-h-[66px] text-base font-normal ">
                  <div className="textmini">an IP of XARME Collective</div>
                  <img src="images/inverse/logo.svg" alt="logo" />

                </div>

              </div>
              <div className="itemng basis-[30%] text-white rounded-[32px] overflow-hidden max-h-[270px] max-w-[387px] ">
                <div className="tops bg-black flex items-center justify-center h-[210px] w-[387px] text-3xl font-medium ">
                  @xonton
                </div>
                <div className="bots bg-[#3E3AFF] flex justify-between items-center px-[23px] py-[30px] rounded-b-[32px]  max-h-[66px] text-base font-normal ">
                  <div className="textmini">an IP of XARME Collective</div>
                  <img src="images/inverse/logo.svg" alt="logo" />

                </div>

              </div>
            </div>
            <button className='bg-[#4A6BFF] border-[black] rounded-[70px] border-[2px] w-[300px] h-[66px] text-white text-lg ' >View More<span className='px-2'>arrowdown</span></button>

          </div>
        </section>


        <section className="features h-full mx-[20px] my-[50px] ">
          <div className="title py-[27px] text-7xl font-semibold text-start">
            The XARME MotherApp
          </div>
          <div className="subtitle text-xl font-medium text-start">
            It is the first modular, Web3 GameFi SuperApp on Telegram, consisting <br />
            of an evolving and dynamic suite of integrated products and use-cases.
          </div>

          <div className="imagelist flex flex-wrap py-[153px]  gap-y-[-12px] ">
            <div className="imageitem flex flex-col mb-[-70px] justify-end w-[360px] basis-1/3 ">
              <div className="lil-title">
                <img src="images/xot/1f.svg" alt="image1" />
              </div>
            </div>

            <div className="imageitem flex flex-col mb-[70px] w-[360px] basis-1/3 ">
              <div className="lil-title">
                <img src="images/xot/6f.svg" alt="image1" />
              </div>
            </div>
            <div className="imageitem flex flex-col mb-[-100px] justify-end w-[360px] basis-1/3 ">
              <div className="lil-title">
                <img src="images/xot/3f.svg" alt="image1" />
              </div>
            </div>
            <div className="imageitem flex flex-col justify-center w-[360px] basis-1/3 ">
              <div className="lil-title">
                <img src="images/xot/5f.svg" alt="image1" />
              </div>
            </div>
            <div className="imageitem flex flex-col mt-[-70px] w-[360px] basis-1/3 ">
              <div className="lil-title">
                <img src="images/xot/4f.svg" alt="image1" />
              </div>
            </div>
            <div className="imageitem flex flex-col justify-center w-[360px] basis-1/3 ">
              <div className="lil-title">
                <img src="images/xot/2f.svg" alt="image1" />
              </div>
            </div>

          </div>
        </section>

        <section className="specs  h-full">
          <div className="itemlist flex gap-[28px] justify-evenly  md:flex-nowrap flex-wrap">
            <div className="item  min-h-[421px] rounded-[35px] bg-[#9EC4F5] font-medium text-[32px] p-11 basis-[30%] ">
              Reinventing Rewards Sustainability and Introducing a new model of utility aggregation for web3 products.
            </div>
            <div className="item  min-h-[421px] rounded-[35px] bg-[#FCE74E] font-medium text-[32px] p-11 basis-[30%] ">
              XARME leverages user-specific, progressive, utility compartment unlocks to expand the project narrative and ensure dynamism of gameplay.
            </div>
            <div className="item  min-h-[421px] rounded-[35px] bg-[#FEC9DD] font-medium text-[32px] p-11 basis-[30%] ">
              Natively Integrated mechanisms for communication, game progression, community integration, collaboration and Organic Growth.
            </div>
          </div>
        </section>

        <section className="product h-full flex justify-between items-center">
          <div className="main-title flex flex-col gap-y-6 basis-4/12">
            <div className="subtitle">X-on-Ton</div>
            <div className="title text-7xl font-medium text-start">The Crazy <br /> Stats</div>
          </div>
          <div className="li basis-8/12">
            <div className="liitems flex my-[70px] text-[44px] font-medium justify-end items-center ">
              <span className='bg-[#9DC4F5] w-[58px] h-[58px] flex justify-center items-center border-[2px] border-black  mx-5 px-1 py-2 rounded-[100%] text-[14px]'>500m</span>
              500 million posts per day
            </div>
            <div className="liitems flex my-[70px] text-[44px] font-medium justify-center items-center ">
              <span className='bg-[#9DC4F5] w-[58px] h-[58px] flex justify-center items-center border-[2px] border-black  mx-5 px-1 py-2 rounded-[100%] text-[14px]'>100b</span>
              100 billion+ impressions per day
            </div>
            <div className="liitems flex my-[70px] text-[44px] font-medium justify-start items-center ">
              <span className='bg-[#9DC4F5] w-[58px] h-[58px] flex justify-center items-center border-[2px] border-black  mx-5 px-1 py-2 rounded-[100%] text-[14px]'>250k</span>
              250,000 posts with atleast 1m <br /> impressions per day
            </div>
            <div className="liitems flex my-[70px] text-[44px] font-medium justify-start items-center ">
              <span className='bg-[#FF5A4D] w-[58px] h-[58px] flex justify-center items-center border-[2px] border-black  mx-5 px-1 py-2 rounded-[100%] text-[14px]'>1.5m</span>
              1.5 million new signups everyday
            </div>
            <div className="liitems flex my-[70px] text-[44px] font-medium justify-center items-center ">
              <span className='bg-[#FF5A4D] w-[58px] h-[58px] flex justify-center items-center border-[2px] border-black  mx-5 px-1 py-2 rounded-[100%] text-[14px]'>14%</span>
              Users spending 14% more time <br /> on X
            </div>
            <div className="liitems flex my-[70px] text-[44px] font-medium justify-end items-center ">
              <span className='bg-[#FBE74E] w-[58px] h-[58px] flex justify-center items-center border-[2px] border-black  mx-5 px-1 py-2 rounded-[100%] text-[14px]'>No.1</span>
              The number 1 news channel <br /> on Earth
            </div>

          </div>

        </section>

        <section className="program flex h-full flex-col gap-10 justify-center my-16 items-center text-center">
          <div className="title text-7xl font-semibold  ">
            XARME  <img className='inline' src="images/emoji/peacesign.svg" alt="" />   Creators <br />
            program
          </div>
          <div className="text text-2xl font-semibold font-inter mt-24 ">
            Join thousands of creators in the XARME Creators Program
          </div>

          <div className="rowsofimage flex justify-center gap-3 items-center mb-2 ">
            {
              dummy.map((e, index) => (

                <div key={index} className="imagesbox bg-slate-800 rounded-full overflow-hidden w-[58px] h-[58px] ">
                  <img src={`images/users/${e}im.svg`} alt="prof" width={"58px"} height={"58px"} />
                </div>
              ))


            }


          </div>

          <button className='bg-[#4A6BFF] border-[black] rounded-[70px] border-[2px] w-[310px] h-[66px] text-white text-lg ' >Join Now</button>

        </section>

        <section className="footer h-screen flex flex-col justify-between pt-14 ">
          <div className="foot-wrap gap-[70px] justify-center flex flex-col">
            <div className="straigntline flex justify-around text-2xl font-medium">
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
