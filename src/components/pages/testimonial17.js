  import React, { Fragment } from 'react'

  import PropTypes from 'prop-types'

  import './testimonial17.css'

  const Testimonial17 = (props) => {
    return (
      <div className="thq-section-padding">
        <div className="testimonial17-max-width thq-section-max-width">
          <div className="testimonial17-container10">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="testimonial17-text27">Testimonials</span>
                </Fragment>
              )}
            </h2>
            <span className="testimonial17-text11 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="testimonial17-text24">
                    Read what our customers have to say about their astrology
                    experience.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="thq-grid-2">
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card1"
                >
                  <div className="testimonial17-container12">
                    <img
                      alt={props.author1Alt}
                      src={props.author1Src}
                      className="testimonial17-image1"
                    />
                    <div className="testimonial17-container13">
                      <strong className="thq-body-large">
                        {props.author1Name ?? (
                          <Fragment>
                            <span className="testimonial17-text35">John Doe</span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="thq-body-small">
                        {props.author1Position ?? (
                          <Fragment>
                            <span className="testimonial17-text33">
                              Marketing Manager
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial17-text14 thq-body-small">
                    {props.review1 ?? (
                      <Fragment>
                        <span className="testimonial17-text36">
                          I was skeptical at first, but after getting my
                          personalized horoscope reading, I was amazed at the
                          accuracy and insights provided.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card2"
                >
                  <div className="testimonial17-container14">
                    <img
                      alt={props.author2Alt}
                      src={props.author2Src}
                      className="testimonial17-image2"
                    />
                    <div className="testimonial17-container15">
                      <strong className="thq-body-large">
                        {props.author2Name ?? (
                          <Fragment>
                            <span className="testimonial17-text29">
                              Jane Smith
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="thq-body-small">
                        {props.author2Position ?? (
                          <Fragment>
                            <span className="testimonial17-text34">Teacher</span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial17-text17 thq-body-small">
                    {props.review2 ?? (
                      <Fragment>
                        <span className="testimonial17-text32">
                          The daily horoscope updates have become a part of my
                          morning routine. It&apos;s fun and sometimes
                          surprisingly accurate!
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card3"
                >
                  <div className="testimonial17-container16">
                    <img
                      alt={props.author3Alt}
                      src={props.author3Src}
                      className="testimonial17-image3"
                    />
                    <div className="testimonial17-container17">
                      <strong className="thq-body-large">
                        {props.author3Name ?? (
                          <Fragment>
                            <span className="testimonial17-text31">
                              David Johnson
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="thq-body-small">
                        {props.author3Position ?? (
                          <Fragment>
                            <span className="testimonial17-text30">
                              Software Engineer
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial17-text20 thq-body-small">
                    {props.review3 ?? (
                      <Fragment>
                        <span className="testimonial17-text25">
                          I&apos;ve been consulting with the astrologers here for
                          years, and their guidance has always been valuable in
                          navigating life&apos;s challenges.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card4"
                >
                  <div className="testimonial17-container18">
                    <img
                      alt={props.author4Alt}
                      src={props.author4Src}
                      className="testimonial17-image4"
                    />
                    <div className="testimonial17-container19">
                      <strong className="thq-body-large">
                        {props.author4Name ?? (
                          <Fragment>
                            <span className="testimonial17-text37">
                              Emily Brown
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="thq-body-small">
                        {props.author4Position ?? (
                          <Fragment>
                            <span className="testimonial17-text26">Artist</span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial17-text23 thq-body-small">
                    {props.review4 ?? (
                      <Fragment>
                        <span className="testimonial17-text28">
                          The astrological insights provided here have helped me
                          understand myself better and make important decisions
                          with confidence.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  Testimonial17.defaultProps = {
    content1: undefined,
    review3: undefined,
    author4Position: undefined,
    author2Alt: 'Jane Smith Image',
    heading1: undefined,
    author4Alt: 'Emily Brown Image',
    review4: undefined,
    author3Src:
      'https://images.unsplash.com/photo-1575014774591-d036b92ae5ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzIwOTI5N3w&ixlib=rb-4.0.3&q=80&w=1080',
    author3Alt: 'David Johnson Image',
    author2Name: undefined,
    author3Position: undefined,
    author3Name: undefined,
    author4Src:
      'https://images.unsplash.com/photo-1631856952652-be1d386e1869?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzIwOTI5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
    review2: undefined,
    author1Alt: 'John Doe Image',
    author1Position: undefined,
    author2Position: undefined,
    author1Name: undefined,
    author2Src:
      'https://images.unsplash.com/photo-1499281851221-5bce936073b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzIwOTI5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
    review1: undefined,
    author1Src:
      'https://images.unsplash.com/photo-1632377082403-214778bec07b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzIwOTI5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
    author4Name: undefined,
  }

  Testimonial17.propTypes = {
    content1: PropTypes.element,
    review3: PropTypes.element,
    author4Position: PropTypes.element,
    author2Alt: PropTypes.string,
    heading1: PropTypes.element,
    author4Alt: PropTypes.string,
    review4: PropTypes.element,
    author3Src: PropTypes.string,
    author3Alt: PropTypes.string,
    author2Name: PropTypes.element,
    author3Position: PropTypes.element,
    author3Name: PropTypes.element,
    author4Src: PropTypes.string,
    review2: PropTypes.element,
    author1Alt: PropTypes.string,
    author1Position: PropTypes.element,
    author2Position: PropTypes.element,
    author1Name: PropTypes.element,
    author2Src: PropTypes.string,
    review1: PropTypes.element,
    author1Src: PropTypes.string,
    author4Name: PropTypes.element,
  }

  export default Testimonial17
