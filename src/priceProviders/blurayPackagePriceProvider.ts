import { removeFalsies, exists } from "../common/utils";
import { ServiceType, ServiceYear, Services } from "../common/models";

export const getBlurayPackagePrice = (selectedServices: ServiceType[], selectedYear: ServiceYear) => {
  if (!exists(selectedServices, Services.BlurayPackage)) {
    return null;
  }

  const isVideoRecordingSelected = exists(selectedServices, Services.VideoRecording);

  return {
    service: Services.BlurayPackage,
    prices: removeFalsies([getBlurayPackagePrice()]),
  };

  function getBlurayPackagePrice() {
    return isVideoRecordingSelected && { basePrice: 300, finalPrice: 300 };
  }
};
