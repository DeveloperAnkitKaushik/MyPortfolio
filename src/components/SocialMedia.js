import React from 'react';
import { BsTwitter, BsGithub } from 'react-icons/bs';
import { FaLinkedin, FaGithubAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SocialMedia = () => (
  <div className="app__social">
    <div><a href="https://twitter.com/Ankit_kaushik0" target='_blank'>
      <BsTwitter/></a>
    </div>
    <div><a href="https://www.linkedin.com/in/ankitkaushik/" target='_blank'>
      <FaLinkedin /></a>
    </div>
    <div><a href="https://github.com/DeveloperAnkitKaushik" target='_blank'>
      <FaGithubAlt /></a>
    </div>
  </div>
);

export default SocialMedia;