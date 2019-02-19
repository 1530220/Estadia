<?php

namespace App\Http\Controllers;

use Alert;
use App\Medals;
use App\Http\Requests;
use Illuminate\Http\Request;
use App\Helpers\DeleteHelper;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
class MedalsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $medals = DB::table('medals')->where('id','!=','4294967295')->get();

        return view('medals.list')
          ->with('medals',$medals)
          ->with('title', 'Listado de Medallas');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('medals.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = request()->validate([
            'id' => 'required|max:4294967295|min:1|numeric',
            'name' => 'required|max:128',
            'description' => 'required',
          ],[
            'id.required' => ' * Este campo es obligatorio.',
            'id.max' => ' * El valor máximo de este campo es 4294967294.',
            'id.min' => ' * El valor mínimo de este campo es 1.',
            'id.numeric' => ' * Este campo es de tipo numérico.',
            'name.required' => ' * Este campo es obligatorio.',
            'name.max' => ' * Este campo debe contener sólo 128 caracteres.',
            'description.required' => ' * Este campo es obligatorio.',
          ]);
  
          //Se crea una nueva medalla
          $medals = new Medals;
  
          //Se obtienen los valores de la vista
          $medals->id = Input::get('id');
          $medals->name = Input::get('name');
          $medals->description = Input::get('description');
          $medals->image = Input::get('medal_img');
  
          //Se almacena y se muestran mensajes en caos de registro exitoso
          if ($medals->save()) {
            Alert::success('Exitosamente','Medalla Registrada');
  
            insertToLog(Auth::user()->id, 'added', Input::get('id'), "medallla");
  
            return redirect()->route('medals.list');
          } else {
            Alert::error('No se registro la medalla', 'Error');
            return redirect()->route('medals.list');
          }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if($id==4294967295)
            return redirect()->route('medals.list');

        $medal = Medals::find($id);

        return view('medals.show', compact('medal'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Medals $medal)
    {
        if($medal->id==4294967295)
            return redirect()->route('medals.list');
        
        return view('medals.edit', ['medal' => $medal]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Medals $medal)
    {
        if($sector->id==4294967295)
            return redirect()->route('sectors.list');

        //Validaciones
        $data = request()->validate([
          'sector_id' => 'required|max:4294967295|min:1|numeric',
          'name' => 'required|max:128',
          'description' => 'required',
        ],[
          'skill_id.required' => ' * Este campo es obligatorio.',
          'skill_id.max' => ' * El valor máximo de este campo es 4294967294.',
          'skill_id.min' => ' * El valor mínimo de este campo es 1.',
          'skill_id.numeric' => ' * Este campo es de tipo numérico.',
          'name.required' => ' * Este campo es obligatorio.',
          'name.max' => ' * Este campo debe contener sólo 128 caracteres.',
          'description.required' => ' * Este campo es obligatorio.',
        ]);

        $sector->id = Input::get('sector_id');
        $sector->name = Input::get('name');
        $sector->description = Input::get('description');

        //Se almacena y se muestra mensaje de exito
        if ($sector->update()) {
          Alert::success('Exitosamente','Sector Modificado');

          insertToLog(Auth::user()->id, 'updated', Input::get('sector_id'), "sector");

          return redirect()->route('sectors.list');
        } else {
          Alert::error('No se modifico el sector', 'Error');
          return redirect()->route('sectors.list');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
