import React from 'react';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import SocialLinks from '../../components/SocialLinks';

import bgRokodromoa from '../../assets/images/rokodromoa.jpg';
import bgRokodromoa1 from '../../assets/images/rokodromoa1.jpeg';

const ErropakPage = () => (
  <Layout>
    <Header />
    <header className="normhead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">Erropak</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            Hemen erropari buruzko testu sarrera    
          </h2>
        </div>
      </div>
    </header>
    <section id="erropak" className="projects-section">
      <div className="container">
        {/*
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={bgRokodromoa} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Rokodromoa</h4>
              <p className="text-black-50 mb-0">
                Taldelanean eraikitzen ari gara tamaina handiko rokodromo bat. 
                Bertan eskainiko dira...
              </p>
            </div>
          </div>
        </div>
        */}
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={bgRokodromoa} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Rokodromoa</h4>
                  <p className="mb-0 text-white-50">
                  Taldelanean eraikitzen ari gara tamaina handiko rokodromo bat. 
                Ikastaro eta ekintza desberdinak antolatuko dira bertan.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={bgRokodromoa1} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Gune desberdinak</h4>
                  <p className="mb-0 text-white-50">
                    Eskalada mota desberdinak entrenatu ahal izateko gune desberdinak dauzka rokodromoak
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <SocialLinks />
    <Footer />
    </Layout>
);
export default ErropakPage;