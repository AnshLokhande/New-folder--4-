import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'

import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/AnshLokhande/lms.git" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                
                  
                 </div>
            </header>
            <div className="body">
              <h3>Learning Managment system</h3>
              <p>  Developed an innovative Learning Management System (LMS) to facilitate e-learning and course management.
                    Utilized Next.js for the frontend, creating an interactive and user-friendly interface.
                    Implemented course enrollment, progress tracfiing, and certificate issuance features for streamlined user experience.
                     Created a secure admin dashboard for efficient course, event, and internship management, allowing administrators to add, update, and maintain content with ease.
                  Incorporated integrated search functionality for users to quickly find courses, improving accessibility.
                    Designed with a responsive layout to ensure accessibility on various devices, enhancing user engagement and retention.
                  Applied Tailwind CSS to achieve a professional, visually appealing design that adapts to the branding needs of the platform.. </p>
            </div>
            <footer> <ul className="tech-list"> <li>Nextjs</li> <li> Typescript</li> <li>Firebase</li> <li>javascript</li> <li>nodejs</li>RestApi<li></li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            
              
             
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/AnshLokhande/Waiterless-Production.git" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                
                  
                 </div>
            </header>
            <div className="body">
              <h3>Waiterless Restaurant Website</h3>
              <p>  Developed a cutting-edge, waiterless restaurant website using Next.js for dynamic, responsive frontend experiences.
                  Integrated Firebase as the database to store and manage order details, reservations, and user information securely.
                  Enabled seamless online ordering and table reservations for a smooth, customer-driven dining experience.
                Designed interactive digital menus for easy navigation and customization, enhancing user engagement.
               Optimized website functionality to boost operational efficiency and improve overall customer satisfaction</p>
            </div>
            <footer> <ul className="tech-list"> <li>Nextjs</li> <li> Typescript</li> <li>Firebase</li> <li>javascript</li> <li>nodejs</li>RestApi<li></li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              
            </header><header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                
                  
                 </div>
            </header>
            <div className="body">
              <h3>Allur</h3>
              <p> E-commerce platform with Camera search-"Revolutionized e-commerce with camera search feature, allowing users to find products using
visual recognition technology. · Frontend Development: Designed a responsive and dynamic interface using Next.js, enhancing user engagement and delivering fast
page rendering through server-side rendering. · Backend Integration: Built robust APIs using Node.js to process image inputs and query a vast product database. · Machine Learning Integration: Implemented visual recognition models to enable accurate product matching from camera input. · Achieved a 30% improvement in customer engagement and search precision. · Applicable in diverse e-commerce domains, including fashion and electronics.Developed an interactive tool enabling users to virtually test
and customize wall and floor colors for interior design projects.</p>
            </div>
            <footer> <ul className="tech-list"> <li>Nextjs</li> <li> Typescript</li> <li>Firebase</li> <li>javascript</li> <li>nodejs</li>RestApi<li></li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            
            </header><header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/AnshLokhande/yolo-object-detection.git" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                
                  
                 </div>
            </header>
            <div className="body">
              <h3>Wall Paint Visualizer</h3>
              <p> Developed an interactive tool enabling users to virtually test and customize wall and floor colors for interior design projects.Frontend Development: Designed a seamless and interactive user interface using React.js, allowing users to visualize real-time color changes. Backend Integration: Built APIs with Node.js for efficient processing of user inputs and image rendering.Real-Time Image Processing: Implemented algorithms to overlay colors on user-uploaded images for accurate visualization. Enhanced user experience by providing customizable design templates and a variety of color palettes. Improved decision-making for interior design professionals and homeowners, increasing platform engagement by 40%.</p>
            </div>
            <footer> <ul className="tech-list"> <li>Python</li> <li> cpython</li> <li>Firebase</li> <li>javascript</li> <li>Nextjs</li>RestApi<li></li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="@" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                
                  
                 </div>
            </header>
            <div className="body">
              <h3>SYNC BOARD</h3>
              <p> Designed and developed SyncBoard, a product to manage organizations and their
                  employees, incorporating features like Kanban, calendar, user management via RBAC, staff
                  modules, approval pipelines, and more.
                  Built a reactive microservices system using Spring Boot, ReactJs, MySQL, Docker,
                  Kubernetes, and AWS for scalability and seamless deployment.
                  Enhanced organizational efficiency by streamlining workflows, reducing manual effort, and
                  enabling data-driven decision-making.</p>
            </div>
            <footer> <ul className="tech-list"> <li>SPRING</li> <li> REACTJS</li> <li>Firebase</li> <li>javascript</li> <li>nodejs</li>RestApi<li></li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/AnshLokhande/sentimental-behaviour" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>  
                 </div>
            </header>
            <div className="body">
              <h3>Human Sentimental behavior</h3>
              <p> Developed a cutting-edge machine learning model to accurately
                  analyze and predict human sentimental behavior, leveraging natural
                  language processing and sentiment analysis techniques.. </p>
            </div>
            <footer> <ul className="tech-list"> <li>Python</li> <li> Shell</li> <li>DynamoDB</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/AnshLokhande/PBL-virtual-mouse" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
               
              </div>
            </header>
            <div className="body">
              <h3>Virtual Mouse</h3>
              <p>
              where you can control the whole system using your hand gestures.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Streamlit</li>
                <li>Ml</li>
                <li>Python</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/AnshLokhande/letsClear" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                
              </div>
            </header>
            <div className="body">
              <h3>Dehaze removal</h3>
              <p>
              Dehaze removal using machine learning employs algorithms to
              automatically enhance visibility in hazy images, improving clarity and
              detail. It's pivotal for applications like surveillance, remote sensing, and
              automotive safety..
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>pythob</li>
                <li>Ml</li>
                <li>Dehazing Algo</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/AnshLokhande/yolo-object-detection" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
               
              </div>
            </header>
            <div className="body">
              <h3>Deep Learning Credit Card Fraud Detection</h3>
              <p>Build models to detect fraudulent activities in credit card transactions.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>PYTHON</li>
                <li>CYTHON</li>
                <li>QML</li>
                <li>c</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/AnshLokhande/payment-system-for-ecommerce-main" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                
              </div>
            </header>
            <div className="body">
              <h3>payment-system-for-ecommerce</h3>
              <p>create project for Payment Integration for ECommerce..!.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>html</li>
                <li>java</li> 
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/AnshLokhande/Attendance-System" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site" />
                 
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Face Attendance recognition</h3>
              <p>
                A face attendance system is machine learning based model which help student and teacher to mark the attendance with there faces .
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>ML</li>
                <li>Html</li>
                <li>css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://justmedicalbooks.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MedicalBooks - Book Selling Site</h3>
              <p>
                This website sells medical books online and is popular with medical students. Medical students use it to buy books and acquire knowledge. The site has all kinds of medical books in one place.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Woocommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://drrohitdamor.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Dr.Rohit Damor - Online Appointment Booking Site</h3>
              <p>
                This website allows people to easily book appointments with you online. It takes just a minute to schedule a meeting. This kind of site is helpful for booking appointments and not missing any potential clients. You should try this website to see how convenient and efficient it is.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mitulindustries.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mitul Industries - Manufacturing Industries Site</h3>
              <p>
              This manufacturing industry website shows off products and helps the business get more customers and information online. Making products is important but making money from them is the goal. This site can help the business make more profit.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* 
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mayatmaj.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mayatmaj - Film Production Site</h3>
              <p>
                This agency website promotes post production, virtual production, and video marketing services. It shows previous client work and reviews to get more business. If you need help with production, this website can give you information and connect you with the right people.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.smartcornersproperties.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SmartCorners - Real Estate Properties Site</h3>
              <p>
              This real estate site displays land properties and helps buyers and sellers. Buyers can see lots of pictures, videos, and details about properties before visiting in person. It makes it easier for buyers to find what they want and helps sellers get more attention.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>               
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}
        
        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://madewithluv.in/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MadeWithLuv - HomeDecor Site</h3>
              <p>
                This website sells home decor products and helps people decorate their homes. It is easy to find what you need, whether it's furniture or decorations. The site is useful for people who want to make their homes look nice and need some help.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Woocommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

      </div>
    </Container>
  );
}