import { Advertisement } from '../model/advertisement';

export const ADVERTISEMENTS: Advertisement[] = [
  Advertisement.new(11, 'Classic Ad', 'Offers the most basic level of advertisement', 269.99),
  Advertisement.new(12, 'Stand out Ad', 'Allows advertisers to use a company logo and use a longer presentation text', 322.99),
  Advertisement.new(13, 'Premium Ad', 'Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility', 394.99),
];
