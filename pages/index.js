import { SSRProvider } from '@react-aria/ssr'
import Head from 'next/head'
import { useState, useEffect, useLayoutEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import HeaderOption2 from '../components/home/Header2'
import PresentationRody from '../components/home/Presentation'
import PresentationValues from '../components/home/PresentationValues'
import OurObjetive from '../components/home/OurObjetive'
import OurServices from '../components/home/OurServices'
import Sentences from '../components/home/Sentences'
import ServiceWorker from '../components/home/ServiceWorker'
import Information from '../components/home/Information'
import Footer from '../components/home/Footer'
import { Nav, Button } from 'react-bootstrap';




export default function Home() {

  useEffect(() => {
    window.onscroll = function() {
      if (document.documentElement.scrollTop <= 100) {
        document.querySelector('.up_GO_sub').classList.add('hide')
        document.querySelector('.up_GO_sub').classList.remove('show')
      } else{
        document.querySelector('.up_GO_sub').classList.add('show')
        document.querySelector('.up_GO_sub').classList.remove('hide')
      }
    }
  })

  function toTop() {
    window.scrollTo(0, 0)
  }

  return (
    <SSRProvider>
      <div className="container-fluid" style={{paddingLeft: "0px", paddingRight: "0px"}}>
        <style type="text/css">
          {`
            .up_GO {
              height: 50px;
              position: sticky;
              top: 85vh;
              z-index: 4;
              text-align: right;
              padding-right: 10px;
            }

            .up_GO_sub {
              display: none;
            }

            .hide {
              display: none;

            }

            .show {
              display: block;
            }

          `}
        </style>
        <Head>
          <title>RODY</title>
          <meta name="description" content="RODY la aplicacion de transporte completa a tus necesidades..." />
          <link rel="icon" href="/favicon.ico" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="true"></link>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Montserrat:wght@300&family=Titillium+Web:wght@200&display=swap" rel="stylesheet"></link>
        </Head>
        
        <HeaderOption2 />
        <div className="up_GO">
          <Nav.Link href="#" className="up_GO_sub" style={{paddingRight: "0px"}}>
            <Button variant="dark" style={{borderRadius: "50%", width: "50px", height: "50px"}} onClick={toTop}>
              <img src="/statics/img/flecha.png" alt="flecha arriba" width="100%" style={{filter: "invert(100%)"}}/>
            </Button>
          </Nav.Link>
        </div>
        <PresentationRody />
        <PresentationValues />
        <OurObjetive />
        <OurServices />
        <Sentences />
        <ServiceWorker />
        <Footer />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
      </div>
    </SSRProvider>
  )
}
