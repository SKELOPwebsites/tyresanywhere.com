<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TyreSize extends Model
{
    use HasFactory;

    protected $table = 'tyre_sizes';

    protected $guarded = [];

    public $timestamps = false;
}
