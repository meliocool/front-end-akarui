import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";
import { IEvent } from "@/types/Event";

const eventServices = {
  getEvents: (params?: string) => instance.get(`${endpoint.EVENTS}?${params}`),
  getEventById: (id: string) => instance.get(`${endpoint.EVENTS}/${id}`),
  addEvent: (payload: IEvent) => instance.post(endpoint.EVENTS, payload),
  searchLocationByRegency: (name: string) =>
    instance.get(`${endpoint.REGION}-search?name=${name}`),
  getRegencyById: (id: string) =>
    instance.get(`${endpoint.REGION}/${id}/regency`),
  deleteEvents: (id: string) => instance.delete(`${endpoint.EVENTS}/${id}`),
  updateEvent: (id: string, payload: IEvent) =>
    instance.put(`${endpoint.EVENTS}/${id}`, payload),
};

export default eventServices;
