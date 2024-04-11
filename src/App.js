import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";


import "index.css";

import PageRouter from "./components/router.jsx";

export default function Home() {
  return (
    <Router>
      <PageRouter />
    </Router>
  );
}
