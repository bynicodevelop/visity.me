import { FirebaseError } from "firebase/app";

export const useAuthLogin = () => {
    const router = useRouter();
    const { connectAccount } = useFirebase();
    const { fields, fieldsAttrs, errors, meta } = useAuthForm();
    const errorMessage  = ref<string | null>(null);

    const submitForm = async () => {
        try {
            await connectAccount(
                fields.email.value,
                fields.password.value
            );
            router.push({ name: "dashboard" });
        } catch (e) {
            if(e instanceof FirebaseError) {
                errorMessage.value = errorMessages[e.code] || e.message;
            }
        }
    };

    watch(fields.email, () => meta.value.touched = false);
    watch(fields.password, () => meta.value.touched = false);

    return {
        errorMessage,
        meta,
        errors,
        fields, 
        fieldsAttrs,
        submitForm,
    }

};