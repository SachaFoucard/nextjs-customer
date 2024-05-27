// ClientSideMarquee.tsx
'use client'
import { useEffect, useState } from "react";
import Marquee from "../../components/ui/marquee";
import { cn } from "@/lib/utils";
import Image from 'next/image'

interface IMarquee {
    _id: string;
    name: string;
    text: string;
    grade: number;
}


export const ReviewCard = ({
    name,
    text,
    grade,
  }: IMarquee) => {
    return (
      <figure
        className={cn(
          "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        )}
      >
        <div className="flex flex-row items-center gap-2">
          {/* <Image className="rounded-full" width={32} height={32} src={img} alt='dd' /> */}
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">{name}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{text}</blockquote>
      </figure>
    );
  };


export default function ClientSideMarquee() {
    
  const [items, setItems] = useState<IMarquee[]>([]);
  const [isLoading, setLoading] = useState(true)

  async function fetchData() {
    try {
      const res = await fetch("/api/comments");
      const data = await res.json();
      setItems(data.comments);
      setLoading(false)

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  

  useEffect(() => {
    fetchData();
  }, []);

  console.log('items',items);

  if (isLoading) return <p>Loading...</p>
  if (!items) return <p>No data</p>

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Client-Side Rendered Marquee</h1>
     <Marquee pauseOnHover className="[--duration:20s]">
        {items.map((review: IMarquee) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
