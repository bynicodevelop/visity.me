
export const useAuthRegister = () => {
    const router = useRouter();
    const { createAccount } = useFirebase();
    const { fields, fieldsAttrs, errors, meta } = useAuthForm();

    const submitForm = async () => {
        try {
            await createAccount(
                fields.email.value,
                fields.password.value
            );
            router.push({ name: "dashboard" });
        } catch (error) {
            console.error(error);
        }
    };

    watch(fields.email, () => meta.value.touched = false);
    watch(fields.password, () => meta.value.touched = false);

    return {
        meta,
        errors,
        fields,
        fieldsAttrs,
        submitForm,
    }
};