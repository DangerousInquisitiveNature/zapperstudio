import { Injectable } from '@nestjs/common';

import { Network } from '~types/network.interface';

import { BEETHOVEN_X_DEFINITION } from '../beethoven-x.definition';
import { BeethovenXChefContractPositionFetcher } from '../common/beethoven-x.chef.contract-position-fetcher';

@Injectable()
export class FantomBeethovenXChefContractPositionFetcher extends BeethovenXChefContractPositionFetcher {
  appId = BEETHOVEN_X_DEFINITION.id;
  groupId = BEETHOVEN_X_DEFINITION.groups.chef.id;
  network = Network.FANTOM_OPERA_MAINNET;
  groupLabel = 'Chef Farms';
  chefAddress = '0x8166994d9ebbe5829ec86bd81258149b87facfd3';
}
