import { Head } from '@inertiajs/react';

export default function FacultyHomepage({ message }: { message: string }) {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <Head title="Faculty Homepage" />
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800">{message}</h1>
                <p className="mt-4 text-lg text-gray-600">This is the faculty homepage.</p>
            </div>
        </div>
    );
}