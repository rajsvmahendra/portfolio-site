import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    ScrollTrigger.refresh();
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {/* PROJECT 1 */}
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Fraud Detection System</h4>
                  <p>Machine Learning • Analytics</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>
                Python, Machine Learning, Streamlit, Data Simulation,
                Real-Time Dashboard
              </p>
            </div>
            <WorkImage
              image="/images/fraud-detection.png"
              alt="Fraud Detection System"
            />
          </div>

          {/* PROJECT 2 */}
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>India QSR Insights 2025</h4>
                  <p>Business Intelligence • Data Analytics</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>
                Power BI, Data Analysis, Consumer Behavior, Nutrition Insights,
                Interactive Dashboards
              </p>
            </div>
            <WorkImage
              image="/images/qsr-insights.png"
              alt="India QSR Insights Dashboard"
            />
          </div>

          {/* PROJECT 3 */}
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>UniTrack</h4>
                  <p>Desktop Application • Productivity</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>
                Java, JavaFX, Academic Planning, GPA Calculator, Task & Notes
                Management
              </p>
            </div>
            <WorkImage
              image="/images/unitrack.png"
              alt="UniTrack Application"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
