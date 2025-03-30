AOS.init();

//  Work experience cards

const experiencecards = document.querySelector('.experience-cards');
const exp = [
  {
    title: 'Senior Software Engineer',
    cardImage: 'assets/images/experience-page/cefalo_as_logo.jpeg',
    place: 'Cefalo Bangladesh Limited',
    time: '(Dec, 2022 - Present)',
    desp: '<li>Participate in the requirement analysis meeting, task breakdowns and time estimation</li><li>Client communication for requirements clarification</li><li>Technical research and development</li><li>Code review</li><li>Project deployment</li><li>Lead the technical team responsible for the task analysis and assignment, code review, test the implemented task and merged</li>',
  },
  {
    title: 'Senior Software Engineer',
    cardImage: 'assets/images/experience-page/enosis.jpg',
    place: 'Enosis Solutions',
    time: '(Mar, 2022 - Dec, 2022)',
    desp: '<li>Participate in the requirement analysis meeting, task breakdowns and time estimation</li><li>Client communication for requirements clarification</li><li>Technical research and development</li><li>Code review</li><li>Project deployment</li><li>Lead the technical team responsible for the task analysis and assignment, code review, test the implemented task and merged</li>',
  },
  {
    title: 'Senior Software Engineer',
    cardImage: 'assets/images/experience-page/bjit.svg',
    place: 'Bangladesh Japan IT Limited',
    time: '(Oct 2020 - Mar, 2022)',
    desp: '<li>Participate in the requirement analysis meeting, task breakdowns and time estimation</li><li>Client communication for requirements clarification</li><li>Technical research and development</li><li>Code review</li><li>Project deployment</li><li>Lead the technical team responsible for the task analysis and assignment, code review, test the implemented task and merged</li>',
  },
  {
    title: 'Software Engineer',
    cardImage: 'assets/images/experience-page/bjit.svg',
    place: 'Bangladesh Japan IT Limited',
    time: '(Jan 2018 - Oct, 2020)',
    desp: '<li>Participate in the requirement analysis meeting, task breakdowns and time estimation</li><li>Client communication for requirements clarification</li><li>Technical research and development</li>',
  },
  {
    title: 'Software Engineer',
    cardImage: 'assets/images/experience-page/orbund.png',
    place: 'Orbund Student Information Systems',
    time: '(May 2017 - Dec 2017)',
    desp: '<li>Participate in the requirement analysis meeting</li><li>Prepare test cases</li><li>Implemented automated test script</li><li>Client communication for requirements clarification</li>',
  },
];

const showCards2 = () => {
  let output = '';
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener('DOMContentLoaded', showCards2);
