import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  name: string;
  text: string;
  child: string;
}

interface ReviewSliderProps {
  reviews: Review[];
}

const ReviewSlider = ({ reviews }: ReviewSliderProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    ref.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2 -mx-5 px-5 md:mx-0 md:px-0"
        style={{ scrollbarWidth: "none" }}
      >
        {reviews.map((r, i) => (
          <div
            key={i}
            className="card-elevated p-5 min-w-[280px] max-w-[320px] snap-start shrink-0 flex flex-col"
          >
            <p className="text-sm text-foreground leading-relaxed flex-1">«{r.text}»</p>
            <div className="mt-4 pt-3 border-t border-border/50">
              <p className="text-sm font-semibold">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.child}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:flex gap-2 mt-4">
        <button onClick={() => scroll(-1)} className="p-2 rounded-full hover:bg-muted text-muted-foreground"><ChevronLeft size={18} /></button>
        <button onClick={() => scroll(1)} className="p-2 rounded-full hover:bg-muted text-muted-foreground"><ChevronRight size={18} /></button>
      </div>
    </div>
  );
};

export default ReviewSlider;
