import React from 'react';
import { Formik, Form } from 'formik';

const FormFull = (props) => (
  <div>

    <Formik
      initialValues={props.initialValues}
      onSubmit={ (values) => { 
        alert(JSON.stringify(values, null, 2));
      }}
    >

      
      {({ values }) => (
        <Form>
          {props.children}
        </Form>
      )}
    </Formik>
  </div>
);

export default FormFull;
