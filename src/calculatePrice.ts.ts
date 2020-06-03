import { ServiceType, ServiceYear, PriceModel } from "./models";
import {
  getPhotographyPrice,
  getVideoRecordingPrice,
  getWeddingSessionPrice,
  getBlurayPackagePrice,
  getTwoDaysEventPrice,
} from "./priceProviders";

const priceProviders = [getPhotographyPrice, getVideoRecordingPrice, getWeddingSessionPrice, getBlurayPackagePrice, getTwoDaysEventPrice];

export const calculatePrice = (selectedServices: ServiceType[], selectedYear: ServiceYear) => {
  const prices = [] as any;

  for (let priceProvider of priceProviders) {
    const servicePrices = priceProvider(selectedServices, selectedYear);

    if (servicePrices) {
      prices.push(findBestPrice(servicePrices.prices));
    }
  }

  const discounts = sumDiscounts(prices);
  const priceWithoutDiscount = sumPricesWithoutDiscounts(prices);

  return { basePrice: priceWithoutDiscount, finalPrice: priceWithoutDiscount - discounts };
};

function findBestPrice(prices: PriceModel[]) {
  if (prices.length === 0) {
    return { basePrice: 0, finalPrice: 0 };
  }

  let best = prices[0];

  for (let price of prices) {
    const currentBestDiscount = best.basePrice - best.finalPrice;
    const currentPriceDiscount = price.basePrice - price.finalPrice;

    if (currentBestDiscount < currentPriceDiscount) {
      best = price;
    }
  }

  return best;
}

function sumDiscounts(prices: PriceModel[]) {
  if (prices.length === 0) {
    return 0;
  }

  return prices.map((x) => x.basePrice - x.finalPrice).reduce((x, y) => x + y);
}

function sumPricesWithoutDiscounts(prices: PriceModel[]) {
  if (prices.length === 0) {
    return 0;
  }

  return prices.map((x) => x.basePrice).reduce((x, y) => x + y);
}
