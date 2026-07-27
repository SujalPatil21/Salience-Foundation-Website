import img1 from '../assets/images/Children.jpeg';
import img2 from '../assets/images/Community.jpeg';
import img3 from '../assets/images/Girls.jpeg';
import img4 from '../assets/images/Mud.jpeg';
import img5 from '../assets/images/Team.jpeg';
import img6 from '../assets/images/Village_People.jpeg';

export const GALLERY_CATEGORIES = [
  'All', 
  'Football', 
  'Training', 
  'Community', 
  'Girls Empowerment', 
  'Workshops', 
  'Volunteers'
];

export const GALLERY_IMAGES = [
  { 
    src: img3, 
    title: 'Flagship Training Session', 
    category: 'Girls Empowerment', 
    desc: 'Empowering young girls through standard football instruction and teamwork exercises.' 
  },
  { 
    src: img4, 
    title: 'Clay Pitch Scouting Cup', 
    category: 'Football', 
    desc: 'Local youth showing raw determination during our annual rainy season scout cups.' 
  },
  { 
    src: img5, 
    title: 'U-17 Academy Squad', 
    category: 'Training', 
    desc: 'Selected student-athletes gearing up for state-level football league trials.' 
  },
  { 
    src: img2, 
    title: 'Parent Alignment Council', 
    category: 'Community', 
    desc: 'Collaborative meetings with village leaders to verify school retention guidelines.' 
  },
  { 
    src: img1, 
    title: 'After-School Scholars', 
    category: 'Training', 
    desc: 'Combining sports training with computer lessons and secondary school tuitions.' 
  },
  { 
    src: img6, 
    title: 'Rural Outreach Hub', 
    category: 'Community', 
    desc: 'Local village supporters gathering to celebrate youth achievements on the pitch.' 
  }
];

export const FEATURED_IMAGES = [
  {
    src: img5,
    title: 'Salience Academy Selection Team',
    category: 'Training',
    desc: 'Our selection teams go through professional fitness training camps and strategic leadership seminars. This picture showcases the under-17 squad preparing for regional matches.'
  },
  { src: img3, title: 'Girls Sports Clinic' },
  { src: img4, title: 'Village Pitch Action' },
  { src: img1, title: 'Scholars in Classroom' }
];

export const COMMUNITY_STORY_SECTIONS = [
  {
    title: 'Teamwork & Collaboration',
    desc: 'Passing the ball is a lesson in sharing responsibility. On the pitch, kids learn that collective success requires aligning individual talent to a common vision.'
  },
  {
    title: 'Discipline & Punctuality',
    desc: 'Maintaining 85% academy and school attendance records instills life habits. Trainees learn that dedication is built through consistent, daily practices.'
  },
  {
    title: 'Leadership & Voice',
    desc: 'We train captains to guide their peers, communicate strategy under pressure, and manage conflicts constructively.'
  },
  {
    title: 'Community Trust',
    desc: 'By involving village councils and agricultural parents, we build cooperative structures that support girls rights to play and study.'
  }
];
