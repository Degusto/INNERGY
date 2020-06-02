import { ActionType, ServiceType, ServiceYear } from "./models";

export const updateSelectedServices = (
  previouslySelectedServices: ServiceType[],
  action: { type: ActionType; service: ServiceType }
) => [];

export const calculatePrice = (
  selectedServices: ServiceType[],
  selectedYear: ServiceYear
) => ({ basePrice: 0, finalPrice: 0 });
