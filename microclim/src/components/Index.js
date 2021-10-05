import React, { Component, Fragment } from 'react';
import './vendor/font-awesome/css/font-awesome.min.css';
import './vendor/simple-line-icons/css/simple-line-icons.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import Footer from './Footer.js';
import './css/index.css';
import axios from 'axios';
import { MapContainer , TileLayer, FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import './css/leaflet.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class index extends Component {
  constructor(props){
    super(props);
    this.state = { 
      startDate : new Date("1980/01/01"),
      endDate : new Date("1980/01/01"),
      LatN : ' ',
      LatS : ' ',
      LonE : ' ',
      LonW : ' '
    }
    this.setStartDate = this.setStartDate.bind(this);
    this.endDate = this.setEndDate.bind(this);
    this.past = this.past.bind(this);
    this.future=this.future.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.deleted=this.deleted.bind(this);
  }

  handleReset(){
    this.setState({
      LatN: "",
      LatS:"",
      LonE:"",
      LonW:"",
      startDate:new Date("1980/01/01"),
      endDate:new Date("1980/01/01")
    });
  }

  yourChangeHandler(event){
    console.log(event.target.value)
  }

  setStartDate(date){
    console.log("Date1",date)
    this.setState({startDate:date})
  }

  setEndDate(date){
    console.log(date)
    this.setState({endDate:date})
  }

  past(){
    console.log("past")
    this.setState({startDate: new Date('1980/01/01')})
    this.setState({endDate: new Date('1980/01/01')})
  }

  future(){
    console.log("future")
    this.setState({startDate: new Date('2080/01/01')})
    this.setState({endDate: new Date('2080/01/01')})
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

    axios.post("http://localhost:3001/insert",{
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
      console.log("Response",response)
      if (response.statusText === "OK"){
        event.target.reset();
      }
    })  
    this.handleReset();                              
  }

  created = (e) => {
    //console.log(e);
    const { layerType } = e;
    if (layerType==="rectangle"){
      var north = e.layer._bounds._northEast.lat;
      var east = e.layer._bounds._northEast.lng;
      var south = e.layer._bounds._southWest.lat;
      var west =  e.layer._bounds._southWest.lng;
      console.log(north,east,south,west)
      this.setState({ LatN: north, LatS:south, LonE:east, LonW:west })
    }
  }
  
  edited = (e) => {
    console.log(e);
  }

  deleted = (e) => {
    console.log(e);
    this.setState({
      LatN: "",
      LatS:"",
      LonE:"",
      LonW:"",
    });
  }

  render(){
    return (
      <Fragment>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.14.1/react-datepicker.min.css" crossOrigin="anonymous"> </script>
          <div className="index"> 
            <h2> Web dashboard</h2>
            <form onSubmit={this.handleSubmit} method="POST">
            {this.props.auth.isAuthenticated && (
            <div className="dash"> 
              <div className="sec1">
              <MapContainer className="map" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                  <FeatureGroup>
                    <EditControl position="topleft" onCreated={this.created} onEdited={this.edited} onDeleted={this.deleted} draw={{circle:false, marker:false, polygon:false, polyline:false}}/>
                  </FeatureGroup>
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
              </MapContainer>
              <pre className="text-left" ></pre>
              </div>
              <div className="sec2">
                <div className="form-group row">
                  <label className="col-sm-auto col-form-label" id="sourcet">Source </label>
                    <select className="selectpicker" id="sourcetype" name="sourcetype" onChange={this.yourChangeHandler.bind(this)}>
                      <option id='WRF' defaultValue='WRF'>WRF</option>
                      <option id='ERA5' defaultValue="ERA5">ERA5</option>
                      <option id="Aeris" defaultValue="Aeris">Aeris</option>
                    </select>
                </div>
                <div className="form-group row">
                  <label className="col-sm-auto col-form-label">Variable</label>
                    <select className="selectpicker" id="variable" name="variable" onChange={this.yourChangeHandler.bind(this)}>
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
                        <option id="2m_temperature" defaultValue="2m_temperature">2m temperature</option>
                        <option id="skin_temperature" defaultValue="skin_temperature">Skin Temperature </option>
                        <option id="soil_temperature_level_1" defaultValue="soil_temperature_level_1">Soil Temperature Level 1</option>
                        <option id="volumetric_soil_water_layer_1" defaultValue="volumetric_soil_water_layer_1">Volumetric Soil Water Layer 1</option>
                        <option id="evaporation" defaultValue="evaporation">Evaporation</option>
                        <option id="potential_evaporation" defaultValue="potential_evaporation">Potential Evaporation</option>
                        <option id="surface_solar_radiation_downwards" defaultValue="surface_solar_radiation_downwards">Surface solar radiation downwards</option>
                        <option id="10m_u_component_of_wind" defaultValue="10m_u_component_of_wind">100m u component of wind </option>
                        <option id="high_vegetation_cover" defaultValue="high_vegetation_cover">High Vegetation Cover</option>
                      </optgroup>
                      <optgroup label="Real Time">
                        <option id="Temperature">Temperature</option>
                        <option id="solar_radiation">Solar Radiation</option>
                        <option id="wind_speed">Wind Speed</option>
                        <option id="wind_direction">Wind Direction</option>
                      </optgroup>
                    </select>
                </div>
                <div className="form-group row">
                  <label className="col-sm-auto col-form-label">Shade Level</label>
                  <div className="col-md-auto btn-group btn-group-toggle" data-toggle="buttons" name="shadelevel" onChange={this.yourChangeHandler.bind(this)}>
                     <label className="btn btn-secondary  active form-check-label" id="shadelevel">
                        <input className="form-check-input" type="radio" id="shadelevel" name="shadelevel" defaultValue="0%" />0 </label>
                      <label className="btn btn-secondary" id="shadelevel1">
                        <input className="form-check-input" type="radio" id="shadelevel1" name="shadelevel" defaultValue="25%" />25% </label>
                      <label className="btn btn-secondary" id="shadelevel2">
                        <input className="form-check-input" type="radio" id="shadelevel2" name="shadelevel" defaultValue="50%" />5% </label>
                      <label className="btn btn-secondary" id="shadelevel3">
                        <input className="form-check-input" type="radio" id="shadelevel3" name="shadelevel" defaultValue="75%" />75% </label>
                      <label className="btn btn-secondary" id="shadelevel4">
                        <input className="form-check-input" type="radio" id="shadelevel4" name="shadelevel" defaultValue="100%" />100% </label>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-auto col-form-label">Height or depth(m)</label>
                  <select id="hod" name="hod" className="selectpicker" onChange={this.yourChangeHandler.bind(this)}> 
                    <option defaultValue="0">0.03</option>
                    <option defaultValue="1">0.06</option>
                    <option defaultValue="2">0.09</option>
                    <option defaultValue="3">0.12</option>
                    <option defaultValue="4">0.15</option>
                    <option defaultValue="5">0.18</option>
                    <option defaultValue="6">0.21</option>
                    <option defaultValue="7">0.24</option>
                    <option defaultValue="8">0.27</option>
                    <option defaultValue="9">0.30</option>
                    <option defaultValue="10">0.48</option>
                    <option defaultValue="11">0.66</option>
                    <option defaultValue="12">0.84</option>
                    <option defaultValue="13">1.02</option>
                    <option defaultValue="14">1.20</option>
                    <option defaultValue="15">1.38</option>
                    <option defaultValue="16">1.56</option>
                    <option defaultValue="17">1.74</option>
                    <option defaultValue="18">1.92</option>
                  </select>
                </div>
                <div className="form-group row">
                  <label className="col-sm-auto col-form-label">Locations</label>
                  <span className="text-muted">select the geographic bounding box(Degrees)</span>
                  <div className="col-sm-10" id="row2">
                    <div className="row" id="row1">
                      <div className="form-group1 row">
                        <label className="col-sm-auto col-form-label">N Lat</label>
                        <div className="col-md-auto">
                          <input type="number" className="form-control" id="latN" name="latN" placeholder="LatN" type="number" step="any" value={this.state.LatN} required="" onChange={this.yourChangeHandler.bind(this)}/>
                        </div>
                      </div>
                      <span className="input-group-addon"></span>
                      <div className="form-group1 row" id="row1">
                        <label className="col-sm-auto col-form-label" >S Lat</label>
                        <div className="col-md-auto">
                          <input type="number" className="form-control" id="latS" name="latS" placeholder="LatS" type="number" value={this.state.LatS} step="any" required="" onChange={this.yourChangeHandler.bind(this)}/>
                        </div>
                      </div>
                    </div>
                    <div className="row" id="row3">
                      <div className="form-group1 row">
                        <label className="col-sm-auto col-form-label">W Lon</label>
                        <div className="col-md-auto">
                          <input type="number" className="form-control" id="lonW" name="lonW" placeholder="LonW" type="number" value={this.state.LonW} step="any" required="" onChange={this.yourChangeHandler.bind(this)}/>
                        </div>
                      </div>
                      <span className="input-group-addon"></span>
                      <div className="form-group1 row" id="row4">
                        <label className="col-sm-auto col-form-label Elon">E Lon</label>
                        <div className="col-md-auto">
                          <input type="number" className="form-control" id="lonE" name="lonE" placeholder="LonE" value={this.state.LonE} type="number" step="any" required="" onChange={this.yourChangeHandler.bind(this)} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-auto col-form-label">Time periods</label>
                  <div className="col-md-auto btn-group btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-primary active">
                      <input type="radio" name="tp" defaultValue="past" onClick={this.past}/>Past
                    </label>
                    <label className="btn btn-primary" id="future">
                      <input type="radio" name="tp" defaultValue="future" id="future" onClick={this.future}/>Future
                    </label>
                  </div>
                  <button type="button" className="btn btn-danger" name="years" id="years" defaultValue="past">Available time period - 1980-1999</button>
                </div>
                <div className="form-group row">
                  <button type="button" className="btn btn-primary" id="blimit" disabled>Limit only two years when using Past/Future</button>
                </div>
                <div className="form-group row" id="date">
                    <div className="col-xs-3 btn-group btn-group-toggle input-group input-daterange">
                      <label className="col-sm-auto col-form-label" id="labsd">Start Date</label>
                          <div className="col-md-auto" id="row5">
                              <DatePicker wrapperClassName="datePicker" selected={this.state.startDate} onChange={(date) => this.setStartDate(date)} selectsStart startDate={this.state.startDate} endDate={this.state.endDate} name="stdate" />                             
                          </div>
                          <label className="col-sm-auto col-form-label">End Date</label>
                          <div className="col-md-auto" id="row5">
                              <DatePicker wrapperClassName="datePicker" selected={this.state.endDate} onChange={(date) => this.setEndDate(date)} selectsEnd startDate={this.state.startDate} endDate={this.state.endDate} minDate={this.state.startDate} name="eddate" />
                          </div>
                    </div> 
                 </div>
                 <div className="form-group row">
                      <label className="col-sm-auto col-form-label">Interval</label>
                      <select id="interval" className="selectpicker" onChange={this.yourChangeHandler.bind(this)} name="interval"> 
                          <option defaultValue="Hourly">Hourly</option>
                          <option defaultValue="6 Hourly">6 Hourly</option>
                          <option defaultValue="12 Hourly">12 Hourly</option>
                          <option defaultValue="Daily">Daily</option>
                          <option defaultValue="Monthly" id="Monthly">Monthly</option>
                      </select>
                  </div>
                  <div className="form-group row">
                      <label className="col-sm-auto col-form-label">Aggregation Metric</label>
                      <select id="aggregation" className="selectpicker" onChange={this.yourChangeHandler.bind(this)} name="aggregation">
                          <option defaultValue="Instantaneous">Instantaneous</option>
                          <option defaultValue="Max">Max</option>
                          <option defaultValue="Min">Min</option>
                          <option defaultValue="Mean">Mean</option>
                      </select>
                  </div>
                  <div className="form-group row">
                      <label className="col-sm-auto col-form-label">Output file format</label>
                      <div className="btn-group btn-group-toggle" data-toggle="buttons" onChange={this.yourChangeHandler.bind(this)} name="outputF">
                          <label className="btn btn-primary" id="file1">
                          <input type="radio" name="file" id="file1" defaultValue="csv" name="outputF" />CSV </label>
                          <label className="btn btn-primary" id="file2">
                          <input type="radio" name="file" id="file2" defaultValue="JSON" name="outputF" />JSON </label>
                          <label className="btn btn-primary" id="file3">
                          <input type="radio" name="file" id="file3" defaultValue="netcdf" name="outputF" />netCDF </label>
                          <label className="btn btn-primary" id="file4">
                          <input type="radio" name="file" id="file4" defaultValue="GRIB" name="outputF" />GRIB </label>
                      </div>
                  </div>
                  <div className="form-group row">
                      <label className="col-sm-auto col-form-label">Email address</label>
                      <div className="col-md-auto">
                          <input type="email" className="form-control" id="email" name="email" placeholder={this.props.auth.user.attributes.email} defaultValue={this.props.auth.user.attributes.email} required/>
                      </div>
                  </div>
                  <div className="form-group row">
                      <div className="col-md-auto btn-group btn-group-toggle" data-toggle="buttons">
                          <button type="submit" className="btn btn-success btn-lg save" defaultValue="validate">Process</button>
                          <button type="reset" className="btn btn-warning btn-lg reset" onClick={this.handleReset}>Cancel</button>
                      </div>
                  </div>
              </div>
            </div>
            )}
            </form>
          </div>
          <Footer />
      </Fragment>
    )
  }
}
