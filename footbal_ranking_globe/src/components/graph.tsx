import React, { useState, useEffect } from 'react'
import { geoEqualEarth, geoPath } from 'd3-geo'
import { feature } from 'topojson-client'
import { Feature, FeatureCollection, Geometry } from 'geojson'
import './WorldMap.scss'

const uuid = require('react-uuid'); // there is no type for react-uuid


const scale : number = 200;
const cx : number = 400;
const cy: number = 150;


function Graph () {
    // Once the data is loaded I will 
    // convert the JSON into a Feature 
    // Geometry array that I can render;
    const [geographies, setGeographies] = useState<[] | Array<Feature<Geometry | null>>>([]);

    // load the data on the useEffect hook;
    useEffect(() => {
        fetch('/footbal_ranking_globe/public/data/countries-110m.json').then((response) => {
            if(response.status !== 200) {
                console.log(`Error: ${response.status}`);
                return
            }
            //Once I get a response I can convert 
            //the JSON to Geometry feature array and 
            //set it as the function state;
            response.json().then((worldData) => {
                const mapFeatures: Array<Feature<Geometry | null>> = 
                ((feature(worldData, worldData.objwcts.countries) as unknown) as
                FeatureCollection).features;
                setGeographies(mapFeatures);
            })
        })
    }, []);

    //Projection using geoEqualEarth
    const projection = geoEqualEarth().scale(scale).translate([cx, cy]).rotate([0,0]);

    //
}

export default Graph;