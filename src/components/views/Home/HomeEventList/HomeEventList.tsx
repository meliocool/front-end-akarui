import CardEvent from "@/components/ui/CardEvent";
import { IEvent } from "@/types/Event";
import { Skeleton } from "@nextui-org/react";
import Link from "next/link";

interface PropTypes {
  title: string;
  events: IEvent[];
  isLoading: boolean;
  urlMore?: string;
}

const HomeEventList = (props: PropTypes) => {
  const { title, events, isLoading, urlMore = "/event" } = props;
  return (
    <section className="mb-16">
      <div className="mb-2 flex items-center justify-between px-6 lg:px-0">
        <h2 className="text-2xl font-bold text-primary">{title}</h2>
        <Link href={urlMore} className="font-semibold text-foreground-500">
          See More
        </Link>
      </div>
      <div className="grid auto-cols-[20rem] grid-flow-col gap-6 overflow-x-auto px-2 py-2 pb-4 lg:auto-cols-auto lg:grid-flow-row lg:grid-cols-4 lg:overflow-x-hidden lg:px-0">
        {!isLoading
          ? events?.map((event) => (
              <CardEvent
                event={event}
                key={`card-event-${event._id}`}
                className="first:ml-6 last:mr-6 lg:first:ml-0 lg:last:mr-0"
              />
            ))
          : Array.from({ length: 4 }).map((_, index) => (
              <CardEvent
                key={`card-event-loading-${index}`}
                isLoading={isLoading}
                className="first:ml-6 last:mr-6 lg:first:ml-0 lg:last:mr-0"
              />
            ))}
      </div>
    </section>
  );
};

export default HomeEventList;
