import React from 'react'
import Layout from '../components/Layout'
import FibonacciModule from '../components/FibonacciModule';
import { useState } from "react";


const Fibonacci: React.FC = () => {

  return (
    <Layout>
      <FibonacciModule />
    </Layout>
  )
}

export default Fibonacci;

