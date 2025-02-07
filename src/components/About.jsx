import './About.css';

const About = () => {
  return (
    <section id='about' data-aos="fade-up">
      <h2>About Me</h2>
      <table className="resume-table">
        <tbody>
          <tr>
            <th>Name:</th>
            <td>M V Sai Kartheek</td>
          </tr>
          <tr>
            <th>Education:</th>
            <td>B.Tech Computer Science and Engineering</td>
          </tr>
          <tr>
            <th>Specialization:</th>
            <td>Blockchain Technology</td>
          </tr>
          <tr>
            <th>Educational Institution:</th>
            <td>SRM Institute Of Science and Technology</td>
          </tr>
          <tr>
            <th>CGPA:</th>
            <td>9</td>
          </tr>
          <tr>
            <th>Course Work:</th>
            <td>DSA, OOP, OS, COA</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default About;
