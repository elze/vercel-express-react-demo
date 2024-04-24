import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import supabase from '../utils/supabase.js';

export default function Finish() {
   useEffect(() => {
      supabase.auth.getSession().then(({ data }) => {
         if (typeof window !== 'undefined') {
            window.location.href = "/@me#".concat(data.session.access_token);
         }
      })
   }, []);
   return <div />;

}