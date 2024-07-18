import {DashboardOutline, FormOutline, MenuFoldOutline, MenuUnfoldOutline} from "@ant-design/icons-angular/icons";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzMenuModule} from "ng-zorro-antd/menu";

export const AntModules = [
  NzLayoutModule,
  NzBreadCrumbModule,
  NzMenuModule
]

export const icons = [
  MenuFoldOutline,
  MenuUnfoldOutline,
  DashboardOutline,
  FormOutline
]
