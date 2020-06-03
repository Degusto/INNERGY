import { ServiceType, ServiceYear, Services } from "../common/models";
import { exists, removeFalsies } from "../common/utils";

export const getWeddingSessionPrice = (selectedServices: ServiceType[], selectedYear: ServiceYear) => {
  if (!exists(selectedServices, Services.WeddingSession)) {
    return null;
  }

  const isPhotographySelected = exists(selectedServices, Services.Photography);
  const isVideoRecordingSelected = exists(selectedServices, Services.VideoRecording);

  return {
    service: Services.WeddingSession,
    prices: removeFalsies([
      getWeddingSessionPriceWithPhotographyIn2022(),
      getWeddingSessionPriceWithPhotographyOrVideoRecording(),
      getWeddingSessionPrice(),
    ]),
  };

  function getWeddingSessionPriceWithPhotographyIn2022() {
    return isPhotographySelected && selectedYear === 2022 && { basePrice: 600, finalPrice: 0 };
  }

  function getWeddingSessionPriceWithPhotographyOrVideoRecording() {
    return (isPhotographySelected || isVideoRecordingSelected) && { basePrice: 600, finalPrice: 300 };
  }

  function getWeddingSessionPrice() {
    return { basePrice: 600, finalPrice: 600 };
  }
};
