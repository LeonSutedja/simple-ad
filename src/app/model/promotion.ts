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
  readonly description = "Gets a 5 for 4 deal on Stand out Ads";
  calculateAdvertisement(advertisementList: Advertisement[]): [number, Advertisement[]] {
    const standoutAdId = 12;
    const standoutAds = advertisementList.filter((obj) => obj.id === standoutAdId);
    const standoutAdsCount = standoutAds.length;
    if (standoutAdsCount < 5)
      return [0, advertisementList];
    const standoutAdsCountForDeal = Math.floor(standoutAdsCount/5);
    const standoutAdsPrice = standoutAds[0].price;
    const totalPriceOfStandoutAdsCountWithDeal = standoutAdsCountForDeal * (standoutAdsPrice * 4);
    let countStdOutAdsToBeRemoved = standoutAdsCountForDeal * 5;
    advertisementList = advertisementList.reduce(function(a : Advertisement[], e : Advertisement, i) {
        if ((e.id === standoutAdId) && (countStdOutAdsToBeRemoved > 0)) {
          countStdOutAdsToBeRemoved--;
        } else {
          a.push(e)
        }
        return a;
    }, []);
    return [totalPriceOfStandoutAdsCountWithDeal, advertisementList];
  }
}

export class StandOutAdsDiscount implements IPromotion {
  readonly code = "DISCSTANDOUT"
  readonly description = "Gets a discount on Stand out Ads where the price drops to $299.99 per ad";
  calculateAdvertisement(advertisementList: Advertisement[]): [number, Advertisement[]] {
    const standoutAdId = 12;
    const standoutAdsCount = advertisementList.filter((obj) => obj.id === standoutAdId).length;
    const total = standoutAdsCount * 299.99;
    advertisementList = advertisementList.filter(function( obj ) {
      return obj.id !== standoutAdId;
    });
    return [total, advertisementList];
  }
}

export class PremiumAdsDiscount implements IPromotion {
  readonly code = "DISCPREMIUM"
  readonly description = "- Gets a discount on Premium Ads where the price drops to $389.99 per ad";
  calculateAdvertisement(advertisementList: Advertisement[]): [number, Advertisement[]] {
    const premiumAdId = 13;
    const premiumAdsCount = advertisementList.filter((obj) => obj.id === premiumAdId).length;
    const total = premiumAdsCount * 389.99;
    advertisementList = advertisementList.filter(function( obj ) {
      return obj.id !== premiumAdId;
    });
    return [total, advertisementList];
  }
}
 // poor man DI contianer for IPromotion List
export const PROMOTIONS: IPromotion[] = [
  new ThreeForTwoClassicAdsDeal(),
  new FiveForFourStandOutAdsDeal(),
  new StandOutAdsDiscount(),
  new PremiumAdsDiscount(),
];
