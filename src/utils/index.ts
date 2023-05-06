import { client, chains } from "./wagmi";

function log(v: any) {
  console.log('\x1b[33m%s\x1b[0m', v); 
}

export { client, chains, log };
