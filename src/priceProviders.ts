import { Services, ServiceYear, ServiceType, ServicePriceModel } from "./models";
import { exists } from "./utils";

export function getPhotographyPrice(selectedServices: ServiceType[], selectedYear: ServiceYear): ServicePriceModel {
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
}

export function getVideoRecordingPrice(selectedServices: ServiceType[], selectedYear: ServiceYear): ServicePriceModel {
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
}

export function getWeddingSessionPrice(selectedServices: ServiceType[], selectedYear: ServiceYear): ServicePriceModel {
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
}

export function getBlurayPackagePrice(selectedServices: ServiceType[], selectedYear: ServiceYear): ServicePriceModel {
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
}

export function getTwoDaysEventPrice(selectedServices: ServiceType[], selectedYear: ServiceYear): ServicePriceModel {
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
}

function removeFalsies<T>(array: T[]) {
  return array.filter((x) => !!x);
}
