import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import TestComponent from './components/TestComponent';

const RoutesComponent = () => (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/test" element={<TestComponent />} />
    </Routes>
);

export default RoutesComponent;
