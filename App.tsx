import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppStateProvider } from "@/state/AppState";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { RootRedirect } from "@/components/RootRedirect";
import AuthPage from "./pages/AuthPage";
import OnboardingPage from "./pages/OnboardingPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import CreateRidePage from "./pages/CreateRidePage";
import RideDetailPage from "./pages/RideDetailPage";
import ChatListPage from "./pages/ChatListPage";
import ChatConversationPage from "./pages/ChatConversationPage";
import MyTripsPage from "./pages/MyTripsPage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppStateProvider>
      <TooltipProvider>
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RootRedirect />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/onboarding" element={<OnboardingPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/home" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/create" element={<CreateRidePage />} />
              <Route path="/ride/:id" element={<RideDetailPage />} />
              <Route path="/chat" element={<ChatListPage />} />
              <Route path="/chat/:id" element={<ChatConversationPage />} />
              <Route path="/trips" element={<MyTripsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AppStateProvider>
  </QueryClientProvider>
);

export default App;
