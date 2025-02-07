import './Skills.css';

const Skills = () => {
  return (
    <section id='skills' data-aos="fade-up">
      <h2>Skills</h2>
      <div className="container">
        <div className="card" data-aos="zoom-in">
          <h3>Web Development</h3>
          <span className='TS'>Tech Stack</span>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Nodejs</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="card" data-aos="fade-right">
          <h3>Programming Languages</h3>
          <span className="TS">LIST</span>
          <ul>
            <li>Java</li>
            <li>C/C++</li>
            <li>Python</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="card" data-aos="fade-left">
          <h3>Machine Learning</h3>
            <li>Python Libraries</li>
        </div>
      </div>
    </section>
  );
}

export default Skills;
