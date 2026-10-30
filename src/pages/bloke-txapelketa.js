import React from 'react';


import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';

import kartela from '../assets/images/bloke-txapelketa-2026.jpg';

const RokodromoaPage = () => (
  <Layout>
    <Header />
    
    <section id="bloke-txapelketa" className="projects-section">
      <div className="container">
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <h2>Bloke txapelketa 2026</h2>
        </div>
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={kartela} alt="Gazteen bloke txapelketa herrikoia 2026" />
          </div>
          <div className="col-lg-6">
            <div className="bg-white text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                <h3>Izen ematea</h3>
                <ul>
                  <li>Epea: Azaroak 24</li>
                  <li>Bete datuak <a href="https://labur.eus/bloke-txapelketa-2026">hemen</a></li>
                  <li>Adina: 2011tik aurrerakoak</li>
                  <li>Izen emate prezioa:
                      <ul>
                        <li>Ez bazkideak 18€</li>
                        <li>Bazkideak 15€</li>
                      </ul>  
                  </li>
                  <li>Bazkaria aukeran:
                    <ul>
                      <li>15€ pertsonako </li>
                      <li>PLAZA MUGATUAK DAUZKAGU</li>
                    </ul>
                  </li>
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
