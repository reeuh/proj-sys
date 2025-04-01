import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import axios from 'axios';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Capstone',
        href: '/students/capstone',
    },
];

const Capstone = () => {
    const { capstoneData } = usePage().props as unknown as { capstoneData: any };
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>, title: string): void {
        const file = event.target.files?.[0] || null;
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('title', title);

            axios.post('/students/capstone/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                alert(response.data.message);
            })
            .catch((error) => {
                console.error(error);
                alert('File upload failed!');
            });
        }
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Capstone" />
            <div className="flex h-full flex-1 flex-col gap-2 rounded-xl">
                <div className="flex flex-col gap-2 rounded-xl p-4">
                    {capstoneData.groups.map((group: any, groupIndex: number) => (
                        <div key={groupIndex} className="border-sidebar-border/70 dark:border-sidebar-border relative overflow-hidden rounded-xl border p-4">
                            <div className="flex flex-col gap-2">
                                <h2 className="mb-2 text-xl font-semibold">{group.group_name}</h2>
                                <p className="mb-4">Adviser: {group.adviser}</p>
                            </div>

                            <div className="border-t pt-4">
                                <h3 className="mb-2 font-medium">Members</h3>
                                <ul className="list-inside list-disc">
                                    {group.members.map((member: string, memberIndex: number) => (
                                        <li key={memberIndex}>{member}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-4 pt-4 border-b">
                                <h2 className="text-xl font-semibold">Titles</h2>
                            </div>

                            {group.titles.map((title: any, titleIndex: number) => (
                                <div key={titleIndex} className="mb-4">
                                    <p className="mb-2">{title.title}</p>
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-1">
                                            <p className="text-sm">Current File: {title.file_path}</p>
                                        </div>
                                    </div>
                                    <div className="mt-2 flex items-center space-x-4">
                                        <label className="cursor-pointer rounded bg-blue-600 px-4 py-1 text-white hover:bg-blue-700">
                                            Choose File
                                            <input
                                                type="file"
                                                className="hidden"
                                                onChange={(e) => handleFileChange(e, title.title)}
                                            />
                                        </label>
                                        <span className="ml-2 text-sm text-gray-500">{selectedFile ? selectedFile.name : 'No file chosen'}</span>
                                    </div>
                                    <div className="mt-2 flex items-center space-x-4">
                                        <Button variant="outline" className="min-w-60 bg-blue-700">
                                            Submit
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
};

export default Capstone;
