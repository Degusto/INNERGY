import { ServiceType, ServiceYear, Services } from "../common/models";
import { exists, removeFalsies } from "../common/utils";

export const getPhotographyPrice = (selectedServices: ServiceType[], selectedYear: ServiceYear) => {
  if (!exists(selectedServices, Services.Photography)) {
    return null;
  }

  const isVideoRecordingSelected = exists(selectedServices, Services.VideoRecording);

  return {
    service: Services.Photography,
    prices: removeFalsies([
      getPhotographyPriceIn2020(),
      getPhotographyPriceIn2021(),
      getPhotographyPriceIn2022(),
      getPhotographyPriceWithVideoRecordingIn2020(),
      getPhotographyPriceWithVideoRecordingIn2021(),
      getPhotographyPriceWithVideoRecordingIn2022(),
    ]),
  };

  function getPhotographyPriceIn2020() {
    return selectedYear === 2020 && { basePrice: 1700, finalPrice: 1700 };
  }

  function getPhotographyPriceIn2021() {
    return selectedYear === 2021 && { basePrice: 1800, finalPrice: 1800 };
  }

  function getPhotographyPriceIn2022() {
    return selectedYear === 2022 && { basePrice: 1900, finalPrice: 1900 };
  }

  function getPhotographyPriceWithVideoRecordingIn2020() {
    return isVideoRecordingSelected && selectedYear === 2020 && { basePrice: 1700, finalPrice: 1100 };
  }

  function getPhotographyPriceWithVideoRecordingIn2021() {
    return isVideoRecordingSelected && selectedYear === 2021 && { basePrice: 1800, finalPrice: 1150 };
  }

  function getPhotographyPriceWithVideoRecordingIn2022() {
    return isVideoRecordingSelected && selectedYear === 2022 && { basePrice: 1900, finalPrice: 1250 };
  }
};
