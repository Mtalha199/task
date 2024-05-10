import React from 'react';
import CommonStripDesign from '../Components/CommonStripDesign';
import HeadingCommon from '../Components/headingCommon';
import ImageSlider from '../Components/ImagesSlider';
const Home = () => {
    return (
        <div className="container mt-5">
            <section>
                <div className='row'>
                    
                    <div className='col-md-6' style={{ paddingTop: "10rem" }}>
                        <h1>Welcome To The Revolution</h1>
                        <p className="lead">Changing the game for <span style={{ color: '#B0D357' }}>film Production</span>   and <span style={{ color: '#B0D357' }}>Ownership</span></p>
                        <p>MovieMint liberates Filmmakers and fans through decentralized funding.</p>
                        <p>Our Blockchain platform seamlessly connects Independent Creators and Passionate Supporters. Filmmakers tokenize projects into NFT "movie shares" that fans can buy and tradel. This raises production funds while retaining full ownership and creative control while fans.</p>
                        <HeadingCommon headingName={"LATEST STORIES"} />
                    </div>
                    <div className='col-md-6'>
                        <div className="d-flex flex-column justify-content-center align-items-center mb-3">
                            <span className=" mb-1" style={{ color: '#B0D357' }} >NFT CAPITAL RAISED</span>
                            <span className="" style={{ color: "black", backgroundColor: "#E2E8F0", borderRadius: "5px", padding: "5px" }}>US $114.74012</span>
                        </div>
                        <CommonStripDesign />
                        <div className="video-container" >
                            <video src="https://staging.api.moviemint.net/uploads/video/admin/video1.mp4" className="img-fluid" autoPlay loop muted>
                                <source src="https://staging.api.moviemint.net/uploads/video/admin/video1.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <CommonStripDesign />

                    </div>
                </div>
                <hr></hr>
            </section>
            <section>
                <div className='row'>
                    <div className='col-6'>
                        <HeadingCommon headingName={"RECENT PROJECTS"} />

                    </div>
                </div>
                <div className='card-container'>
                    <ImageSlider />
                </div>
            </section>
        </div>

    );
};

export default Home;