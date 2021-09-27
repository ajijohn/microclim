import React, { Fragment } from 'react';
import './css/Home.css';
import './vendor/font-awesome/css/font-awesome.min.css';
import './vendor/simple-line-icons/css/simple-line-icons.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import Footer from './Footer.js';
import Navbar from './Navbar.js';

<script crossorigin src="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic"></script>
export default function Home() {
  return (
    <Fragment>
        <Navbar></Navbar>
      <div className="masthead d-flex">
        <div class="container cont1 text-left my-0">
            <h1 class="mb-1">Microclim</h1>
            <h3 class="mb-5">
                <em>Interactive Web/API based service to download microclimate data</em>
            </h3>
            <h5 class="head" >WRF</h5>
            <p class="lead text-justify">We provide microclimatic data for ecological forecasting. The data describe microclimates and vegetation for the past and the future at spatial and temporal resolutions of 36 km (approximately 0.3°) and 1 h, respectively. <a href="http://onlinelibrary.wiley.com/doi/10.1002/ecy.1444/full">Levy <i>et al.</i> (2016)</a> used the <a href="http://www.wrf-model.org/">Weather Research & Forecasting</a> model to downscale published, bias-corrected predictions of a global-circulation model from a resolution of 0.9° latitude and 1.25° (approximately 100 km in latitude and 130 km in longitude). Output from this model was used as input for a microclimate model, which generated temperatures and wind speeds as well as soil temperatures for 1980-1999 and 2080-2099 at various heights, as well as soil temperatures at various depths and shade intensities. We also predicted the percentage of green vegetation and the percentage of shade given the angle of the sun.</p>

            <h5 class="head" >ERA5</h5>
            <p class="lead text-justify">ERA5 is the fifth generation <a href="https://cds.climate.copernicus.eu/toolbox/doc/index.html">ECMWF reanalysis </a>for the global climate and weather for the past 4 to 7 decades. Currently data is available from 1950 to present. Reanalysis combines model data with observations from across the world into a globally complete and consistent dataset using the laws of physics. It is based on the method used by numerical weather prediction centres, where every so many hours (12 hours at ECMWF) a previous forecast is combined with newly available observations in an optimal way to produce a new best estimate of the state of the atmosphere, called analysis, from which an updated, improved forecast is issued. ERA5 provides hourly estimates for a large number of atmospheric, ocean-wave and land-surface quantities.
            </p>

            <h5 class="head" >Aeries</h5>
            <p class="lead text-justify">The <a href="https://www.aerisweather.com/">Aeries Weather</a> is a global weather API. The Endpoints in Aeries Weather refers to the types of data to request, such as a place, observation, forecast or advisory, and will be the basis for any request made to the weather API. The Endpoint used is observations. A day of archived observations is based
                on Midnight - 11:59:59pm local time of the observation station.</p>

            <a class="btn btn-primary btn-xl js-scroll-trigger" href="#services">Below we detail the available microclimate data and access via a web interface and API.</a>
        </div>
      </div>
      <section class="content-section text-white text-center" id="services">
        <div class="container">
            <div class="content-section-heading">
                <h3 class="text-secondar mb-0">Services</h3>
                <h2 class="mb-5">--------</h2>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span class="service-icon rounded-circle mx-auto mb-3">
                <a href="/des" title="Features" target="_self"><i class="icon-notebook icn"></i> </a>
                </span>
                    <h4>
                        <strong>Features</strong>
                    </h4>
                    <p class="text-faded mb-0">Deatiled specifications</p>
                </div>
                <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span class="service-icon rounded-circle mx-auto mb-3">
                <a href="/microclim" title="Web App" target="_self"><i class="icon-pencil icn"></i></a>
                </span>
                    <h4>
                        <strong>Web App</strong>
                    </h4>
                    <p class="text-faded mb-0">Interactive filtering</p>
                </div>
                <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
                <span class="service-icon rounded-circle mx-auto mb-3">
                <a href="/apidoc" title="API Docs" target="_blank"><i class="icon-anchor icn"></i></a>
                </span>
                    <h4>
                        <strong>API Docs</strong>
                    </h4>
                    <p class="text-faded mb-0">Availiable in R and Python
                        <i class="fa fa-heart"></i></p>
                </div>
                <div class="col-lg-3 col-md-6">
                <span class="service-icon rounded-circle mx-auto mb-3">
                <a href="/usage" title="Usage" target="_self"><i class="icon-compass icn"></i></a>
                </span>
                    <h4>
                        <strong>Usage</strong>
                    </h4>
                    <p class="text-faded mb-0">Microclim usage and Client libraries</p>
                </div>
            </div>
        </div>
    </section>
    <section class="callout content-section bg-primary text-white" id="action">
        <div class="container text-center">
            <h2 class="mb-4">Ready to explore?</h2>
            <a href="/microclim" class="btn btn-xl btn-light mr-4">Try it now!</a>
            <a href="https://github.com/ajijohn/ebm" class="btn btn-xl btn-dark">Take me to the source!</a>
        </div>
    </section>
    <Footer></Footer>
    <a class="scroll-to-top rounded js-scroll-trigger" href="#page-top">
        <i class="fa fa-angle-up"></i>
    </a>
    </Fragment>
  )
}
