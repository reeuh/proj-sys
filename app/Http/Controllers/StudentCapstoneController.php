<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\CapstoneFile;

class StudentCapstoneController extends Controller
{
    // Display the Capstone page
    public function index()
    {
        // Fetch capstone data from the database
        $capstoneData = [
            'groups' => [
                [
                    'group_name' => 'Group 1',
                    'adviser' => 'Adviser Name',
                    'members' => ['Member 1', 'Member 2', 'Member 3'],
                    'titles' => CapstoneFile::all(), // Fetch all titles and files from the database
                ],
            ],
        ];

        return inertia('students/capstone', ['capstoneData' => $capstoneData]);
    }

    // Handle file uploads
    public function uploadFile(Request $request)
    {
        $request->validate([
            'file' => 'required|file|mimes:pdf,doc,docx|max:2048', // Validate file type and size
            'title' => 'required|string|max255', // Validate title
        ]);

        // Store the uploaded file
        $filePath = $request->file('file')->store('capstone_files');

        // Save file information to the database
        CapstoneFile::create([
            'title' => $request->input('title'),
            'file_path' => $filePath,
        ]);

        return response()->json([
            'message' => 'File uploaded successfully!',
            'file_path' => $filePath,
        ]);
    }
}
