import React from 'react'
import '../../App.css';
import './About.css'
import HeroSection from '../HeroSection';
var Latex = require("react-latex")
function About() {
  return (
    <>
    <p>Website representing the works of Ashley Arik</p>
    <p>All ideas are my own</p>
    <div class="container">
      <h1>FormSubmit</h1>
      <div class="formbold-main-wrapper">
        <div class="formbold-form-wrapper">
          <form action="https://formsubmit.co/arikashley@gmail.com" method="POST">
              <div class="formbold-input-flex">
                <div>
                    <label for="firstname" class="formbold-form-label"> *First name </label>
                    <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="Jane"
                    class="formbold-form-input"
                    required
                    />
                </div>
                <div>
                    <label for="lastname" class="formbold-form-label"> *Last name </label>
                    <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Cooper"
                    class="formbold-form-input"
                    required
                    />
                </div>
              </div>

              <div class="formbold-input-flex">
                <div>
                    <label for="email" class="formbold-form-label" required> *Mail </label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@test.com"
                    class="formbold-form-input"
                    required
                    />
                </div>
                <div>
                    <label for="phone" class="formbold-form-label"> Phone </label>
                    <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="(319) 555-0115"
                    class="formbold-form-input"
                    />
                </div>
              </div>
              <div>
                  <label for="message" class="formbold-form-label" required> *Message </label>
                  <textarea
                      rows="6"
                      name="message"
                      id="message"
                      placeholder="Type your message"
                      class="formbold-form-input"
                      required
                  ></textarea>
              </div>

              <button type="submit" class="formbold-btn">
                  Send Message
              </button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
export default About