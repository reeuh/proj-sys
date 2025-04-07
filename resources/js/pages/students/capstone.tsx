import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import axios from 'axios';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Capstone',
        href: '/students/capstones',
    },
];

const capstoneData = {
    groups: [
        {
            group_name: 'Group 1',
            adviser: 'Adviser 1',
            members: [],
            title: [],
        },
    ],
};

function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>, title: string, groupId: number): void {
    const file = event.target.files?.[0];
    if (file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', title);
        formData.append('group_id', groupId.toString());

        axios.post('/files/upload', formData, {
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

const Capstone = () => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Capstone" />
            <div className="flex h-full flex-1 flex-col gap-2rounded-xl p-4">
                {capstoneData.groups.map((group: any, groupIndex: number) => (
                    <div key={groupIndex} className="rounded-xl border p-4">
                        <div className="flex flex-col gap-2">
                            <h2 className="mb-2 text-xl font-semibold">{group.group_name}</h2>
                            <p className="mb-4">Adviser: {group.adviser}</p>
                        </div>
                    </div>
                ))}
                <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                        <h3 className="mb-2 font-medium">Members:</h3>
                        <ul className="list-disc pl-5">
                            {/* Replace with actual member data */}
                            <li>Member 1</li>
                            <li>Member 2</li>
                            <li>Member 3</li>
                        </ul>
                    {/* TITLES */}
                    <div className="flex-col-3 flex border-t pt-4 pb-2">
                        <h3 className="mb-2 pb-5 font-medium">Titles</h3>
                        <div className="flex-col-3 flex gap-2 pt-8">
                            <div className="grid w-full gap-2">
                                <Label htmlFor="title" className="mb-2 pl-2 border px-3 py-2 rounded-lg">
                                    Title 1
                                </Label>
                                <p>Current File:</p>
                                <input
                                    type="file"
                                    className="file:mr-4 file:rounded-full file:border-0 file:bg-blue-700 file:px-4 file:py-2 file:text-sm"
                                    placeholder="Title"
                                />
                                <Button>Submit</Button>
                                <p>Adviser Comment:</p>
                                <p>File Attachment:</p>
                            </div>
                            <div className="grid w-full gap-2 ">
                                <Label htmlFor="title" className="mb-2 pl-2 border px-3 py-2 rounded-lg">
                                    Title 2
                                </Label>
                                <p>Current File:</p>
                                <input
                                    type="file"
                                    className="file:mr-4 file:rounded-full file:border-0 file:bg-blue-700 file:px-4 file:py-2 file:text-sm"
                                    placeholder="Title"
                                />
                                <Button>Submit</Button>
                                <p>Adviser Comment:</p>
                                <p>File Attachment:</p>
                            </div>
                            <div className="grid w-full gap-2">
                                <Label htmlFor="title" className="mb-2 pl-2 border px-3 py-2 rounded-lg">
                                    Title 3
                                </Label>
                                <p>Curreny File:</p>
                                <input
                                    type="file"
                                    className="file:mr-4 file:rounded-full file:border-0 file:bg-blue-700 file:px-4 file:py-2 file:text-sm"
                                    placeholder="Title"
                                />
                                <Button>Submit</Button>
                                <p>Adviser Comment:</p>
                                <p>File Attachment:</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default Capstone;
