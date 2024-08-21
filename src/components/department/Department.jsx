import React, { useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from 'axios';

export default function Department() {
    const [jobs, setJobs] = useState([]);
    const [editingRowId, setEditingRowId] = useState(null);
    const [editedName, setEditedName] = useState('');
    const [editedStatus, setEditedStatus] = useState('');
    const [newDepartmentName, setNewDepartmentName] = useState('');
    const [newDepartmentStatus, setNewDepartmentStatus] = useState('');
    const [showAddForm, setShowAddForm] = useState(false);

    const fetchJobs = () => {
        axios.get('http://localhost:8002/departments')
            .then(res => {
                setJobs(res.data || []);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    };

    const handleEditDepartment = (jobId, currentName, currentStatus) => {
        setEditingRowId(jobId);
        setEditedName(currentName);
        setEditedStatus(currentStatus);
    };

    const handleSaveEdit = (jobId) => {
        axios.patch(`http://localhost:8002/departments/${jobId}`, { status: editedStatus })
            .then(res => {
                console.log(`Department ${jobId} status updated to ${editedStatus}`);
                setEditingRowId(null);
                fetchJobs(); // Refresh the job list after updating
            })
            .catch(error => {
                console.error("There was an error updating the department status!", error);
            });
    };

    const handleDeleteDepartment = (jobId) => {
        if (window.confirm("Are you sure you want to delete this department?")) {
            axios.delete(`http://localhost:8002/departments/${jobId}`)
                .then(res => {
                    console.log(`Department ${jobId} deleted`);
                    fetchJobs(); // Refresh the job list after deleting
                })
                .catch(error => {
                    console.error("There was an error deleting the department!", error);
                });
        }
    };

    const handleAddDepartment = () => {
        axios.post('http://localhost:8002/departments', { title: newDepartmentName, status: newDepartmentStatus })
            .then(res => {
                console.log(`Department ${newDepartmentName} added`);
                setNewDepartmentName('');
                setNewDepartmentStatus('');
                setShowAddForm(false);
                fetchJobs(); // Refresh the job list after adding
            })
            .catch(error => {
                console.error("There was an error adding the department!", error);
            });
    };

    const columns = [
        { name: "id", label: "S.NO" },
        {
            name: "title",
            label: "Department Name",
            options: {
                customBodyRender: (value, tableMeta) => {
                    const jobId = tableMeta.rowData[0];
                    return jobId === editingRowId ? (
                        <input
                            type="text"
                            value={editedName}
                            onChange={(e) => setEditedName(e.target.value)}
                            className="bg-slate-500 p-1 rounded"
                        />
                    ) : (
                        value
                    );
                }
            }
        },
        {
            name: "status",
            label: "Status",
            options: {
                customBodyRender: (value, tableMeta) => {
                    const jobId = tableMeta.rowData[0];
                    return jobId === editingRowId ? (
                        <select
                            value={editedStatus}
                            onChange={(e) => setEditedStatus(e.target.value)}
                            className="bg-slate-500 p-1 rounded"
                        >
                            <option value="Accepted">Accepted</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    ) : (
                        value
                    );
                }
            }
        },
        {
            name: "description",
            label: "Description",
            options: {
                customBodyRender: (value) => {
                    return (
                        <a href={value} target="_blank" rel="noopener noreferrer">
                            show more....
                        </a>
                    );
                }
            }
        },
        {
            name: "actions",
            label: "Actions",
            options: {
                customBodyRender: (value, tableMeta) => {
                    const jobId = tableMeta.rowData[0];
                    const currentName = tableMeta.rowData[1];
                    const currentStatus = tableMeta.rowData[2];
                    return (
                        <div className="flex space-x-2">
                            {jobId === editingRowId ? (
                                <button
                                    className="bg-blue-500 text-white px-3 py-1 rounded"
                                    onClick={() => handleSaveEdit(jobId)}
                                >
                                    Submit
                                </button>
                            ) : (
                                <button
                                    className="bg-green-500 text-white px-3 py-1 rounded"
                                    onClick={() => handleEditDepartment(jobId, currentName, currentStatus)}
                                >
                                    Change
                                </button>
                            )}
                            <button
                                className="bg-red-500 text-white px-3 py-1 rounded"
                                onClick={() => handleDeleteDepartment(jobId)}
                            >
                                Delete
                            </button>
                        </div>
                    );
                },
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
            <div className='w-full max-w-4xl'>
                {/* Toggle Button for Add Department Form */}
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mb-6"
                    onClick={() => setShowAddForm(prev => !prev)}
                >
                    {showAddForm ? 'Hide Form' : 'Add Department'}
                </button>

                {/* Conditionally Render Add Department Form */}
                {showAddForm && (
                    <div className='bg-slate-600 p-4 rounded mb-6'>
                        <h2 className='text-lg font-semibold text-white mb-4'>Add New Department</h2>
                        <div className='flex flex-col space-y-4'>
                            <input
                                type="text"
                                placeholder="Department Name"
                                value={newDepartmentName}
                                onChange={(e) => setNewDepartmentName(e.target.value)}
                                className="p-2 rounded bg-slate-500 text-white"
                            />
                            <select
                                value={newDepartmentStatus}
                                onChange={(e) => setNewDepartmentStatus(e.target.value)}
                                className="p-2 rounded bg-slate-500 text-white"
                            >
                                <option value="" disabled>Select Status</option>
                                <option value="Accepted">Accepted</option>
                                <option value="Rejected">Rejected</option>
                            </select>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                                onClick={handleAddDepartment}
                            >
                                Add Department
                            </button>
                        </div>
                    </div>
                )}

                {/* Departments Table */}
                <div className='overflow-x-auto'>
                    <ThemeProvider theme={getMuiTheme()}>
                        <MUIDataTable
                            title={"Departments List"}
                            data={jobs}
                            columns={columns}
                            options={options}
                        />
                    </ThemeProvider>
                </div>
            </div>
        </div>
    );
}
