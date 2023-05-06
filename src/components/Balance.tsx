"use client";

import { useAccount, useContractRead } from "wagmi";
import { sheryTokenABI } from "@/generated";
import { ethers } from "ethers";

export default function Balance() {
  const { address, isReconnecting, isConnected } =
    useAccount();
  const {
    data: balance,
    isLoading,
    isSuccess,
    isError,
    error,
    status
  } = useContractRead({
    // @ts-ignore
    address: process.env.CONTRACT_ADDRESS!,
    abi: sheryTokenABI,
    functionName: "balanceOf",
    args: [address!],
    watch: true,
  });
  
  return (
    <main className="border-gray-800">
      {isLoading && <p>Loading...</p>}
      {isError && <p>{error?.message}</p>}
      {isSuccess && <p>{ethers.utils.formatEther(balance!)}</p>}
      <p>hello</p>
      <p>{status}</p>
    </main>
  )
}
