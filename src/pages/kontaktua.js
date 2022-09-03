import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

import SocialLinks from '../components/SocialLinks';
import kontaktua from '../assets/images/eskalada.jpg';
const KontaktuaPage = () => (
  <Layout>
    <Header />
    
    <section id="kontaktua" className="projects-section">
      <div class="container">
      <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={kontaktua} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Kontaktua</h4>
              <p className="text-black-50 mb-0">
              Gurekin kontaktuan jartzeko idatzi <a href="mailto://arbideskalada@gmail.com">arbideskalada@gmail.com</a> helbidera.
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
export default KontaktuaPage;