import React from 'react';
// import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
      <div className="my-2">
        <p>
          Kyle Ferguson is always thinking forward and contiuously learning new technologies to add to my skillset / knowledge base. I am going through this Full Stack Development program to my current technical skillset to the limit and feed my constant curiousity for how things function "under the hood" of the internet and websites. I intend to bring this deeper technical understanding to my current job operating as a Delivery Manager and setting up my team of developers for success.
        </p>
      </div>
    </section>
  );
}

export default About;
