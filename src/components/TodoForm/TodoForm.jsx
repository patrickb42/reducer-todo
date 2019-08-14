import React, { useEffect, useContext } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import { TodosContext } from '../../contexts'

const TodoForm = ({ values, errors, touched, status }) => {
  const { dispatch, ADD_TODO, REMOVE_COMPLETED_TODOS } = useContext(TodosContext);

  useEffect(() => {
    if (status === undefined) return;
    console.log(status.task);
    dispatch({
      type: ADD_TODO,
      payload: {
        id: Date.now(),
        task: status.task,
      }
    })
  }, [status, dispatch, ADD_TODO]);

  return (<>
    <Form>
      {errors.task && touched.task && <p>{errors.task}</p>}
      <Field type="text" name="task" placeholder="Task" />
      <button type="submit">Add Task</button>
    </Form>
    <button
      onClick={() => {
        dispatch({
          type: REMOVE_COMPLETED_TODOS,
        });
      }}
    >
      Clear Completed
    </button>
  </>);
};

export default withFormik({
  mapPropsToValues({ task }) {
    return {
      task: task || '',
    }
  },

  validationSchema: Yup.object().shape({
    task: Yup.string()
      .required('Enter a task'),
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    setStatus(values);
    resetForm();
  }
})(TodoForm);
