const validate = (values) => {
    let errors = {};
    let pass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;

    if (!values.email) {
        errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }
    if (!values.password) {
        errors.password = "Password is required";
    } else if (!pass.test(values.password)) {
        errors.password =
            "Password must be 8 and should include at least: a number, a capital letter, a symbol and a low case letter. ";
    }
    return errors;
};

export default validate;
