"use client";

import {
  useContract,
  useProvider,
  useContractWrite,
  usePrepareContractWrite,
  useAccount,
  useSigner,
} from "wagmi";
import {
  sheryTokenABI,
  useSheryTokenMint,
} from "../generated";
import { ethers } from "ethers";

const contract_address = process.env.CONTRACT_ADDRESS;

console.log(contract_address);
export default function Mint() {
  const { address, isReconnecting } = useAccount();
  const { config } = usePrepareContractWrite({
    // @ts-ignore
    address: contract_address!,
    abi: sheryTokenABI,
    functionName: "mint",
    args: [address!, ethers.utils.parseEther("20")],
  });
  const {
    isError,
    isLoading,
    isSuccess,
    error,
    data,
    write,
  } = useContractWrite(config);
  if (!isReconnecting && !address) {
    return <p>Please connect your wallet</p>;
  }

  return (
    <main className="">
      <button disabled={!write} onClick={() => write?.()} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
        Mint
      </button>
      {isLoading && <p>Loading...</p>}
      {isError && <p>{error?.message}</p>}
      {isSuccess && <p>{JSON.stringify(data)}</p>}
    </main>
  );
}
