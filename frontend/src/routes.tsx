import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import TestComponent from './components/TestComponent';

const RoutesComponent = () => (
    <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/test" element={<TestComponent />} />
    </Routes>
);

export default RoutesComponent;
