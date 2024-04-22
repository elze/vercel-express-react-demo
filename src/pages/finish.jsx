import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import supabase from '../utils/supabase.js';

export default function Finish() {

    supabase.auth.getSession().then(data => {
        window.alert(JSON.stringify(data.data.session.user));
       window.location.href = '/@me?uuid=' + data.data.session.user.id;
    });

    return <div />;

}