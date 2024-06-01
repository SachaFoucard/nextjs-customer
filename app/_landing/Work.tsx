import { Carousel, CarouselContent, CarouselItem } from "../components/ui/carousel"; // Adjust the import path as needed
import { Section } from "./Section";
import { useState } from "react";
import Image from 'next/image'

interface Project {
  img: string;
}


export const Work = () => {
  const [projects, setProjects] = useState<Project[]>([
    { img: 'https://img.freepik.com/free-psd/quality-pet-care-banner-web-template_23-2148789422.jpg?t=st=1717280775~exp=1717284375~hmac=d986c7bd5de65d3ad75f1e655e366fdbef68d9ad7bac42ab30c52fb8536be462&w=2000    ' },
    { img: 'https://img.freepik.com/free-psd/quality-pet-care-banner-web-template_23-2148789422.jpg?t=st=1717280775~exp=1717284375~hmac=d986c7bd5de65d3ad75f1e655e366fdbef68d9ad7bac42ab30c52fb8536be462&w=2000    ' },
    { img: 'https://img.freepik.com/free-psd/quality-pet-care-banner-web-template_23-2148789422.jpg?t=st=1717280775~exp=1717284375~hmac=d986c7bd5de65d3ad75f1e655e366fdbef68d9ad7bac42ab30c52fb8536be462&w=2000    ' },
    { img: 'https://img.freepik.com/free-psd/quality-pet-care-banner-web-template_23-2148789422.jpg?t=st=1717280775~exp=1717284375~hmac=d986c7bd5de65d3ad75f1e655e366fdbef68d9ad7bac42ab30c52fb8536be462&w=2000    ' },

  ]);

  const [projectsSecond, setProjectsSecond] = useState<Project[]>([
    { img: 'https://img.freepik.com/premium-vector/website-banner-with-light-tone-gradient-shade-background_920775-980.jpg?w=2000    ' },
    { img: 'https://img.freepik.com/premium-vector/website-banner-with-light-tone-gradient-shade-background_920775-980.jpg?w=2000    ' },
    { img: 'https://img.freepik.com/premium-vector/website-banner-with-light-tone-gradient-shade-background_920775-980.jpg?w=2000    ' },
    { img: 'https://img.freepik.com/premium-vector/website-banner-with-light-tone-gradient-shade-background_920775-980.jpg?w=2000    ' },

  ]);
  const [projectsThird, setProjectsThird] = useState<Project[]>([
    { img: 'https://img.freepik.com/free-psd/flat-design-business-template_23-2150102362.jpg?t=st=1717280498~exp=1717284098~hmac=d09f1b67f29ccbd8e59163c4de2288657b165bf1cb83275ad615753a05f26c40&w=2000' },
    { img: 'https://img.freepik.com/free-psd/flat-design-business-template_23-2150102362.jpg?t=st=1717280498~exp=1717284098~hmac=d09f1b67f29ccbd8e59163c4de2288657b165bf1cb83275ad615753a05f26c40&w=2000' },
    { img: 'https://img.freepik.com/free-psd/flat-design-business-template_23-2150102362.jpg?t=st=1717280498~exp=1717284098~hmac=d09f1b67f29ccbd8e59163c4de2288657b165bf1cb83275ad615753a05f26c40&w=2000' },
    { img: 'https://img.freepik.com/free-psd/flat-design-business-template_23-2150102362.jpg?t=st=1717280498~exp=1717284098~hmac=d09f1b67f29ccbd8e59163c4de2288657b165bf1cb83275ad615753a05f26c40&w=2000' },

  ]);

  const ProjectCarousel = ({ projects }: { projects: Project[] }) => {
    return (
      <div className="grid mt-4 lg:mt-6 gap-2 pt-10 lg:gap-4 ">
        <Carousel>
          <CarouselContent className="-m-1">
            {projects.map((project: Project, index: number) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="rounded-md overflow-hidden shadow-md">
                    <Image src={project.img} width={300} height={300} alt="photo" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    );
  };

  return (
    <Section>
      <h2 className='text-3xl lg:text-4xl font-bold'>Some achievements.. </h2>
      <p className="text-lg text-muted-foreground mt-2 lg:mt-4">This websites made thousands of visits and grew the business of my client.</p>
      <ProjectCarousel projects={projectsThird} />
      <ProjectCarousel projects={projects} />
      <ProjectCarousel projects={projectsSecond} />

      
    </Section>
  );
};

