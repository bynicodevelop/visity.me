import * as yup from "yup";

export const useDashbordPublicProfile = () => {
    const config = useRuntimeConfig();
    const { getMe } = useFirebase();

    const validationSchema = {
        username: yup
            .string()
            .required("Le nom d'utilisateur est requis."),
        bio: yup
            .string()
            .required("La bio est requise."),
    };

    const { fields, fieldsAttrs, errors, meta } = useFormValidator({
        validationSchema,
        initialValues: {
            username: "",
            bio: "",
        },
    });

    const submitForm = async () => {
        console.log(fields);
        const user = await getMe();

        console.log(user);
        
    }

    return {
        domain: config.public.domain,
        fields,
        fieldsAttrs,
        errors,
        meta,
        submitForm,
    }
};