<?php

namespace App\Http\Controllers;

use App\Employee;
use Illuminate\Http\Request;
use DB;
use Carbon\Carbon;

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
                        jobs.code as job_code,
                        emp.location,
                        emp.inactive,
                        emp.anniversary_dt,
                        emp.company,
                        emp.bonus,
                        emp.bonus_type,
                        emp.car_allowance,
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
        return $employees;
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
        return $employee;
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
        
        $request = $request['model'];
        
        
        $employee->name = $request['name'];
        $employee->phone = $request['phone'];
        $employee->bonus = $request['bonus'];
        $employee->car_allowance = $request['car_allowance'];
        $employee->pld = $request['pld'];
        $employee->rdo_bal = $request['rdo_bal'];
        $employee->anl = $request['anl'];
        $employee->dob = $request['dob'];

        $employee->anniversary_dt = is_null($request['anniversary_dt']) ? null : $request['anniversary_dt'];

        $employee->apprentice_year = $request['apprentice_year'];

        $employee->location = $request['location'];

        $employee->inactive = $request['inactive'];
        $employee->company = $request['company'];
        $employee->rdo = false;
        $employee->travel = false;
        $employee->site_allow = false;
        $employee->entitled_anl = false;
        $employee->entitled_pld = false;
        $employee->bonus_type = $request['bonus_type'];

        $employee->save();        
        return 200;
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
