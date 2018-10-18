import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';
import JOB_DATA from './IndeedJobsData.json'


import {
    FETCH_JOBS,
    LIKE_JOB,
    CLEAR_LIKED_JOBS
  } from './types';

const JOB_QUERY_PARAMS = {

};

export const fetchJobs = (region, callback) => async (dispatch) => {
    try {
      //let zip = await reverseGeoCode(region);
      //const url = buildJobsUrl(zip);
      //let { data } = await axios.get(url);
      const data = JOB_DATA;
      //console.log(data);
      dispatch({ type: FETCH_JOBS, payload: data });
      callback();
    } catch (e) {
      console.log(e);
    }
  };
