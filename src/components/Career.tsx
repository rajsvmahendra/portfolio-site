import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> learning journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* COLLEGE */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science & Engineering</h4>
                <h5>Lovely Professional University, Punjab</h5>
              </div>
              <h4>2023 – Present</h4>
            </div>
            <p>
              Currently pursuing my B.Tech in CSE. This is where I started
              taking technology seriously — not just studying for exams, but
              actually building things. Alongside academics, I focus on
              projects, data analysis, and understanding how real systems work
              beyond the classroom.
            </p>
          </div>

          {/* 12TH */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Secondary (10+2)
                  <br /> Science (PCM)</h4>
                <h5>Ajmani International School, Lakhimpur Kheri</h5>
              </div>
              <h4>2021–2023</h4>
            </div>
            <p>
              Completed my 10+2 with Physics, Chemistry, and Mathematics.
              This phase helped me build a logical way of thinking and the
              discipline needed to handle complex subjects, which later pushed
              me towards engineering and problem-solving fields.
            </p>
          </div>

          {/* CURRENT */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Self-Learning & Projects</h4>
                <h5>Ongoing</h5>
              </div>
              <h4>Now</h4>
            </div>
            <p>
              Outside formal education, I spend most of my time learning by
              doing — building projects, experimenting with ideas, and improving
              through mistakes. This is where most of my real growth has come
              from, and it continues alongside my degree.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
