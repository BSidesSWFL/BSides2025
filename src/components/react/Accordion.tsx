import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItemData {
  id: number;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  defaultOpen?: string[];
}

export default function Accordion({ items, defaultOpen }: AccordionProps) {
  return (
    <AccordionPrimitive.Root
      type="multiple"
      className="w-full"
      defaultValue={defaultOpen || items.map((_, i) => `item-${i + 1}`)}
    >
      {items.map((item, index) => (
        <AccordionPrimitive.Item
          key={item.id}
          value={`item-${index + 1}`}
          className="border-b last:border-b-0 mb-4"
        >
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
              className={cn(
                'focus-visible:border-ring focus-visible:ring-ring/50 hover:cursor-pointer flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-lg font-bold transition-all text-slate-800 outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180'
              )}
            >
              {item.title}
              <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="data-[state=closed]:animate-accordion-up text-slate-700 font-semibold data-[state=open]:animate-accordion-down overflow-hidden text-md">
            <div className="pt-0 pb-4">{item.content}</div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
