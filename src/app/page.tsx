'use client';

import Hero from '@/components/Home/Hero/Hero';
import CarChoiceBody from '@/components/Home/CarChoiceBody/CarChoiceBody';
import CarChoiceMotoring from '@/components/Home/CarChoiceMotoring/CarChoiceMotoring';
import Trusted from '@/components/Home/Trusted/Trusted';
import ModesTransportation from '@/components/Home/ModesTransportation/ModesTransportation';
import PurchasingProcess from '@/components/Home/PurchasingProcess/PurchasingProcess';
import ContactUs from '@/components/Home/ContactUs/ContactUs';
import Proposals from '@/components/Home/Proposals/Proposals';
import Footer from '@/components/Footer/Footer';
import { motion } from 'framer-motion';

const blockVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Home() {
  return (
    <section>
      <Hero />
      <div className="pl-3 pr-3">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={blockVariants}
          viewport={{ once: true, amount: 0.1 }}
        >
          <CarChoiceBody />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={blockVariants}
          viewport={{ once: true, amount: 0.1 }}
        >
          <CarChoiceMotoring />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={blockVariants}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Trusted />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={blockVariants}
          viewport={{ once: true, amount: 0.1 }}
        >
          <ModesTransportation />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={blockVariants}
          viewport={{ once: true, amount: 0.1 }}
        >
          <PurchasingProcess />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={blockVariants}
          viewport={{ once: true, amount: 0.1 }}
        >
          <ContactUs />
        </motion.div>
        <motion.div
          className='tablet:mt-64'
          initial="hidden"
          whileInView="visible"
          variants={blockVariants}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Proposals />
        </motion.div>
        <Footer />
      </div>
    </section>
  );
}
