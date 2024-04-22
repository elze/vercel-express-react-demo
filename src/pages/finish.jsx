import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import supabase from '../utils/supabase';

export default function Finish() {

    supabase.auth.getSession().then(data => {
        window.alert(JSON.stringify(data.session));
       window.location.href = '/@me?uuid=' + data.session.user.user_id;
    });

    return <div />;

}