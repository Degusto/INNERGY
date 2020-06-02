import { Actions, ServiceType, ActionType } from "./models";
import { serviceInformationProvider } from "./serviceInformationProvider";
import { exists } from "./utils";

const initialState = [];

export const selectedServicesReducer = (
  previouslySelectedServices: ServiceType[] = initialState,
  action: { type: ActionType; service: ServiceType }
) => {
  if (action.type === Actions.Select) {
    return selectService(previouslySelectedServices, action.service);
  }

  if (action.type === Actions.Deselect) {
    return deselectService(previouslySelectedServices, action.service);
  }

  return previouslySelectedServices;
};

function selectService(previouslySelectedServices: ServiceType[], newService: ServiceType) {
  const services = [...previouslySelectedServices];
  const isMainServiceAvailable = serviceInformationProvider.isMainServiceAvailable(previouslySelectedServices, newService);

  if (!exists(services, newService) && isMainServiceAvailable) {
    services.push(newService);
  }

  return services;
}

function deselectService(previouslySelectedServices: ServiceType[], oldService: ServiceType) {
  const services = previouslySelectedServices.filter((x) => x !== oldService);

  return services.filter((x) => {
    return serviceInformationProvider.isMainServiceAvailable(services, x);
  });
}
