import React from 'react';

import Menu from '../../components/Menu';

import styles from './things-learned.css';

function ThingsLearned() {
  return (
    <div>
      <h1>Things I have learned</h1>
      <p>I've been programming since 16 with a brief stint as network support and have learnt my fair share of tricks</p>
      <p>I know various languages, from PHP to C++ via vbscript,  but my favourite is javascript; 
      its like programming wild west. I'm constantly amazed at what it can do</p>

      <p>I have, at some time in my life, written programs in</p>
        <ul>
          <li>PHP</li>
          <li>Javascript</li>
          <li>C/C++</li>
          <li>Lua</li>
          <li>Visual Basic ( and "VBA" )</li>
          <li>perl</li>
          <li>Pascal</li>
        </ul>

      <div>
        <div className={styles.experience}>
          <h2>Javascript Experience</h2>
          <p>I have coded both front and back end applications in Javascript using various frameworks. From Cordova 
          based Android and iPhone apps to AWS Lambda functions and Express backend systems.</p>

          <p>While I am no stranger to using npm, i do believe sometimes it is better to write a small function than
          import a dependency for a fraction of its functionality. It all depends on how much time you have for a task
           and how complex the requirements are.</p>
          
          <h3>Front end knowledge</h3>
          
          <p> As well as Vanilla Javascript (including ES6 syntax), some of the front end libraries I am familiar with
           include:</p>
          
          <ul>
            <li>jQuery</li>
            <li>jQuery Mobile</li>
            <li>AngularJS</li>
            <li>React</li>
            <li>Backbone</li>
            <li>Underscore</li>
            <li>lodash</li>
            <li>a whole plethora of modules available on npm</li>
          </ul>

          <p>I am well versed in CSS, having buit advertising sites when working at <a href="http://www.soap.com.au" target="_blank" rel="noopener noreferrer">Soap Creative</a>.
          I can build HTML forms in my sleep, using plain HTML or any framework. If i don't know the framework (for example, Vue) 
          then it won't take me long to learn because I know the underlying language very well.
          </p>

          <h3>Back end knowledge</h3>
          
          <p>At <a href="https://blinkmobile.com.au" target="_blank" rel="noopener noreferrer">Blink Mobile</a> I have made various Nodejs apps, from AWS Lambda functions and 
          AWS SWF apps to nodejs apps running Express or Hapi. I've even made commandline apps to interface with those services.
          </p>
        </div>
      </div>
      <Menu />
    </div>
  );
}

export default ThingsLearned;
