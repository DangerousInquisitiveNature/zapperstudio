/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface PopsicleChefInterface extends utils.Interface {
  functions: {
    'add(uint16,address,bool)': FunctionFragment;
    'changeEndTime(uint32)': FunctionFragment;
    'deposit(uint256,uint256)': FunctionFragment;
    'endTime()': FunctionFragment;
    'getMultiplier(uint256,uint256)': FunctionFragment;
    'ice()': FunctionFragment;
    'icePerSecond()': FunctionFragment;
    'massUpdatePools()': FunctionFragment;
    'owner()': FunctionFragment;
    'pendingIce(uint256,address)': FunctionFragment;
    'poolInfo(uint256)': FunctionFragment;
    'poolLength()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'set(uint256,uint16,bool)': FunctionFragment;
    'setIcePerSecond(uint256,bool)': FunctionFragment;
    'startTime()': FunctionFragment;
    'totalAllocPoint()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'updatePool(uint256)': FunctionFragment;
    'userInfo(uint256,address)': FunctionFragment;
    'withdraw(uint256,uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'add'
      | 'changeEndTime'
      | 'deposit'
      | 'endTime'
      | 'getMultiplier'
      | 'ice'
      | 'icePerSecond'
      | 'massUpdatePools'
      | 'owner'
      | 'pendingIce'
      | 'poolInfo'
      | 'poolLength'
      | 'renounceOwnership'
      | 'set'
      | 'setIcePerSecond'
      | 'startTime'
      | 'totalAllocPoint'
      | 'transferOwnership'
      | 'updatePool'
      | 'userInfo'
      | 'withdraw',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'add',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>, PromiseOrValue<boolean>],
  ): string;
  encodeFunctionData(functionFragment: 'changeEndTime', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(
    functionFragment: 'deposit',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'endTime', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'getMultiplier',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'ice', values?: undefined): string;
  encodeFunctionData(functionFragment: 'icePerSecond', values?: undefined): string;
  encodeFunctionData(functionFragment: 'massUpdatePools', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'pendingIce',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'poolInfo', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'poolLength', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'set',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>],
  ): string;
  encodeFunctionData(
    functionFragment: 'setIcePerSecond',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>],
  ): string;
  encodeFunctionData(functionFragment: 'startTime', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalAllocPoint', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'updatePool', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(
    functionFragment: 'userInfo',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'withdraw',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
  ): string;

  decodeFunctionResult(functionFragment: 'add', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'changeEndTime', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'endTime', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMultiplier', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'ice', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'icePerSecond', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'massUpdatePools', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pendingIce', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'poolInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'poolLength', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'set', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setIcePerSecond', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'startTime', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalAllocPoint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updatePool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'userInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;

  events: {
    'Deposit(address,uint256,uint256)': EventFragment;
    'EmergencyWithdraw(address,uint256,uint256)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'Withdraw(address,uint256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Deposit'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'EmergencyWithdraw'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Withdraw'): EventFragment;
}

export interface DepositEventObject {
  user: string;
  pid: BigNumber;
  amount: BigNumber;
}
export type DepositEvent = TypedEvent<[string, BigNumber, BigNumber], DepositEventObject>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface EmergencyWithdrawEventObject {
  user: string;
  pid: BigNumber;
  amount: BigNumber;
}
export type EmergencyWithdrawEvent = TypedEvent<[string, BigNumber, BigNumber], EmergencyWithdrawEventObject>;

export type EmergencyWithdrawEventFilter = TypedEventFilter<EmergencyWithdrawEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface WithdrawEventObject {
  user: string;
  pid: BigNumber;
  amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<[string, BigNumber, BigNumber], WithdrawEventObject>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface PopsicleChef extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PopsicleChefInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    add(
      _allocPoint: PromiseOrValue<BigNumberish>,
      _stakingToken: PromiseOrValue<string>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    changeEndTime(
      addSeconds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    deposit(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    endTime(overrides?: CallOverrides): Promise<[number]>;

    getMultiplier(
      _from: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    ice(overrides?: CallOverrides): Promise<[string]>;

    icePerSecond(overrides?: CallOverrides): Promise<[BigNumber]>;

    massUpdatePools(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingIce(
      _pid: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    poolInfo(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [string, BigNumber, BigNumber, number, number] & {
        stakingToken: string;
        stakingTokenTotalAmount: BigNumber;
        accIcePerShare: BigNumber;
        lastRewardTime: number;
        allocPoint: number;
      }
    >;

    poolLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    set(
      _pid: PromiseOrValue<BigNumberish>,
      _allocPoint: PromiseOrValue<BigNumberish>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setIcePerSecond(
      _icePerSecond: PromiseOrValue<BigNumberish>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    startTime(overrides?: CallOverrides): Promise<[number]>;

    totalAllocPoint(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    updatePool(
      _pid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    userInfo(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        rewardDebt: BigNumber;
        remainingIceTokenReward: BigNumber;
      }
    >;

    withdraw(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  add(
    _allocPoint: PromiseOrValue<BigNumberish>,
    _stakingToken: PromiseOrValue<string>,
    _withUpdate: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  changeEndTime(
    addSeconds: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  deposit(
    _pid: PromiseOrValue<BigNumberish>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  endTime(overrides?: CallOverrides): Promise<number>;

  getMultiplier(
    _from: PromiseOrValue<BigNumberish>,
    _to: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  ice(overrides?: CallOverrides): Promise<string>;

  icePerSecond(overrides?: CallOverrides): Promise<BigNumber>;

  massUpdatePools(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingIce(
    _pid: PromiseOrValue<BigNumberish>,
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  poolInfo(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<
    [string, BigNumber, BigNumber, number, number] & {
      stakingToken: string;
      stakingTokenTotalAmount: BigNumber;
      accIcePerShare: BigNumber;
      lastRewardTime: number;
      allocPoint: number;
    }
  >;

  poolLength(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  set(
    _pid: PromiseOrValue<BigNumberish>,
    _allocPoint: PromiseOrValue<BigNumberish>,
    _withUpdate: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setIcePerSecond(
    _icePerSecond: PromiseOrValue<BigNumberish>,
    _withUpdate: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  startTime(overrides?: CallOverrides): Promise<number>;

  totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  updatePool(
    _pid: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  userInfo(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      amount: BigNumber;
      rewardDebt: BigNumber;
      remainingIceTokenReward: BigNumber;
    }
  >;

  withdraw(
    _pid: PromiseOrValue<BigNumberish>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    add(
      _allocPoint: PromiseOrValue<BigNumberish>,
      _stakingToken: PromiseOrValue<string>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<void>;

    changeEndTime(addSeconds: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    deposit(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    endTime(overrides?: CallOverrides): Promise<number>;

    getMultiplier(
      _from: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    ice(overrides?: CallOverrides): Promise<string>;

    icePerSecond(overrides?: CallOverrides): Promise<BigNumber>;

    massUpdatePools(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingIce(
      _pid: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    poolInfo(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [string, BigNumber, BigNumber, number, number] & {
        stakingToken: string;
        stakingTokenTotalAmount: BigNumber;
        accIcePerShare: BigNumber;
        lastRewardTime: number;
        allocPoint: number;
      }
    >;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    set(
      _pid: PromiseOrValue<BigNumberish>,
      _allocPoint: PromiseOrValue<BigNumberish>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<void>;

    setIcePerSecond(
      _icePerSecond: PromiseOrValue<BigNumberish>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<void>;

    startTime(overrides?: CallOverrides): Promise<number>;

    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    updatePool(_pid: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    userInfo(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        rewardDebt: BigNumber;
        remainingIceTokenReward: BigNumber;
      }
    >;

    withdraw(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {
    'Deposit(address,uint256,uint256)'(
      user?: PromiseOrValue<string> | null,
      pid?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
    ): DepositEventFilter;
    Deposit(
      user?: PromiseOrValue<string> | null,
      pid?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
    ): DepositEventFilter;

    'EmergencyWithdraw(address,uint256,uint256)'(
      user?: PromiseOrValue<string> | null,
      pid?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
    ): EmergencyWithdrawEventFilter;
    EmergencyWithdraw(
      user?: PromiseOrValue<string> | null,
      pid?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
    ): EmergencyWithdrawEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;

    'Withdraw(address,uint256,uint256)'(
      user?: PromiseOrValue<string> | null,
      pid?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
    ): WithdrawEventFilter;
    Withdraw(
      user?: PromiseOrValue<string> | null,
      pid?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
    ): WithdrawEventFilter;
  };

  estimateGas: {
    add(
      _allocPoint: PromiseOrValue<BigNumberish>,
      _stakingToken: PromiseOrValue<string>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    changeEndTime(
      addSeconds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    deposit(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    endTime(overrides?: CallOverrides): Promise<BigNumber>;

    getMultiplier(
      _from: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    ice(overrides?: CallOverrides): Promise<BigNumber>;

    icePerSecond(overrides?: CallOverrides): Promise<BigNumber>;

    massUpdatePools(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingIce(
      _pid: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    poolInfo(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    set(
      _pid: PromiseOrValue<BigNumberish>,
      _allocPoint: PromiseOrValue<BigNumberish>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setIcePerSecond(
      _icePerSecond: PromiseOrValue<BigNumberish>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    startTime(overrides?: CallOverrides): Promise<BigNumber>;

    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    updatePool(
      _pid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    userInfo(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    withdraw(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    add(
      _allocPoint: PromiseOrValue<BigNumberish>,
      _stakingToken: PromiseOrValue<string>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    changeEndTime(
      addSeconds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    deposit(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    endTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMultiplier(
      _from: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    ice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    icePerSecond(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    massUpdatePools(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingIce(
      _pid: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    poolInfo(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    set(
      _pid: PromiseOrValue<BigNumberish>,
      _allocPoint: PromiseOrValue<BigNumberish>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setIcePerSecond(
      _icePerSecond: PromiseOrValue<BigNumberish>,
      _withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    startTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalAllocPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    updatePool(
      _pid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    userInfo(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    withdraw(
      _pid: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
