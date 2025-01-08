import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';

import kartela from '../assets/images/gazte-bloke-2025.jpeg';

const RokodromoaPage = () => (
  <Layout>
    <Header />
    
    <section id="bloke-txapelketa" className="projects-section">
      <div className="container">
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <h2>Gazteen bloke txapelketa herrikoia 2025</h2>
        </div>
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={kartela} alt="2025eko gazte bloke txapelketako izen emate kartela" />
          </div>
          <div className="col-lg-6">
            <div className="bg-white text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                <h3>Izen ematea</h3>
                <ul>
                  <li>Epea: Urtarrilak 31</li>
                  <li>Bete datuak <a href="https://forms.gle/73Cvj3eTc2JVNCEb8">hemen</a></li>
                  </ul>
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