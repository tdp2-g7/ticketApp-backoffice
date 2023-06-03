export interface IMetricsProps {
  graphicsWithoutFinishDate: any;
  graphicsAccreditedClients: any;
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date) => void;
  setVisualizationType: (value: any) => void;
  visualizationType: any;
}
