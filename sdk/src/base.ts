import { ethers } from "ethers";
import fetch from "isomorphic-unfetch";

type Config = {
  nodeEndpoint?: string;
  apikey?: string;
  baseUri?: string;
  web3storageApiKey?: string;
  factoryAddress?: string;
  traceHubAddress?: string;
};

export abstract class Base {
  private nodeEndpoint: string;
  private web3storageApiKey: string;
  private factoryAddress: string;
  private apikey: string;
  private baseUrl: string;
  private traceHubAddress: string;

  constructor(config: Config) {
    this.nodeEndpoint = config.nodeEndpoint;
    this.baseUrl = config.baseUri;
    this.apikey = config.apikey;
    this.web3storageApiKey = config.web3storageApiKey;
    this.factoryAddress = config.factoryAddress;
    this.traceHubAddress = config.traceHubAddress;
  }

  protected invoke<T>(endpoint: string, options?: RequestInit): Promise<any> {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const headers = {
        "content-type": "application/json",
        apiKey: this.apikey,
      };

      const config = {
        ...options,
        headers,
      };

      return fetch(url, config).then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("call failed");
        }
      });
    } catch (e) {
      console.log(e.message);
    }
  }

  protected getWeb3StorageKey(): string {
    return this.web3storageApiKey;
  }

  protected async getProvider(): Promise<any> {
    return new ethers.providers.JsonRpcProvider(this.nodeEndpoint);
  }

  protected getFactoryAddress(): string {
    return this.factoryAddress;
  }

  protected getTraceHubAddress(): string {
    return this.traceHubAddress;
  }

  protected getFeeData = async () => {
    try {
      const provider = await this.getProvider();
      const fee_data = await provider.getFeeData();
      let fee = {
        maxFeePerGas: fee_data.maxFeePerGas,
        maxPriorityFeePerGas: fee_data.maxPriorityFeePerGas,
        gasLimit: 5e6,
      };

      return fee;
    } catch (e) {
      console.log(e.message);
      throw new Error("Error Getting Fee Data");
    }
  };
}
