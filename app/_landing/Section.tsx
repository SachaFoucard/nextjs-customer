import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export type SectionProps = PropsWithChildren<{
    className?: string
}>;

export const Section = (props: SectionProps) => {
    return <section className={cn(" md:my:20 lg:my-32 max-w-2xl px-6 m-auto lg:px-4", props.className,'my-16')}>{props.children}</section>
}
