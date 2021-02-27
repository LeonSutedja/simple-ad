import { Advertisement } from "./advertisement";

export interface IPromotion {
  code: string;
  description: string;

  calculateAdvertisement(advertisementList: Advertisement[]) : Advertisement[];
}

export class ThreeForTwoClassicAdsDeal implements IPromotion {
  code = "3FOR2CLASSIC"
  description = "Gets a 3 for 2 deal on Classic Ads";
  calculateAdvertisement(advertisementList: Advertisement[]): Advertisement[] {
    return advertisementList;
  }
}

export class FiveForFourStandOutAdsDeal implements IPromotion {
  code = "5FOR4STANDOUT"
  description = "Gets a 3 for 2 deal on Classic Ads";
  calculateAdvertisement(advertisementList: Advertisement[]): Advertisement[] {
    return advertisementList;
  }
}

export class StandOutAdsDiscount implements IPromotion {
  code = "DISCSTANDOUT"
  description = "Gets a discount on Stand out Ads where the price drops to $299.99 per ad";
  calculateAdvertisement(advertisementList: Advertisement[]): Advertisement[] {
    return advertisementList;
  }
}

export class PremiumAdsDiscount implements IPromotion {
  code = "DISCPREMIUM"
  description = "- Gets a discount on Premium Ads where the price drops to $389.99 per ad";
  calculateAdvertisement(advertisementList: Advertisement[]): Advertisement[] {
    return advertisementList;
  }
}
