import useStore from '@/app/zustand/useStore';
import translationsFaq from '../../app/lang/faq.json';
import { itemClasses } from './itemClassesForAccordion';
import { Accordion, AccordionItem } from '@nextui-org/react';

const AccordionFaq = () => {
  const language = useStore((state) => state.language);

  const { advantage_1, advantage_2, advantage_3, advantage_4 } =
    translationsFaq[language];

  return (
    <>
      <Accordion
        variant="shadow"
        itemClasses={itemClasses}
        className="bg-transparent"
      >
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title={advantage_1.title}
          classNames={{ content: 'text-secondary pl-2 pr-2' }}
        >
          {advantage_1.text}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title={advantage_2.title}
          classNames={{ content: 'text-secondary pl-2 pr-2' }}
        >
          {advantage_2.text}
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title={advantage_3.title}
          classNames={{ content: 'text-secondary pl-2 pr-2' }}
        >
          {advantage_3.text}
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="Accordion 4"
          title={advantage_4.title}
          classNames={{ content: 'text-secondary pl-2 pr-2' }}
        >
          {advantage_4.text}
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default AccordionFaq;
