<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceFee extends Model
{
    use HasFactory;

    protected $table = 'service_fees';

    protected $guarded = [];

    public $timestamps = false;
}
