import { useTestQuery } from "../services/apiSlice";

const TestComponent = () => {
    const { data, error, isLoading } = useTestQuery();

    return (
        <div>
            <h1>Test Endpoint</h1>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error fetching the test endpoint.</p>}
            {data && <p>{data.message}</p>}
        </div>
    );
};

export default TestComponent;
