import React from 'react';

import Menu from '../../components/Menu';

function AboutMe() {
  return (
    <div>
      <h1>About Simon Dobie</h1>
      <section>
        <p>I live on the Central Coast, NSW at Niagara Park (5 minutes from Gosford). 
        I have 3 wonderful kids, a cat and 2 chickens who live with me.</p>

        <p>I work in web development and I like writing code, refining it, reusing it. I believe strongly 
        in good coding practices, but I also know that sometimes the best coding practice is "get it done on time".</p>

        <p>I have contributed to lots of different types of programs in my career, from freight management software in VB6
         to PHP powered websites and javascript webapps using AWS for the backend.</p>
        <p>I've even helped make games. </p>

        <p>I was mostly self taught as a teen in my bedroom and then via industry experience but I do have 
        an Advanced Diploma of Professional Game Development ( C++ ). This means that while i probably dont know
        "Fancy new Javascript framework of the minute"&trade; I can easily learn it with little direction.</p>

        <p>I'm a fast learner who loves to try new things in code, which is both a good and bad thing, i guess... 
        but I cant help experimenting. The payoff in knowledge is usually worth it</p> 

        <p>I love music and have recently stumbled upon the Algorave movement, where music is made via coding in 
        realtime. <a href="http://charlie-roberts.com/gibber/" target="_blank" rel="noopener noreferrer">Gibber</a> is my tool of choice for
        music creation, however I am starting to get into hardware synths and drum machines. I have plans for a 
        Web Audio project, one of these days. I play drum synths and samplers in a band, maybe one day we'll make 
        out of the warehouse :) I am very excited about being able to combine two of my favourit things, music and code.</p>

      </section>

      <Menu />
    </div>
  );
}

export default AboutMe;
