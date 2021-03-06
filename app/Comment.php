<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    //belongsTo設定
    public function posts()
    {
        return $this->belongsTo('App\Post');
    }
}
