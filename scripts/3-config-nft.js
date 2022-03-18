import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x851Dd10367c8a30b490c0864b145721f71C42d7c",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "MasterMind DAO Key",
        description: "This NFT Key will give you access to unlock your potential at MasterMind DAO",
        image: readFileSync("scripts/assets/key.gif"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()