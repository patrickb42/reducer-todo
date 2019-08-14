import React, { useEffect, useContext } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const TodoForm = ({ values, errors, touched, status }) => {
  useEffect(() => {
    console.log(status);
  }, [status]);

  return (<>
    <Form>
      {errors.task && touched.task && <p>{errors.task}</p>}
      <Field type="text" name="task" placeholder="Task" />
      <button type="submit">Add Taks</button>
      <button onClick={() => {}}>Clear Completed</button>
    </Form>
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
