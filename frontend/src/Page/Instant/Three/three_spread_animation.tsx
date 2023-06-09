import React from 'react';
import * as layer from './three_spread_animation_style';
import { FilppedCard } from '../../Spread/Component/card';

function YearSpread() {
  return (
    <layer.TimeBox
      initial={{ y: -500 }}
      animate={{ y: [-500, 0] }}
      exit={{ y: 0 }}
      transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
    >
      <layer.ThreeCard
        animate={{ x: '25.2vw', y: '2.33vh' }}
        transition={{ duration: 1, delay: 1.5, type: 'spring', bounce: 0.3 }}
      >
        <FilppedCard card={2} size="24.3vh" setTime={3200} type="instant" />
      </layer.ThreeCard>
      <layer.ThreeCard
        animate={{ x: '41.55vw', y: '2.33vh' }}
        transition={{ duration: 1, delay: 1.625, type: 'spring', bounce: 0.3 }}
      >
        <FilppedCard card={3} size="24.3vh" setTime={3200} type="instant" />
      </layer.ThreeCard>
      <layer.ThreeCard
        animate={{ x: '58vw', y: '2.33vh' }}
        transition={{ duration: 1, delay: 1.75, type: 'spring', bounce: 0.3 }}
      >
        <FilppedCard card={4} size="24.3vh" setTime={3200} type="instant" />
      </layer.ThreeCard>
      <layer.ThreeCard
        animate={{ x: '41.55vw', y: '47.3vh' }}
        transition={{ duration: 1, delay: 2, type: 'spring', bounce: 0.3 }}
      >
        <FilppedCard card={1} size="24.3vh" setTime={3200} type="instant" />
      </layer.ThreeCard>
    </layer.TimeBox>
  );
}

export default YearSpread;
