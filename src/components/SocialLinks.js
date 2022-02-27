import React from 'react';
import config from '../../config';
import udala from '../assets/images/ondarroa_armarria_logo.png';
import eika from '../assets/images/eika.svg';
import kide from '../assets/images/kide.png';

export default function SocialLinks() {
  return (
    <section className="contact-section bg-black">
      <div className="container">
      <h4  className="text-white">Laguntzaileak</h4>
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <img className="img-fluid" src={udala} alt="Ondarroako udalaren logoa" />
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <img className='img-fluid' src={kide} alt="Kide enpresaren logoa"/>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <img className='img-fluid' src={eika} alt="Eika enpresaren logoa"/>
              </div>
            </div>
          </div>
        </div>

        <div className="social d-flex justify-content-center">
          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <a key={url} href={url} className={`mx-2`}>
                <i className={`fab ${icon}`}></i>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
