import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import supabase from '../utils/supabase.js';

export default function Finish() {
     useEffect(() => {
        supabase.auth.getSession().then(({data}) => {
         window.alert(JSON.stringify(data))
        })
     }, []);
    return <div />;

}