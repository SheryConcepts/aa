"use client";
import { ethers } from "ethers";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useBalance,
  useNetwork,
} from "wagmi";

export default function AccountWidget() {
  const { address, connector, isConnected } = useAccount();
  const {
    connect,
    connectors,
    error,
    isLoading,
    pendingConnector,
  } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: balance } = useBalance({ address });
  const { chain, chains } = useNetwork();

  return (
    <div className="flex max-w-xl p-8">
      <div className="flex flex-col max-w-md mx-auto">
        {connectors.map((connector) => (
          <button
            key={connector.id}
            onClick={() => connect({ connector })}
            className="bg-purple-300 rounded-md p-2  m-2"
          >
            {connector.name}{" "}
            {isLoading &&
              connector.id === pendingConnector?.id &&
              "(Loading)"}
          </button>
        ))}
        {error && (
          <div className="text-red-500">
            {error.message}
          </div>
        )}
      </div>
      <div>
        {isConnected ? (
          <div>
            <p>{address}</p>
            <p>Connected to {connector?.name}</p>
            <p>balance: {balance?.value.toString()}</p>
          </div>
        ) : (
          <p>Connecting</p>
        )}
      </div>
    </div>
  );
}
