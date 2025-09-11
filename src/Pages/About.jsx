import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../style/about.css";
import aboutImg from "../assets/images/about hero img.jpg"; 
import boyImg from "../assets/images/boy1.jpg"; 
import girlImg from "../assets/images/girl1.jpg"; 
import boyImg2 from "../assets/images/boy2.jpg"; 
import girlImg2 from "../assets/images/girl2.jpg"; 
import worldImg from "../assets/images/world.png";
import Subtitle from "../shared/Subtitle";
import Testimonial from "../components/Testimonial/Testimonial";
import Newsletter from "../shared/Newsletter";

const About = () => {

  
  return (
    <>
      {/* ================== Hero / Intro Section ================== */}
      <section className="about_hero">
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
              <div className="about_content">
                <div className="about_subtitle d-flex align-items-center">
                  <Subtitle subtitle={"About Us"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Discover more <span className="highLight">About Us</span>
                </h1>
                <p>
                  We are dedicated to making your travel experience easier,
                  memorable, and affordable. Our mission is to connect people
                  with unique destinations, providing excellent customer service
                  and personalized trip planning.We are dedicated to making your travel experience easier,
                  memorable, and affordable. Our mission is to connect people
                  with unique destinations, providing excellent customer service
                  and personalized trip planning
                </p>
              </div>
            </Col>

            <Col lg="6">
              <div className="about_img">
                <img src={aboutImg} alt="About" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================== Mission & Vision ================== */}
  <section className="about_mission">
  <Container>
    <Row>
      <Col lg="6">
        <div className="mission_card text-center">
          <img src="https://st2.depositphotos.com/1006463/6268/i/450/depositphotos_62687951-stock-photo-3d-man-climbing-on-a.jpg" alt="Mission" className="mission_icon"/>
          <h2>Our Mission</h2>
          <p>
            To provide the best travel services and create memorable
            experiences for our clients. We aim to make traveling simple,
            enjoyable, and accessible for everyone.
          </p>
        </div>
      </Col>

      <Col lg="6">
        <div className="mission_card text-center">
          <img src="https://www.shutterstock.com/image-illustration/3d-people-man-person-directional-600nw-131924366.jpg" alt="Vision" className="mission_icon"/>
          <h2>Our Vision</h2>
          <p>
            To become the most trusted travel partner worldwide by offering
            top-class services, innovative solutions, and unforgettable
            journeys for every traveler solutions.
          </p>
        </div>
      </Col>
    </Row>
  </Container>
</section>


      {/* ================== Why Choose Us ================== */}

  <section className="about_choose">
  <Container>
    <Row>
      <Col lg="12" className="mb-4 ">
        <Subtitle subtitle={"Why Choose Us"} />
        <h2>We make your journey hassle-free</h2>
      </Col>

      <Col lg="4">
        <div className="choose_box text-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/014/435/720/non_2x/best-price-icon-best-price-guarantee-badge-great-price-label-icon-flat-style-vector.jpg"
            alt="Best Price"
            className="choose_icon"
          />
          <h5>Best Price Guarantee</h5>
          <p>Affordable travel packages with no hidden charges preferences.</p>
        </div>
      </Col>

      <Col lg="4">
        <div className="choose_box text-center">
          <img src="https://img.freepik.com/free-vector/repair_24908-54063.jpg" alt="Personalized Service" className="choose_icon" />
          <h5>Personalized Service</h5>
          <p>Customizable tours that suit your needs and preferences  .</p>
        </div>
      </Col>

      <Col lg="4">
        <div className="choose_box text-center">
          <img
            src="https://thumbs.dreamstime.com/b/icon-white-background-arrow-vector-customer-service-logo-round-196071767.jpg"
            alt="24/7 Support"
            className="choose_icon"
          />
          <h5>24/7 Support</h5>
          <p>Round-the-clock customer assistance during your trip.</p>
        </div>
      </Col>
    </Row>
  </Container>
</section>


      {/* ================== Team Section ================== */}
      <section className="about_team">
        <Container>
          <Row>
            <Col lg="12" className="mb-4">
              <Subtitle subtitle={"Our Team"} />
              <h2>Meet Our Travel Experts</h2>
            </Col>

            <Col lg="3" className="team_box text-center">
              <img src={boyImg} alt="Team Member" className="team_img" />
              <h5>Rohit Kumar</h5>
              <p>Founder & CEO</p>
            </Col>
            <Col lg="3" className="team_box text-center">
              <img src={girlImg} alt="Team Member" className="team_img" />
              <h5>Ananya Sharma</h5>
              <p>Travel Consultant</p>
            </Col>
            <Col lg="3" className="team_box text-center">
              <img src={boyImg2} alt="Team Member" className="team_img" />
              <h5>Rahul Jain</h5>
              <p>Marketing Head</p>
            </Col>
            <Col lg="3" className="team_box text-center">
              <img src={girlImg2} alt="Team Member" className="team_img" />
              <h5>Priya Verma</h5>
              <p>Customer Support</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================== Testimonials ================== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Testimonials"} />
              <h2 className="testimonial_title">What our clients say</h2>
            </Col>
            <Col lg="12">
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================== Newsletter ================== */}
      <Newsletter />
    </>
  );
};

export default About;
