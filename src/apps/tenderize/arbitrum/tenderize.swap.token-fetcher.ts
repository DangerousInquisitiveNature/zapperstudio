import { Injectable } from '@nestjs/common';

import { Network } from '~types/network.interface';

import { SwapTokenFetcher } from '../common/tenderize.swap.token-fetcher';
import TENDERIZE_DEFINITION from '../tenderize.definition';

@Injectable()
export class ArbitrumTenderizeSwapTokenFetcher extends SwapTokenFetcher {
  appId = TENDERIZE_DEFINITION.id;
  groupId = TENDERIZE_DEFINITION.groups.swap.id;
  network = Network.ARBITRUM_MAINNET;
  groupLabel = 'Swap';
}
