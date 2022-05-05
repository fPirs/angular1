
export interface Obj {
    id: number;
    name: string;
    surname: string;
    age: number;
    dateOfBirth: string;
    address: Address;
    role: Role;
    // role: 'staff' | 'student' | 'manager' | 'admin';
    username: string;
    profilePhotoUrl: string;
    // companies: Company[];
    gender: 'male' | 'female' | 'other';
    
}


export interface Address {
    city: string;
    street: string;
    postalCode: string;
}

export enum Role{
    STAFF = 'staff',
    STUDENT = 'student',
    MANAGER = 'manager',
    ADMIN = 'admin'
}

export enum Gender{
    FEMALE = 'female',
    MALE = 'male'
}

export interface Company {
    id: number;
    name: string;
    description: string;
    location: Location;
}

export interface Location{
    city: string;
    street: string;
    postalCode: string;
}
