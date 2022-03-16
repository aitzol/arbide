import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

import SocialLinks from '../components/SocialLinks';

const KontaktuaPage = () => (
  <Layout>
    <Header />
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">Kontaktua</h1>
        </div>
      </div>
    </header>
    <section id="kontaktua" className="projects-section">
      <div className="container">
      <ContactForm />
      </div>
    </section>
    
    <SocialLinks />
    <Footer />
    </Layout>
);
export default KontaktuaPage;