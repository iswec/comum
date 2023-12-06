import React from 'react';
import LogoBranco from '../../assets/logo/logo-branco.png';
import zap from '../../assets/icons/whatsapp.png';
import spotify from '../../assets/icons/spotify.png';
import instagram from '../../assets/icons/instagram.png';
import youtube from '../../assets/icons/youtube.png';
import email from '../../assets/icons/email.png';
import twitter from '../../assets/icons/twitter.png';




function Footer() {
  return (
    <>
        <footer class="footer bg-dark text-light py-4">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="d-flex align-items-center">
                  <i class="bi bi-telephone-fill me-2">
                    <img alt='ico-whatsapp' src={zap} width="30" height="auto" />
                  </i>
                  <div className='row'>
                    <p className="h6 m-0">Contato:</p>
                    <span>11 96432-4267</span>
                  </div>
                </div>
              </div>
              
              <div class="col-md-4 py-2">
                <div class="d-flex justify-content-center">
                  <a href="#" class="me-2 text-light">
                    <i class="bi bi-spotify">
                    <img alt='ico-spotify' src={spotify} width="30" height="auto" />
                    </i>
                  </a>
                  <a href="#" class="me-2 text-light">
                    <i class="bi bi-instagram">
                    <img alt='ico-instagram' src={instagram} width="30" height="auto"/>
                    </i>
                  </a>
                  <a href="#" class="me-2 text-light">
                    <i class="bi bi-youtube">
                    <img alt='ico-youtube' src={youtube} width="30" height="auto"/>
                    </i>
                  </a>
                  <a href="#" class="me-2 text-light">
                    <i class="bi bi-email">
                    <img alt='ico-email' src={email} width="30" height="auto"/>
                    </i>
                  </a>
                  <a href="#" class="text-light">
                    <i class="bi bi-twitter">
                    <img alt='ico-twitter' src={twitter} width="30" height="auto"/>
                    </i>
                  </a>
                </div>
              </div>
              
              
              <div class="col-md-4">
                <div class="d-flex justify-content-end">
                  <img src={LogoBranco} alt="Logo" width="120" height="auto"/>
                </div>
              </div>
            </div>
          </div>
      </footer>
    </>
  )
}

export default Footer
