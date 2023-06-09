import React from 'react';
import * as layer from './year_spread_animation_style';
import { FilppedCard } from '../../Spread/Component/card';

function YearSpread() {
  return (
    <layer.TimeBox
      initial={{ y: -500 }}
      animate={{ y: [-500, 0] }}
      exit={{ y: 0 }}
      transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
    >
      <layer.YearCard
        animate={{ x: '12.54vw', y: '4.5vh' }}
        transition={{ duration: 1, delay: 1.5, type: 'spring', bounce: 0.3 }}
      >
        <FilppedCard card={1} size="21.6vh" setTime={4200} type="time" />
      </layer.YearCard>
      <layer.YearCard
        animate={{ x: '24.42vw', y: '4.5vh' }}
        transition={{ duration: 1, delay: 1.625, type: 'spring', bounce: 0.3 }}
      >
        <FilppedCard card={2} size="21.6vh" setTime={4200} type="time" />
      </layer.YearCard>
      <layer.YearCard
        animate={{ x: '36.3vw', y: '4.5vh' }}
        transition={{ duration: 1, delay: 1.75, type: 'spring', bounce: 0.3 }}
      >
        <FilppedCard card={3} size="21.6vh" setTime={4200} type="time" />
      </layer.YearCard>
      <layer.YearCard
        animate={{ x: '48.18vw', y: '4.5vh' }}
        transition={{ duration: 1, delay: 2, type: 'spring', bounce: 0.3 }}
      >
        <FilppedCard card={4} size="21.6vh" setTime={4200} type="time" />
      </layer.YearCard>
      <layer.YearCard
        animate={{ x: '60.06vw', y: '4.5vh' }}
        transition={{ duration: 1, delay: 2.125, type: 'spring', bounce: 0.3 }}
      >
        <FilppedCard card={5} size="21.6vh" setTime={4200} type="time" />
      </layer.YearCard>
      <layer.YearCard
        animate={{ x: '71.94vw', y: '4.5vh' }}
        transition={{ duration: 1, delay: 2.25, type: 'spring', bounce: 0.3 }}
      >
        <FilppedCard card={6} size="21.6vh" setTime={4200} type="time" />
      </layer.YearCard>
      <layer.YearCard
        animate={{ x: '12.54vw', y: '49.5vh' }}
        transition={{ duration: 1, delay: 2.375, type: 'spring', bounce: 0.3 }}
      >
        <FilppedCard card={7} size="21.6vh" setTime={4200} type="time" />
      </layer.YearCard>
      <layer.YearCard
        animate={{ x: '24.42vw', y: '49.5vh' }}
        transition={{ duration: 1, delay: 2.5, type: 'spring', bounce: 0.3 }}
      >
        <FilppedCard card={8} size="21.6vh" setTime={4200} type="time" />
      </layer.YearCard>
      <layer.YearCard
        animate={{ x: '36.3vw', y: '49.5vh' }}
        transition={{ duration: 1, delay: 2.625, type: 'spring', bounce: 0.3 }}
      >
        <FilppedCard card={9} size="21.6vh" setTime={4200} type="time" />
      </layer.YearCard>
      <layer.YearCard
        animate={{ x: '48.18vw', y: '49.5vh' }}
        transition={{ duration: 1, delay: 2.75, type: 'spring', bounce: 0.3 }}
      >
        <FilppedCard card={10} size="21.6vh" setTime={4200} type="time" />
      </layer.YearCard>
      <layer.YearCard
        animate={{ x: '60.06vw', y: '49.5vh' }}
        transition={{ duration: 1, delay: 2.875, type: 'spring', bounce: 0.3 }}
      >
        <FilppedCard card={11} size="21.6vh" setTime={4200} type="time" />
      </layer.YearCard>
      <layer.YearCard
        animate={{ x: '71.94vw', y: '49.5vh' }}
        transition={{ duration: 1, delay: 3, type: 'spring', bounce: 0.3 }}
      >
        <FilppedCard card={12} size="21.6vh" setTime={4200} type="time" />
      </layer.YearCard>
    </layer.TimeBox>
  );
}

export default YearSpread;
