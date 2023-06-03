export interface IMetricsProps {
  graphicsWithoutFinishDate: any;
  graphicsAccreditedClients: any;
  setStartDate: (date: Date) => void;
  startDate: Date;
  setEndDate: (date: Date) => void;
  endDate: Date;
  setVisualizationType: (value: any) => void;
  visualizationType: any;
}
