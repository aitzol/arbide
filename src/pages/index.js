import React from 'react';

import Layout from '../components/Layout';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';

import eskalada from '../assets/images/climbing.png';
import txapelketa from '../assets/images/txapelketa.png';


const IndexPage = () => (
  <Layout>
    <Header />
  {/* 
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
        </div>
      </div>
    </header>
*/}
    <section id="taldea" className="projects-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">    
            <h2 className="text-black mb-4">{config.heading}</h2>
            <p className="text-black-50">
              Arbide eskalada taldea 2021ean sortu zen Ondarroan dagoen eskalada 
              zaletasunarentzako baliabide egokiak sortu eta eskaintzeko asmoarekin.
            </p>
          </div>
        </div>
        <img src={eskalada} className="img-fluid" alt="" />
      </div>
    </section>

   
    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
