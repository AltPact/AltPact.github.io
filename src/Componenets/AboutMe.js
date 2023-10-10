import '../Styles/AboutMeStyle.scss';

const AboutMe = () => {
  const cvUrl = process.env.PUBLIC_URL + '/Ashley_Arik_CV_2023.pdf'; // Get the URL of your CV

    return <>
        <header>
          <h1>About Me</h1>
        </header>
        <div class="container">
          <p>Hello! My name is Ashley Arik. I'm a Software Developer based in London. I have a passion for Machine learning, and I love playing Magic the gathering. This is a brief introduction to who I am and what I do.</p>
          <p>Feel free to reach out to me at arikashley@gmail.com for any inquiries or just to say hello!</p>
          <a href={cvUrl} download="Ashley_Arik_CV_2023.pdf">
            <button className="download-button">Download CV</button>
          </a>
        </div>
      </>
  };
  
export default AboutMe;