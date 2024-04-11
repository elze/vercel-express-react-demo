import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";


import "./styles/styles.css";

import PageRouter from "./components/router.jsx";

export default function Home() {
  return (
    <Router>
      <PageRouter />
    </Router>
  );
}
