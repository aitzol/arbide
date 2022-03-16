import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

import SocialLinks from '../components/SocialLinks';

import bgRokodromoa1 from '../assets/images/rokodromoa1.jpeg';

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
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={bgRokodromoa1} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Idatziguzu</h4>
                  <p className="mb-0 text-white-50">
                  arbieskalada@gmail.com
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
    {/*}
    <section id="kontaktua" className="projects-section">
      <div className="container">
       <ContactForm />
      </div>
    </section>
*/}
    <SocialLinks />
    <Footer />
    </Layout>
);
export default KontaktuaPage;