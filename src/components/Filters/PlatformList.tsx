import { platforms } from "@/data/platforms";
import Platform from "./Platform";

const PlatformList = () => {
  return (
    <div className="flex flex-col gap-2">
      {platforms.map((platform) => (
        <Platform id={platform.provider_id} name={platform.provider_name} />
      ))}
    </div>
  );
};

export default PlatformList;
