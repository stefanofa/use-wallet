import type { Web3ModalSign, Web3ModalSignOptions } from '@web3modal/sign-html'
import type algosdk from 'algosdk'
import type { Network } from '../../types/node'
import type { Metadata } from '../../types/wallet'

export type WalletConnectClientConstructor = {
  metadata: Metadata
  client: Web3ModalSign
  clientOptions: Web3ModalSignOptions
  algosdk: typeof algosdk
  algodClient: algosdk.Algodv2
  network: Network
  chain: string
}

export type WalletConnectTransaction = {
  txn: string
  signers?: string[]
  message?: string
}

export interface SignTxnOpts {
  message?: string
  // other options may be present, but are not standard
}

export type SignTxnParams = [WalletConnectTransaction[], SignTxnOpts?]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface JsonRpcRequest<T = any> {
  id: number
  jsonrpc: string
  method: string
  params: T
}
