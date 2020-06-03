import { Services, ServiceType } from "./common/models";
import { exists } from "./common/utils";

class ServiceInformationProvider {
  // From external source for example API
  private _services = [
    { service: Services.Photography, relatedServices: [Services.TwoDayEvent] },
    { service: Services.VideoRecording, relatedServices: [Services.BlurayPackage, Services.TwoDayEvent] },
    { service: Services.WeddingSession, relatedServices: [] },
  ];

  public isMainServiceAvailable(services: ServiceType[], service: ServiceType) {
    const mainServices = this._services.filter((x) => exists(x.relatedServices, service)).map((x) => x.service);

    return mainServices.length === 0 || mainServices.filter((mainService) => exists(services, mainService)).length > 0;
  }
}

export const serviceInformationProvider = new ServiceInformationProvider();
