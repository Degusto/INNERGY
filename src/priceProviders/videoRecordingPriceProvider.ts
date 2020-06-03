import { ServiceType, ServiceYear, Services } from "../common/models";
import { exists, removeFalsies } from "../common/utils";

export const getVideoRecordingPrice = (selectedServices: ServiceType[], selectedYear: ServiceYear) => {
  if (!exists(selectedServices, Services.VideoRecording)) {
    return null;
  }

  const isPhotographySelected = exists(selectedServices, Services.Photography);

  return {
    service: Services.VideoRecording,
    prices: removeFalsies([
      getVideoRecordingPriceIn2020(),
      getVideoRecordingPriceIn2021(),
      getVideoRecordingPriceIn2022(),
      getVideoRecordingPriceWithPhotographyIn2020(),
      getVideoRecordingPriceWithPhotographyIn2021(),
      getVideoRecordingPriceWithPhotographyIn2022(),
    ]),
  };

  function getVideoRecordingPriceIn2020() {
    return selectedYear === 2020 && { basePrice: 1700, finalPrice: 1700 };
  }

  function getVideoRecordingPriceIn2021() {
    return selectedYear === 2021 && { basePrice: 1800, finalPrice: 1800 };
  }

  function getVideoRecordingPriceIn2022() {
    return selectedYear === 2022 && { basePrice: 1900, finalPrice: 1900 };
  }

  function getVideoRecordingPriceWithPhotographyIn2020() {
    return isPhotographySelected && selectedYear === 2020 && { basePrice: 1700, finalPrice: 1100 };
  }

  function getVideoRecordingPriceWithPhotographyIn2021() {
    return isPhotographySelected && selectedYear === 2021 && { basePrice: 1800, finalPrice: 1150 };
  }

  function getVideoRecordingPriceWithPhotographyIn2022() {
    return isPhotographySelected && selectedYear === 2022 && { basePrice: 1900, finalPrice: 1250 };
  }
};
