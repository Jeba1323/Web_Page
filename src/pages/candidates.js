import React from 'react';
import Table from "./Table";
import './candidates.css';

function Candidates() {
        return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'Left',
                alignItems: 'Left',
                height: '100vh'
            }}
        >
            <h1>Candidates</h1>
            <div>
                <button id ='button1'>+ Add Filter</button>
                <button id = 'button2'>+ Add New Candidates</button>
                <Table/>
            </div>
        </div>
    );
};
export default Candidates;
