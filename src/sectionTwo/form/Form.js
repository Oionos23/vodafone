import React, { useState, useEffect } from "react";
import useForm from "./helpers/useForm";
import validate from "./helpers/LoginFormValidationRules";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Form = ({ sectionTwo }) => {
    const { formText, graphText, formLabels, buttonText } = sectionTwo;

    const { values, errors, handleChange, handleSubmit } = useForm(validate);
    const [value, setValue] = useState();

    return (
        <div className="sectionTwo__flex__container">
            <div className="sectionTwo__flex__item1"></div>
            <div className="sectionTwo__flex__item2">
                <h2>{formText}</h2>
                <p>{graphText}</p>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="field">
                        <div className="control">
                            <PhoneInput
                                id="tel"
                                className={`input ${errors.tel && "is-danger"}`}
                                placeholder={formLabels[0]}
                                value={value || ""}
                                onChange={setValue}
                                required
                            />
                        </div>
                        {errors.telephone && (
                            <p className="help is-danger">{errors.telephone}</p>
                        )}
                    </div>
                    <div className="field">
                        <div className="control">
                            <input
                                autoComplete="off"
                                className={`input ${
                                    errors.email && "is-danger"
                                }`}
                                type="email"
                                name="email"
                                onChange={handleChange}
                                value={values.email || ""}
                                required
                                placeholder={formLabels[1]}
                            />
                            {errors.email && (
                                <p className="help is-danger">{errors.email}</p>
                            )}
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input
                                className={`input ${
                                    errors.password && "is-danger"
                                }`}
                                type="password"
                                name="password"
                                onChange={handleChange}
                                value={values.password || ""}
                                required
                                placeholder={formLabels[2]}
                            />
                        </div>
                        {errors.password && (
                            <p className="help is-danger">{errors.password}</p>
                        )}
                    </div>
                    <button type="submit" className="btnSubmit">
                        {buttonText}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;
