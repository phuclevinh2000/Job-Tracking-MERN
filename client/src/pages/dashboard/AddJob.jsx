import React from 'react';
import { FormRow, Alert, FormRowSelect } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const AddJob = () => {
  const {
    isLoading,
    status,
    showAlert,
    displayAlert,
    statusOptions,
    jobTypeOptions,
    position,
    company,
    jobLocation,
    jobType,
    isEditing,
    handleChange,
    clearValues,
    createJob,
    editJob,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editJob();
      return;
    }
    createJob();
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };
  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        {showAlert && <Alert />}

        <div className='form-center'>
          {/* Position */}
          <FormRow
            type='text'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type='text'
            name='company'
            value={company}
            handleChange={handleJobInput}
          />
          {/* location */}
          <FormRow
            type='text'
            labelText='job location'
            name='jobLocation'
            value={jobLocation}
            handleChange={handleJobInput}
          />

          {/* status */}
          <FormRowSelect
            value={status}
            name='status'
            handleChange={handleJobInput}
            list={statusOptions}
          />

          {/* type */}
          <FormRowSelect
            value={jobType}
            name='jobType'
            labelText='job type'
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />

          <div className='btn-container'>
            <button
              className='btn btn-block submit-btn'
              type='submit'
              disabled={isLoading}
            >
              {isLoading ? 'Please Wait...' : 'Submit'}
            </button>

            <button
              className='btn btn-block clear-btn'
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
