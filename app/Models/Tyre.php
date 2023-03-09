<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tyre extends Model
{
    use HasFactory;

    protected $guarded = [];

    public $timestamps = false;

    protected $table = 'tyres';

    public function orders()
    {
        return $this->belongsToMany(Order::class);
    }
}
