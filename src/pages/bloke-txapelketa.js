import React from 'react';
import { Link } from "gatsby"

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';

import kartela from '../assets/images/bloke-txapelketa-2.jpeg';
import sudGrise from '../assets/images/erropak/sud_grise.png';
import sudBaltza from '../assets/images/erropak/sud_baltza.png';

import kamBaltza from '../assets/images/erropak/kam_baltza.png';
import kamGrise from '../assets/images/erropak/kam_grise.png';
import kamZurixe from '../assets/images/erropak/kam_zurixe.png';
import teknikoZurixe from '../assets/images/erropak/teknikozurixe.png';
import teknikoBaltza from '../assets/images/erropak/teknikobaltza.png';

const RokodromoaPage = () => (
  <Layout>
    <Header />
    
    <section id="bloke-txapelketa" className="projects-section">
      <div className="container">
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <h2>II. Bloke txapelketa herrikoia</h2>
          <p>2023ko urriak 29an ospatuko da Arbideko bigarren bloke txapelketa herrikoia. <a href="https://labur.eus/arbide-2-bloke-txapelketa">Izen ematea</a> urriak 
            17 bitarte zabalik egongo da.
          </p>
          
        </div>
        {/*
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <a href="https://labur.eus/arbide-2-bloke-txapelketa">
            <img className="img-fluid" src={kartela} alt="2. bloke txapelketako izen emate kartela" />
            </a>  
          </div>
  
        </div>
*/}      
      </div>

      
    
    </section>
    <SocialLinks />
    <Footer />
    </Layout>
);
export default RokodromoaPage;