import './Form.scss';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';


const Form = () => {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    return (
        <Formik
            initialValues={{ name: '', telephone: '', email: '', message:'', acceptedTerms: false,  }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(4, 'Ім\'я має містити мінімум 4 символи')
                    .required('Заповніть будьласка це поле'),
                telephone: Yup.string().matches(phoneRegExp, 'Перевір формат номеру телефону')
                    .required('Заповніть будьласка це поле'),
                email: Yup.string().email('Неправильна адресса електронної пошти').required('Заповніть будьласка це поле'),
                message: Yup.string()
                    .min(10,'Повідомлення має бути не меньше 10 символів.')
                    .required('Ми чекаємо Ваше повідомлення'),
                acceptedTerms: Yup.boolean()

            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(`Дякуємо! Наш запит надіслано успішно`);
                    setSubmitting(false);
                }, 400);
            }}
        >
            {formik => (
                <form onSubmit={formik.handleSubmit}>
                    <div className='first-row'>
                        <label htmlFor="name">
                            Ім'я та прізвище
                        <input
                            className="name, input"
                            id="name"
                            type="text"
                            {...formik.getFieldProps('name')}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="error">{formik.errors.name}</div>
                        ) : null}
                    </label>
                        <label htmlFor="email">
                            Email
                        <input className="email, input" id="email" type="email" {...formik.getFieldProps('email')} />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="error">{formik.errors.email}</div>
                        ) : null}
                    </label>
                    </div>


                    <label htmlFor="telephone">
                        Телефон у форматі (+380)
                    <input
                        className="telephone, input"
                        id="telephone"
                        type="tel"
                        {...formik.getFieldProps('telephone')}
                    />
                    {formik.touched.telephone && formik.errors.telephone ? (
                        <div className="error">{formik.errors.telephone}</div>
                    ) : null}
                </label>


                    <label htmlFor='message'>
                        Повідомлення
                    <input
                        id="message"
                        className="input"
                        type="text"
                        {...formik.getFieldProps('message')}
                    />
                    {formik.touched.message && formik.errors.message ? (
                        <div className="error">{formik.errors.message}</div>
                    ) : null}
                </label>

                    <label className="container" htmlFor="acceptedTerms">

                    <input className="acceptedTerms" id="acceptedTerms" type="checkbox" {...formik.getFieldProps('acceptedTerms')}/>
                    {formik.touched.acceptedTerms && formik.errors.acceptedTerms ? (
                            <div>{formik.errors.acceptedTerms}</div>
                        ) : null}
                        <span className="checkmark"></span>
                        Надсилати мені оновлення про академію
                    </label>

                    <button className="button" type="submit">Надіслати</button>
                </form>
            )}
        </Formik>
    );
};
export  default Form;