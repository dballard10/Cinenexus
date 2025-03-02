import { Navigation } from "@/components/PageComponents/Navigation";
import PageHeading from "@/components/PageComponents/PageHeading";
import SettingsList from "@/components/Settings/SettingsList";
import { useState } from "react";
const SettingsPage = () => {
  const [selectedSetting, setSelectedSetting] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Navigation />
      <PageHeading title="Settings" />
      <main className="flex h-full">
        <aside className="bg-gray-900 text-white p-3 w-64 h-full">
          <SettingsList
            selectedSetting={selectedSetting}
            setSelectedSetting={setSelectedSetting}
          />
        </aside>
      </main>
    </div>
  );
};

export default SettingsPage;
