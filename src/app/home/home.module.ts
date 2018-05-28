import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { GiohangComponent } from './giohang/giohang.component';
import { ChiTietSanPhamComponent } from './chi-tiet-san-pham/chi-tiet-san-pham.component';
import {  Routes, RouterModule } from '@angular/router';

const homeRouting:Routes=[

  {path:'',component:TrangchuComponent},
  {path:'ChiTietSanPham/:id', component:ChiTietSanPhamComponent},
  {path:'GioHang',component:GiohangComponent},
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(homeRouting)
  ],
  exports:[TrangchuComponent],
  declarations: [TrangchuComponent, GiohangComponent, ChiTietSanPhamComponent]
})
export class HomeModule { }
