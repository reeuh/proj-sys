import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Capstone',
        href: '/students/capstone',
    },
];

import { useState } from 'react';

const Capstone = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const file = event.target.files?.[0] || null;
        setSelectedFile(file);
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Capstone" />
            <div className="flex h-full flex-1 flex-col gap-2 rounded-xl">
                <div className="flex flex-col gap-2 rounded-xl p-4">
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border p-4">
                        <div className="flex flex-col gap-2">
                            <h2 className="mb-2 text-xl font-semibold">Group 1</h2>
                            <p className="mb-4">Adviser Name</p>
                        </div>

                        <div className="border-t pt-4">
                            <h3 className="mb-2 font-medium">Members</h3>
                            <ul className="list-inside list-disc">
                                <li>Member 1</li>
                            </ul>
                        </div>

                        <div className="mb-4 pt-4 border-b">
                            <h2 className="text-xl font-semibold">Titles</h2>
                        </div>

                        <div className='flex flex-row-3 gap-2 items-center justify-between'>
                        <div className="mb-4">
                            <p className="mb-2">Title 1</p>
                            <div className="flex items-center space-x-4">
                                <div className="flex-1">
                                    <p className="text-sm">Current File: File 1</p>
                                </div>
                            </div>
                            <div className="mt-2 flex items-center space-x-4">
                                <label className="cursor-pointer rounded bg-blue-600 px-4 py-1 text-white hover:bg-blue-700">
                                    Choose File
                                    <input type="file" className="hidden" onChange={handleFileChange}/>
                                </label>
                                <span className="ml-2 text-sm text-gray-500">{selectedFile ? selectedFile.name : 'No file chosen'}</span>
                            </div>
                            <div className="mt-2 flex items-center space-x-4">
                                <Button variant="outline" className="min-w-60 bg-blue-700">
                                    Submit
                                </Button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="mb-2">Title 2</p>
                            <div className="flex items-center space-x-4">
                                <div className="flex-1">
                                    <p className="text-sm">Current File: File 2</p>
                                </div>
                            </div>
                            <div className="mt-2 flex items-center space-x-4">
                                <label className="cursor-pointer rounded bg-blue-600 px-4 py-1 text-white hover:bg-blue-700">
                                    Choose File
                                    <input type="file" className="hidden" onChange={handleFileChange}/>
                                </label>
                                <span className="ml-2 text-sm text-gray-500">{selectedFile ? selectedFile.name : 'No file chosen'}</span>
                            </div>
                            <div className="mt-2 flex items-center space-x-4">
                                <Button variant="outline" className="min-w-60 bg-blue-700">
                                    Submit
                                </Button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="mb-2">Title 3</p>
                            <div className="flex items-center space-x-4">
                                <div className="flex-1">
                                    <p className="text-sm">Current File: File 3</p>
                                </div>
                            </div>
                            <div className="mt-2 flex items-center space-x-4">
                                <label className="cursor-pointer rounded bg-blue-600 px-4 py-1 text-white hover:bg-blue-700">
                                    Choose File
                                    <input type="file" className="hidden" onChange={handleFileChange}/>
                                </label>
                                <span className="ml-2 text-sm text-gray-500">{selectedFile ? selectedFile.name : 'No file chosen'}</span>
                            </div>
                            <div className="mt-2 flex items-center space-x-4">
                                <Button variant="outline" className="min-w-60 bg-blue-700">
                                    Submit
                                </Button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default Capstone;
