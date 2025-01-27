import React, { useState } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCount, incrementCount, inputCount } from '../redux/counter/counterSlice'
import ProductModal from '../components/products/modal'

const Home = () => {
  return (
    <div>
  home page
  <div>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14132.830797658744!2d85.34006416797638!3d27.67997477299721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196bced47a63%3A0x9d3eef565ed6ab06!2sJadibuti%20futsal!5e0!3m2!1sen!2snp!4v1737385074046!5m2!1sen!2snp" width="600" height="450" ></iframe>
  </div>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/gTLPw-rU34c?si=77FGwhl6q08LFA_-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default Home
