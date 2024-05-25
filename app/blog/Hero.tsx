import Meteors from "@/components/ui/meteor";
import { Section } from "../_landing/Section";
import { Code } from "../_landing/Hero";
import { CustomeIcon } from "../_landing/icons/CustomeIcon";

export default function HeaderBlog() {
    return (
        <>
            <main className="h-full relative flex justify-center rounded-lg border bg-background ">
                <Meteors number={30} />
                <Section className='flex flex-col gap-2 lg:gap-4 absol'>
                    <h1 className='text-3xl lg:text-5xl font-bold'>Here my blog 🔗</h1>
                    <p className='text-lg leading-9 text-muted-foreground'>I Help {" "}
                        <Code>
                            <CustomeIcon className='inline mr-0.5' name='youtube' size={16} />
                            Beginners developers
                        </Code>{" "}
                        to start working as <Code className='whitespace-nowrap'>Freelancer</Code>FASTLY by extract and streamlize for them the best contains for FREE.
                    </p>
                </Section>
            </main>
        </>
    );
}
