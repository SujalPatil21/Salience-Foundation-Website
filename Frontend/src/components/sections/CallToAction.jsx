import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { BORDER_RADIUS, SHADOWS } from '../../constants/design';

/**
 * Call To Action Section - offering three actionable involvement paths.
 */
const CallToAction = () => {
  const actions = [
    {
      title: 'Become a Partner',
      desc: 'Corporate sponsors and sports brands help us build infrastructure, fund scholarships, and expand academies to new districts.',
      buttonText: 'Get in Touch',
      badge: 'Corporates'
    },
    {
      title: 'Volunteer with Us',
      desc: 'Join as a volunteer trainer, academic tutor, digital coach, or coordinator. Dedicate time to nurture raw potential.',
      buttonText: 'Apply to Volunteer',
      badge: 'Individuals'
    },
    {
      title: 'Support Our Athlete',
      desc: 'Sponsor boots, balls, tournament travel expenses, or secondary school tuition kits for our rural sports scholars.',
      buttonText: 'Sponsor Gear',
      badge: 'Sponsor'
    }
  ];

  return (
    <section className="bg-gray-50 py-24 md:py-32 border-b border-gray-100">
      <Container>
        <SectionHeading
          badge="Join Our Mission"
          title="How you can help bridge the gap"
          subtitle="Empowering youth requires structured collective action. Choose a path that fits your capability."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {actions.map((act, idx) => (
            <div
              key={idx}
              className={`bg-white border border-gray-100 p-8 flex flex-col justify-between ${BORDER_RADIUS.card} ${SHADOWS.card}`}
            >
              <div>
                <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-yellow-700 bg-brand-yellow/20 rounded-md mb-4">
                  {act.badge}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-brand-black mb-3 font-heading">
                  {act.title}
                </h3>
                <p className="text-brand-dark font-light text-sm md:text-base leading-relaxed mb-8">
                  {act.desc}
                </p>
              </div>
              <div>
                <Button variant={idx === 0 ? 'primary' : 'secondary'} className={idx === 0 ? 'bg-brand-yellow text-brand-black hover:bg-yellow-400 w-full' : 'border-brand-black text-brand-black hover:bg-brand-black hover:text-white w-full'}>
                  {act.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
