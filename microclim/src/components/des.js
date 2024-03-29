import React, { Fragment } from 'react';
import './vendor/font-awesome/css/font-awesome.min.css';
import './vendor/simple-line-icons/css/simple-line-icons.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import Footer from './Footer.js';
import './css/des.css';

export default function des() {
  return (
    <Fragment>
        <div>
            <section class="bg-light" id="dspec">
                <div class="container-fluid">
                    <div class="row flex-xl-nowrap">
                        <main class="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
                            <h2>Detailed Specifications</h2>
                            <h3>Data dimensions and options</h3>
                              <div class="col-lg-12">
                                <div class="panel panel-info">
                                    <div class="panel-heading">Extent and resolution</div>
                                    <p class="lead text-justify">The data span North America at a resolution of 36km (approximately 0.3°).  The domain is centered at 38.3°N, 99.6°W, with a grid dimension of 130 x 200 points. </p>
                                </div>

                                <div class="panel panel-info">
                                    <div class="panel-heading">Time period</div>
                                    <p class="lead text-justify">Hourly data are available for a past (1980-1999) and future (2080-2099) time period. </p>
                                </div>

                                <div class="panel panel-info">
                                    <div class="panel-heading">Shade and height</div>
                                    <p class="lead text-justify">Shade (%): 0, 25, 50, 75, 100 <br />
                                        Height or depth (m): 0.03, 0.06, 0.09, 0.12, 0.15, 0.18, 0.21, 0.24, 0.27, 0.30, 0.48, 0.66, 0.84, 1.02, 1.20, 1.38, 1.56, 1.74, 1.92    
                                    </p>
                                </div>

                                <div class="panel panel-info">
                                    <div class="panel-heading">Aggregation</div>
                                    <p class="lead text-justify">Data is available at intervals of 1hr,  6hrs,  12hrs, daily, monthly, or yearly.  Users can select among the following aggregation metrics across time: instantaneous, max, min, mean.  We use the following conventions for time aggregation:</p>
                                    <ul class="list-group h5">
                                        <li class="list-group-item">For 6-hr data, the segments of time are 1-6, 7-12, 13-18, 19-00 hrs</li>
                                        <li class="list-group-item">For 12-hr data, the segments of time are 1-12, 13-00 hrs</li>
                                        <li class="list-group-item">A day begins in hour=1 and ends in hour=0 of the next day.</li>
                                        <li class="list-group-item">For monthly data, a month begins in day 1 1:00am and ends at the zero hour of the next month.</li>
                                        <li class="list-group-item">Instantaneous values are at the beginning of a segment.</li>
                                    </ul>
                                </div> <br /><br />
                            </div>
                            <h3>Variable specifications for WRF</h3>
                            <div class="panel panel-info">
                                <p class="lead text-justify">The available variables correspond to those of the Weather Research & Forecasting (WRF) model and the additional microclimate model. Additional details are provided in Levy et al. (2016). All variables include a time dimension and some variables include additional dimensions of height or depth above or below the surface and shade level. </p>
                            </div>
                            <div class="col-lg-12">
                                <table class="table h5 text-justify">
                                    <thead> <tr> <th>#</th> <th>Variable</th> <th>Description</th> <th>Units</th><th>Dimensions</th> <th>Source</th> </tr> </thead>
                                    <tbody>
                                    <tr> <th>1</th> <td>ALBEDO</td> <td>Surface albedo</td> <td>dec.%</td><td>time</td> <td>WRF</td> </tr>
                                    <tr> <th>2</th> <td>BGAP</td> <td>Gap between canopies (the fraction of area where visible solar radiation can reach the ground)</td> <td>dec. %</td><td>time</td> <td>WRF</td> </tr>
                                    <tr> <th>3</th> <td>FVEG</td> <td>Fraction of green vegetation </td> <td>dec. %</td><td>time</td> <td>WRF</td> </tr>
                                    <tr> <th>4</th> <td>GLW</td> <td>Downward flux of near-infrared radiation </td> <td>W m<sup>-2</sup></td><td>time</td> <td>WRF</td> </tr>
                                    <tr> <th>5</th> <td>ISNOW</td> <td>Number of snow layers  </td> <td>time</td> <td>WRF</td> </tr>
                                    <tr> <th>6</th> <td>SWDOWN</td> <td>Downward flux of visible radiation</td><td>W m<sup>-2</sup></td><td>time</td> <td>WRF</td> </tr>
                                    <tr> <th>7</th> <td>TAH</td> <td>Air temperature in canopy</td><td>K</td><td>time</td> <td>WRF</td> </tr>
                                    <tr> <th>8</th> <td>Tair</td> <td>Air temperature</td><td>K</td><td>time, shade, height</td> <td>Microclimate</td> </tr>
                                    <tr> <th>9</th> <td>Tsurface</td> <td>Surface temperature</td><td>K</td><td>time, shade</td> <td>Microclimate</td> </tr>
                                    <tr> <th>10</th> <td>Tsoil</td> <td>Soil/snow temperature</td><td>K</td><td>time, shade, depth</td> <td>Microclimate</td> </tr>
                                    <tr> <th>11</th> <td>TV</td> <td>Temperature of a leaf in the vegetation  </td><td>K</td><td>time</td> <td>WRF</td> </tr>
                                    <tr> <th>12</th> <td>UV</td> <td>Wind velocity</td><td>m s<sup>-1</sup> </td><td>time, height</td> <td>Microclimate</td> </tr>
                                    <tr> <th>13</th> <td>WGAP</td> <td>Gap within the canopy (the fraction of visible solar radiation that can reach the ground through the canopy) </td><td>dec. %  </td><td>time</td> <td>WRF</td> </tr>
                                    <tr> <th>14</th> <td>TG</td> <td>Temperature of bulk ground  </td><td>K</td><td>time</td> <td>WRF</td> </tr>
                                    <tr> <th>15</th> <td>T2</td> <td>Temperature above bare surface (2-m height)  </td><td>K</td><td>time</td> <td>WRF</td> </tr>
                                    <tr> <th>16</th> <td>QAIR</td> <td>Specific humidity at surface (2-m height) </td><td>kg kg<sup>-1</sup> </td><td>time</td> <td>WRF</td> </tr>
                                    <tr> <th>17</th> <td>SMOIS</td> <td>Sbnoil water </td><td>m<sup>3</sup>/m<sup>3</sup> </td><td>time, height</td> <td>WRF</td> </tr>
                                    </tbody>
                                </table>
                            </div>
                            <h3>Variable specifications for ERA5</h3>
                            <div class="panel panel-info">
                                <p class="lead text-justify">The available variables correspond to those of the Climate Data Store(CDS) Toolbox. All variables include a time dimension. The duration between the start date and the end date are limited to 2 years.</p>
                            </div>
                            <div class="col-lg-12">
                            <table class="table h5 text-justify">
                                <thead> <tr> <th>#</th> <th>Variable</th> <th>Description</th> <th>Units</th><th>Dimensions</th> <th>Source</th> </tr> </thead>
                                <tbody>
                                <tr> <th>1</th> <td>100m u-component of wind</td> <td> Horizontal speed of air moving towards the east, at a height of 100 metres above the surface of the Earth</td> <td>ms<sup>-1</sup></td><td>time</td> <td>ERA5</td> </tr>
                                <tr> <th>2</th> <td>2m Temperature</td> <td> Temperature of air at 2m above the surface of land, sea or inland waters </td> <td>K</td><td>time</td> <td>ERA5</td> </tr>
                                <tr> <th>3</th> <td>Skin Temperature</td> <td> Temperature of the surface of the Earth </td> <td>K</td><td>time</td> <td>ERA5</td> </tr>
                                <tr> <th>4</th> <td>Soil Temperature</td> <td> Temperature of the soil at level 1</td> <td>K</td><td>time</td> <td>ERA5</td> </tr>
                                <tr> <th>5</th> <td>Volumetric Soil water layer 1</td> <td> Volume of water in soil layer 1 (0 - 7cm, the surface is at 0cm) </td> <td>m<sup>3</sup> m<sup>-3</sup></td> <td>time</td> <td>ERA5</td> </tr>
                                <tr> <th>6</th> <td>High Vegetation Cover</td> <td> Fraction of the grid box that is covered with vegetation </td><td>Dimensionless</td><td>time</td> <td>ERA5</td> </tr>
                                <tr> <th>7</th> <td>Evaporation</td> <td>Accumulated amount of water that is evaporated from the Earth's surface</td><td>m of water equivalent</td><td>time</td> <td>ERA5</td> </tr>
                                <tr> <th>8</th> <td>Potential Evaporation</td> <td>Amount of evaporation, under existing atmospheric conditions</td><td>m</td><td>time</td> <td>ERA5</td> </tr>
                                <tr> <th>9</th> <td>Surface solar radiation downwards</td> <td>Amount of solar radiation that reaches a horizontal plane at the surface of the Earth</td><td>J m<sup>-2</sup></td><td>time</td> <td>ERA5</td> </tr>
                                </tbody>
                            </table>
                        </div>
                        <h3>Variable specifications for Aeris</h3>
                        <div class="panel panel-info">
                            <p class="lead text-justify">The available variables correspond to those of the Aeris Weather. All variables include a time dimension. The duration between the start date and the end date are limited to 2 years.</p>
                        </div>
                        <div class="col-lg-12">
                            <table class="table h5 text-justify">
                                <thead> <tr> <th>#</th> <th>Variable</th> <th>Description</th> <th>Units</th><th>Dimensions</th> <th>Source</th> </tr> </thead>
                                <tbody>
                                <tr> <th>1</th> <td>Temperature</td> <td>Temperature in Celsius</td> <td>&#8451;</td><td>time</td> <td>aeris</td> </tr>
                                <tr> <th>2</th> <td>Solar Radiation</td> <td>Solar radiation as observed from station </td> <td>WM<sup>2</sup></td><td>time</td> <td>aeris</td> </tr>
                                <tr> <th>3</th> <td>Wind Speed</td> <td>Speed of wind</td> <td>KPH</td><td>time</td> <td>aeris</td> </tr>
                                <tr> <th>4</th> <td>Wind Direction</td> <td>Direction of Wind</td> <td>cardinal coordinates</td><td>time</td> <td>aeris</td> </tr>
                                </tbody>
                            </table>
                        </div>
                        <h3>Output specifications</h3>
                            <div class="col-lg-12">
                                <div class="panel panel-info">
                                    <div class="panel-heading">Output Format for WRF</div>
                                    <p class="lead text-justify">We are currently serving the microclimate data in either NetCDF or CSV format. We use the following naming convention for output:<br/><br />
                                    [varname]_[shade]_[height/depth]_[interval]_[aggregation]_[startdate]_[enddate]_[creation time].[nc/csv] <br />
                                        Shade and height/depth are added to the file name only if they are part of the dimensions of the selected variable.  The selection parameters are also included as global attributes in each output NetCDF file and as header information for each csv file. Output csv files have three fixed fields namely ‘datetime’ (format YYYYMMDDHH), ‘lat’(latitude) and ‘lon’(longitude) , and a column for each variable selected. The netCDF file is a compressed format that has the same information as CSV divided into variables, dimensions and attributes. The variables are the selected variables, and dimensions contain spatio-temporal information. </p>
                                </div>
                                <div class="panel panel-info">
                                    <div class="panel-heading">Output Format for ERA5</div>
                                    <p class="lead text-justify">We are currently serving the ERA5 data in either NetCDF or CSV format or GRIB format. We use the following naming convention for output:<br /><br />
                                    [sourcetype]_[varname]_[interval]_[longitude]_[lattitude]_[startdate]_[enddate]_[creation time].[nc/csv/GRIB] <br />
                                    The selection parameters are also included as global attributes in each output NetCDF file and as header information for each csv file. 
                                    Output csv files have three fixed fields namely ‘datetime’ (format YYYYMMDDHH), ‘lat’(latitude) and ‘lon’(longitude) , and a column for each variable selected. 
                                    The netCDF file is a compressed format that has the same information as CSV divided into variables, dimensions and attributes.
                                    The variables are the selected variables, and dimensions contain spatio-temporal information.
                                    GRIB is a file format for the storage and transport of gridded meteorological data, such as Numerical Weather Prediction model output. </p>
                                </div>
                                <div class="panel panel-info">
                                    <div class="panel-heading">Output Format for Aeris</div>
                                    <p class="lead text-justify">We are currently serving the Aeris Weather data in JSON format. We use the following naming convention for output: <br/><br />
                                   [sourcetype]_[varname]_[lattitude]_[longitude]_[interval]_[startdate]_[enddate]_[creation time].[json]<br/>
                                    Output JSON files have Success, Error and Response. Success shows whether the request is True or False. Error shows the code and desciprtion.
                                if any error occurs the description and code is given there. Response gives you the output with the variables and the values .  </p>
                                </div>

                            </div>
                        </main>
                    </div>
                </div>
            </section>
        </div>
      <Footer />
    </Fragment>
  )
}
