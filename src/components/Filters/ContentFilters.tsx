import {
  AccordionMultiple,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GenreList from "./GenreList";
import SortList from "./SortList";
import PlatformList from "./PlatformList";

const ContentFilters = () => {
  return (
    <AccordionMultiple type="multiple" className="w-full">
      <AccordionItem value="genres">
        <AccordionTrigger className="text-white hover:scale-105">
          Genres
        </AccordionTrigger>
        <AccordionContent>
          <GenreList />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="platforms">
        <AccordionTrigger className="text-white hover:scale-105 no-underline">
          Platforms
        </AccordionTrigger>
        <AccordionContent>
          <PlatformList />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="sort">
        <AccordionTrigger className="text-white hover:scale-105 no-underline">
          Sort By
        </AccordionTrigger>
        <AccordionContent>
          <SortList />
        </AccordionContent>
      </AccordionItem>
    </AccordionMultiple>
  );
};

export default ContentFilters;
