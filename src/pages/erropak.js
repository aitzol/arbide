import React from 'react';
import { Link } from "gatsby"

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';


const RokodromoaPage = () => (
  <Layout>
    <Header />
    
    <section id="rokodromoa" className="projects-section">
      <div className="container">
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <h2>Erropak</h2>
          <p>Pediduk preparaten gabiz eta datorren martizena eta eguenin  (maiatzk 21 eta 23) 17:30 - 18:30</p>
          <p>lokalin eongo ga jasoteko</p>          
          <p>
            <ol>
              <li>Edozein zalantza baakazue idatzi <a href="mailto:arbideskalada@gmail.com">arbideskalada@gmail.com</a> eta ahal bezain bixkor erantzungorou (pazientzixa bixkat mesedez :) )</li>
            </ol>
          </p>
        </div>
      </div>

      
    
    </section>
    <SocialLinks />
    <Footer />
    </Layout>
);
export default RokodromoaPage;