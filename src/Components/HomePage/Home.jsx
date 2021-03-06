import React, { useEffect } from 'react';
import styles from "./Home.module.css"
import ScrollableTabsButtonForce from './Slider';
import Grid from '@material-ui/core/Grid';



export function HomePage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    return (
        <div className={styles.container}>
            <div className={styles.forms}>
                <div style={{marginRight: "10px"}}>
                    <div className={styles.formsContainer}>
                        <ScrollableTabsButtonForce />
                    </div>
                </div>
            </div>

             <div className={styles.flex}> 

             <div className={styles.showbox}>
        <div className={styles.imgweb}>
                <img alt className={styles.imgshow} src="https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_FitForYou_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh" />
                <h3 className={styles.texthead}>Find your perfect trip</h3> 
            </div>
            <p> Plan a trip for the whole family—from family travel tips to family-friendly filters, our tools make it easy.</p>
                
            </div> 
            <div className={styles.showbox}>
        <div className={styles.imgweb}>
                <img alt className={styles.imgshow} src="https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_Transparency_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh" />
                <h3 className={styles.texthead}>Book with flexibility</h3> 
            </div>
            <p> Looking for a change of scenery, but want something flexible? With free cancellation on most hotels, you can book with peace of mind.</p>
                
            </div> 

            <div className={styles.showbox}>
        <div className={styles.imgweb}>
                <img alt className={styles.imgshow} src="https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_GotYourBack_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh" />
                <h3 className={styles.texthead}>We've got your back</h3> 
            </div>
            <p>Need more help along your journey? We offer 24/7 support on social and through virtual agents onsite.</p>
                
            </div> 






                </div> 
            




            <div className={styles.info1}>

            

                <div className={styles.info1InnerDiv}>
                    <div style={{ width: '50%' }}>
                        <h3 className={styles.info1Heading}>All-inclusive resorts </h3>
                        <p className={styles.info1Para}>Think of nothing beyond having a great time with your family</p>
                        <button className={styles.info1Btn}>View deals</button>
                    </div>
                </div>
                <div className={styles.info1InnerDiv1}>
                    <div style={{ width: '50%' }}>
                        <h3 className={styles.info1Heading}>Last minute getaways</h3>
                        <p className={styles.info1Para}>Celebrate the moment with an unexpected getaway</p>
                        <button className={styles.info1Btn}>View deals</button>
                    </div>
                </div>
            </div>
           
            <div className={styles.info2}>
                <Grid container>
                    <Grid item xs={12} sm={8}>
                        <div style={{ border: "1px solid #c7c7c7", borderRadius: "10px", background: "white" }}>
                            
                            
                        </div>

                    </Grid>
                    <Grid xs={12} sm={4}>
                        <div>
                            <div className={styles.info2Right} style={{ marginBottom: "10px" }}>
                                <div className={styles.info2RightImg1}></div>
                                <div style={{ width: "70%"}}>
                                    <h2>Looking for a great hotel deal?</h2>
                                    <p>Book a hotel under $99</p>
                                </div>
                            </div>
                            <div className={styles.info2Right}>
                                <div className={`${styles.info2RightImg1} ${styles.info2RightImg2}`}></div>
                                <div style={{ width: "70%"}}>
                                    <h2>Vacation Packages Under $400</h2>
                                    <p>Book your flight and hotel together, and together, we can make it happen.</p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className={styles.info3}>
                <div>
                    <h2 className={styles.info3Heading}>Seize deals on exactly the trip you need</h2>
                </div>
                <div>
                    <Grid container style={{ width: '100%' }}>
                        <Grid item xs={12} sm={3}>
                            <div className={styles.info3BgImg1}>
                                <h3>Fabulous family getaways</h3>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <div className={styles.info3BgImg2}>

                                <h3>Sunny beach vacations</h3>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <div className={styles.info3BgImg3}>
                                <h3>Last Minute getaways</h3>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <div className={styles.info3BgImg4}>
                                <h3>Carefree all-inclusive resorts</h3>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <h2 className={styles.info3Heading}>Featured offers</h2>
                </div>
                <div className={styles.infoFeaturedImg}>
                    <div className={styles.infoFeaturedOfferDetails}>
                        <h3>Family vacation deals</h3>
                        <p>Traveling now or planning a trip for later? Let us help.</p>
                    </div>
                </div>
                <div>
                    <h2 className={styles.info3Heading}>What’s stopping you from Seizing Your Someday? Travelocity is here to help.</h2>
                </div>
                <div className={styles.infoVideo}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ItS8X0SjT4s" title="YouTube video player" allowFullScreen></iframe>
                </div>
              
            </div> 
        </div>
    );
}







