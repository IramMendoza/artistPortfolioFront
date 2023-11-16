import React, { useState, useEffect } from 'react';
import { useGetData } from '../../hooks/useGetData';
import { artistUrl } from '../../../apiConfig';
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const RandomCards = () => {
  const [cards, setCards] = useState([]);
  const { data, error } = useGetData(artistUrl);

  useEffect(() => {
    const numberOfCards = 10;

    const generateRandomPosition = () => ({
      top: `${Math.random() * window.innerHeight}px`,
      left: `${Math.random() * window.innerWidth}px`,
    });

    const generatedCards = Array.from({ length: numberOfCards }, (_, index) => ({
      id: index,
      position: generateRandomPosition(),
    }));

    setCards(generatedCards);
  }, []);

  return (
    <div className=' h-[200vh] w-full flex justify-center px-[10vh] overflow-x-hidden"'>
      <div className=' w-full overflow-x-hidden relative p-[20vh]'>
        <AnimatePresence>
          {cards.map((card) => (
            <AnimatedCard key={card.id} position={card.position} data={data} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

const AnimatedCard = ({ position, data }) => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('start');
    }
  }, [controls, inView]);

  const variants = {
    start: {
      opacity: [0,1,0],
      transition : {
        duration : 1.5
      }
    },
  };

  return (
    <motion.div
      ref={ref}
      className=' text-red-500 text-3xl py-[30vh]'
      variants={variants}
      initial={{ opacity: 0 }}
      animate={controls}
      style={{
        whiteSpace: "nowrap",
        position: 'absolute',
        width: '20vh',
        height: '20vh',
        ...position,
      }}
    >
      {data && data.name}
    </motion.div>
  );
};

export default RandomCards;
