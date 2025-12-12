
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import TrainCarousel from "./components/trainCrousel";
import TrainDetails from "./pages/trainDetailPage";
import TrainSearchResults from "./pages/trainSearchResultPage";
import BookingConfirmation from "./pages/bookConfirmationPage";
import BookingPage from "./pages/bookingPage";
import MyBookings from "./pages/myBookingPage";
import ContactPage from "./pages/contactPage";
import Home from "./pages/homePage";
import LoginModal from "./pages/loginPage";
import styles from "./styles/app.module.css";
import ProtectedRoute from "./components/protectedRoutes";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { setAuthState } from "./redux/auth/authReducer";
import { observeAuthState } from "./api/authApi";

// Component to conditionally render content based on route
const RouteContentManager = () => {
  return (
    <div className={styles.mainContent}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <TrainCarousel />
            </>
          }
        />
        <Route path="/train-search" element={<TrainSearchResults />} />
        <Route path="/train-details/:train_number" element={<TrainDetails />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        <Route
          path="/booking"
          element={
            <ProtectedRoute>
              <BookingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-bookings"
          element={
            <ProtectedRoute>
              <MyBookings />
            </ProtectedRoute>
          }
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/login"
          element={
            <LoginModal
              isOpen={true}
              onClose={() => window.history.back()}
              onLogin={() => { }}
              switchToRegister={() => { }}
            />
          }
        />
      </Routes>
    </div>
  );
};

function App() {
  const dispatch = useDispatch();
  const { isInitialized } = useSelector((state) => state.auth);

  useEffect(() => {
    observeAuthState((user) => {
      dispatch(setAuthState(user));
    });
  }, [dispatch]);

  if (!isInitialized) {
    return <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ClipLoader
        color="blue"
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  }

  return (
    <Router>
      <div className={styles.app}>
        <Navbar />
        <RouteContentManager />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
