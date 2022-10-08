import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../komponen/navbar.js';
import slider1 from '../images/pexels-photo-459225.jpeg';
import card1 from '../images/pexels-photo-236047.jpeg';
import card2 from '../images/pexels-photo-371589.jpeg';
import card3 from '../images/pexels-photo-1131458.jpeg';
import card4 from '../images/pexels-photo-257360.jpeg';

export default function Home() {
  return (
    
  <div>
    <Header/>
      <div class="container-fluid">
        {/* slider */}
          <div class="row d-flex justify-content-around">
            <div id="carouselExampleControls" class="carousel w-50 slide" data-bs-ride="carousel" >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <Image
                    alt="slider1"
                    src={slider1}
                    layout="responsive"
                    class="d-block w-100"
                  />
                </div>
                <div class="carousel-item">
                <Image
                    alt="slider2"
                    src={card1}
                    layout="responsive"
                    class="d-block w-100"
                  />
                </div>
                <div class="carousel-item">
                <Image
                    alt="slider1"
                    src={card2}
                    layout="responsive"
                    class="d-block w-100"
                  />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        {/* slider */}
        <div class="row d-flex justify-content-around">
            <div class="card py-3" style={{ width: '18rem' }}>
              <Image src={card1}/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div class="card py-3" style={{ width: '18rem' }}>
              <Image src={card2}/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div class="card py-3" style={{ width: '18rem' }}>
              <Image src={card3}/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div class="card py-3" style={{ width: '18rem' }}>
              <Image src={card4}/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
        </div>
         
      </div>
  </div>
  )
}
