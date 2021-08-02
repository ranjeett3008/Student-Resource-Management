<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StudentResource;
use Exception;

class ResourcesController extends Controller
{
    /**
     * Gets all resources
     */
    public function getResources()
    {
    
        try
        {
            $records = StudentResource::select('id', 'name', 'content', 'expiry', 'created_at')->get();
            return response(['data' => $records, 'status' => 1]);
        }
        catch(\Exception $e)
        {
            return response(['data' => 1, 'message' => $e->getMessage()]);
        }
    }

    /**
     * Creates resource
     */
    public function createResource(Request $request)
    {
        try
        {
            $data = $request->all();
         
            $record = StudentResource::create($data);
            return response(['data' => $record, 'status' => 1, 'message' => 'Resource has been created successfully!']);

        }
        catch(Exception $e)
        {
            return response(['data' => 1, 'message' => $e->getMessage()]);
        }
    }

    /**
     * Updates resource
     */
    public function updateRessource(Request $request, $id)
    {

        try
        {
            $record = StudentResource::where('id', $id)->first();

            $record->fill($request->all());
            $record->save();

            return response(['data' => $record, 'status' => 1, 'message' => 'Resource has been updated successfully!']);
        }
        catch(Exception $e)
        {
            return response(['data' => 1, 'message' => $e->getMessage()]);
        }
        
    }

    /**
     * Deletes Resource
     */
    public function deleteResource($id)
    {
        try
        {
            StudentResource::destroy($id);
            return response(['status' => 1, 'message' => 'Resource has been created successfully!']);
        }
        catch(Exception $e)
        {
            return response(['data' => 1, 'message' => $e->getMessage()]);
        }
       
    }

    /**
     * Edits resource
     */
    public function editResource($id)
    {
        try
        {
            $record = StudentResource::where('id', $id)->first();

            return response(['data' => $record, 'status' => 1]);
        }
        catch(Exception $e)
        {
            return response(['message' => $e->getMessage(), 'status' => 0]);
        }

    }

    /**
     * Gets resources list
     */
    public function getResourcesList()
    {
        try
        {
            $records = StudentResource::all()->pluck('name', 'id');
            return response(['data' => $records, 'status' => 1]);
        }
        catch(Exception $e)
        {
            return response(['status' => 1,'message' => $e->getMessage()]);
        }
        
    }
}
