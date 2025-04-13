import { Navigation } from "@/components/page-components/Navigation";

const NotificationsPage = () => {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <Navigation />
      <main className="flex-1 overflow-hidden">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">Notifications</h1>
          <main className="flex flex-col md:flex-row gap-8 bg-gray-800/50 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-gray-700/50">
            <div className="flex-1 p-6 text-semibold text-xl">
              Your notifications will appear here.
            </div>
          </main>
        </div>
      </main>
    </div>
  );
};

export default NotificationsPage;
