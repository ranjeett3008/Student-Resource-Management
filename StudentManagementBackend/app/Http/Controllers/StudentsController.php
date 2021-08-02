<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Exception;
use Illuminate\Http\Request;

class StudentsController extends Controller
{

    /**
     * Get students
     */
    public function getStudents()
    {

        try
        {
            $records = Student::select('id', 'name','email', 'gender')
            ->with('resources')->get()->toArray();
            
            return response(['data' => $records, 'status' => 1]);
        }
        catch(Exception $e)
        {
            return response(['data' => 1, 'message' => $e->getMessage()]);
        }
      
    }

    /**
     * Create student
     */
    public function createStudent(Request $request)
    {
        try
        {
            $data = $request->all();
            $resource_id = $data['resource'];
            unset($data['resource']);
            $record = new Student();
            $record->fill($data);
            $record->save();
            $record->resources()->attach($resource_id);
            return response(['status' => 1, 'message' => 'Student created successfully!']);
        }
        catch(Exception $e)
        {
            return response(['status' => 0, 'message' => $e->getMessage()]);
        }
      
    }

    /**
     * Edit student
     */
    public function editStudent($id)
    {
        try
        {
            $record = Student::with('resources')->where('id', $id)->first()->toArray();
            $resource_id = $record['resources'][0]['id'];
        
            $record['resource'] = $resource_id;
            return response(['data' => $record, 'status' => 1]);
        }
        catch(Exception $e)
        {
            return response(['message' => $e->getMessage(), 'status' => 0]);
        }
    }

    /**
     * Updates student
     */
    public function updateStudent(Request $request, $id)
    {
        try
        {
            $record = Student::where('id', $id)->first();
            $data = $request->all();
            $resource_id = $data['resource'];
            unset($data['resource']);
            
            $record->fill($data);
            $record->save();
            $record->resources()->attach($resource_id);

            return response(['status' => 1, 'messahe' => 'Student updated successfully!']);
        }
        catch(Exception $e)
        {
            return response(['status' => 0, 'messahe' => $e->getMessage()]);
        }
       
    }

    /**
     * Deletes student
     */
    public function deleteStudent($id)
    {
        try
        {
            Student::destroy($id);
            return response(['status' => 1, 'message' => 'Sudent deleted successfuflly!']);
        }
        catch(Exception $e)
        {
            return response(['message' => $e->getMessage(), 'status' => 0]);
        }
    }
}
