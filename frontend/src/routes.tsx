import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import TestComponent from './components/TestComponent';
import Registration from './components/Registration';

const RoutesComponent = () => (
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/test" element={<TestComponent />} />
    </Routes>
);

export default RoutesComponent;
