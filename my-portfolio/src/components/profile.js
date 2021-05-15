import React from "react";
import { Container } from "react-bootstrap";

const MyProfile = () => {
  return (
    <Container>
      <h2>Profile</h2>
      <div style={{textAlign: "justify"}}>
        <p>After a long career as a <strong>Pharmaceutical Chemist</strong> in independent
        pharmacies and participating in the development of the <strong>National
        Pharmaceutical Terminology (NPC)</strong>, I became interested in <strong style={{color:"#2574A9"}}>becoming a programmer </strong>
        to enhance my profession and continue collaborating in the development
        of the <strong>Digital Health Transformation</strong>.</p>
        
        <p>
        Due to my 10 years of experience in the
        <strong> Marketing and Information Technology</strong> related to my area
        of interest.</p> 
        <p>
        In addition, having been responsible for the implementation
        of <strong>Electronic Medical Prescription (EMP)</strong> in a private clinic, my skills
        were enhanced to be a leader and to capitalize on my interest to expand
        my knowledge by working with multidisciplinary teams (IT teams, health professionals and C-level).
        </p>
        <p>
        This is why I am currently looking for a professional opportunity in the
        <strong> Health IT Area.</strong></p>
      </div>
      </Container>
  );
};
export default MyProfile;