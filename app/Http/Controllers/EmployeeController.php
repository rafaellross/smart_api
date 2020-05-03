<?php

namespace App\Http\Controllers;

use App\Employee;
use Illuminate\Http\Request;
use DB;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $employees = DB::select(
            DB::raw(
                "select emp.id,
                        emp.name,
                        emp.phone,
                        emp.dob,
                        jobs.code as job_id,
                        emp.location,
                        emp.inactive,
                        emp.anniversary_dt,
                        emp.apprentice_year,
                        CAST(emp.rdo_bal AS DECIMAL(12,2)) as rdo_bal,
                        CAST(emp.pld AS DECIMAL(12,2)) as pld,
                        CAST(emp.anl AS DECIMAL(12,2)) as anl,
                        CAST(emp.sick_bal AS DECIMAL(12,2)) as sick_bal,
                        if(YEARWEEK(emp.anniversary_dt) = YEARWEEK((SELECT week_end_timesheet FROM parameters LIMIT 1))-1, 1, 0) as rollover,
                        (select id from time_sheets where employee_id = emp.id and YEARWEEK(week_end) = YEARWEEK((SELECT week_end_timesheet FROM parameters LIMIT 1)) order by id desc limit 1) as last_timesheet
                        from employees emp
                        left join jobs
                        on emp.job_id = jobs.id"));        
        return Employee::all()->toJson();
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
     * @param  \App\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function show(Employee $employee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Employee $employee)
    {
        return $request;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employee $employee)
    {
        //
    }
}
