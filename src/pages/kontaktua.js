import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

import SocialLinks from '../components/SocialLinks';

import bgRokodromoa from '../assets/images/rokodromoa.jpg';
import bgRokodromoa1 from '../assets/images/rokodromoa1.jpeg';

const KontaktuaPage = () => (
  <Layout>
    <Header />
    <header className="normhead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">Gurekin harremanetan jartzeko</h1>
        </div>
      </div>
    </header>
    <section id="erropak" className="projects-section">
      <div className="container">
       <ContactForm />
      </div>
    </section>
    <SocialLinks />
    <Footer />
    </Layout>
);
export default KontaktuaPage;