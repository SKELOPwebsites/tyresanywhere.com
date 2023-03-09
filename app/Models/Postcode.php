<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Postcode extends Model
{
    use HasFactory;

    protected $table = 'covered_postcodes';

    protected $guarded = [];

    public $timestamps = false;
}
