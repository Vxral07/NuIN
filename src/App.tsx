import { Route, Routes } from "react-router-dom";
import AboutPage from "./components/pages/about";
import Advisory from "./components/pages/advisory";
import ContactPage from "./components/pages/contact";
import Faq from "./components/pages/faq";
import Home from "./components/pages/home";
import Press from "./components/pages/press";
import RootLayout from "./components/root-layout";
import Cookies from "./components/pages/cookies";
import Disclaimer from "./components/pages/disclaimer";
import Iris from "./components/pages/iris";
import Privacy from "./components/pages/privacy";
import Stock from "./components/pages/stock";
import Terms from "./components/pages/terms";
import { ContactsPage } from "./components/pages/ContactPage";
import Ethosphere from "./components/pages/ethosphere";
import Prive from "./components/pages/prive";
import Partnership from "./components/pages/partnership";
// Import the ActiveTabProvider
import { ActiveTabProvider } from "./components/ActiveTabContext";

const App = () => {
    return (
        <div className="min-h-screen bg-black text-foreground">
            {/* Wrap everything inside ActiveTabProvider */}
            <ActiveTabProvider>
                <Routes>
                    <Route element={<RootLayout />}>
                        <Route index element={<Home />} />
                        <Route path="faqs" element={<Faq />} />
                        <Route path="contact" element={<ContactPage />} />
                        <Route path="about" element={<AboutPage />} />
                        <Route path="advisory" element={<Advisory />} />
                        <Route path="press" element={<Press />} />
                        <Route path="privacy" element={<Privacy />} />
                        <Route path="terms" element={<Terms />} />
                        <Route path="disclaimer" element={<Disclaimer />} />
                        <Route path="cookies" element={<Cookies />} />
                        <Route path="stock" element={<Stock />} />
                        <Route path="iris" element={<Iris />} />
                        <Route path="ethosphere" element={<Ethosphere />} />
                        <Route path="ContactsPage" element={<ContactsPage />} />
                        <Route path="partnership" element={<Partnership />} />
                    </Route>
                    <Route path="prive" element={<Prive />} />
                </Routes>
            </ActiveTabProvider>
        </div>
    );
};

export default App;
