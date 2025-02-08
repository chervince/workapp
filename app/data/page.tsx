"use client";

import React from 'react';
import DataDisplay from '../../components/DataDisplay';
import './page.module.css';

const Page: React.FC = () => {
    return (
        <div className="page-container">
            <div className="data-display-wrapper">
                <DataDisplay />
            </div>
        </div>
    );
};

export default Page;