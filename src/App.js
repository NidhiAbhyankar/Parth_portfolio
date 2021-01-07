import React from 'react'
import Experience from './Experience'
import Projects from './Projects'

const pic =
  'https://media-exp1.licdn.com/dms/image/C4D03AQFMpe9di4T1Wg/profile-displayphoto-shrink_200_200/0/1606284846758?e=1615420800&v=beta&t=N2Qk937nH4zcoVRU8vlX7_7pcRi2MLhIKacrZyNQjWg'

function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h1>hello</h1>
          <h3>here's who I am and what I do </h3>
          <div className='underline'></div>
        </div>
        <div className='flex-row1'>
          <div className='your-photo'>
            <img src={pic} alt='profile photo' className='photo' />

            <h3>Parth Mujumdar</h3>
          </div>
          <p>
            I am a data enthusiast who likes to dig into large datasets to find
            patterns and meaningful insights, that help drive impactful
            decisions. As a master’s student, at NC State in the Department of
            Industrial engineering, I have acquired skills in SQL, Python,
            Tableau. I like working on challenging projects and enjoy being a
            part of a team. I look forward to applying the skills I have learned
            in the industry.
          </p>
        </div>
        <br />
        <br />
        <br />
        <h3>Experience</h3>
        <Experience />
        <br />
        <br />
        <br />
        <h3>Projects</h3>
        <Projects />
      </section>
    </main>
  )
}

export default App
