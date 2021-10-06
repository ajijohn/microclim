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
import Select from 'react-select';

export default class index extends Component {
  constructor(props){
    super(props);
    this.state = { 
      startDate : new Date("1980/01/01"),
      endDate : new Date("1980/01/01"),
      mdate:new Date('2000/01/01'),
      LatN : ' ',
      LatS : ' ',
      LonE : ' ',
      LonW : ' ',
      selectedOptions_Variable:[],
      selectedOptions_hod:[],
      selectedOptions_Source:[],
      selectedOptions_interval:[],
      selectedOptions_Aggregation:[]
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
    })
  }

  yourChangeHandler(event){
    console.log(event.target.value)
  }
  handleSource = (selectedOptions_Source) => {
    this.setState({selectedOptions_Source})
  }
  handleVariable = (selectedOptions_Source) => {
    this.setState({ selectedOptions_Variable:selectedOptions_Source });
  }
  handleInterval = (selectedOptions_interval) => {
    this.setState({selectedOptions_interval})
  }
  handleAggregation = (selectedOptions_Aggregation) => {
    this.setState({selectedOptions_Aggregation})
  }

  handleHod=(selectedOptions_hod) => {
    this.setState({selectedOptions_hod})
  }

  setStartDate(date){
    console.log("Date1",date)
    this.setState({startDate:date})
    var d1 = date.getFullYear()+2
    var d2 = date.getMonth()+1
    var d3=d1+'/'+d2+'/'+date.getDate()
    this.setState({mdate:new Date(d3)})
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
    var sourceInput = this.state.selectedOptions_Source.value
    var variableInput = this.state.selectedOptions_Variable
    var shadeInput = event.target.shadelevel.value
    var hodInput = this.state.selectedOptions_hod.value
    var latNInput = event.target.latN.value
    var latSInput = event.target.latS.value
    var lonWInput = event.target.lonW.value
    var lonEInput = event.target.lonE.value
    var stdateInput = event.target.stdate.value
    var eddateInput = event.target.eddate.value
    var intervalInput = this.state.selectedOptions_interval.value
    var aggregationInput = this.state.selectedOptions_Aggregation.value
    var outputFormatInput = event.target.outputF.value
    console.log(eddateInput)
    
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
    const optionHod=[
      {value:"0.03" ,label:"0.03"},
      {value:"0.06" ,label:"0.06"},
      {value:"0.09" ,label:"0.09"},
      {value:"0.12" ,label:"0.12"},
      {value:"0.15" ,label:"0.15"},
      {value:"0.18" ,label:"0.18"},
      {value:"0.21" ,label:"0.21"},
      {value:"0.24" ,label:"0.24"},
      {value:"0.27" ,label:"0.27"},
      {value:"0.30" ,label:"0.30"},
      {value:"0.48" ,label:"0.48"},
      {value:"0.66" ,label:"0.66"},
      {value:"0.84" ,label:"0.84"},
      {value:"1.02" ,label:"1.02"},
      {value:"1.20" ,label:"1.20"},
      {value:"1.38" ,label:"1.38"},
      {value:"1.56" ,label:"1.56"},
      {value:"1.74" ,label:"1.74"}, 
      {value:"1.92" ,label:"1.92"} 
    ]
    const optionVariable = [
      {
        label: "WRF",link:"WRF",
        options: [
          { label: "ALBEDO", value: "ALBEDO",link:"WRF" },
          { label: "BGAP", value: "BGAP",link:"WRF" },
          { label: "FVEP", value: "FVEP",link:"WRF" },
          { label: "GLW", value: "GLW",link:"WRF" },
          { label: "ISNOW", value: "SWDOWN",link:"WRF" },
          { label: "TAH", value: "TAH",link:"WRF" },
          { label: "TV", value: "TV",link:"WRF" },
          { label: "WGAP", value: "WGAP",link:"WRF" },
          { label: "TG ", value: "TG",link:"WRF" },
          { label: "T2", value: "T2",link:"WRF" },
          { label: "QAIR", value: "QAIR",link:"WRF" },
          { label: "SMOIS", value: "SMOIS",link:"WRF" }
        ]
      },
      {
        label: "Microclimate",link:"WRF",
        options: [
          { label: "Tair", value: "Tair",link:"WRF" },
          { label: "Tsurface", value: "Tsurface",link:"WRF" },
          { label: "Tsoil", value: "Tsoil",link:"WRF" },
          { label: "UV", value: "UV",link:"WRF" }
        ]
      },
      {
        label: "ECMWF",link:"ERA5",
        options: [
          { label: "2m temperature", value: "2m temperature",link:"ERA5" },
          { label: "Skin Temperature", value: "Skin Temperature",link:"ERA5" },
          { label: "Soil Temperature Level 1", value: "Soil Temperature Level 1",link:"ERA5" },
          { label: "Volumetric Soil Water Layer 1", value: "Volumetric Soil Water Layer 1",link:"ERA5" },
          { label: "Evaporation", value: "Evaporation",link:"ERA5" },
          { label: "Potential Evaporation", value: "Potential Evaporation",link:"ERA5" },
          { label: "Surface solar radiation downwards", value: "Surface solar radiation downwards",link:"ERA5" },
          { label: "100m u component of wind", value: "100m u component of wind",link:"ERA5" },
          { label: "High Vegetation Cover", value: "High Vegetation Cover",link:"ERA5" }
        ]
      },
      {
        label: "Real Time",link:"Aeris",
        options: [
          { label: "Temperature", value: "Temperature",link:"Aeris"},
          { label: "Solar Radiation", value: "Solar Readiation",link:"Aeris" },
          { label: "Wind Speed", value: "Wind Speed",link:"Aeris" },
          { label: "Wind Direction", value: "Wind Direction",link:"Aeris" }
        ]
      }
    ];
    const optionSource=[
      {label:"WRF",value:"WRF"},
      {label:"ERA5",value:"ERA5"},
      {label:"Aeris",value:"Aeris"}
    ];
    const optionInterval=[
      {label:"Hourly",value:"Hourly"},
      {label:"6 Hourly",value:"6 Hourly"},
      {label:"12 Hourly",value:"12 Hourly"},
      {label:"Daily",value:"Daily"},
      {label:"Monthly",value:"Monthly"}
    ];
    const optionAggregation=[
      {label:"Instantaneous",value:"Instantaneous"},
      {label:"Max",value:"Max"},
      {label:"Min",value:"Min"},
      {label:"Mean",value:"Mean"}
    ];
    const filteredOptions = optionVariable.filter((o) => o.link === this.state.selectedOptions_Source.value)
    return (
      <Fragment>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.6.3/umd/react.production.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.6.3/umd/react-dom.production.min.js"></script>
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
                  <Select value={this.selectedOption_Source} options={optionSource} id="sourcetype" name="sourcetype" onChange={this.handleSource} />
                </div>
                <div className="form-group row">
                  <label className="col-sm-auto col-form-label">Variable</label>
                    <Select isMulti value={this.selectedOption_Variable} onChange={this.handleVariable} options={filteredOptions} id="variable" name="variable" />
                </div>
                <div className="form-group row">
                  <label className="col-sm-auto col-form-label">Shade Level</label>
                  <div className="col-md-auto btn-group btn-group-toggle" data-toggle="buttons" name="shadelevel" onChange={this.yourChangeHandler.bind(this)}>
                      <label className="btn btn-secondary" id="shadelevel1">
                        <input className="form-check-input" type="radio" id="shadelevel1" name="shadelevel" defaultValue="0%" />0% </label>
                      <label className="btn btn-secondary" id="shadelevel1">
                        <input className="form-check-input" type="radio" id="shadelevel1" name="shadelevel" defaultValue="25%" />25% </label>
                      <label className="btn btn-secondary" id="shadelevel2">
                        <input className="form-check-input" type="radio" id="shadelevel2" name="shadelevel" defaultValue="50%" />50% </label>
                      <label className="btn btn-secondary" id="shadelevel3">
                        <input className="form-check-input" type="radio" id="shadelevel3" name="shadelevel" defaultValue="75%" />75% </label>
                      <label className="btn btn-secondary" id="shadelevel4">
                        <input className="form-check-input" type="radio" id="shadelevel4" name="shadelevel" defaultValue="100%" />100% </label>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-auto col-form-label">Height or depth(m)</label>
                  <Select value={this.selectedOption_hod} options={optionHod} id="hod" name="hod" onChange={this.handleHod} />
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
                    <label className="btn btn-primary">
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
                              <DatePicker wrapperClassName="datePicker" selected={this.state.startDate} onChange={(date) => this.setStartDate(date)} selectsStart startDate={this.state.startDate} endDate={this.state.endDate} minDate={this.state.startDate} maxDate={this.state.mdate} name="stdate" />                             
                          </div>
                          <label className="col-sm-auto col-form-label">End Date</label>
                          <div className="col-md-auto" id="row5">
                              <DatePicker wrapperClassName="datePicker" selected={this.state.endDate} onChange={(date) => this.setEndDate(date)} selectsEnd startDate={this.state.startDate} endDate={this.state.endDate} minDate={this.state.startDate} maxDate={this.state.mdate} name="eddate" />
                          </div>
                    </div> 
                 </div>
                 <div className="form-group row">
                      <label className="col-sm-auto col-form-label">Interval</label>
                      <Select value={this.selectedOption_interval} options={optionInterval} id="interval" name="interval" onChange={this.handleInterval} />
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-auto col-form-label">Aggregation Metric</label>
                      <Select value={this.selectedOption_Aggregation} options={optionAggregation} id="aggregation" name="aggregation" onChange={this.handleAggregation} />
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
