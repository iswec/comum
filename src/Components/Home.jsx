import React from 'react'
import './Home.css'
import slide1 from '../assets/comum.png';
import slide2 from '../assets/comum-2.png';
import slide3 from '../assets/comum-3.png';
import baw1 from '../assets/lojas/baw-1.webp';
import baw2 from '../assets/lojas/baw-2.webp';

import roupa1 from '../assets/lojas/roupa-1.webp';
import roupa2 from '../assets/lojas/roupa-2.webp';
import roupa3 from '../assets/lojas/roupa-3.webp';
import roupa4 from '../assets/lojas/roupa-4.webp';
import roupa5 from '../assets/lojas/roupa-5.webp';
import roupa6 from '../assets/lojas/roupa-6.webp';
import roupa7 from '../assets/lojas/roupa-7.webp';
import roupa8 from '../assets/lojas/roupa-8.webp';

import promo1 from '../assets/lojas/promo1.webp';
import promo2 from '../assets/lojas/promo2.webp';
import promo3 from '../assets/lojas/promo3.webp';
import promo4 from '../assets/lojas/promo4.webp';






function Home() {
  return (
    <>

{/* começo-do-corrossel */}
      <div id="comumSlide" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide1} className="d-block" alt="slide-1"/>
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block" alt="slide-2"/>
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block" alt="slide-3"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#comumSlide" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#comumSlide" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Próxima</span>
        </button>
      </div>
{/* fim-do-corrossel */}

{/* começo-img-produtos */}
        <div className="container mb-4 mt-4">
          <div class="row row-cols-2 row-cols-md-12 g-4">
            <div div class="col">
              <div className=''>
                <img src={baw1} width="100%" alt="1" />
              </div>
            </div>
            <div div class="col">
              <div className=''>
                <img src={baw2} width="85.5%" alt="2" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div class="row row-cols-2 row-cols-md-4 g-4 mb-4">
            <div div className="col">
              <div className="card border-0 ">
                <img src={roupa1} alt="3" />
                <div className='small p-1'>
                <span>CAMISETA MC REGULAR REVIVAL STATION</span>
                <div>
                  <span><b>6x 34,99 /</b> <b><del>R$ 359,99</del></b> <b className='text-warning'>R$ 209,00</b></span>
                </div>
                </div>
                
              </div>
            </div>
            <div div className="col">
              <div className="card border-0 ">
                <img src={roupa2} alt="4" />
                <div className='small p-1'>
                <span>CAMISETA MC REGULAR REVIVAL STATION</span>
                <div>
                  <span><b>6x 34,99 /</b> <b><del>R$ 359,99</del></b> <b className='text-warning'>R$ 209,00</b></span>
                </div>
                </div>
              </div>
            </div>
            <div div className="col">
              <div className="card border-0 ">
                <img src={roupa3} alt="5" />
                <div className='small p-1'>
                <span>CAMISETA MC REGULAR REVIVAL STATION</span>
                <div>
                  <span><b>6x 34,99 /</b> <b><del>R$ 359,99</del></b> <b className='text-warning'>R$ 209,00</b></span>
                </div>
                </div>
              </div>
            </div>
            <div div className="col">
              <div className="card border-0 ">
                <img src={roupa4} alt="5" />
                <div className='small p-1'>
                <span>CAMISETA MC REGULAR REVIVAL STATION</span>
                <div>
                  <span><b>6x 34,99 /</b> <b><del>R$ 359,99</del></b> <b className='text-warning'>R$ 209,00</b></span>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
{/* fim-img-produtos */}


{/* começo-img-produtos */}
        <div className="container">
          <div class="row row-cols-2 row-cols-md-4 g-4 mb-4">
            <div div className="col">
              <div className="card border-0 ">
                <img src={roupa5} alt="3" />
                <div className='small p-1'>
                <span>CAMISETA MC REGULAR REVIVAL STATION</span>
                <div>
                  <span><b>6x 34,99 /</b> <b><del>R$ 359,99</del></b> <b className='text-warning'>R$ 209,00</b></span>
                </div>
                </div>
                
              </div>
            </div>
            <div div className="col">
              <div className="card border-0 ">
                <img src={roupa6} alt="4" />
                <div className='small p-1'>
                <span>CAMISETA MC REGULAR REVIVAL STATION</span>
                <div>
                  <span><b>6x 34,99 /</b> <b><del>R$ 359,99</del></b> <b className='text-warning'>R$ 209,00</b></span>
                </div>
                </div>
              </div>
            </div>
            <div div className="col">
              <div className="card border-0 ">
                <img src={roupa7} alt="5" />
                <div className='small p-1'>
                <span>CAMISETA MC REGULAR REVIVAL STATION</span>
                <div>
                  <span><b>6x 34,99 /</b> <b><del>R$ 359,99</del></b> <b className='text-warning'>R$ 209,00</b></span>
                </div>
                </div>
              </div>
            </div>
            <div div className="col">
              <div className="card border-0 ">
                <img src={roupa8} alt="5" />
                <div className='small p-1'>
                <span>CAMISETA MC REGULAR REVIVAL STATION</span>
                <div>
                  <span><b>6x 34,99 /</b> <b><del>R$ 359,99</del></b> <b className='text-warning'>R$ 209,00</b></span>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
{/* fim-img-produtos */}




{/* começo-imgCorpo-produtos */}
<div className="container mb-4 mt-4">
<div className="container-fluid">
      <div className="row">
        {/* Divisão da parte esquerda */}
        <div className="col-lg-8 ps-0">
          {/* Conteúdo da parte esquerda */}
          <div className="left-content">
          <div div className="col">
              <div className="card border-0">
                <img className='imagens-promo'  src={promo3} alt="6" />
              </div>
            </div>
          </div>
        </div>

        {/* Divisão da parte direita */}
        <div className="col-lg-4 pe-0">
          {/* Conteúdo da parte direita */}
          <div className="right-content">
          <div div className="col">
              <div className="card border-0">
                <img className='imagens-promo2' src={promo1} alt="7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
{/* fim-imgCorpo-produtos */}

{/* começo-imgCorpo2-produtos */}
<div className="container mb-4 mt-4">
<div className="container-fluid">
      <div className="row">
        {/* Divisão da parte esquerda */}
        
        {/* Divisão da parte direita */}
        <div className="col-lg-4 ps-0">
          {/* Conteúdo da parte direita */}
          <div className="right-content">
          <div div className="col">
              <div className="card border-0">
                <img className='imagens-promo2'  src={promo2} alt="7" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-8 pe-0">
          {/* Conteúdo da parte esquerda */}
          <div className="left-content">
          <div div className="col">
              <div className="card border-0">
                <img className='imagens-promo'  src={promo4} alt="6" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
{/* fim-imgCorpo2-produtos */}

  </>
  )
}

export default Home
