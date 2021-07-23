import React,{Fragment} from 'react';
import {Container} from 'react-bootstrap';
import Information from './info';
import Wave from '../media/wave.svg';
import Lower from '../media/lower.svg';
export default function HomePage () {
  return (
    <Fragment>
      <Container>
      <div className="box">
          <div className="heading">
            <h5> EMBARK ON THE NEW <span className="highlight">COMMUNITY </span>DRIVEN PROJECT<br/>
            <span className="spacer">Join the AIRDROP and participate in the Exclusive Public Sales Lottery!</span>
            </h5>
            <span style={{color: "#0CEBFC"}} className="winning">1,000,000 USD is waiting for you</span>
          </div>
   <div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="main-timeline">
                <div className="timeline">
                    <p className="timeline-content">
                        <div className="timeline-icon"><i className="fa fa-globe"></i></div>
                        <div className="timeline-year">1</div>
                        <h3 className="title">Verify your Wallet</h3>
                        <p className="description">
                           Your wallet:
                        </p>
                    </p>
                </div>
                <div className="timeline">
                    <p className="timeline-content">
                        <div className="timeline-icon"><i className="fa fa-rocket"></i></div>    
                        <div className="timeline-year">2</div>
                        <h3 className="title">Connect Telegram</h3>
                        <p className="description">
                           Connected to:
                        </p>
                    </p>
                </div>
              <div className="timeline">
                    <p className="timeline-content">
                        <div className="timeline-icon"><i className="fa fa-rocket"></i></div>    
                        <div className="timeline-year">3</div>
                        <h3 className="title">Connect Email</h3>
                        <p className="description">
                           Your email:
                        </p>
                    </p>
                </div>
              <div className="timeline">
                    <p className="timeline-content">
                        <div className="timeline-icon"><i className="fa fa-rocket"></i></div>    
                        <div className="timeline-year">4</div>
                        <h3 className="title">Awaiting lottery result...</h3>
                        <p className="description">
                           Lottery results not yet drawn. Come back later to see if you have won!
                        </p>
                    </p>
              </div>
            </div>
        </div>
    </div>
</div>
</div>
    <Information />
      </Container>
      <img src={Wave} />
      <img src={Lower} />
    </Fragment>
    )
}
