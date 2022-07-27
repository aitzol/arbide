import React from 'react';
import { Link } from "gatsby"

import config from '../../config';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';

import bgRokodromoa from '../assets/images/rokodromo_berria_resized.jpg';
import bgRokodromoa1 from '../assets/images/rokodromo_berria1_resized.jpg';
import bgRokodromoa2 from '../assets/images/rokodromo_berria3_resized.jpg';

const RokodromoaPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">Rokodromoa</h1>
        </div>
      </div>
    </header>
    <section id="rokodromoa" className="projects-section">
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
                  Tamaina handiko rokodromo bat eraiki dugu talde lanean. 
                Ikastaro eta ekintza desberdinak antolatuko dira bertan.
                  </p>
                  
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
                    Eskaladarako prestakuntza burutu ahal izateko gune desberdinak dauzka rokodromoak. Bloke zein iraupeneko eskalada prestatzeko guneak, campus board handia, ...
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={bgRokodromoa2} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Erabilpena</h4>
                  <p className="mb-0 text-white-50">
                    <ul>
                      <li>Bazkidetza</li>
                      <li>Hilabeteko erabiltzaile izatea</li>
                      <li>Ikastaroetan parte hartu</li>
                    </ul>
                    <span>Informazio gehiago behar baduzu <Link to="/kontaktua">jarri gurekin kontaktuan</Link></span>
                  </p>
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
export default RokodromoaPage;