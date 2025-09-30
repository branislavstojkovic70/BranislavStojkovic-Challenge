import { Transaction } from "@mysten/sui/transactions";

export const changeHeroPower = (
  packageId: string,
  listHeroId: string,
  newPower: string,
) => {
  const tx = new Transaction();

  tx.moveCall({
    target: `${packageId}::hero::set_power`,
    arguments: [
      tx.object(listHeroId),
      tx.pure.u64(newPower)
    ],
  });

  return tx;
};