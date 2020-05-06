<?php

namespace App\Http\Controllers;

use App\FireIdentification;
use Illuminate\Http\Request;

class FireIdentificationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($job)
    {
        return FireIdentification::where('job_id', $job)->take(30)->get();
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
