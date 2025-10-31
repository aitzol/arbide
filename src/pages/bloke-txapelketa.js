import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';

import kartela from '../assets/images/txapelketa-herrikoia-2.jpg';

const RokodromoaPage = () => (
  <Layout>
    <Header />
    
    <section id="bloke-txapelketa" className="projects-section">
      <div className="container">
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <h2>Bloke txapelketa herrikoia 2025/11/29</h2>
        </div>
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={kartela} alt="Bloke txapelketako izen emate kartela" />
          </div>
          <div className="col-lg-6">
            <div className="bg-white text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                <h3>Izen ematea</h3>
                <ul>
                  <li>Epea: Azaroak 25</li>
                  <li>Bete datuak <a href="https://labur.eus/txapelketa-herrikoia-2025-11-29">hemen</a></li>
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