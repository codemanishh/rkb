import React from 'react'

function Homepage() {
    return (
        <div>
            {/* ..................... nevigation and div-1 in this seciton ................  */}
            <div className="nav">
                <nav>
                    <div className="nav-1">
                        <div className="forlogo">
                            <img src="./Logo/mainlogo.png" style={{ width: '48px', height: '38px' }} alt="main logo" />
                            <div className="noc">ANTHROPE</div>
                        </div>
                        <ul>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>About</li>
                            <li className="new-hire">
                                <div>Hire With Us</div>
                            </li>
                            <li>Login</li>
                        </ul>
                    </div>
                </nav>
                {/* ----------- NAVIGATION BAR COMPLETED---------   */}
                <div className="div-1">
                    <div className="div-1a">
                        <p style={{ fontSize: '38px', fontFamily: '"Puritan", sans-serif' }}> Integrated Automated <br />Accelerated</p>
                        <p style={{ fontSize: '15px', fontFamily: '"Poppins", sans-serif' }}>
                            Find your ideal candidate effortlessly! Share your job requirements, and our advanced algorithms
                            will curate a top-tier list, revolutionizing your hiring process. Join us for the future of
                            recruitment!
                        </p>
                        <div className="div-1b" style={{ marginLeft: '-60px' }}>
                            <div className="btn-div-2" style={{ display: 'flex', flexDirection: 'row' }}>
                                <button type="button" className="btn btn-primary">Create Your ID</button>
                                <button type="button" className="btn btn-light">Learn more</button>
                            </div>
                        </div>
                    </div>
                    <div className="rel">
                        <img className="newrel" src="./Pictures/design.png" style={{
                            width: '56%', /* marginTop: '-127px', */
                            top: 0, right: '0px'
                        }} alt="playButton" />
                        <div className="newimg2" style={{ zIndex: 4 }}>
                            <div style={{ position: 'absolute', right: '400px', top: '154px' }}>
                                <img src="./Pictures/Mobile.png" style={{ width: '100%' }} alt="" />
                            </div>
                            <div>
                                <img src="./Pictures/Web.png" style={{ width: '100%' }} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* .............................. new div in div-1 ................  */}
                <div style={{ padding: '132px' }}>
                    <img src="./Pictures/brand names.png" alt="" />
                </div>
            </div>
            {/* new div started */}
            <div className="divm2">
                <div className="gradient-text">Start with Anthrope</div>
                <div className="divm2b">
                    Anthrope, an Al-driven hiring platform, seeks to transform recruitment by automating candidate <br /> ranking,
                    integrating with ATS, and enhancing overall hiring efficiency while eliminating bias.
                </div>
                <ul className="divm2a">
                    <li>Resume Ranking</li>
                    <li>Video Screening</li>
                    <li>Interview Scheduler</li>
                    <li>Talent Rediscovery</li>
                    <li>Recommendation Engine</li>
                </ul>
                <div className="divm2ba">
                    <div className style={{ color: 'white' }}>.</div>
                </div>
                <div className="divm3">
                    <div>
                        <img src="./Pictures/2.png" alt="" />
                    </div>
                    <div className="divm2ba-1">
                        <div style={{ color: 'white' }} />
                    </div>
                    <div className="divm33">
                        <div style={{ fontWeight: 1000 }}>
                            Explore beyond the standard resume-ranking approach.
                        </div>
                        <div style={{ fontSize: '14px' }}>
                            Anthrope uses advanced algorithms and machine learning to extract, analyze, and rank candidates
                            based on resume information and job relevance.
                        </div>
                        <div className="boxes">
                            <div className="box">
                                <div><img src="./Pictures/tick mark.png" alt="" /></div>
                                <div className style={{ fontWeight: 1000 }}>
                                    Real-time Updates:
                                </div>
                                <div className="ticknew">
                                    Stay informed instantly with live data feeds.
                                </div>
                            </div>
                            <div className="box">
                                <div><img src="./Pictures/tick mark.png" alt="" /></div>
                                <div className style={{ fontWeight: 1000 }}>
                                    Free ATS Integration:
                                </div>
                                <div className="ticknew">
                                    Seamlessly connect with your Applicant Tracking System at no cost.
                                </div>
                            </div>
                            <div className="box">
                                <div><img src="./Pictures/tick mark.png" alt="" /></div>
                                <div className style={{ fontWeight: 1000 }}>
                                    Customizable Filters:
                                </div>
                                <div className="ticknew">
                                    Tailor your search criteria for personalized results..
                                </div>
                            </div>
                            <div className="box">
                                <div><img src="./Pictures/tick mark.png" alt="" /></div>
                                <div className style={{ fontWeight: 1000 }}>
                                    Ranking Algorithm:s:
                                </div>
                                <div className="ticknew">
                                    Employ an advanced system for effective candidate prioritization.
                                </div>
                            </div>
                        </div>
                        <div className>
                            <div className="skybgr">
                                Generative Al enhances resume ranking, using contextual understanding for precise candidate
                                evaluation, optimizing recruitment processes efficiently and effectively.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* new </div> */}
            <div>
                <div>
                    <img src="./Logo/Frame.png" style={{ width: '100%' }} />
                </div>
            </div>
            <div className="lastdiv">
                <div className="lastdiv1">
                    <div className="lastdiv2" />
                    <div style={{ fontSize: '29px', fontWeight: 1000, marginTop: '-61px' }}>Solutions</div>
                    <div className="lastdiv3">
                        <div className="lastkaclass">
                            <img src="./Pictures/thunderbolt.png" style={{ width: '40px' }} alt="" />
                            <div style={{ fontWeight: 1000 }}>
                                Drive an exceptional resume
                            </div>
                            <div className="cross">
                                Generative Al enhances resume ranking, using contextual <br /> understanding for precise candidate
                                evaluation, optimizing <br /> recruitment processes efficiently and effectively.
                            </div>
                        </div>
                        <div className="lastline">
                            <div style={{ color: 'beige' }}> .</div>
                        </div>
                        <div className="lastkaclass">
                            <img src="./Pictures/calender.png" style={{ width: '40px' }} alt="" />
                            <div style={{ fontWeight: 1000 }}>
                                Video screening allows you to cultivate <br /> and uncover new talent.
                            </div>
                            <div className="cross">
                                Generative-Al based BOT video interviews automate candidate <br /> assessments, streamlining
                                hiring
                                processes with advanced Al, <br /> ensuring fair evaluations and efficient recruitment.
                            </div>
                        </div>
                    </div>
                    {/* ....................................... */}
                    <div style={{ height: '1px', width: '100%', backgroundColor: '#917676' }}>
                        <div style={{ color: 'aliceblue' }}>.</div>
                    </div>
                    <div className="lastdiv3">
                        <div className="lastkaclass">
                            <img src="./Pictures/thunderbolt.png" style={{ width: '40px' }} alt="" />
                            <div style={{ fontWeight: 1000 }}>
                                Interview Scheduling Specialist orchestrates <br /> seamless meetings
                            </div>
                            <div className="cross">
                                Generative Al interview scheduleroptimizes hiring logistics, <br /> automates scheduling tasks,
                                and enhances candidate <br /> experience, streamlining the recruitment process efficiently..
                            </div>
                        </div>
                        <div className="lastkaclass">
                            <img src="./Pictures/calender.png" style={{ width: '40px' }} alt="" />
                            <div style={{ fontWeight: 1000 }}>
                                Talent Rediscovery Engine Unleashed
                            </div>
                            <div className="cross">
                                Activation modules assist companiesin reactivating their data <br /> pool, optimizing future
                                hiring, reducingreliance on <br />
                                job boards and consultants, lowering hiring costs.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage