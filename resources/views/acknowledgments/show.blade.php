@extends('layouts.app')

@section('title',"Bolsa de Trabajo - Detalles del Reconocimiento: {$acknowledgment->title}")

@section('body')
<!-- Main-body start -->
<div class="main-body">
	<!-- Page-header start -->
	<div class="page-header card">
		<div class="row align-items-end">
			<div class="col-lg-8">
				<div class="page-header-title">
					<i class="icofont icofont-eye-alt bg-c-yellow" ></i>
					<div class="d-inline">
						<h4 style="text-transform: none;">Detalles del reconocimiento: {{$acknowledgment->title}}</h4>
						<span style="text-transform: none;">Formulario para la visualización de datos de un reconocimiento.</span>
					</div>
				</div>
			</div>
			<div class="col-lg-4">
				<div class="page-header-breadcrumb">
					<ul class="breadcrumb-title">
						<li class="breadcrumb-item">
							<a href="{{ route('dashboard') }}">
								<i class="icofont icofont-home"></i>
							</a>
						</li>
						<li class="breadcrumb-item"><a href="{{ route('students.list') }}">Alumnos</a>
                        </li>
                        <li class="breadcrumb-item">Detalles del Alumno
						</li>
						<li class="breadcrumb-item">Detalles de Reconocimiento
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<!-- Page-header end -->

	<div class="page-body">
		<div class="row">
			<div class="col-sm-12">
				<!-- Basic Form Inputs card start -->
				<div class="card">
					<div class="card-block">
						<h4 class="sub-title">Información General</h4>

						<div class="row">
							<div class="col-md-12 col-xl-12 ">
								<div class="card-block user-detail-card">
                                    @if($acknowledgment->deleted==1)
										<div class="alert alert-danger icons-alert">
											<p><strong>Reconocimiento Eliminado</strong></p>
											<p> Este reconocimiento esta actualmente eliminado, restaurelo para que pueda hacer uso de el en el sistema.</p>
										</div>
									@endif

									<div class="row">
										<div class="col-sm-12 user-detail">
											<div class="row">
												<div class="col-sm-4">
													<h6 class="f-w-400 m-b-30"><i class="icofont icofont-ui-v-card"></i>ID :</h6>
												</div>
												<div class="col-sm-8">
													<h6 class="m-b-30"><strong>{{ $acknowledgment->id }}</strong></h6>
												</div>
											</div>
											<div class="row">
												<div class="col-sm-4">
													<h6 class="f-w-400 m-b-30"><i class="icofont icofont-cube"></i>Título :</h6>
												</div>
												<div class="col-sm-8">
													<h6 class="m-b-30">{{ $acknowledgment->title }}</h6>
												</div>
                                            </div>
                                            <div class="row">
												<div class="col-sm-4">
													<h6 class="f-w-400 m-b-30"><i class="icofont icofont-cube"></i>Emisor :</h6>
												</div>
												<div class="col-sm-8">
													<h6 class="m-b-30">{{ $acknowledgment->transmitter }}</h6>
												</div>
                                            </div>
                                            <div class="row">
												<div class="col-sm-4">
													<h6 class="f-w-400 m-b-30"><i class="icofont icofont-ui-calendar"></i>Fecha :</h6>
												</div>
												<div class="col-sm-8">
                                                    <h6 class="m-b-30">{{ $acknowledgment->date }}</h6>
												</div>
                                            </div>
											<div class="row">
												<div class="col-sm-4">
													<h6 class="f-w-400 m-b-30"><i class="fa fa-bars"></i>Descripción :</h6>
												</div>
												<div class="col-sm-8">
													<h6 class="m-b-30">{{ $acknowledgment->description }}</h6>
												</div>
                                            </div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<center>
							@if($acknowledgment->deleted==0)
								<form id="form" name="form" action="{{ route('acknowledgments.destroy', ['id' => $acknowledgment->id])}}" method="POST">
									{{ csrf_field() }}
									{{ method_field('DELETE') }}
									<a style="color:white" onclick="returnURL('{{ url()->previous() }}')" class="btn btn-primary"><i class="icofont icofont-arrow-left"></i>Regresar</a>

									<a href="{{ route('acknowledgments.edit', ['id' => $acknowledgment->id]) }}"><button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Editar"><i class="icofont icofont-edit m-0"></i></button></a>
									<button onclick="archiveFunction()" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" type="submit" title="Eliminar"><span class="icofont icofont-ui-delete"></span></button>
								</form>
							@else
								<form id="form" name="form" action="{{ route('acknowledgments.restore', ['id' => $acknowledgment->id]) }}" method="POST">
									{{ csrf_field() }}

									<a style="color:white;" onclick="returnURL('{{ url()->previous() }}')" class="btn btn-primary"><i class="icofont icofont-arrow-left"></i>Regresar</a>

									<a href="{{ route('acknowledgments.edit', ['id' => $acknowledgment->id]) }}"><button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Editar"><i class="icofont icofont-edit m-0"></i> Modificar</button></a>
									<button onclick="restoreFunction()" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" type="submit" title="Restaurar"><span class="fas fa-reply"></span> Restaurar</button>
								</form>
							@endif
							<br /><br />
						</center>
					</div>

				</div>
			</div>
		</div>
	</div>
</div>

@endsection
