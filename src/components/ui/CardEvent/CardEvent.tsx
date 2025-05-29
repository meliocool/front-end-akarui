import { IEvent } from "@/types/Event";
import { cn } from "@/utils/cn";
import { convertTime } from "@/utils/date";
import { Card, CardBody, CardFooter, Skeleton } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

interface PropTypes {
  event?: IEvent;
  className?: string;
  isLoading?: boolean;
  key?: string;
}

const CardEvent = (props: PropTypes) => {
  const { event, className, key, isLoading } = props;
  return (
    <Card
      key={key}
      shadow="sm"
      isPressable
      as={Link}
      href={`/event/${event?.slug}`}
      className={cn(className, "cursor-pointer")}
    >
      {!isLoading ? (
        <>
          <CardBody>
            <Image
              src={`${event?.banner}`}
              alt="cover"
              width={1920}
              height={1080}
              className="aspect-video w-full rounded-lg object-cover"
            />
          </CardBody>
          <CardFooter className="flex-col items-start pt-0 text-left">
            <h2 className="line-clamp-1 text-lg font-bold text-primary">
              {event?.name}
            </h2>
            <p className="mb-2 line-clamp-2">{event?.description}</p>
            <p className="text-foreground-500">
              {convertTime(`${event?.startDate}`)}
            </p>
          </CardFooter>
        </>
      ) : (
        <>
          <CardBody>
            <Skeleton className="aspect-video w-full rounded-lg object-cover" />
          </CardBody>
          <CardFooter className="flex flex-col items-start gap-2">
            <Skeleton className="h-4 w-3/5 rounded-lg bg-default-200" />
            <Skeleton className="h-4 w-4/5 rounded-lg bg-default-200" />
            <Skeleton className="h-4 w-2/5 rounded-lg bg-default-200" />
          </CardFooter>
        </>
      )}
    </Card>
  );
};

export default CardEvent;
