import React from 'react';

import Layout from '../components/Layout';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';

import eskalada from '../assets/images/climbing.png';


import bgRokodromoa from '../assets/images/rokodromoa.jpg';
import bgRokodromoa1 from '../assets/images/rokodromoa1.jpeg';
import kontaktua from '../assets/images/eskalada.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
        </div>
      </div>
    </header>

    <section id="taldea" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">Eskalada taldea</h2>
            <p className="text-white-50">
              Arbide eskalada taldea 2021ean sortu zen Ondarroan dagoen eskalada 
              zaletasunarentzako baliabide egokiak sortu eta eskaintzeko asmoarekin.
            </p>
          </div>
        </div>
        <img src={eskalada} className="img-fluid" alt="" />
      </div>
    </section>

    <section id="rokodromoa" className="projects-section bg-light">
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
    <section id="contact" className="projects-section bg-light">
      <div class="container">
      <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={kontaktua} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Kontaktua</h4>
              <p className="text-black-50 mb-0">
                Gurekin harremanetan jarri nahi izan ezkero idatzi <strong>arbideskalada@gmail.com</strong> helbidera.
              </p>
            </div>
          </div>
        </div>  
      </div> 
    </section>
    
    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
