import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomersComponent } from "./customers.component";
import { CustomerDetailsComponent } from "./customer-details/customer-details.component";

const routes: Routes = [
    {path: '', component: CustomersComponent},
    {path: 'deets', component: CustomerDetailsComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CustomersRoutingModule{

}