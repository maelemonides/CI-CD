// src/components/HealthCheck.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HealthCheck = () => {
    const [healthStatus, setHealthStatus] = useState(null);

    useEffect(() => {
        const fetchHealthStatus = async () => {
            try {
                const response = await axios.get('http://localhost:8000/health'); // Update the URL if needed
                setHealthStatus(response.data.status);
            } catch (error) {
                console.error('Error fetching health status:', error);
                setHealthStatus('Error');
            }
        };

        fetchHealthStatus();
    }, []);

    return (
        <div>
            <h2>Health Check</h2>
            {healthStatus === null ? (
                <p>Checking health status...</p>
            ) : (
                <p>Health Status: {healthStatus}</p>
            )}
        </div>
    );
};

export default HealthCheck;
