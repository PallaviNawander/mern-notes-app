import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";

const App = () => {
    return (
        <div className="relative min-h-screen w-full">
            {/* Background */}
            <div
                className="
                    fixed inset-0 -z-10
                    bg-black
                    [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]
                "
            />

            {/* Pages */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreatePage />} />
                <Route path="/note/:id" element={<NoteDetailPage />} />
            </Routes>
        </div>
    );
};

export default App;