import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Hero17 from './hero17'
import Features24 from './features24'
import CTA26 from './cta26'
import Features25 from './features25'

import Steps2 from './steps2'
import Testimonial17 from './testimonial17'
import Contact10 from './contact10'
import Footer4 from './footer4'


const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Subtle Famous Sardine</title>
        <meta property="og:title" content="Subtle Famous Sardine" />
      </Helmet>
      
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">
              Get Your Personalized Horoscope
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Learn More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              Explore the mysteries of the stars and uncover what the universe
              has in store for you.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">Welcome to Astrology Hub</span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118">Personalized Readings</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">Zodiac Compatibility</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">Daily Horoscopes</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121">
              Receive accurate and insightful horoscope predictions tailored
              just for you.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122">
              Explore compatibility between different zodiac signs and
              understand your relationships better.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123">
              Get personalized daily horoscope readings based on your zodiac
              sign.
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Subscribe now</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Unlock the secrets of the stars and discover what the future holds
              for you.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126">
              Get personalized horoscopes daily!
            </span>
          </Fragment>
        }
      ></CTA26>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text186">Discover Your Sign</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text187">Read Daily Horoscope</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text188">Explore Compatibility</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text189">Consult Astrologers</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text190">
              Find out your zodiac sign based on your birth date.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text191">
              Get insights into your day with personalized horoscope readings.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text192">
              Check the compatibility between different zodiac signs.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text193">
              Connect with experienced astrologers for in-depth readings and
              guidance.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text194">
              I was skeptical at first, but after getting my personalized
              horoscope reading, I was amazed at the accuracy and insights
              provided.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text195">
              The daily horoscope updates have become a part of my morning
              routine. It&apos;s fun and sometimes surprisingly accurate!
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text196">
              I&apos;ve been consulting with the astrologers here for years, and
              their guidance has always been valuable in navigating life&apos;s
              challenges.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text197">
              The astrological insights provided here have helped me understand
              myself better and make important decisions with confidence.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text198">
              Read what our customers have to say about their astrology
              experience.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text199">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text200">Biplaw Debnath</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text201">Aryan Naruka</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text202">Sudarch Chaturvedi</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text203">Krish Sharma</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text204">Marketing Manager</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text205">Teacher</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text206">Software Engineer</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text207">Artist</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text208">
              For any inquiries or feedback, feel free to reach out to us using
              the contact information below.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text209">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">Main Office</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text212">
              Our main office is located in the heart of the city, easily
              accessible by public transportation.
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text214">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text215">My Kundali</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text216">Blog And Content</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217">Chat With AI Astrologer</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text218">Link 5</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text219">Terms of Use</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home;
