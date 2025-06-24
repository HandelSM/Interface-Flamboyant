import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Tablet } from './pages/Tablet';
import { Tela } from './pages/Tela';

export const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/tablet" element={<Tablet />} />
            <Route path="/tela"   element={<Tela />}   />
            <Route path="*"       element={<div>404</div>} />
        </Routes>
    </BrowserRouter>
);
