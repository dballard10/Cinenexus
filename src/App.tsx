import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiscoverPage from "./pages/DiscoverPage";
import NotFound from "./pages/NotFound";
import ProfilePage from "./pages/ProfilePage";
import FriendsPage from "./pages/FriendsPage";
import MediaDetailsPage from "./pages/MediaDetailsPage";
import SettingsPage from "./pages/SettingsPage";
import MoviePage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DiscoverPage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/media/:id" element={<MediaDetailsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    <ReactQueryDevtools></ReactQueryDevtools>
  </QueryClientProvider>
);

export default App;
