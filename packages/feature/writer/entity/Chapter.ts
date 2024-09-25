import  {PlotPoint}  from "./PlotPoint";
export interface Chapter {
  id: number;
  title: string;
  content: string;
  novelId: number;
  createdAt: Date;
  updatedAt: Date;
  plotPoints: PlotPoint[];
  speack() : (situation:string)=> string;
}


