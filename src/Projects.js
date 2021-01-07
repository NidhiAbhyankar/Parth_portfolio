import React, { useState } from 'react'
import people from './projectsData'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
const Projects = () => {
  const [index, setIndex] = useState(0)
  const { name, date, text } = people[index]
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber))
  }

  return (
    <article className='review'>
      {/* <div className='img-container'>
        <div className='person-img'></div>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div> */}
      <h4 className='author'>{name}</h4>

      <p className='author'>{date}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        Random
      </button>
    </article>
  )
}

export default Projects
