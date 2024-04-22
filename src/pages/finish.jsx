import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import supabase from '../utils/supabase.js';

export default function Finish() {

    supabase.auth.getSession().then(data => {
       window.location.href = '/@me#' + data.data.session.user.id;
    });

    return <div />;

}