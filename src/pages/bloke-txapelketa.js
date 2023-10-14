import React from 'react';
import { Link } from "gatsby"

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';

import kartela from '../assets/images/bloke-txapelketa-2.jpeg';
import gaztekartela from '../assets/images/gazte-kartela.jpeg';

const RokodromoaPage = () => (
  <Layout>
    <Header />
    
    <section id="bloke-txapelketa" className="projects-section">
      <div className="container">
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <h2>Bloke txapelketa herrikoiak</h2>
        </div>
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
          <a href="https://labur.eus/arbide-2-bloke-txapelketa">
            <img className="img-fluid" src={kartela} alt="2. bloke txapelketako izen emate kartela" />
            </a>
          </div>
          <div className="col-lg-6">
            <div className="bg-white text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                <h3>Nagusien II. Bloke txapelketa herrikoia</h3>
          <p>2023ko urriak 29an ospatuko da Arbideko bigarren bloke txapelketa herrikoia. <a href="https://labur.eus/arbide-2-bloke-txapelketa">Izen ematea</a> urriak 
            17 bitarte zabalik egongo da.
          </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={gaztekartela} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-white text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                <h3>Gazteen I. Bloke txapelketa herrikoia</h3>
              <p>2023ko azaroak 11an ospatuko da Arbideko lehen gazte bloke txapelketa herrikoia. <a href="https://labur.eus/gazteen-bloke-txapelketa">Izen ematea</a> urriak 
            30 bitarte zabalik egongo da.
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