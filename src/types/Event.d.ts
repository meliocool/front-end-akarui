import { DateValue } from "@nextui-org/react";

interface IEvent {
  _id?: string;
  name?: string;
  slug?: string;
  category?: string;
  isFeatured?: boolean | string;
  isPublished?: boolean | string;
  isOnline?: boolean | string;
  description?: string;
  startDate?: string | DateValue;
  endDate?: string | DateValue;
  location?: {
    address: string;
    region: string;
    coordinates: number[];
  };
  banner?: string | FileList;
}

interface IEventForm extends IEvent {
  region?: string;
  // startDate?: DateValue;
  // endDate?: DateValue;
  address?: string;
  latitude?: string;
  longitude?: string;
}

interface IRegency {
  name: string;
  id: string;
}

export type { IEvent, IEventForm, IRegency };
