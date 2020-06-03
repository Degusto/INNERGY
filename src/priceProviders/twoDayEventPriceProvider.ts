import { ServiceType, ServiceYear, Services } from "../common/models";
import { exists, removeFalsies } from "../common/utils";

export const getTwoDaysEventPrice = (selectedServices: ServiceType[], selectedYear: ServiceYear) => {
  if (!exists(selectedServices, Services.TwoDayEvent)) {
    return null;
  }

  const isPhotographySelected = exists(selectedServices, Services.Photography);
  const isVideoRecordingSelected = exists(selectedServices, Services.VideoRecording);

  return {
    service: Services.TwoDayEvent,
    prices: removeFalsies([getTwoDaysEventPrice()]),
  };

  function getTwoDaysEventPrice() {
    return (isPhotographySelected || isVideoRecordingSelected) && { basePrice: 400, finalPrice: 400 };
  }
};
