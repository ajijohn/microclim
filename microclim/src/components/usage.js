import React, { Fragment } from 'react';
import './vendor/font-awesome/css/font-awesome.min.css';
import './vendor/simple-line-icons/css/simple-line-icons.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import Footer from './Footer.js';
import './css/des.css';

export default function usage() {
  return (
    <Fragment>
        <div>
        <section class="bg-light" id="usage">
            <div class="container-fluid">
            <div class="row flex-xl-nowrap">
                    <main class="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
                        <h1 class="bd-title" id="content">Usage</h1>
                        <p class="lead text-justify"></p>

                        <h2 id="inline-code">Registration</h2>
                        <p class="lead text-justify">Microclim.org does not have built-in authentication and authorization features, but relies on Google for site registration.
                        Google only provides us with access to your user name and email id. Once you use your Google credentials to log in,
                        you are afforded access to the web interface where you can request a subset of miroclimate data. To the right of the web interface,
                            you will find a link to a <a href="/account" target="_self"><code class="highlighter-rouge"> “My Account”</code></a> page. There you can optionally update your profile.
                        You can also access a secret and key code that can be used to request data via an API.</p>
                        <pre><code></code></pre>

                        <h2 id="inline-code">Data requests and limitations</h2>
                        <p class="lead text-justify">Data requests can be large due to the hourly time period and fine spatial resolution.
                        Please keep file size in mind when selecting a geographic range. Using the web app, one can either enter
                        coordinates to define a geographic bounding box or click on the rectangle icon to the left of the map.
                        Dragging the rectangle icon around a region will update the coordinates of the bounding box.</p>
                        <pre><code></code></pre>

                        <p class="lead text-justify">We limit data requests to a maximum of 2 years. Please contact us if your application
                        requires access to data for a longer time period. Each data request is for a single,
                        continuous time period with data aggregated at the specified interval (from hourly to monthly).</p>
                        <pre><code></code></pre>

                        <p class="lead text-justify">Using the Web App, click on a variable name to select it (a check mark confirms your selection)
                        and click again to deselect a variable. You then have the option to select a single shade level and
                        height or depth for each request. These selections will be disabled (and shaded) when they are
                        not applicable to your data selection.</p>
                        <pre><code></code></pre>

                        <p class="lead text-justify">Multiple variable selection is permitted through the API and Web App. Any selections of shade level or height/depth
                        will be applied only to variables for which they are relevant.</p>
                        <pre><code></code></pre>

                        <p class="lead text-justify">Data are currently available in CSV or netCDF format. Please see the <a href="/des" target="_self">features</a> page for a description of the output format
                        as well as details on available data. Once requests are submitted in the Web App, the status bar at the bottom of the page
                        will report the request status and can be updated using the request button.</p>
                        <pre><code></code></pre>

                        <h2 id="inline-code">API</h2>
                        <p class="lead text-justify">We offer APIs based on REST, which allows you to access our data in any language and from within any environment that
                        supports the REST API framework. However, we support APIs in R and Python, and details can be found in our respective GitHub repositories:</p>
                        <pre><code></code></pre>
                        <ul class="list-group h4">
                            <li class="list-group-item"><a href="https://github.com/ajijohn/microclimRapi" target="_blank">Official R API library</a></li>
                            <li class="list-group-item"><a href="https://github.com/ajijohn/microclim-api" target="_blank">Official Python API library</a></li>
                        </ul>
                        <pre><code></code></pre>

                        <p class="lead text-justify">We provide an example usecase below highlighting the use of our R API toolkit.
                        The available APIs and their parameters are described in detail on the <a href="/apidoc" target="_self">APIs</a> page. When requesting data via the fetch API,
                        one combination of shade level and height/depth can be requested. The parameters hod and shadelevel assume a default value of '0.03 m' and '0%' when they are NA.</p>
                        <pre><code></code></pre>

                        <h2 id="inline-code">Pre-reqs</h2>
                        <p class="lead text-justify">Install/load the required libraries</p>
                        <pre>{`
                            
                            library(devtools)
                            devtools::install_github("ajijohn/microclimRapi")
                            library(microclimRapi)
                        `}
                        </pre>
                        <h2 id="inline-code">Key/Secret</h2>

                        <p class="lead text-justify">Key/Secret is found under <code class="highlighter-rouge">&nbsp;My account </code> on the menu. Fetch the token to be used for all interactions using the API key and secret.</p>

                        <figure class="highlight"><pre>{`
                              api_token = getToken('88eb4af7c20dd74742aed57b2c77aff1', '39becfd7fab41b51ea5c55ed0137ec3a',
                              'microclim.org/')
                              ma <- MicroclimAPI$new(token = api_token,url_mc='http://microclim.org/')
                        `}</pre>
                        </figure>

                        <h2 id="code-blocks">Prepare Request Parameters</h2>

                        <p class="lead text-justify">Let us now prepare a sample request to get hourly mean of the following microclimate variables for one year (1981): GLW, SWDOWN, TAH, Tair and Tsurface. We use decimal latitudes and longitudes to specify a bounding box surrounding the Eagle Nest Wilderness Area in Colorado, USA.</p>


                        <figure class="highlight">
                                <pre>{`
                                   mr <- microclimRapi:::MicroclimRequest$new(
                                    latS = "39.48178546986059",
                                    latN="39.890772566959534",
                                    lonW="-106.51519775390625",
                                    lonE="-106.03317260742188",
                                    variable="GLW,SWDOWN,TAH,Tair,Tsurface",
                                    shadelevel=0,
                                    hod=0,
                                    interval=0,
                                    aggregation=3,
                                    stdate="19810101",
                                    eddate="19811231",
                                    file="csv")
                                `}</pre>
                        </figure>

                        <h2 id="variables">Place Extraction Request</h2>

                        <p class="lead text-justify">Place the request</p>

                        <figure class="highlight"><pre>{` ext_req= ma$request(mr)`}</pre></figure>

                        <h2 id="user-input">Download</h2>

                        <p class="lead text-justify">Once processed, the request transitions to status <code class="highlighter-rouge"> 'EMAILED'</code>, indicating that the files have been emailed to the user and are also available to download via the API. We will now fetch the files into our workspace for processing.</p>


                        <figure class="highlight"><pre>{`
                         for (i in 1:10){
                            print(paste("dowloading file", ftch_req$files[[i]]$Key))
                            ncD <-  ma$download('59134752aa6be7679f737d41',ftch_req$files[[i]]$Key)
                            writeBin(ncD, strsplit(ftch_req$files[[i]]$Key, "/")[[1]][2])
                            }
                        `}
                        </pre></figure>
                    </main>
                </div>
            </div>
        </section>
        </div>
      <Footer />
    </Fragment>
  )
}
