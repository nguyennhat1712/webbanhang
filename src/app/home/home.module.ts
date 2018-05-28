import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { GiohangComponent } from './giohang/giohang.component';
import { ChiTietSanPhamComponent } from './chi-tiet-san-pham/chi-tiet-san-pham.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TrangchuComponent, GiohangComponent, ChiTietSanPhamComponent]
})
export class HomeModule { }
