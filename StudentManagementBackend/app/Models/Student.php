<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $guarded = [];
    
    public function resources() {
        return $this->belongsToMany('App\Models\StudentResource', 'student_resource', 'student_id', 'resource_id');
    }

    
}
