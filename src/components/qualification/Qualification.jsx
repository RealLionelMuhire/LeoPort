import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          {/* Experience Tab */}
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-briefcase-alt qualification__icon qualification__title-experience"></i>
            Experience
          </div>

          {/* Education Tab */}
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-graduation-cap qualification__icon qualification__title-education"></i>
            Education
          </div>
        </div>

        <div className="qualification__sections">
          {/* Experience Content */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Developer & IT Helpdesk Tech</h3>
                <span className="qualification__subtitle">
                  ML Corporate Services - Rwanda
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Dec 2023 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Software Developer Intern</h3>
                <span className="qualification__subtitle">
                ML Corporate Services - Rwanda
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Jul 2022 - May 2023
                </div>
                
              </div>
            </div>

            
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Medical Imaging Officer</h3>
                <span className="qualification__subtitle">
                NYARUGENGE District Hospital - Rwanda
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Jun 2023 - Sep 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Software Developer Intern</h3>
                <span className="qualification__subtitle">
                ALX Africa - Rwanda
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Jun 2023 - Sep 2023
                </div>
              </div>
            </div>
          </div>

          {/* Education Content */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">AWS Cloud Computing</h3>
                <span className="qualification__subtitle">
                  ALX Africa
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Aug 2024 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full Stack Open Course</h3>
                <span className="qualification__subtitle">
                  University of Helsinki
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">ALX Software Engineering Program</h3>
                <span className="qualification__subtitle">
                  ALX Africa
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Jan 2023 - May 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bachelor's in Medical Imaging Sciences</h3>
                <span className="qualification__subtitle">
                  University of Rwanda
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Oct 2017 - Nov 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
