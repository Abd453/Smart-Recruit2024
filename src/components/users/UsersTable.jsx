import React, { useEffect, useState } from 'react';
import MUIDataTable from 'mui-datatables';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { motion } from 'framer-motion';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editStage, setEditStage] = useState('');

  const fetchUsers = () => {
    axios
      .get('http://localhost:8001/signupuser')
      .then((res) => {
        const employees = res.data.filter((user) => user.role === 'employee');
        setUsers(employees || []);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  };

  const handleEdit = (userId) => {
    const userToEdit = users.find((user) => user.id === userId);
    if (userToEdit) {
      setSelectedUser(userToEdit);
      setEditStage(userToEdit.status);
      setOpenEditModal(true);
    }
  };

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
    // Optional: Send a request to delete the user on the server
    axios.delete(`http://localhost:8001/signupuser/${userId}`)
      .then(() => {
        console.log(`User with id ${userId} deleted successfully`);
      })
      .catch((error) => {
        console.error('There was an error deleting the user!', error);
      });
  };

  const handleSaveEdit = () => {
    const updatedUser = {
      ...selectedUser,
      status: editStage,
      interviewDate: editStage === 'Interview Scheduled' ? new Date().toISOString() : selectedUser.interviewDate,
    };

    setUsers(users.map(user =>
      user.id === selectedUser.id ? updatedUser : user
    ));
    setOpenEditModal(false);

    // Send the updated user data to the backend
    axios.put(`http://localhost:8001/signupuser/${selectedUser.id}`, updatedUser)
      .then(() => {
        console.log('User updated successfully');
      })
      .catch((error) => {
        console.error('There was an error updating the user!', error);
      });
  };

  const handleStatus = (stage, status) => {
    switch (status) {
      case 'Under-Review':
        return 'Received';
      case 'Accepted':
        return 'Pass';
      case 'Rejected':
        return 'Fail';
      case 'Test Score':
        return `Score: ${stage}`;
      case 'Interview Scheduled':
        return new Date().toLocaleDateString(); // Fetch current date
      default:
        return stage;
    }
  };

  const columns = [
    { name: 'id', label: 'S.NO' },
    { name: 'fname', label: 'Name' },
    { name: 'status', label: 'Stages' },
    { name: 'role', label: 'Applied Role' },
    { name: 'date', label: 'Application Date' },
    { name: 'cv', label: 'Attachment' },


    {
		name: 'status',
		label: 'Status',
		options: {
		  customBodyRender: (value, tableMeta) => {
			const stage = tableMeta.rowData[2];
			const status = handleStatus(stage, value);
			return (
			  <span
				className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
				  status === 'Pass'
					? 'bg-green-800 text-green-100'
					: status === 'Fail'
					? 'bg-red-800 text-red-100'
					: 'bg-blue-800 text-blue-100'
				}`}
			  >
				{status}
			  </span>
			);
		  },
		},
	  },
	  {
		name: 'actions',
		label: 'Actions',
		options: {
		  customBodyRender: (value, tableMeta) => {
			const userId = tableMeta.rowData[0];
			return (
			  <div className="flex space-x-2">
				<button
				  className="text-indigo-400 hover:text-indigo-300"
				  onClick={() => handleEdit(userId)}
				>
				  Edit
				</button>
				<button
				  className="text-red-400 hover:text-red-300"
				  onClick={() => handleDelete(userId)}
				>
				  Delete
				</button>
			  </div>
			);
		  },
		},
	  },
	];
  
	useEffect(() => {
	  fetchUsers();
	}, []);
  
	const options = {
	  selectableRows: false,
	  elevation: 0,
	  rowsPerPage: 5,
	  rowsPerPageOptions: [5, 10, 20, 30],
	  responsive: 'standard',
	  onFilterChange: (changedColumn, filterList) => {
		const statusFilter = filterList[4]; // Assuming Status is the 5th column
		if (statusFilter.length > 0) {
		  setFilterStatus(statusFilter[0]);
		} else {
		  setFilterStatus('All');
		}
	  },
	};
  
	const getMuiTheme = () =>
	  createTheme({
		typography: {
		  fontFamily: 'Poppins',
		},
		palette: {
		  background: {
			paper: '#1e293b',
			default: '#0f172a',
		  },
		  mode: 'dark',
		},
		components: {
		  MuiTableCell: {
			styleOverrides: {
			  head: {
				padding: '10px 4px ',
			  },
			  body: {
				padding: '7px 15px',
				color: '#e2e8f0',
			  },
			},
		  },
		},
	  });
  
	return (
	  <motion.div
		className="bg-slate-700 py-10 min-h-screen grid place-items-center px-4 sm:px-6 md:px-8 lg:px-10"
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ delay: 0.2 }}
	  >
		<div className="w-full overflow-x-auto max-w-4xl">
		  <ThemeProvider theme={getMuiTheme()}>
			<MUIDataTable
			  title={'Candidates List'}
			  data={users}
			  columns={columns}
			  options={options}
			/>
		  </ThemeProvider>
		</div>
  

      {/* Modal for Edit */}
      <Modal
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        aria-labelledby="user-modal-title"
        aria-describedby="user-modal-description"
      >
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5, bgcolor: 'background.paper', p: 4 }}>
          {selectedUser && (
            <>
              <h2 id="user-modal-title">{selectedUser.fname} {selectedUser.lname}</h2>
              <p id="user-modal-description">
                <strong>Email:</strong> {selectedUser.email}<br />
                <strong>Role:</strong> {selectedUser.role}<br />
                <strong>Phone:</strong> {selectedUser.phoneno}<br />
                <strong>CV:</strong> {selectedUser.cv}<br />
                <strong>Application Date:</strong> {selectedUser.date}<br />
                <strong>Status:</strong> {selectedUser.status}
              </p>
        <Select
                label="Edit Stage"
                variant="outlined"
                fullWidth
                margin="normal"
                value={editStage}
                onChange={(e) => setEditStage(e.target.value)}
              >
                {/* <MenuItem value="Under-Review">Received</MenuItem> */}
                <MenuItem value="Received">Under-Review</MenuItem>
                <MenuItem value="Accepted">Accepted</MenuItem>
                <MenuItem value="Rejected">Rejected</MenuItem>
                <MenuItem value="Test Score">Test Score</MenuItem>
                <MenuItem value="Interview Scheduled">Interview Scheduled</MenuItem>
              </Select>
              <Button variant="contained" color="primary" onClick={handleSaveEdit}>
                Save
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </motion.div>
  );
};

export default UsersTable;
