import React, { useEffect, useState } from "react";
import logo from "./logo.png";
import "./Home.css";
import resume from "./abhay.pdf";

import Abhay from "./abhayphotu.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  const [about, setabout] = useState([
    {
      icon: <i className="bi bi-geo-alt-fill"></i>,
      iconName: "Based in :",
      value: "Bhopal",
    },
    {
      icon: <i className="bi bi-building"></i>,
      iconName: "Company :",
      value: "Lokdesh",
    },
    {
      icon: <i className="bi bi-github"></i>,
      iconName: "GitHub :",
      value: "abhaysingh28",
      values: "https://github.com/abhaysingh28",
    },
    {
      icon: <i className="bi bi-linkedin"></i>,
      iconName: "LinkedIn:",
      value: "abhay-singh-8588b0225",
      values: "https://www.linkedin.com/in/abhay-singh-8588b0225",
    },
    {
      icon: <i className="bi bi-envelope"></i>,
      iconName: "Email :",
      value: "abhaysinghsh01@gmail.com",
      values: "mailto:abhaysinghsh01.com",
    },
  ]);
  const [skills, setskills] = useState([
    { skills: "UI/UX" },
    { skills: "HTML" },
    { skills: "CSS" },
    { skills: "Javascript" },
    { skills: "Bootstrap v5.3" },
    { skills: "ReactJS" },
    { skills: "Redux" },
    { skills: "NodeJS" },
    { skills: "Express" },
    { skills: "MongoDB" },
    { skills: "Java" },
    { skills: "GitHub" },
    { skills: "Netlify" },
    { skills: "Figma" },
  ]);
  const [GitProjects, setGitProjects] = useState([
    {
      Projectname: "Netflux-Clone",
      Desc: "IMDB Clone is a web application that provides you with the information of latest movies from all over the world. It is built using React and Google API. .",
      Lang: "ReactJS",
    },
    {
      Projectname: "WebChat Application",
      Desc: "  This is a WebChat Application where different users can connect to each other and do realtime messeging using NodeJS, MongoDB and Socket.io",
      Lang: "NodeJS",
    },
    {
      Projectname: "Weather Forecast Application",
      Desc: "This is a Weather Forecast Application using ReactJS and OpenWeatherMap API",
      Lang: "ReactJS",
    },
    {
      Projectname: "Infos Website",
      Desc: "This is a static website with transition effects using HTML, CSS and JavaScript",
      Lang: "HTML, CSS, JavaScript",
    },
  ]);
  const [Theme, setTheme] = useState("light");
  const ClickHandler = () => {
    setTheme(Theme === "light" ? "dark" : "light");
  };
  console.log(Theme);
  return (
    <>
      <div className={`main ${Theme === "dark" ? "dark" : "light"}`}>
        <div className="left">
          <div className={`theme ${Theme === "dark" ? "" : "light"}`}>
            <div className="themeLeft">
              <h1>Theme</h1>
              <h2> {Theme === "dark" ? "yellow" : "light"}</h2>
            </div>
            <div className="themeRight">
              <label className="switch">
                <input onClick={ClickHandler} type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
          </div>
          <div className="profile">
            <div className="profileTop">
              <div className="profilePhoto">
                <img src={Abhay} alt="" />
              </div>
            </div>
            <div className="profileBottom">
              <h1>Abhay Singh</h1>
             <div className="profilebott
             ompara">
             <p>
                ⚡ MERN stack developer | UI/UX | JavaScript | NodeJS | ReactJS
                | ⚡
              </p>
             </div>
              <div className="profilebottombutton">
                <button className="buttonDownload">
                  <a target="blank" href={resume}>
                    Download Resume
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="aboutME">
            {about.map((e, i) => (
              <div key={i} className="aboutMesingle">
                <div className="aboutleft">
                  {e.icon} <h6>{e.iconName}</h6>
                </div>
                <div className="aboutright">
                  <h6>
                    <a href={e.values}>{e.value}</a>
                  </h6>
                </div>
              </div>
            ))}
          </div>
          <div className="TechStack">
            <div className="topTech">
              <h1>Tech Stack</h1>
            </div>
            <div className="bottomTech">
              {skills.map((e, i) => (
                <div key={i} className="skills">
                  <h1>{e.skills}</h1>
                </div>
              ))}
            </div>
          </div>
          <div className="experience">
            <h1>Experience</h1>
            <div className="experience1">
              <h1>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M14 12l-4 4V8z"/></svg> Octuber 2022 - Present
              </h1>
              <h2>Front-end developer</h2>
              <h3>Danik Lokdesh</h3>
            </div>
            <div className="experience1">
              <h1>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M14 12l-4 4V8z"/></svg> Aug - Oct 2022
              </h1>
              <h2>Trainee : ReactJS developer</h2>
              <h3>Sheryians Coding School</h3>
            </div>
          </div>
          <div className="education">
            <h6>Education</h6>
            <div className="experience1">
              <h1>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M14 12l-4 4V8z"/></svg> 08/2019 - Present
              </h1>
              <h2>B.Tech (Computer Scienece)</h2>
              <h3>Radharaman Institute of Technology & Science.</h3>
            </div>
            <div className="experience1">
              <h1>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M14 12l-4 4V8z"/></svg> 03/2017 - 04/2018
              </h1>
              <h2>12th (P.C.M)</h2>
              <h3>Pragatisheel higher secondary school bhopal.</h3>
            </div>
          </div>
        </div>
        <div className={`right `}>
          <div className={`github ${Theme === "dark" ? "yellow" : "light"}`}>
            <h1>GitHub Projects</h1>
            <h2>
              <a
                target="blank"
                href="https://github.com/abhaysingh28?tab=repositories"
              >
                see all
              </a>
            </h2>
            <div className="GithubProjects">
              {GitProjects.map((e, i) => (
                <div key={i} className="gitprojects">
                  <h1>
                    <i className="bi bi-code-slash"></i> {e.Projectname}
                  </h1>
                  <h2>{e.Desc}</h2>
                  <div className="gitprojectsbottom">
                    <h1>{e.Lang}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`MyProjects ${Theme === "dark" ? "yellow" : "light"}`}
          >
            <h1>My Projects</h1>
            <div className="MyGithubProjects">
              <div className="Mygitprojects">
                <a target="blank" href="https://lokdeshtv.com/">
                  <h2>Lokdeshtv.com</h2>
                </a>
                <a target="blank" href="https://lokdeshtv.com/">
                  <div className="projectimg">
                    <img src={logo} alt="" />
                  </div>
                </a>
              </div>
              <div className="Mygitprojects">
                <a target="_blank" href="https://www.bonzaonstreet.com/">
                  <h2>bonzaonstreet.com</h2>{" "}
                </a>
                <a target="_blank" href="https://www.bonzaonstreet.com/">
                  <div className="projectimg1">
                    <img
                      src="https://www.bonzaonstreet.com/images/logo3.png"
                      alt=""
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div
            className={`resentPosts ${Theme === "dark" ? "yellow" : "light"}`}
          >
            <h1>Recent Posts</h1>
            <div className="resentPosts1">
              <a href="">
                <h1>Medium Clone</h1>
              </a>
              <div className="resentPosts1left">
                <img
                  src="https://miro.medium.com/max/8000/1*psYl0y9DUzZWtHzFJLIvTw.png"
                  alt=""
                />
              </div>
              <p>
                Medium is an open platform where readers find dynamic thinking,
                and where expert and undiscovered voices can share their writing
                on any topic.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="byLove">Made with ❤️ by Abhay</h1>
    </>
  );
};

export default Home;
