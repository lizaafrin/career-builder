import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const assignments = [
        {
            "id": "ass001",
            "marks": "60",
            "name": "New-Year-New-Me"
        },
        {
            "id": "ass002",
            "marks": "59",
            "name": "G3-Architects"
        },
        {
            "id": "ass003",
            "marks": "60",
            "name": "Legal-House"
        },
        {
            "id": "ass004",
            "marks": "60",
            "name": "JS-Problem-Solving"
        },
        {
            "id": "ass005",
            "marks": "60",
            "name": "Geometry-Genius"
        },
        {
            "id": "ass006",
            "marks": "55",
            "name": "AI-Universe"
        },
        {
            "id": "ass007",
            "marks": "60",
            "name": "Quiz-Hero"
        },
        {
            "id": "ass008",
            "marks": "60",
            "name": "Knowledge-Cafe"
        }
    ]
    return (
        <div className='statistics-container'>
            <div>
                <h1 className='font-bold text-3xl text-center'>Assignment Marks Analytics</h1>
                <ResponsiveContainer width='100%' height={500}>
                    <AreaChart
                        data={assignments}
                        width={1000}
                        height={500}
                        margin={{
                            top: 100,
                            right: 0,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="id" />
                        <YAxis dataKey='marks' />
                        <Tooltip />
                        <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;