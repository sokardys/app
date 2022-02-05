/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from 'ethers'
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from '@nomiclabs/hardhat-ethers/types'

import * as Contracts from '.'

declare module 'hardhat/types/runtime' {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: 'Multicall',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Multicall__factory>
    getContractFactory(
      name: 'YourContract',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YourContract__factory>

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>
  }
}
