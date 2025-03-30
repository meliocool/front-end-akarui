import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";
import { IEvent } from "@/types/Event";

const eventServices = {
  getEvents: (params?: string) => instance.get(`${endpoint.EVENTS}?${params}`),
  addEvent: (payload: IEvent) => instance.post(endpoint.EVENTS, payload),
  searchLocationByRegency: (name: string) =>
    instance.get(`${endpoint.REGION}-search?name=${name}`),
  deleteEvents: (id: string) => instance.delete(`${endpoint.EVENTS}/${id}`),
};

export default eventServices;
