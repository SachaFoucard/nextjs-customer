import { Section } from "./Section";
import { useState, useEffect } from "react";
import Marquee from "../components/ui/marquee";
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Project {
  _id: string;
  img: string;
}

interface ReviewCardProps {
  data: Project[];
}

const ReviewCard = ({ data }: ReviewCardProps) => {
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((item, index) => (
        <motion.div
          key={item._id}
          whileHover={{ scale: 1.6}} // Zoom effect on hover
          className="m-2"
        >
          <Image src={item.img} alt="photo" width={200} height={200} className="rounded-md" />
        </motion.div>
      ))}
    </div>
  );
};

export const Work = () => {
  const [items, setItems] = useState<Project[]>([]);
  const [isLoading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const res = await fetch("/api/works");
      const data = await res.json();
      setItems(data.works);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!items || items.length === 0) return <p>No data</p>;
  

  return (
    <Section>
      <h2 className="px-20 md:text-2xl lg:text-3xl  m-auto ">Some Achievements</h2>
      <div className="flex flex-col items-center justify-center overflow-hidden rounded-lg">
        <Marquee className="[--duration:30s ">
          <ReviewCard data={items}/>
        </Marquee>
        <Marquee className="[--duration:30s ">
          <ReviewCard data={items}/>
        </Marquee>
      </div>
    </Section>
  );
};
