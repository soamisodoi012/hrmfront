export type User = {
    username: string;
    address: string;
    phone: string;
    userId: string;
    salary: number;
    title: string;
    sex: string;
    age: number;
    totalLeave: number;
    depId: string;
    role: string;
    experience: string;  // Changed spelling to "experience" instead of "experiance"
    isLocked: boolean;
};

export type UserProps = {
    user: User | null;
};
