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
          <h2>Erropak eskatzeko aukera zabalik</h2>
          <p>Arbideko mateixal barrixe nahibazu ontxe akazu aukeri erosteko! Ongun nobedadikin gatoz, kamiseta eta sudaderetaz gain, praka desberdinak, buff-ak eta motxili erosteko aukeri eongora ongo urtin</p>
          <p>Martxoak 31 arte iratxe eongo da erropak eskatzeko aukeri. Erropak egun hortatik aurrea eskatuko gakoz hornitzailiai eta jasoten douzenin abisakotzuau bille etorteko</p>          
          <p><strong>Eskarixe etxeko</strong>
            <ol>
              <li>Sartu <Link to="https://arbide.atwebpages.com/">dendako webgunin</Link></li>
              <li>Produktu desberdinak aukeratu (saskira gehitu)</li>
              <li>Erosketa burutu botoiai emon.</li>
              <li>Kontaktu errezteko datu guztik sartu.</li>
              <li>Transferentzixa bidez ein ordainketi (ezta beste ordainketa aukeraik).
                <ul>
                  <li>Eskari kodea eta izen abizenak jarri transferentzixin deskribapenin</li>                
                  <li>Eskari kode: Eskarixe etxen danin datutan jarritako korreo elektronikure aiakoatzun kode edo eskari zenbakixe.</li>
                  </ul>
              </li>
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