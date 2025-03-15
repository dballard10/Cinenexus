import { Navigation } from "@/components/page-components/Navigation";
import PageHeading from "@/components/page-components/PageHeading";
import SettingsList from "@/components/settings/SettingsList";
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
