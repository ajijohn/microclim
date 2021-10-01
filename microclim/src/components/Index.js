import React, { Component, Fragment } from 'react';
import './vendor/font-awesome/css/font-awesome.min.css';
import './vendor/simple-line-icons/css/simple-line-icons.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import Footer from './Footer.js';
import './css/index.css';
import Maps from './maps';
import axios from 'axios';

export default class index extends Component {

  yourChangeHandler(event){
    console.log(event.target.value)
  }

  handleSubmit(event){

    event.preventDefault();
    var emailInput = event.target.email.value
    var sourceInput = event.target.sourcetype.value
    var variableInput = event.target.variable.value
    var shadeInput = event.target.shadelevel.value
    var hodInput = event.target.hod.value
    var latNInput = event.target.latN.value
    var latSInput = event.target.latS.value
    var lonWInput = event.target.lonW.value
    var lonEInput = event.target.lonE.value
    var stdateInput = event.target.stdate.value
    var eddateInput = event.target.eddate.value
    var intervalInput = event.target.interval.value
    var aggregationInput = event.target.aggregation.value
    var outputFormatInput = event.target.outputF.value 

    axios.post("http://localhost:3001/",{
      emailInput:emailInput,
      sourceInput:sourceInput,
      variableInput:variableInput,
      shadeInput:shadeInput,
      hodInput:hodInput,
      latNInput:latNInput,
      latSInput:latSInput,
      lonWInput:lonWInput,
      lonEInput:lonEInput,
      stdateInput:stdateInput,
      eddateInput:eddateInput,
      intervalInput:intervalInput,
      aggregationInput:aggregationInput,
      outputFormatInput:outputFormatInput
      }).then(function (response){
      console.log(response)
    })
    //console.log(emailInput, sourceInput, variableInput, shadeInput, hodInput, latNInput, latSInput, lonEInput, lonWInput, stdateInput, eddateInput, intervalInput, aggregationInput, outputFormatInput)
  }
  render(){
    //const handleSubmit = (event) => {
      //event.preventDefault();
      //console.log(event.target[0].value)
    //}
    return (
      <Fragment>
          <div className="index"> 
            <h2> Web dashboard</h2>
            <form onSubmit={this.handleSubmit} method="POST">
            <div className="dash"> 
              <div className="sec1">
                <Maps />
              </div>
              <div className="sec2">
                <div class="form-group row">
                  <label for="sourcetype" class="col-sm-auto col-form-label" id="sourcet">Source </label>
                    <select class="selectpicker" id="sourcetype" name="sourcetype" onChange={this.yourChangeHandler.bind(this)}>
                      <option id='WRF' value='WRF'>WRF</option>
                      <option id='ERA5' value="ERA5">ERA5</option>
                      <option id="Aeris" value="Aeris">Aeris</option>
                    </select>
                </div>
                <div class="form-group row">
                  <label for="variable" class="col-sm-auto col-form-label">Variable</label>
                    <select class="selectpicker" id="variable" name="variable" onChange={this.yourChangeHandler.bind(this)}>
                      <optgroup label="WRF">
                        <option id="ALBEDO">ALBEDO</option>
                        <option id="BGAP">BGAP</option>
                        <option id="FVEG">FVEG</option>
                        <option id="GLW">GLW</option>
                        <option id="ISNOW">ISNOW</option>
                        <option id="SWDOWN">SWDOWN</option>
                        <option id="TAH">TAH</option>
                        <option id="TV">TV</option>
                        <option id="WGAP">WGAP</option>
                        <option id="TG">TG</option>
                        <option id="T2">T2</option>
                        <option id="QAIR">QAIR</option>
                        <option id="SMOIS">SMOIS</option>
                      </optgroup>
                      <optgroup label="Microclimate">
                        <option id="Tair">Tair</option>
                        <option id="Tsurface">Tsurface</option>
                        <option id="Tsoil">Tsoil</option>
                        <option id="UV">UV</option>
                      </optgroup>
                      <optgroup label="ECMWF">
                        <option id="2m_temperature" value="2m_temperature">2m temperature</option>
                        <option id="skin_temperature" value="skin_temperature">Skin Temperature </option>
                        <option id="soil_temperature_level_1" value="soil_temperature_level_1">Soil Temperature Level 1</option>
                        <option id="volumetric_soil_water_layer_1" value="volumetric_soil_water_layer_1">Volumetric Soil Water Layer 1</option>
                        <option id="evaporation" value="evaporation">Evaporation</option>
                        <option id="potential_evaporation" value="potential_evaporation">Potential Evaporation</option>
                        <option id="surface_solar_radiation_downwards" value="surface_solar_radiation_downwards">Surface solar radiation downwards</option>
                        <option id="10m_u_component_of_wind" value="10m_u_component_of_wind">100m u component of wind </option>
                        <option id="high_vegetation_cover" value="high_vegetation_cover">High Vegetation Cover</option>
                      </optgroup>
                      <optgroup label="Real Time">
                        <option id="Temperature">Temperature</option>
                        <option id="solar_radiation">Solar Radiation</option>
                        <option id="wind_speed">Wind Speed</option>
                        <option id="wind_direction">Wind Direction</option>
                      </optgroup>
                    </select>
                </div>
                <div class="form-group row">
                  <label for="shadelevel" class="col-sm-auto col-form-label">Shade Level</label>
                  <div class="col-md-auto btn-group btn-group-toggle" data-toggle="buttons" name="shadelevel" onChange={this.yourChangeHandler.bind(this)}>
                     <label class="btn btn-secondary  active form-check-label" id="shadelevel">
                        <input class="form-check-input" type="radio" id="shadelevel" name="shadelevel" value="0%" />0 </label>
                      <label class="btn btn-secondary" id="shadelevel1">
                        <input class="form-check-input" type="radio" id="shadelevel1" name="shadelevel" value="25%" />25% </label>
                      <label class="btn btn-secondary" id="shadelevel2">
                        <input class="form-check-input" type="radio" id="shadelevel2" name="shadelevel" value="50%" />5% </label>
                      <label class="btn btn-secondary" id="shadelevel3">
                        <input class="form-check-input" type="radio" id="shadelevel3" name="shadelevel" value="75%" />75% </label>
                      <label class="btn btn-secondary" id="shadelevel4">
                        <input class="form-check-input" type="radio" id="shadelevel4" name="shadelevel" value="100%" />100% </label>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="hod" class="col-sm-auto col-form-label">Height or depth(m)</label>
                  <select id="hod" name="hod" class="selectpicker" onChange={this.yourChangeHandler.bind(this)}> 
                    <option value="0">0.03</option>
                    <option value="1">0.06</option>
                    <option value="2">0.09</option>
                    <option value="3">0.12</option>
                    <option value="4">0.15</option>
                    <option value="5">0.18</option>
                    <option value="6">0.21</option>
                    <option value="7">0.24</option>
                    <option value="8">0.27</option>
                    <option value="9">0.30</option>
                    <option value="10">0.48</option>
                    <option value="11">0.66</option>
                    <option value="12">0.84</option>
                    <option value="13">1.02</option>
                    <option value="14">1.20</option>
                    <option value="15">1.38</option>
                    <option value="16">1.56</option>
                    <option value="17">1.74</option>
                    <option value="18">1.92</option>
                  </select>
                </div>
                <div class="form-group row">
                  <label class="col-sm-auto col-form-label">Locations</label>
                  <span class="text-muted">select the geographic bounding box(Degrees)</span>
                  <div class="col-sm-10" id="row2">
                    <div class="row" id="row1">
                      <div class="form-group1 row">
                        <label for="latN" class="col-sm-auto col-form-label">N Lat</label>
                        <div class="col-md-auto">
                          <input type="number" class="form-control" id="latN" name="latN" placeholder="LatN" type="number" step="any" required="" onChange={this.yourChangeHandler.bind(this)}/>
                        </div>
                      </div>
                      <span class="input-group-addon"></span>
                      <div class="form-group1 row" id="row1">
                        <label for="latS" class="col-sm-auto col-form-label" >S Lat</label>
                        <div class="col-md-auto">
                          <input type="number" class="form-control" id="latS" name="latS" placeholder="LatS" type="number" step="any" required="" onChange={this.yourChangeHandler.bind(this)}/>
                        </div>
                      </div>
                    </div>
                    <div class="row" id="row3">
                      <div class="form-group1 row">
                        <label for="lonW" class="col-sm-auto col-form-label">W Lon</label>
                        <div class="col-md-auto">
                          <input type="number" class="form-control" id="lonW" name="lonW" placeholder="LonW" type="number" step="any" required="" onChange={this.yourChangeHandler.bind(this)}/>
                        </div>
                      </div>
                      <span class="input-group-addon"></span>
                      <div class="form-group1 row" id="row4">
                        <label for="lonE" class="col-sm-auto col-form-label Elon">E Lon</label>
                        <div class="col-md-auto">
                          <input type="number" class="form-control" id="lonE" name="lonE" placeholder="LonE" type="number" step="any" required="" onChange={this.yourChangeHandler.bind(this)} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="tp" class="col-sm-auto col-form-label">Time periods</label>
                  <div class="col-md-auto btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-primary active">
                      <input type="radio" name="tp" value="past" autocomplete="off" checked />Past
                    </label>
                    <label class="btn btn-primary" id="futur">
                      <input type="radio" name="tp" value="future" id="futur" autocomplete="off" />Future
                    </label>
                  </div>
                  <button type="button" class="btn btn-danger" name="years" id="years" value="past">Available time period - 1980-1999</button>
                </div>
                <div class="form-group row">
                  <button type="button" class="btn btn-primary" id="blimit" disabled>Limit only two years when using Past/Future</button>
                </div>
                <div class="form-group row" id="date">
                    <div class="col-xs-3 btn-group btn-group-toggle input-group input-daterange">
                      <label for="stdate" class="col-sm-auto col-form-label" id="labsd">Start Date</label>
                          <div class="col-md-auto" id="row5">
                              <input type="date" class="form-control datepicker" id="stdate" name="stdate" placeholder="Start Date" required onChange={this.yourChangeHandler.bind(this)}/>
                          </div>
                          <label for="eddate" class="col-sm-auto col-form-label">End Date</label>
                          <div class="col-md-auto" id="row5">
                              <input type="date" class="form-control datepicker" id="eddate" name="eddate" placeholder="End Date" required onChange={this.yourChangeHandler.bind(this)}/>
                          </div>
                    </div> 
                 </div>
                 <div class="form-group row">
                      <label for="interval" class="col-sm-auto col-form-label">Interval</label>
                      <select id="interval" class="selectpicker" onChange={this.yourChangeHandler.bind(this)} name="interval"> 
                          <option value="Hourly">Hourly</option>
                          <option value="6 Hourly">6 Hourly</option>
                          <option value="12 Hourly">12 Hourly</option>
                          <option value="Daily">Daily</option>
                          <option value="Monthly" id="Monthly">Monthly</option>
                      </select>
                  </div>
                  <div class="form-group row">
                      <label for="aggregation" class="col-sm-auto col-form-label">Aggregation Metric</label>
                      <select id="aggregation" class="selectpicker" onChange={this.yourChangeHandler.bind(this)} name="aggregation">
                          <option value="Instantaneous">Instantaneous</option>
                          <option value="Max">Max</option>
                          <option value="Min">Min</option>
                          <option value="Mean">Mean</option>
                      </select>
                  </div>
                  <div class="form-group row">
                      <label for="file" class="col-sm-auto col-form-label">Output file format</label>
                      <div class="btn-group btn-group-toggle" data-toggle="buttons" onChange={this.yourChangeHandler.bind(this)} name="outputF">
                          <label class="btn btn-primary" id="file1">
                          <input type="radio" name="file" id="file1" value="csv" name="outputF" />CSV </label>
                          <label class="btn btn-primary" id="file2">
                          <input type="radio" name="file" id="file2" value="JSON" name="outputF" />JSON </label>
                          <label class="btn btn-primary" id="file3">
                          <input type="radio" name="file" id="file3" value="netcdf" name="outputF" />netCDF </label>
                          <label class="btn btn-primary" id="file4">
                          <input type="radio" name="file" id="file4" value="GRIB" name="outputF" />GRIB </label>
                      </div>
                  </div>
                  <div class="form-group row">
                      <label for="email" class="col-sm-auto col-form-label">Email address</label>
                      <div class="col-md-auto">
                          <input type="email" class="form-control" id="email" name="email" placeholder={this.props.auth.user.attributes.email} value={this.props.auth.user.attributes.email} required />
                      </div>
                  </div>
                  <div class="form-group row">
                      <div class="col-md-auto btn-group btn-group-toggle" data-toggle="buttons">
                          <button type="submit" class="btn btn-success btn-lg save" value="validate">Process</button>
                          <button type="reset" class="btn btn-warning btn-lg reset">Cancel</button>
                      </div>
                  </div>
              </div>
            </div>
            </form>
          </div>
          <Footer />
      </Fragment>
    )
  }
}
