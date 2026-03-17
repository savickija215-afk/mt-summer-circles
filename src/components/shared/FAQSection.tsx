import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  items: FAQItem[];
}

const FAQSection = ({ items }: FAQSectionProps) => (
  <Accordion type="single" collapsible className="w-full space-y-2">
    {items.map((item, i) => (
      <AccordionItem
        key={i}
        value={`faq-${i}`}
        className="card-elevated px-5 border-0"
      >
        <AccordionTrigger className="text-sm font-semibold text-left py-4 hover:no-underline">
          {item.q}
        </AccordionTrigger>
        <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
          {item.a}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export default FAQSection;
