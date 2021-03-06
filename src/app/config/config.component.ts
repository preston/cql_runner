import { Component, EventEmitter, Output } from '@angular/core';
declare var $: any;

@Component ({
  selector: "runner-config",
  template: `
        <ngb-tabset>
            <ngb-tab title="Engine URL">
                <template ngbTabContent>
                    <div class="select-engine pull-left">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-4">
                                    <span>URL to CQL Execution Service:</span>
                                    <input type="text" class="form-control" id="engineUrl" (change)="setEngineEvent()" placeholder="{{engineURL}}">
                                </div>
                            </div>                            
                        </div>                        
                    </div>
                </template>
            </ngb-tab>
            <ngb-tab title="Terminology URL">
                <template ngbTabContent>                    
                    <div class="select-terminology pull-left">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-4">
                                    <span>URL to the terminology service:</span>
                                    <input type="text" class="form-control" id="termUrl" (change)="setTermEvent()" placeholder="{{termURL}}">
                                </div>                                
                            </div>
                            <div class="row">
                                <div class="col-lg-4">
                                    <span>User Name:</span>
                                    <input type="text" class="form-control" id="termUser" (change)="setTermUserEvent()" placeholder="{{termUSER}}">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4">
                                    <span>Password:</span>
                                    <input type="password" class="form-control" id="termPass" (change)="setTermPassEvent()" value="{{termPASS}}">
                                </div> 
                            </div>
                        </div>                        
                    </div>
                </template>
            </ngb-tab>
            <ngb-tab title="Data URL">
                <template ngbTabContent>                    
                    <div class="select-data pull-left">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-4">
                                    <span>URL to FHIR resource provider:</span>
                                    <input type="text" class="form-control" id="dataUrl" (change)="setDataEvent()" placeholder="{{dataURL}}">
                                </div>                                                                 
                            </div>  
                            <div class="row">
                                <div class="col-lg-4">
                                    <span>User Name:</span>
                                    <input type="text" class="form-control" id="dataUser" (change)="setDataUserEvent()" placeholder="{{dataUSER}}">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4">
                                    <span>Password:</span>
                                    <input type="password" class="form-control" id="dataPass" (change)="setDataPassEvent()" value="{{dataPASS}}">
                                </div> 
                            </div>
                        </div>                        
                    </div>
                </template>
            </ngb-tab>
            <ngb-tab title="Patient Info">
                <template ngbTabContent>
                    <div class="select-patient pull-left">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-4">
                                    <span>Unique Patient ID:</span>
                                    <input type="text" class="form-control" id="patientId" (change)="setPatientEvent()" placeholder="{{patientId}}">
                                </div>
                            </div>                            
                        </div>                        
                    </div>  
                </template>
            </ngb-tab>
        </ngb-tabset>
    `,
  styles: [`

        .select-terminology, .select-engine, .select-patient, .select-data {
            width: 100%;
        }

        .row {
            padding-top: 10px;
        }
    `]
})

export class ConfigComponent {
  @Output('engine') engine = new EventEmitter();
  @Output('term') term = new EventEmitter();
  @Output('termUser') termUser = new EventEmitter();
  @Output('termPass') termPass = new EventEmitter();
  @Output('data') data = new EventEmitter();
  @Output('dataUser') dataUser = new EventEmitter();
  @Output('dataPass') dataPass = new EventEmitter();
  @Output('patient') patient = new EventEmitter();

  engineURL: string = "http://cql.dataphoria.org/cql/evaluate";
  termURL: string = "http://fhirtest.uhn.ca/baseDstu3";
  termUSER: string = "If applicable";
  termPASS: string = "If applicable";
  dataURL: string = "http://fhirtest.uhn.ca/baseDstu3";
  dataUSER: string = "If applicable";
  dataPASS: string = "If applicable";
  patientId: string = "Null";

  setEngineEvent() {
    this.engineURL = $('#engineUrl').val();
    this.engine.emit(this.engineURL);
  }

  setTermEvent() {
    this.termURL = $('#termUrl').val();
    this.term.emit(this.termURL);
  }

  setTermUserEvent() {
    this.termUSER = $('#termUser').val();
    this.termUser.emit(this.termUSER);
  }

  setTermPassEvent() {
    this.termPASS = $('#termPass').val();
    this.termPass.emit(this.termPASS);
  }

  setDataEvent() {
    this.dataURL = $('#dataUrl').val();
    this.data.emit(this.dataURL);
  }

  setDataUserEvent() {
    this.dataUSER = $('#dataUser').val();
    this.dataUser.emit(this.dataUSER);
  }

  setDataPassEvent() {
    this.dataPASS = $('#dataPass').val();
    this.dataPass.emit(this.dataPASS);
  }

  setPatientEvent() {
    this.patientId = $('#patientId').val();
    this.patient.emit(this.patientId);

  }
}
