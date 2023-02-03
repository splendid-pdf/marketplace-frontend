import React from 'react';
import { FirstSection } from './firstSection';
import { SecondSection } from './secondSection';
import { ThirdSection } from './thirdSection';

export const Sections = () => {
  return (
    <div style={{ marginBottom: 10 }}>
      <h2 style={{ fontSize: 24 }}>SectionWrapper</h2>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
};
