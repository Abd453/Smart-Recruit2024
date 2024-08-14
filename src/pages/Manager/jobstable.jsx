import React, { useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from 'axios';

export default function Jobstable() {
    const [jobs, setJobs] = useState([]);
    const [filterStatus, setFilterStatus] = useState('All');

    const fetchJobs = () => {
        axios.get('http://localhost:8001/jobs')
            .then(res => {
                setJobs(res.data || []);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    };

    const handleAccept = (jobId) => {
        updateJobStatus(jobId, 'Accepted');
    };

    const handleReject = (jobId) => {
        updateJobStatus(jobId, 'Rejected');
    };

    const updateJobStatus = (jobId, status) => {
        axios.patch(`http://localhost:8001/jobs/${jobId}`, { status })
            .then(res => {
                console.log(`Job ${jobId} updated to ${status}`);
                fetchJobs(); // Refresh the job list after updating
            })
            .catch(error => {
                console.error("There was an error updating the job status!", error);
            });
    };

    const columns = [
        { name: "id", label: "S.NO" },
        { name: "title", label: "Title" },
        { name: "time", label: "Time" },
        { name: "location", label: "Location" },
        { name: "pertemp", label: "Type" },
        { name: "money", label: "Salary" },
        { name: "status", label: "Status" },
        {
            name: "status",
            label: "Status",
            options: {
                customBodyRender: (value, tableMeta) => {
                    const jobId = tableMeta.rowData[0];
                    return (
                        <div className="flex space-x-2">
                            <button
                                className="bg-green-500 text-white px-3 py-1 rounded"
                                onClick={() => handleAccept(jobId)}
                                disabled={value === 'Accepted'}
                            >
                                Accept
                            </button>
                            <button
                                className="bg-red-500 text-white px-3 py-1 rounded"
                                onClick={() => handleReject(jobId)}
                                disabled={value === 'Rejected'}
                            >
                                Reject
                            </button>
                        </div>
                    );
                },
                // Uncomment if you want filtering
                // filter: true,
                // filterList: filterStatus !== 'All' ? [filterStatus] : [],
            }
        },
    ];

    useEffect(() => {
        fetchJobs();
    }, []);

    const options = {
        selectableRows: false,
        elevation: 0,
        rowsPerPage: 5,
        rowsPerPageOptions: [5, 10, 20, 30],
        responsive: 'standard', // Adjust for responsiveness
        onFilterChange: (changedColumn, filterList) => {
            const statusFilter = filterList[6]; // Assuming Status is the 7th column
            if (statusFilter.length > 0) {
                setFilterStatus(statusFilter[0]);
            } else {
                setFilterStatus('All');
            }
        },
    };
       
    const getMuiTheme = () => createTheme({
        typography: {
            fontFamily: "Poppins",
        },
        palette: {
            background: {
                paper: "#1e293b",
                default: "#0f172a",
            },
            mode: "dark"
        },
        components: {
            MuiTableCell: {
                styleOverrides: {
                    head: {
                        padding: "10px 4px ",
                    },
                    body: {
                        padding: "7px 15px",
                        color: "#e2e8f0",
                    },
                }
            }
        }
    });

    return (
        <div className='bg-slate-700 py-10 min-h-screen grid place-items-center px-4 sm:px-6 md:px-8 lg:px-10'>
            <div className='w-full overflow-x-auto max-w-4xl'>
                <ThemeProvider theme={getMuiTheme()}>
                    <MUIDataTable
                        title={"Jobs List"}
                        data={jobs}
                        columns={columns}
                        options={options}
                    />
                </ThemeProvider>
            </div>
        </div>
    );
}
