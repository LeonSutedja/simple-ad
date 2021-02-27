import { Advertisement } from "./advertisement";



export interface IPromotion {
  readonly code: string;
  readonly description: string;

  // calculate advertisement returns the total price of the promotional ads, and advertisement that are not calculated part of promotion
  calculateAdvertisement(advertisementList: Advertisement[]) : [number, Advertisement[]];
}

export class ThreeForTwoClassicAdsDeal implements IPromotion {
  readonly code = "3FOR2CLASSIC"
  readonly description = "Gets a 3 for 2 deal on Classic Ads";
  calculateAdvertisement(advertisementList: Advertisement[]): [number, Advertisement[]] {
    return [0, advertisementList];
  }
}

export class FiveForFourStandOutAdsDeal implements IPromotion {
  readonly code = "5FOR4STANDOUT"
  readonly description = "Gets a 3 for 2 deal on Classic Ads";
  calculateAdvertisement(advertisementList: Advertisement[]): [number, Advertisement[]] {
    return [0, advertisementList];
  }
}

export class StandOutAdsDiscount implements IPromotion {
  readonly code = "DISCSTANDOUT"
  readonly description = "Gets a discount on Stand out Ads where the price drops to $299.99 per ad";
  calculateAdvertisement(advertisementList: Advertisement[]): [number, Advertisement[]] {
    const standoutAdsCount = advertisementList.filter((obj) => obj.id === 12).length;
    const total = standoutAdsCount * 299.99;
    advertisementList = advertisementList.filter(function( obj ) {
      return obj.id !== 12;
  });
    return [total, advertisementList];
  }
}

export class PremiumAdsDiscount implements IPromotion {
  readonly code = "DISCPREMIUM"
  readonly description = "- Gets a discount on Premium Ads where the price drops to $389.99 per ad";
  calculateAdvertisement(advertisementList: Advertisement[]): [number, Advertisement[]] {
    return [0, advertisementList];
  }
}

export const PROMOTIONS: IPromotion[] = [
  new ThreeForTwoClassicAdsDeal(),
  new FiveForFourStandOutAdsDeal(),
  new StandOutAdsDiscount(),
  new PremiumAdsDiscount(),
];
