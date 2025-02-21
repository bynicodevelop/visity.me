import * as yup from "yup";

export const useAuthForm = () => {
    const validationSchema = {
        email: yup
            .string()
            .email("Email invalide")
            .required("L'email est requis."),
        password: yup
            .string()
            .min(6, "Le mot de passe doit contenir au moins 6 caractères")
            .required("Le mot de passe est requis."),
    };

    const { fields, fieldsAttrs, errors, meta } = useFormValidator({
        validationSchema,
        initialValues: {
            email: "",
            password: "",
        },
    });

    return {
        fields,
        fieldsAttrs,
        errors,
        meta,
    };
}