<?php

namespace App\Http\Controllers;

use App\FireIdentification;
use Illuminate\Http\Request;
use DB;
use Carbon\Carbon;

class FireIdentificationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($job)
    {
        

       $fire =  DB::select(DB::raw(
            "select jobs.description, date_format(fire_identifications.install_dt, '%d/%m/%Y') as formated_date,  fire_identifications.*
            from fire_identifications
            inner join jobs
            on jobs.id = fire_identifications.job_id
            where fire_identifications.fire_photo is not null and fire_identifications.job_id = $job
           order by fire_seal_ref
             "));
          
             return $fire;

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\FireIdentification  $fireIdentification
     * @return \Illuminate\Http\Response
     */
    public function show(FireIdentification $fireIdentification)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\FireIdentification  $fireIdentification
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, FireIdentification $fireIdentification)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\FireIdentification  $fireIdentification
     * @return \Illuminate\Http\Response
     */
    public function destroy(FireIdentification $fireIdentification)
    {
        //
    }
}
