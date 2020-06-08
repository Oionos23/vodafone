import { useState, useEffect } from "react";
import validate from "./LoginFormValidationRules";
// import { isPossiblePhoneNumber } from "react-phone-number-input";

const useForm = (callback) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors(validate(values));
        // if (isPossiblePhoneNumber(value)) {
        //     setIsSubmitting(true);
        // }
        setIsSubmitting(true);
    };

    const handleChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
    };
};

export default useForm;
